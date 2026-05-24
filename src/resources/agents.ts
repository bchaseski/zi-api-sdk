import { Resource, encodePathParam } from './base.js';
import type { AgentOp, BodyOf, ResponseOf } from './types.js';

type ListOp = AgentOp<'/agent/v1/agents', 'get'>;
type InteractOp = AgentOp<'/agent/v1/agents/{agentId}/actions/interact', 'post'>;
type StreamOp = AgentOp<'/agent/v1/agents/{agentId}/actions/stream', 'post'>;

/** Experimental: Agent interaction endpoints. */
export class Agents extends Resource {
  list(): Promise<ResponseOf<ListOp>> {
    return this.get<ResponseOf<ListOp>>('/agent/v1/agents');
  }
  interact(args: { agentId: string } & BodyOf<InteractOp>): Promise<ResponseOf<InteractOp>> {
    const { agentId, ...body } = args;
    const id = encodePathParam('agentId', agentId);
    return this.post<ResponseOf<InteractOp>>(`/agent/v1/agents/${id}/actions/interact`, body);
  }
  /** Streaming interact — returns raw fetch response so callers can stream the body. */
  stream(args: { agentId: string } & BodyOf<StreamOp>): Promise<ResponseOf<StreamOp>> {
    const { agentId, ...body } = args;
    const id = encodePathParam('agentId', agentId);
    return this.post<ResponseOf<StreamOp>>(`/agent/v1/agents/${id}/actions/stream`, body);
  }
}
