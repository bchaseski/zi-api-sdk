import { Resource, encodePathParam } from './base.js';
import type { CopilotOp, BodyOf, ResponseOf } from './types.js';

const BASE = '/copilot/v1/customer-competitors';
type ListOp = CopilotOp<'/copilot/v1/customer-competitors', 'get'>;
type UpsertOp = CopilotOp<'/copilot/v1/customer-competitors', 'post'>;
type GetOp = CopilotOp<'/copilot/v1/customer-competitors/{competitorId}', 'get'>;
type DeleteOp = CopilotOp<'/copilot/v1/customer-competitors/{competitorId}', 'delete'>;
type ArchiveOp = CopilotOp<'/copilot/v1/customer-competitors/{competitorId}/actions/archive', 'post'>;
type UnarchiveOp = CopilotOp<'/copilot/v1/customer-competitors/{competitorId}/actions/unarchive', 'post'>;

export class Competitors extends Resource {
  list(): Promise<ResponseOf<ListOp>> {
    return this.get<ResponseOf<ListOp>>(BASE);
  }
  upsert(body: BodyOf<UpsertOp>): Promise<ResponseOf<UpsertOp>> {
    return this.post<ResponseOf<UpsertOp>>(BASE, body);
  }
  retrieve(args: { competitorId: string }): Promise<ResponseOf<GetOp>> {
    return this.get<ResponseOf<GetOp>>(`${BASE}/${encodePathParam('competitorId', args.competitorId)}`);
  }
  remove(args: { competitorId: string }): Promise<ResponseOf<DeleteOp>> {
    return this.delete<ResponseOf<DeleteOp>>(`${BASE}/${encodePathParam('competitorId', args.competitorId)}`);
  }
  archive(args: { competitorId: string }): Promise<ResponseOf<ArchiveOp>> {
    return this.post<ResponseOf<ArchiveOp>>(`${BASE}/${encodePathParam('competitorId', args.competitorId)}/actions/archive`);
  }
  unarchive(args: { competitorId: string }): Promise<ResponseOf<UnarchiveOp>> {
    return this.post<ResponseOf<UnarchiveOp>>(`${BASE}/${encodePathParam('competitorId', args.competitorId)}/actions/unarchive`);
  }
}
