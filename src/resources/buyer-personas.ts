import { Resource, encodePathParam } from './base.js';
import type { CopilotOp, BodyOf, ResponseOf } from './types.js';

const BASE = '/copilot/v1/customer-buyer-personas';
type ListOp = CopilotOp<'/copilot/v1/customer-buyer-personas', 'get'>;
type UpsertOp = CopilotOp<'/copilot/v1/customer-buyer-personas', 'post'>;
type GetOp = CopilotOp<'/copilot/v1/customer-buyer-personas/{buyerPersonaId}', 'get'>;
type DeleteOp = CopilotOp<'/copilot/v1/customer-buyer-personas/{buyerPersonaId}', 'delete'>;
type ArchiveOp = CopilotOp<'/copilot/v1/customer-buyer-personas/{buyerPersonaId}/actions/archive', 'post'>;
type UnarchiveOp = CopilotOp<'/copilot/v1/customer-buyer-personas/{buyerPersonaId}/actions/unarchive', 'post'>;

export class BuyerPersonas extends Resource {
  list(): Promise<ResponseOf<ListOp>> {
    return this.get<ResponseOf<ListOp>>(BASE);
  }
  upsert(body: BodyOf<UpsertOp>): Promise<ResponseOf<UpsertOp>> {
    return this.post<ResponseOf<UpsertOp>>(BASE, body);
  }
  retrieve(args: { buyerPersonaId: string }): Promise<ResponseOf<GetOp>> {
    const id = encodePathParam('buyerPersonaId', args.buyerPersonaId);
    return this.get<ResponseOf<GetOp>>(`${BASE}/${id}`);
  }
  remove(args: { buyerPersonaId: string }): Promise<ResponseOf<DeleteOp>> {
    const id = encodePathParam('buyerPersonaId', args.buyerPersonaId);
    return this.delete<ResponseOf<DeleteOp>>(`${BASE}/${id}`);
  }
  archive(args: { buyerPersonaId: string }): Promise<ResponseOf<ArchiveOp>> {
    const id = encodePathParam('buyerPersonaId', args.buyerPersonaId);
    return this.post<ResponseOf<ArchiveOp>>(`${BASE}/${id}/actions/archive`);
  }
  unarchive(args: { buyerPersonaId: string }): Promise<ResponseOf<UnarchiveOp>> {
    const id = encodePathParam('buyerPersonaId', args.buyerPersonaId);
    return this.post<ResponseOf<UnarchiveOp>>(`${BASE}/${id}/actions/unarchive`);
  }
}
