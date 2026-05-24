import { Resource, encodePathParam } from './base.js';
import type { CopilotOp, BodyOf, ResponseOf } from './types.js';

const BASE = '/copilot/v1/products';
type ListOp = CopilotOp<'/copilot/v1/products', 'get'>;
type UpsertOp = CopilotOp<'/copilot/v1/products', 'post'>;
type GetOp = CopilotOp<'/copilot/v1/products/{offeringId}', 'get'>;
type DeleteOp = CopilotOp<'/copilot/v1/products/{offeringId}', 'delete'>;
type ArchiveOp = CopilotOp<'/copilot/v1/products/{offeringId}/actions/archive', 'post'>;
type UnarchiveOp = CopilotOp<'/copilot/v1/products/{offeringId}/actions/unarchive', 'post'>;

/** Products and Services (organization offerings). */
export class Products extends Resource {
  list(): Promise<ResponseOf<ListOp>> {
    return this.get<ResponseOf<ListOp>>(BASE);
  }
  upsert(body: BodyOf<UpsertOp>): Promise<ResponseOf<UpsertOp>> {
    return this.post<ResponseOf<UpsertOp>>(BASE, body);
  }
  retrieve(args: { offeringId: string }): Promise<ResponseOf<GetOp>> {
    return this.get<ResponseOf<GetOp>>(`${BASE}/${encodePathParam('offeringId', args.offeringId)}`);
  }
  remove(args: { offeringId: string }): Promise<ResponseOf<DeleteOp>> {
    return this.delete<ResponseOf<DeleteOp>>(`${BASE}/${encodePathParam('offeringId', args.offeringId)}`);
  }
  archive(args: { offeringId: string }): Promise<ResponseOf<ArchiveOp>> {
    return this.post<ResponseOf<ArchiveOp>>(`${BASE}/${encodePathParam('offeringId', args.offeringId)}/actions/archive`);
  }
  unarchive(args: { offeringId: string }): Promise<ResponseOf<UnarchiveOp>> {
    return this.post<ResponseOf<UnarchiveOp>>(`${BASE}/${encodePathParam('offeringId', args.offeringId)}/actions/unarchive`);
  }
}
