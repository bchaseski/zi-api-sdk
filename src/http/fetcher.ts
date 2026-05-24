import { errorFromResponse, ZoomInfoNetworkError } from './errors.js';
import { isRetryableStatus, withRetry, type RetryOptions } from './retry.js';
import { makePage, type Page, type RawPage } from './pagination.js';

export interface AuthProvider {
  getAccessToken(): Promise<string>;
  invalidate(): void;
}

export interface FetcherInit {
  baseUrl: string;
  authProvider: AuthProvider;
  fetch?: typeof fetch;
  timeoutMs?: number;
  retry?: Partial<RetryOptions>;
  userAgent?: string;
}

export interface RequestOptions {
  query?: Record<string, string | number | boolean | undefined | null>;
  body?: unknown;
  headers?: Record<string, string>;
  signal?: AbortSignal;
}

const DEFAULT_RETRY: RetryOptions = {
  maxRetries: 3,
  baseDelayMs: 250,
  maxDelayMs: 8_000,
};

const DEFAULT_TIMEOUT_MS = 30_000;
const SDK_USER_AGENT = 'zoominfo-api/0.1.0 (+https://npm.im/zoominfo-api)';

export class Fetcher {
  private readonly baseUrl: string;
  private readonly authProvider: AuthProvider;
  private readonly fetchImpl: typeof fetch;
  private readonly timeoutMs: number;
  private readonly retry: RetryOptions;
  private readonly userAgent: string;

  constructor(init: FetcherInit) {
    this.baseUrl = init.baseUrl.replace(/\/$/, '');
    this.authProvider = init.authProvider;
    this.fetchImpl = init.fetch ?? globalThis.fetch;
    this.timeoutMs = init.timeoutMs ?? DEFAULT_TIMEOUT_MS;
    this.retry = { ...DEFAULT_RETRY, ...init.retry };
    this.userAgent = init.userAgent ?? SDK_USER_AGENT;
    if (!this.fetchImpl) {
      throw new Error('No fetch implementation available — pass `fetch` in client options.');
    }
  }

  async request<T>(method: string, path: string, opts: RequestOptions = {}): Promise<T> {
    const url = this.resolveUrl(path, opts.query);
    const res = await this.send(method, url, opts, /* alreadyRetriedAuth */ false);
    return (await parseBody(res)) as T;
  }

  async requestPage<T>(method: string, path: string, opts: RequestOptions = {}): Promise<Page<T>> {
    const raw = (await this.request<RawPage<T>>(method, path, opts)) ?? { data: [] as T[] };
    return this.buildPage(raw);
  }

  private buildPage<T>(raw: RawPage<T>): Page<T> {
    return makePage<T>(raw, async (nextUrl) => {
      const res = await this.send('GET', nextUrl, {}, false);
      const body = (await parseBody(res)) as RawPage<T> | null;
      return this.buildPage(body ?? { data: [] as T[] });
    });
  }

  private async send(
    method: string,
    url: string,
    opts: RequestOptions,
    alreadyRetriedAuth: boolean,
  ): Promise<Response> {
    const init = await this.buildInit(method, opts);
    const res = await withRetry(
      async () => {
        try {
          return await this.fetchImpl(url, init);
        } catch (err) {
          throw new ZoomInfoNetworkError(
            err instanceof Error ? err.message : 'Network request failed',
            { cause: err },
          );
        }
      },
      this.retry,
    );

    if (res.status === 401 && !alreadyRetriedAuth) {
      this.authProvider.invalidate();
      return this.send(method, url, opts, true);
    }

    if (res.ok) return res;
    if (isRetryableStatus(res.status)) {
      // Retries exhausted; fall through to error mapping.
    }
    const body = await safeJson(res.clone());
    throw errorFromResponse(res, body);
  }

  private async buildInit(method: string, opts: RequestOptions): Promise<RequestInit> {
    const token = await this.authProvider.getAccessToken();
    const headers = new Headers(opts.headers);
    headers.set('authorization', `Bearer ${token}`);
    headers.set('accept', 'application/json');
    headers.set('user-agent', this.userAgent);

    const init: RequestInit = { method, headers };
    if (opts.body !== undefined && method !== 'GET' && method !== 'HEAD') {
      headers.set('content-type', 'application/json');
      init.body = JSON.stringify(opts.body);
    }
    if (opts.signal) init.signal = opts.signal;
    return init;
  }

  private resolveUrl(path: string, query: RequestOptions['query']): string {
    const base = path.startsWith('http') ? path : `${this.baseUrl}${path.startsWith('/') ? '' : '/'}${path}`;
    if (!query) return base;
    const url = new URL(base);
    for (const [k, v] of Object.entries(query)) {
      if (v === undefined || v === null) continue;
      url.searchParams.append(k, String(v));
    }
    return url.toString();
  }
}

async function parseBody(res: Response): Promise<unknown> {
  if (res.status === 204) return undefined;
  const ct = res.headers.get('content-type') ?? '';
  if (!ct.includes('json')) {
    const text = await res.text();
    return text.length === 0 ? undefined : text;
  }
  const text = await res.text();
  if (text.length === 0) return undefined;
  return JSON.parse(text);
}

async function safeJson(res: Response): Promise<unknown> {
  try {
    return await parseBody(res);
  } catch {
    return undefined;
  }
}
