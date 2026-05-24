import { describe, it, expect, vi } from 'vitest';
import { TokenCache } from '../../../src/auth/token-cache.js';

describe('TokenCache', () => {
  it('caches token until expiry minus skew', async () => {
    const fetcher = vi.fn(async () => ({ accessToken: 'a', expiresAt: Date.now() + 10_000 }));
    const cache = new TokenCache(fetcher, { clockSkewMs: 1_000 });
    expect(await cache.get()).toBe('a');
    expect(await cache.get()).toBe('a');
    expect(fetcher).toHaveBeenCalledTimes(1);
  });

  it('refreshes when expired', async () => {
    let i = 0;
    const fetcher = vi.fn(async () => ({
      accessToken: `t${++i}`,
      expiresAt: Date.now() + 100,
    }));
    const cache = new TokenCache(fetcher, { clockSkewMs: 50 });
    expect(await cache.get()).toBe('t1');
    await new Promise((r) => setTimeout(r, 80));
    expect(await cache.get()).toBe('t2');
  });

  it('invalidate() forces a refresh on next get', async () => {
    let i = 0;
    const fetcher = vi.fn(async () => ({
      accessToken: `t${++i}`,
      expiresAt: Date.now() + 60_000,
    }));
    const cache = new TokenCache(fetcher);
    expect(await cache.get()).toBe('t1');
    cache.invalidate();
    expect(await cache.get()).toBe('t2');
  });

  it('coalesces concurrent refreshes', async () => {
    const fetcher = vi.fn(async () => {
      await new Promise((r) => setTimeout(r, 20));
      return { accessToken: 'a', expiresAt: Date.now() + 60_000 };
    });
    const cache = new TokenCache(fetcher);
    const [a, b, c] = await Promise.all([cache.get(), cache.get(), cache.get()]);
    expect([a, b, c]).toEqual(['a', 'a', 'a']);
    expect(fetcher).toHaveBeenCalledTimes(1);
  });
});
