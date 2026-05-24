import { Resource, encodePathParam } from './base.js';
import type { PlatformOp, BodyOf, ResponseOf } from './types.js';

type ListOp = PlatformOp<'/platform/v1/workflows', 'get'>;
type ExecuteOp = PlatformOp<'/platform/v1/workflows/{id}/actions/execute', 'post'>;
type StatusOp = PlatformOp<'/platform/v1/workflows/executions/{id}', 'get'>;

export class Workflows extends Resource {
  list(): Promise<ResponseOf<ListOp>> {
    return this.get<ResponseOf<ListOp>>('/platform/v1/workflows');
  }
  execute(args: { id: string } & BodyOf<ExecuteOp>): Promise<ResponseOf<ExecuteOp>> {
    const { id, ...body } = args;
    return this.post<ResponseOf<ExecuteOp>>(
      `/platform/v1/workflows/${encodePathParam('id', id)}/actions/execute`,
      body,
    );
  }
  executionStatus(args: { id: string }): Promise<ResponseOf<StatusOp>> {
    return this.get<ResponseOf<StatusOp>>(
      `/platform/v1/workflows/executions/${encodePathParam('id', args.id)}`,
    );
  }
}
