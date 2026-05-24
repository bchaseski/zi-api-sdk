import { describe, it, expect, vi } from 'vitest';
import { makePage, paginate, type Page } from '../../../src/http/pagination.js';

describe('makePage', () => {
  it('exposes data, meta, links', () => {
    const page = makePage(
      { data: [1, 2], meta: { totalResults: 5 }, links: { next: '/x?page=2' } },
      null,
    );
    expect(page.data).toEqual([1, 2]);
    expect(page.meta?.totalResults).toBe(5);
    expect(page.links?.next).toBe('/x?page=2');
  });

  it('next() returns null when no next link', async () => {
    const page = makePage({ data: [1] }, null);
    expect(await page.next()).toBeNull();
  });

  it('next() invokes fetchNext with the next link url', async () => {
    const fetchNext = vi.fn(async (url: string): Promise<Page<number> | null> =>
      makePage({ data: [3], meta: { lastUrl: url } as never }, null),
    );
    const page = makePage<number>({ data: [1], links: { next: '/x?page=2' } }, fetchNext);
    const next = await page.next();
    expect(fetchNext).toHaveBeenCalledWith('/x?page=2');
    expect(next?.data).toEqual([3]);
  });
});

describe('paginate', () => {
  it('iterates all items across pages', async () => {
    let calls = 0;
    const first = async (): Promise<Page<number>> => {
      calls += 1;
      return makePage({ data: [1, 2], links: { next: '/p2' } }, async () =>
        makePage<number>({ data: [3, 4], links: { next: '/p3' } }, async () =>
          makePage<number>({ data: [5] }, null),
        ),
      );
    };
    const out: number[] = [];
    for await (const n of paginate(first)) out.push(n);
    expect(out).toEqual([1, 2, 3, 4, 5]);
    expect(calls).toBe(1); // first() invoked exactly once
  });

  it('supports early break', async () => {
    const first = async (): Promise<Page<number>> =>
      makePage({ data: [1, 2], links: { next: '/p2' } }, async () =>
        makePage<number>({ data: [3] }, null),
      );
    const out: number[] = [];
    for await (const n of paginate(first)) {
      out.push(n);
      if (n === 1) break;
    }
    expect(out).toEqual([1]);
  });

  it('handles empty first page', async () => {
    const first = async (): Promise<Page<number>> => makePage<number>({ data: [] }, null);
    const out: number[] = [];
    for await (const n of paginate(first)) out.push(n);
    expect(out).toEqual([]);
  });
});
