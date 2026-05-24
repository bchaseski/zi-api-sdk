export interface CachedToken {
  accessToken: string;
  /** Absolute epoch ms when the token expires. */
  expiresAt: number;
}

export interface TokenCacheOptions {
  /** Refresh this many ms before actual expiry. */
  clockSkewMs?: number;
}

export type TokenFetcher = () => Promise<CachedToken>;

const DEFAULT_SKEW_MS = 60_000;

export class TokenCache {
  private readonly fetcher: TokenFetcher;
  private readonly skew: number;
  private current: CachedToken | null = null;
  private inflight: Promise<CachedToken> | null = null;

  constructor(fetcher: TokenFetcher, opts: TokenCacheOptions = {}) {
    this.fetcher = fetcher;
    this.skew = opts.clockSkewMs ?? DEFAULT_SKEW_MS;
  }

  async get(): Promise<string> {
    if (this.current && Date.now() < this.current.expiresAt - this.skew) {
      return this.current.accessToken;
    }
    if (!this.inflight) {
      this.inflight = this.fetcher()
        .then((t) => {
          this.current = t;
          return t;
        })
        .finally(() => {
          this.inflight = null;
        });
    }
    const t = await this.inflight;
    return t.accessToken;
  }

  invalidate(): void {
    this.current = null;
  }
}
