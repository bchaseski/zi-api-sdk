import { createHash, randomBytes } from 'node:crypto';
import { TokenCache, type CachedToken } from './token-cache.js';
import { ZoomInfoAuthError } from '../http/errors.js';

export interface AuthProvider {
  getAccessToken(): Promise<string>;
  invalidate(): void;
}

export const DEFAULT_TOKEN_URL = 'https://api.zoominfo.com/gtm/oauth/v1/token';
export const DEFAULT_AUTHORIZE_URL = 'https://api.zoominfo.com/gtm/oauth/v1/authorize';

export interface AuthProviderOptions {
  tokenUrl?: string;
  fetch?: typeof fetch;
  clockSkewMs?: number;
}

interface OAuthTokenResponse {
  access_token: string;
  token_type?: string;
  expires_in?: number;
  scope?: string;
  refresh_token?: string;
}

async function postTokenForm(
  url: string,
  basic: { id: string; secret?: string } | null,
  params: Record<string, string>,
  fetchImpl: typeof fetch,
): Promise<OAuthTokenResponse> {
  const headers: Record<string, string> = {
    accept: 'application/json',
    'content-type': 'application/x-www-form-urlencoded',
  };
  if (basic) {
    const credentials = basic.secret !== undefined ? `${basic.id}:${basic.secret}` : basic.id;
    headers['authorization'] = `Basic ${Buffer.from(credentials).toString('base64')}`;
  }
  const body = new URLSearchParams(params).toString();
  const res = await fetchImpl(url, { method: 'POST', headers, body });
  if (!res.ok) {
    let parsed: unknown = null;
    try {
      parsed = await res.json();
    } catch {
      // ignore
    }
    const detail =
      (parsed && typeof parsed === 'object' && 'error_description' in parsed
        ? String((parsed as { error_description?: string }).error_description)
        : undefined) ??
      (parsed && typeof parsed === 'object' && 'error' in parsed
        ? String((parsed as { error?: string }).error)
        : undefined) ??
      `Token request failed (${res.status})`;
    throw new ZoomInfoAuthError(detail, { status: res.status, body: parsed });
  }
  return (await res.json()) as OAuthTokenResponse;
}

function toCachedToken(r: OAuthTokenResponse): CachedToken {
  return {
    accessToken: r.access_token,
    expiresAt: Date.now() + (r.expires_in ?? 3600) * 1000,
  };
}

// ------- Static (BYO) -------

export interface StaticTokenConfig {
  type: 'static';
  accessToken: string;
}

export class StaticTokenProvider implements AuthProvider {
  constructor(private readonly token: string) {}
  async getAccessToken(): Promise<string> {
    return this.token;
  }
  invalidate(): void {
    // no-op
  }
}

// ------- Client Credentials -------

export interface ClientCredentialsConfig {
  type: 'client_credentials';
  clientId: string;
  clientSecret: string;
  scope?: string;
}

export class ClientCredentialsProvider implements AuthProvider {
  private readonly cache: TokenCache;
  constructor(
    private readonly config: Omit<ClientCredentialsConfig, 'type'>,
    opts: AuthProviderOptions = {},
  ) {
    const url = opts.tokenUrl ?? DEFAULT_TOKEN_URL;
    const f = opts.fetch ?? globalThis.fetch;
    this.cache = new TokenCache(
      async () => {
        const params: Record<string, string> = { grant_type: 'client_credentials' };
        if (config.scope) params.scope = config.scope;
        const r = await postTokenForm(
          url,
          { id: config.clientId, secret: config.clientSecret },
          params,
          f,
        );
        return toCachedToken(r);
      },
      { clockSkewMs: opts.clockSkewMs },
    );
  }
  getAccessToken(): Promise<string> {
    return this.cache.get();
  }
  invalidate(): void {
    this.cache.invalidate();
  }
}

// ------- Authorization Code + PKCE (with embedded refresh) -------

export interface AuthorizationCodePkceConfig {
  type: 'authorization_code_pkce';
  clientId: string;
  clientSecret?: string;
  code: string;
  codeVerifier: string;
  redirectUri: string;
  scope?: string;
}

export class AuthorizationCodePkceProvider implements AuthProvider {
  private readonly cache: TokenCache;
  private refreshToken: string | undefined;
  private exchanged = false;
  constructor(
    private readonly config: Omit<AuthorizationCodePkceConfig, 'type'>,
    private readonly opts: AuthProviderOptions = {},
  ) {
    const url = opts.tokenUrl ?? DEFAULT_TOKEN_URL;
    const f = opts.fetch ?? globalThis.fetch;
    this.cache = new TokenCache(
      async () => {
        const basic = config.clientSecret
          ? { id: config.clientId, secret: config.clientSecret }
          : { id: config.clientId };
        let r: OAuthTokenResponse;
        if (!this.exchanged) {
          const params: Record<string, string> = {
            grant_type: 'authorization_code',
            code: config.code,
            code_verifier: config.codeVerifier,
            redirect_uri: config.redirectUri,
          };
          if (!config.clientSecret) params.client_id = config.clientId;
          r = await postTokenForm(url, config.clientSecret ? basic : null, params, f);
          this.exchanged = true;
        } else {
          if (!this.refreshToken) {
            throw new ZoomInfoAuthError(
              'Access token expired and no refresh_token was returned by the authorization server.',
            );
          }
          const params: Record<string, string> = {
            grant_type: 'refresh_token',
            refresh_token: this.refreshToken,
          };
          if (!config.clientSecret) params.client_id = config.clientId;
          r = await postTokenForm(url, config.clientSecret ? basic : null, params, f);
        }
        if (r.refresh_token) this.refreshToken = r.refresh_token;
        return toCachedToken(r);
      },
      { clockSkewMs: opts.clockSkewMs },
    );
  }
  getAccessToken(): Promise<string> {
    return this.cache.get();
  }
  invalidate(): void {
    this.cache.invalidate();
  }
}

// ------- Refresh Token (caller already has one) -------

export interface RefreshTokenConfig {
  type: 'refresh_token';
  clientId: string;
  clientSecret?: string;
  refreshToken: string;
}

export class RefreshTokenProvider implements AuthProvider {
  private readonly cache: TokenCache;
  private refreshToken: string;
  constructor(
    private readonly config: Omit<RefreshTokenConfig, 'type'>,
    opts: AuthProviderOptions = {},
  ) {
    const url = opts.tokenUrl ?? DEFAULT_TOKEN_URL;
    const f = opts.fetch ?? globalThis.fetch;
    this.refreshToken = config.refreshToken;
    this.cache = new TokenCache(
      async () => {
        const params: Record<string, string> = {
          grant_type: 'refresh_token',
          refresh_token: this.refreshToken,
        };
        if (!config.clientSecret) params.client_id = config.clientId;
        const r = await postTokenForm(
          url,
          config.clientSecret
            ? { id: config.clientId, secret: config.clientSecret }
            : null,
          params,
          f,
        );
        if (r.refresh_token) this.refreshToken = r.refresh_token;
        return toCachedToken(r);
      },
      { clockSkewMs: opts.clockSkewMs },
    );
  }
  getAccessToken(): Promise<string> {
    return this.cache.get();
  }
  invalidate(): void {
    this.cache.invalidate();
  }
}

// ------- Factory -------

export type AuthConfig =
  | StaticTokenConfig
  | ClientCredentialsConfig
  | AuthorizationCodePkceConfig
  | RefreshTokenConfig;

export function createAuthProvider(config: AuthConfig, opts?: AuthProviderOptions): AuthProvider {
  switch (config.type) {
    case 'static':
      return new StaticTokenProvider(config.accessToken);
    case 'client_credentials':
      return new ClientCredentialsProvider(config, opts);
    case 'authorization_code_pkce':
      return new AuthorizationCodePkceProvider(config, opts);
    case 'refresh_token':
      return new RefreshTokenProvider(config, opts);
  }
}

// ------- PKCE helpers -------

function base64Url(buf: Buffer): string {
  return buf.toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

export function generatePkceVerifier(bytes = 32): string {
  return base64Url(randomBytes(bytes));
}

export async function pkceChallengeFromVerifier(verifier: string): Promise<string> {
  const hash = createHash('sha256').update(verifier).digest();
  return base64Url(hash);
}

export interface BuildAuthorizeUrlInput {
  clientId: string;
  redirectUri: string;
  codeChallenge: string;
  state: string;
  scope?: string;
  authorizeUrl?: string;
}

export function buildAuthorizeUrl(input: BuildAuthorizeUrlInput): string {
  const u = new URL(input.authorizeUrl ?? DEFAULT_AUTHORIZE_URL);
  u.searchParams.set('client_id', input.clientId);
  u.searchParams.set('redirect_uri', input.redirectUri);
  u.searchParams.set('response_type', 'code');
  u.searchParams.set('code_challenge', input.codeChallenge);
  u.searchParams.set('code_challenge_method', 'S256');
  u.searchParams.set('state', input.state);
  if (input.scope) u.searchParams.set('scope', input.scope);
  return u.toString();
}
