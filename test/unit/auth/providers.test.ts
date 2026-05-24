import { describe, it, expect, vi } from 'vitest';
import {
  StaticTokenProvider,
  ClientCredentialsProvider,
  AuthorizationCodePkceProvider,
  RefreshTokenProvider,
  createAuthProvider,
  generatePkceVerifier,
  pkceChallengeFromVerifier,
  buildAuthorizeUrl,
} from '../../../src/auth/index.js';

const tokenUrl = 'https://api.zoominfo.com/gtm/oauth/v1/token';

function mockTokenFetch(body: Record<string, unknown>, status = 200) {
  const calls: Array<{ url: string; init: RequestInit }> = [];
  const fn = vi.fn(async (url: string, init: RequestInit = {}) => {
    calls.push({ url, init });
    return new Response(JSON.stringify(body), {
      status,
      headers: { 'content-type': 'application/json' },
    });
  });
  return { fn: fn as unknown as typeof fetch, calls };
}

describe('StaticTokenProvider', () => {
  it('returns the supplied token forever', async () => {
    const p = new StaticTokenProvider('byo');
    expect(await p.getAccessToken()).toBe('byo');
    p.invalidate(); // no-op
    expect(await p.getAccessToken()).toBe('byo');
  });
});

describe('ClientCredentialsProvider', () => {
  it('POSTs grant_type=client_credentials with Basic auth header', async () => {
    const { fn, calls } = mockTokenFetch({
      access_token: 'cc-tok',
      token_type: 'Bearer',
      expires_in: 3600,
    });
    const p = new ClientCredentialsProvider(
      { clientId: 'id', clientSecret: 'secret' },
      { tokenUrl, fetch: fn },
    );
    const tok = await p.getAccessToken();
    expect(tok).toBe('cc-tok');
    expect(calls[0]!.url).toBe(tokenUrl);
    expect(calls[0]!.init.method).toBe('POST');
    const headers = new Headers(calls[0]!.init.headers);
    expect(headers.get('content-type')).toBe('application/x-www-form-urlencoded');
    expect(headers.get('authorization')).toBe(`Basic ${btoa('id:secret')}`);
    expect(calls[0]!.init.body).toContain('grant_type=client_credentials');
  });

  it('caches subsequent calls until invalidated', async () => {
    const { fn, calls } = mockTokenFetch({ access_token: 'cc', expires_in: 3600 });
    const p = new ClientCredentialsProvider(
      { clientId: 'id', clientSecret: 's' },
      { tokenUrl, fetch: fn },
    );
    await p.getAccessToken();
    await p.getAccessToken();
    expect(calls).toHaveLength(1);
    p.invalidate();
    await p.getAccessToken();
    expect(calls).toHaveLength(2);
  });

  it('throws ZoomInfoAuthError on token endpoint 401', async () => {
    const { fn } = mockTokenFetch({ error: 'invalid_client' }, 401);
    const p = new ClientCredentialsProvider(
      { clientId: 'id', clientSecret: 'bad' },
      { tokenUrl, fetch: fn },
    );
    await expect(p.getAccessToken()).rejects.toMatchObject({ name: 'ZoomInfoAuthError' });
  });

  it('sends scope param when configured', async () => {
    const { fn, calls } = mockTokenFetch({ access_token: 'cc', expires_in: 3600 });
    const p = new ClientCredentialsProvider(
      { clientId: 'id', clientSecret: 's', scope: 'api:data:contact api:data:company' },
      { tokenUrl, fetch: fn },
    );
    await p.getAccessToken();
    const body = calls[0]!.init.body as string;
    expect(body).toContain('scope=api%3Adata%3Acontact+api%3Adata%3Acompany');
  });
});

describe('AuthorizationCodePkceProvider', () => {
  it('exchanges code + verifier on first call, then caches', async () => {
    const { fn, calls } = mockTokenFetch({
      access_token: 'ac-tok',
      refresh_token: 'rt',
      expires_in: 3600,
    });
    const p = new AuthorizationCodePkceProvider(
      {
        clientId: 'id',
        code: 'authcode',
        codeVerifier: 'verifier',
        redirectUri: 'https://app.example.com/cb',
      },
      { tokenUrl, fetch: fn },
    );
    expect(await p.getAccessToken()).toBe('ac-tok');
    expect(await p.getAccessToken()).toBe('ac-tok');
    expect(calls).toHaveLength(1);
    const body = calls[0]!.init.body as string;
    expect(body).toContain('grant_type=authorization_code');
    expect(body).toContain('code=authcode');
    expect(body).toContain('code_verifier=verifier');
    expect(body).toContain('redirect_uri=https%3A%2F%2Fapp.example.com%2Fcb');
  });

  it('after expiry, uses refresh_token if returned', async () => {
    let i = 0;
    const fn = vi.fn(async (_url: string, init: RequestInit = {}) => {
      i += 1;
      const body = i === 1
        ? { access_token: 'a1', refresh_token: 'rt', expires_in: 1 }
        : { access_token: 'a2', refresh_token: 'rt2', expires_in: 3600 };
      // assert second call uses refresh grant
      if (i === 2) {
        expect(String(init.body)).toContain('grant_type=refresh_token');
        expect(String(init.body)).toContain('refresh_token=rt');
      }
      return new Response(JSON.stringify(body), {
        status: 200,
        headers: { 'content-type': 'application/json' },
      });
    });
    const p = new AuthorizationCodePkceProvider(
      {
        clientId: 'id',
        code: 'c',
        codeVerifier: 'v',
        redirectUri: 'https://a/b',
      },
      { tokenUrl, fetch: fn as unknown as typeof fetch, clockSkewMs: 0 },
    );
    expect(await p.getAccessToken()).toBe('a1');
    await new Promise((r) => setTimeout(r, 1_100));
    expect(await p.getAccessToken()).toBe('a2');
  });
});

describe('RefreshTokenProvider', () => {
  it('exchanges refresh_token immediately', async () => {
    const { fn, calls } = mockTokenFetch({ access_token: 'r', expires_in: 3600 });
    const p = new RefreshTokenProvider(
      { clientId: 'id', refreshToken: 'rt' },
      { tokenUrl, fetch: fn },
    );
    expect(await p.getAccessToken()).toBe('r');
    expect(String(calls[0]!.init.body)).toContain('grant_type=refresh_token');
    expect(String(calls[0]!.init.body)).toContain('refresh_token=rt');
  });
});

describe('createAuthProvider', () => {
  it('dispatches to the right concrete type', () => {
    expect(createAuthProvider({ type: 'static', accessToken: 'x' })).toBeInstanceOf(
      StaticTokenProvider,
    );
    expect(
      createAuthProvider({ type: 'client_credentials', clientId: 'i', clientSecret: 's' }),
    ).toBeInstanceOf(ClientCredentialsProvider);
    expect(
      createAuthProvider({ type: 'refresh_token', clientId: 'i', refreshToken: 'r' }),
    ).toBeInstanceOf(RefreshTokenProvider);
    expect(
      createAuthProvider({
        type: 'authorization_code_pkce',
        clientId: 'i',
        code: 'c',
        codeVerifier: 'v',
        redirectUri: 'r',
      }),
    ).toBeInstanceOf(AuthorizationCodePkceProvider);
  });
});

describe('PKCE helpers', () => {
  it('generatePkceVerifier returns a 43+ char url-safe string', () => {
    const v = generatePkceVerifier();
    expect(v.length).toBeGreaterThanOrEqual(43);
    expect(v).toMatch(/^[A-Za-z0-9_-]+$/);
  });

  it('pkceChallengeFromVerifier yields a stable S256 base64url hash', async () => {
    const c = await pkceChallengeFromVerifier('verifier');
    // SHA-256("verifier") = 88c9eae68eb300b2971a2bec9e5a26ff4179fc669d6b7d861e4c6557b9aaee14
    expect(c).toBe('iMnq5o6zALKXGivsnlom_0F5_WYda32GHkxlV7mq7hQ');
  });

  it('buildAuthorizeUrl includes required params', () => {
    const url = buildAuthorizeUrl({
      clientId: 'id',
      redirectUri: 'https://app/cb',
      codeChallenge: 'challenge',
      state: 'abc',
      scope: 'api:data:contact',
    });
    const u = new URL(url);
    expect(u.origin + u.pathname).toBe('https://api.zoominfo.com/gtm/oauth/v1/authorize');
    expect(u.searchParams.get('client_id')).toBe('id');
    expect(u.searchParams.get('redirect_uri')).toBe('https://app/cb');
    expect(u.searchParams.get('response_type')).toBe('code');
    expect(u.searchParams.get('code_challenge')).toBe('challenge');
    expect(u.searchParams.get('code_challenge_method')).toBe('S256');
    expect(u.searchParams.get('state')).toBe('abc');
    expect(u.searchParams.get('scope')).toBe('api:data:contact');
  });
});
