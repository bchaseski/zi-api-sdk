import { describe, it, expect, vi } from 'vitest';
import { isRetryableStatus, nextDelayMs, withRetry, type RetryOptions } from '../../../src/http/retry.js';

const OPTS: RetryOptions = { maxRetries: 3, baseDelayMs: 100, maxDelayMs: 10_000 };

describe('isRetryableStatus', () => {
  it('429 retryable', () => expect(isRetryableStatus(429)).toBe(true));
  it('500/502/503/504 retryable', () => {
    for (const s of [500, 502, 503, 504]) expect(isRetryableStatus(s)).toBe(true);
  });
  it('400/401/403/404 not retryable', () => {
    for (const s of [400, 401, 403, 404]) expect(isRetryableStatus(s)).toBe(false);
  });
  it('2xx not retryable', () => expect(isRetryableStatus(200)).toBe(false));
});

describe('nextDelayMs', () => {
  it('exponentially backs off when no Retry-After', () => {
    const d0 = nextDelayMs(0, null, OPTS);
    const d1 = nextDelayMs(1, null, OPTS);
    const d2 = nextDelayMs(2, null, OPTS);
    // jitter-tolerant: lower bound only
    expect(d0).toBeGreaterThanOrEqual(100);
    expect(d1).toBeGreaterThanOrEqual(200);
    expect(d2).toBeGreaterThanOrEqual(400);
  });

  it('caps at maxDelayMs', () => {
    const d = nextDelayMs(20, null, OPTS);
    expect(d).toBeLessThanOrEqual(OPTS.maxDelayMs);
  });

  it('honors Retry-After seconds header', () => {
    expect(nextDelayMs(0, '5', OPTS)).toBe(5_000);
  });

  it('honors Retry-After date header', () => {
    const future = new Date(Date.now() + 3_000).toUTCString();
    const d = nextDelayMs(0, future, OPTS);
    expect(d).toBeGreaterThan(1_500);
    expect(d).toBeLessThan(4_500);
  });
});

function fakeRes(status: number): Response {
  return new Response(null, { status });
}

describe('withRetry', () => {
  it('returns immediately on 2xx', async () => {
    const fn = vi.fn(async () => fakeRes(200));
    const res = await withRetry(fn, { ...OPTS, baseDelayMs: 1 });
    expect(res.status).toBe(200);
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('retries on 503 then succeeds', async () => {
    let calls = 0;
    const fn = vi.fn(async () => {
      calls += 1;
      return fakeRes(calls < 2 ? 503 : 200);
    });
    const res = await withRetry(fn, { ...OPTS, baseDelayMs: 1 });
    expect(res.status).toBe(200);
    expect(fn).toHaveBeenCalledTimes(2);
  });

  it('gives up after maxRetries and returns the final failed response', async () => {
    const fn = vi.fn(async () => fakeRes(500));
    const res = await withRetry(fn, { ...OPTS, baseDelayMs: 1, maxRetries: 2 });
    expect(res.status).toBe(500);
    expect(fn).toHaveBeenCalledTimes(3); // 1 initial + 2 retries
  });

  it('does not retry on 400', async () => {
    const fn = vi.fn(async () => fakeRes(400));
    await withRetry(fn, { ...OPTS, baseDelayMs: 1 });
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('passes attempt number into fn (0-indexed)', async () => {
    const seen: number[] = [];
    const fn = vi.fn(async (attempt: number) => {
      seen.push(attempt);
      return fakeRes(attempt < 1 ? 503 : 200);
    });
    await withRetry(fn, { ...OPTS, baseDelayMs: 1 });
    expect(seen).toEqual([0, 1]);
  });
});
