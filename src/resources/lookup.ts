import { Resource, encodePathParam } from './base.js';
import type { DataOp, ResponseOf } from './types.js';

type LookupFieldOp = DataOp<'/data/v1/lookup/{fieldName}', 'get'>;
type LookupSearchOp = DataOp<'/data/v1/lookup/search', 'get'>;
type LookupEnrichOp = DataOp<'/data/v1/lookup/enrich', 'get'>;

export class Lookup extends Resource {
  /** Look up the legal values for a specific field. */
  data(args: { fieldName: string }): Promise<ResponseOf<LookupFieldOp>> {
    const f = encodePathParam('fieldName', args.fieldName);
    return this.get<ResponseOf<LookupFieldOp>>(`/data/v1/lookup/${f}`);
  }
  /** Discover the fields available for Search requests. */
  searchFields(): Promise<ResponseOf<LookupSearchOp>> {
    return this.get<ResponseOf<LookupSearchOp>>('/data/v1/lookup/search');
  }
  /** Discover the fields available for Enrich requests. */
  enrichFields(): Promise<ResponseOf<LookupEnrichOp>> {
    return this.get<ResponseOf<LookupEnrichOp>>('/data/v1/lookup/enrich');
  }
}
