import { Resource, encodePathParam } from './base.js';
import type { CopilotOp, BodyOf, ResponseOf } from './types.js';

const BASE = '/copilot/v1/ideal-company-profile';
type ListOp = CopilotOp<'/copilot/v1/ideal-company-profile', 'get'>;
type UpsertOp = CopilotOp<'/copilot/v1/ideal-company-profile', 'post'>;
type GetOp = CopilotOp<'/copilot/v1/ideal-company-profile/{segmentId}', 'get'>;
type DeleteOp = CopilotOp<'/copilot/v1/ideal-company-profile/{segmentId}', 'delete'>;
type ArchiveOp = CopilotOp<'/copilot/v1/ideal-company-profile/{segmentId}/actions/archive', 'post'>;
type UnarchiveOp = CopilotOp<'/copilot/v1/ideal-company-profile/{segmentId}/actions/unarchive', 'post'>;

/** Ideal Customer Profiles (ICPs). */
export class IdealCustomerProfiles extends Resource {
  list(): Promise<ResponseOf<ListOp>> {
    return this.get<ResponseOf<ListOp>>(BASE);
  }
  upsert(body: BodyOf<UpsertOp>): Promise<ResponseOf<UpsertOp>> {
    return this.post<ResponseOf<UpsertOp>>(BASE, body);
  }
  retrieve(args: { segmentId: string }): Promise<ResponseOf<GetOp>> {
    return this.get<ResponseOf<GetOp>>(`${BASE}/${encodePathParam('segmentId', args.segmentId)}`);
  }
  remove(args: { segmentId: string }): Promise<ResponseOf<DeleteOp>> {
    return this.delete<ResponseOf<DeleteOp>>(`${BASE}/${encodePathParam('segmentId', args.segmentId)}`);
  }
  archive(args: { segmentId: string }): Promise<ResponseOf<ArchiveOp>> {
    return this.post<ResponseOf<ArchiveOp>>(`${BASE}/${encodePathParam('segmentId', args.segmentId)}/actions/archive`);
  }
  unarchive(args: { segmentId: string }): Promise<ResponseOf<UnarchiveOp>> {
    return this.post<ResponseOf<UnarchiveOp>>(`${BASE}/${encodePathParam('segmentId', args.segmentId)}/actions/unarchive`);
  }
}
