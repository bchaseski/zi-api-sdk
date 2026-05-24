export interface PageMeta {
  page?: { number?: number; size?: number; total?: number };
  totalResults?: number;
  [key: string]: unknown;
}

export interface PageLinks {
  first?: string;
  prev?: string;
  next?: string;
  last?: string;
  [key: string]: string | undefined;
}

export interface Page<T> {
  readonly data: T[];
  readonly meta?: PageMeta;
  readonly links?: PageLinks;
  next(): Promise<Page<T> | null>;
}

export interface RawPage<T> {
  data: T[];
  meta?: PageMeta;
  links?: PageLinks;
}

export type FetchNextPage<T> = ((url: string) => Promise<Page<T> | null>) | null;

export function makePage<T>(raw: RawPage<T>, fetchNext: FetchNextPage<T>): Page<T> {
  const links = raw.links;
  return {
    data: raw.data,
    meta: raw.meta,
    links,
    async next() {
      const url = links?.next;
      if (!url || !fetchNext) return null;
      return fetchNext(url);
    },
  };
}

export async function* paginate<T>(first: () => Promise<Page<T>>): AsyncGenerator<T, void, void> {
  let page: Page<T> | null = await first();
  while (page) {
    for (const item of page.data) yield item;
    page = await page.next();
  }
}
