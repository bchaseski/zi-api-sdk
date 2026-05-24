import { Resource } from './base.js';
import type { Page } from '../http/pagination.js';
import type { DataOp, BodyOf, ResponseOf } from './types.js';

type SearchOp = DataOp<'/data/v1/intent/search', 'post'>;
type EnrichOp = DataOp<'/data/v1/intent/enrich', 'post'>;

export class Intent extends Resource {
  search(body: BodyOf<SearchOp>): Promise<Page<unknown>> {
    return this.postPage<unknown>('/data/v1/intent/search', body);
  }
  searchAll(body: BodyOf<SearchOp>): AsyncIterable<unknown> {
    return this.paginate(() => this.search(body));
  }
  enrich(body: BodyOf<EnrichOp>): Promise<ResponseOf<EnrichOp>> {
    return this.post<ResponseOf<EnrichOp>>('/data/v1/intent/enrich', body);
  }
}
