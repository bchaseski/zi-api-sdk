import { describe, it, expect, vi } from 'vitest';
import { Fetcher } from '../../../src/http/fetcher.js';
import {
  ZoomInfoAuthError,
  ZoomInfoValidationError,
  ZoomInfoServerError,
} from '../../../src/http/errors.js';

interface MockCall {
  url: string;
  init: RequestInit;
}

function mockFetch(handler: (call: MockCall) => Response | Promise<Response>) {
  const calls: MockCall[] = [];
  const fn = vi.fn(async (input: string | URL, init: RequestInit = {}) => {
    const url = typeof input === 'string' ? input : input.toString();
    const call = { url, init };
    calls.push(call);
    return handler(call);
  });
  return { fn: fn as unknown as typeof fetch, calls };
}

const auth = {
  getAccessToken: vi.fn(async () => 'tok-1'),
  invalidate: vi.fn(),
};

function freshAuth() {
  auth.getAccessToken.mockClear();
  auth.invalidate.mockClear();
  auth.getAccessToken.mockResolvedValue('tok-1');
  return auth;
}

function jsonResponse(body: unknown, status = 200, headers: Record<string, string> = {}): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json', ...headers },
  });
}

describe('Fetcher.request', () => {
  it('joins baseUrl + path and adds bearer token', async () => {
    const a = freshAuth();
    const { fn, calls } = mockFetch(() => jsonResponse({ data: { id: '1' } }));
    const f = new Fetcher({
      baseUrl: 'https://api.zoominfo.com/gtm/v1.0',
      authProvider: a,
      fetch: fn,
    });
    await f.request('GET', '/contacts/search');
    expect(calls[0]!.url).toBe('https://api.zoominfo.com/gtm/v1.0/contacts/search');
    const headers = new Headers(calls[0]!.init.headers);
    expect(headers.get('authorization')).toBe('Bearer tok-1');
    expect(headers.get('accept')).toBe('application/json');
  });

  it('serializes query params (including bracketed keys)', async () => {
    const { fn, calls } = mockFetch(() => jsonResponse({ data: [] }));
    const f = new Fetcher({
      baseUrl: 'https://api.example.com/v1',
      authProvider: freshAuth(),
      fetch: fn,
    });
    await f.request('GET', '/things', {
      query: { 'page[number]': 2, 'page[size]': 25, sort: 'asc', skip: undefined },
    });
    const url = new URL(calls[0]!.url);
    expect(url.searchParams.get('page[number]')).toBe('2');
    expect(url.searchParams.get('page[size]')).toBe('25');
    expect(url.searchParams.get('sort')).toBe('asc');
    expect(url.searchParams.has('skip')).toBe(false);
  });

  it('serializes JSON body and sets content-type', async () => {
    const { fn, calls } = mockFetch(() => jsonResponse({ data: { id: '1' } }));
    const f = new Fetcher({
      baseUrl: 'https://api.example.com/v1',
      authProvider: freshAuth(),
      fetch: fn,
    });
    await f.request('POST', '/things', { body: { x: 1 } });
    expect(calls[0]!.init.method).toBe('POST');
    expect(calls[0]!.init.body).toBe('{"x":1}');
    const headers = new Headers(calls[0]!.init.headers);
    expect(headers.get('content-type')).toBe('application/json');
  });

  it('returns parsed JSON body', async () => {
    const { fn } = mockFetch(() => jsonResponse({ hello: 'world' }));
    const f = new Fetcher({
      baseUrl: 'https://api.example.com/v1',
      authProvider: freshAuth(),
      fetch: fn,
    });
    const out = await f.request<{ hello: string }>('GET', '/x');
    expect(out).toEqual({ hello: 'world' });
  });

  it('throws ZoomInfoValidationError on 400', async () => {
    const { fn } = mockFetch(() => jsonResponse({ errors: [{ detail: 'bad' }] }, 400));
    const f = new Fetcher({
      baseUrl: 'https://api.example.com/v1',
      authProvider: freshAuth(),
      fetch: fn,
    });
    await expect(f.request('GET', '/x')).rejects.toBeInstanceOf(ZoomInfoValidationError);
  });

  it('retries 503 then succeeds', async () => {
    let n = 0;
    const { fn, calls } = mockFetch(() => {
      n += 1;
      return n < 2 ? new Response(null, { status: 503 }) : jsonResponse({ ok: true });
    });
    const f = new Fetcher({
      baseUrl: 'https://api.example.com/v1',
      authProvider: freshAuth(),
      fetch: fn,
      retry: { maxRetries: 3, baseDelayMs: 1, maxDelayMs: 10 },
    });
    const out = await f.request<{ ok: boolean }>('GET', '/x');
    expect(out.ok).toBe(true);
    expect(calls).toHaveLength(2);
  });

  it('throws ZoomInfoServerError after retries exhausted', async () => {
    const { fn } = mockFetch(() => new Response(null, { status: 500 }));
    const f = new Fetcher({
      baseUrl: 'https://api.example.com/v1',
      authProvider: freshAuth(),
      fetch: fn,
      retry: { maxRetries: 1, baseDelayMs: 1, maxDelayMs: 10 },
    });
    await expect(f.request('GET', '/x')).rejects.toBeInstanceOf(ZoomInfoServerError);
  });

  it('on 401 invalidates token and retries once with fresh token', async () => {
    const a = freshAuth();
    a.getAccessToken.mockResolvedValueOnce('stale').mockResolvedValueOnce('fresh');
    let calls = 0;
    const { fn, calls: fetchCalls } = mockFetch(() => {
      calls += 1;
      return calls === 1 ? new Response(null, { status: 401 }) : jsonResponse({ ok: true });
    });
    const f = new Fetcher({
      baseUrl: 'https://api.example.com/v1',
      authProvider: a,
      fetch: fn,
    });
    const out = await f.request<{ ok: boolean }>('GET', '/x');
    expect(out.ok).toBe(true);
    expect(a.invalidate).toHaveBeenCalledTimes(1);
    expect(fetchCalls).toHaveLength(2);
    expect(new Headers(fetchCalls[1]!.init.headers).get('authorization')).toBe('Bearer fresh');
  });

  it('throws ZoomInfoAuthError when retry on 401 also fails', async () => {
    const a = freshAuth();
    const { fn } = mockFetch(() => new Response(null, { status: 401 }));
    const f = new Fetcher({
      baseUrl: 'https://api.example.com/v1',
      authProvider: a,
      fetch: fn,
    });
    await expect(f.request('GET', '/x')).rejects.toBeInstanceOf(ZoomInfoAuthError);
    expect(a.invalidate).toHaveBeenCalledTimes(1);
  });

  it('omits body and content-type on GET', async () => {
    const { fn, calls } = mockFetch(() => jsonResponse({}));
    const f = new Fetcher({
      baseUrl: 'https://api.example.com/v1',
      authProvider: freshAuth(),
      fetch: fn,
    });
    await f.request('GET', '/x');
    expect(calls[0]!.init.body).toBeFalsy();
  });

  it('returns undefined for 204 No Content', async () => {
    const { fn } = mockFetch(() => new Response(null, { status: 204 }));
    const f = new Fetcher({
      baseUrl: 'https://api.example.com/v1',
      authProvider: freshAuth(),
      fetch: fn,
    });
    const out = await f.request<undefined>('DELETE', '/x');
    expect(out).toBeUndefined();
  });
});

describe('Fetcher.requestPage', () => {
  it('produces a Page<T> whose next() follows links.next', async () => {
    const { fn, calls } = mockFetch((call) => {
      if (call.url.includes('page=2')) {
        return jsonResponse({ data: [{ id: '3' }], meta: { totalResults: 3 } });
      }
      return jsonResponse({
        data: [{ id: '1' }, { id: '2' }],
        meta: { totalResults: 3 },
        links: { next: 'https://api.example.com/v1/things?page=2' },
      });
    });
    const f = new Fetcher({
      baseUrl: 'https://api.example.com/v1',
      authProvider: freshAuth(),
      fetch: fn,
    });
    const page1 = await f.requestPage<{ id: string }>('GET', '/things');
    expect(page1.data).toHaveLength(2);
    const page2 = await page1.next();
    expect(page2?.data).toEqual([{ id: '3' }]);
    expect(await page2!.next()).toBeNull();
    expect(calls).toHaveLength(2);
  });
});
