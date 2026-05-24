import { Resource } from './base.js';
import type { CopilotOp, BodyOf, ResponseOf } from './types.js';

const BASE = '/copilot/v1/customer-settings';
type GetOp = CopilotOp<'/copilot/v1/customer-settings', 'get'>;
type UpsertOp = CopilotOp<'/copilot/v1/customer-settings', 'post'>;
type DeleteOp = CopilotOp<'/copilot/v1/customer-settings', 'delete'>;

export class CustomerSettings extends Resource {
  retrieve(): Promise<ResponseOf<GetOp>> {
    return this.get<ResponseOf<GetOp>>(BASE);
  }
  upsert(body: BodyOf<UpsertOp>): Promise<ResponseOf<UpsertOp>> {
    return this.post<ResponseOf<UpsertOp>>(BASE, body);
  }
  remove(): Promise<ResponseOf<DeleteOp>> {
    return this.delete<ResponseOf<DeleteOp>>(BASE);
  }
}
