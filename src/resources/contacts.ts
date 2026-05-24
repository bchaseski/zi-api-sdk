import { Resource } from './base.js';
import type { Page } from '../http/pagination.js';
import type { DataOp, CopilotOp, BodyOf, ResponseOf } from './types.js';

type SearchOp = DataOp<'/data/v1/contacts/search', 'post'>;
type EnrichOp = DataOp<'/data/v1/contacts/enrich', 'post'>;
type LookalikesOp = CopilotOp<'/copilot/v1/contacts/lookalikes', 'get'>;
type RecommendationsOp = CopilotOp<'/copilot/v1/contacts/recommendations', 'get'>;

export class Contacts extends Resource {
  /** Search contacts. Returns a page; ZoomInfo's response carries `data` + pagination meta. */
  search(body: BodyOf<SearchOp>): Promise<Page<unknown>> {
    return this.postPage<unknown>('/data/v1/contacts/search', body);
  }

  /** Async-iterate every contact across pages. */
  searchAll(body: BodyOf<SearchOp>): AsyncIterable<unknown> {
    return this.paginate(() => this.search(body));
  }

  /** Bulk enrich contacts (up to 25 per call). */
  enrich(body: BodyOf<EnrichOp>): Promise<ResponseOf<EnrichOp>> {
    return this.post<ResponseOf<EnrichOp>>('/data/v1/contacts/enrich', body);
  }

  /** ML-based lookalike contacts. */
  lookalikes(query: Record<string, string | number | boolean | undefined> = {}): Promise<ResponseOf<LookalikesOp>> {
    return this.get<ResponseOf<LookalikesOp>>('/copilot/v1/contacts/lookalikes', query);
  }

  /** Ranked contact recommendations for a sales motion. */
  recommendations(query: Record<string, string | number | boolean | undefined> = {}): Promise<ResponseOf<RecommendationsOp>> {
    return this.get<ResponseOf<RecommendationsOp>>('/copilot/v1/contacts/recommendations', query);
  }
}
