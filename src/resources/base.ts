import type { Fetcher } from '../http/fetcher.js';
import type { Page } from '../http/pagination.js';
import { paginate } from '../http/pagination.js';

export abstract class Resource {
  constructor(protected readonly fetcher: Fetcher) {}

  protected get<T>(path: string, query?: Record<string, string | number | boolean | undefined>): Promise<T> {
    return this.fetcher.request<T>('GET', path, query ? { query } : undefined);
  }
  protected post<T>(path: string, body?: unknown, query?: Record<string, string | number | boolean | undefined>): Promise<T> {
    return this.fetcher.request<T>('POST', path, { body, ...(query ? { query } : {}) });
  }
  protected put<T>(path: string, body?: unknown): Promise<T> {
    return this.fetcher.request<T>('PUT', path, { body });
  }
  protected patch<T>(path: string, body?: unknown): Promise<T> {
    return this.fetcher.request<T>('PATCH', path, { body });
  }
  protected delete<T>(path: string): Promise<T> {
    return this.fetcher.request<T>('DELETE', path);
  }
  protected getPage<T>(path: string, query?: Record<string, string | number | boolean | undefined>): Promise<Page<T>> {
    return this.fetcher.requestPage<T>('GET', path, query ? { query } : undefined);
  }
  protected postPage<T>(path: string, body?: unknown): Promise<Page<T>> {
    return this.fetcher.requestPage<T>('POST', path, { body });
  }

  /** Build an async iterator from a paged endpoint. */
  protected paginate<T>(first: () => Promise<Page<T>>): AsyncIterable<T> {
    return paginate(first);
  }
}

/** Encode a path parameter, throwing on missing values. */
export function encodePathParam(name: string, value: string | number | undefined): string {
  if (value === undefined || value === null || value === '') {
    throw new TypeError(`Missing required path parameter: ${name}`);
  }
  return encodeURIComponent(String(value));
}
