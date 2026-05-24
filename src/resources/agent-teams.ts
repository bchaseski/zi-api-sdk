import { Resource, encodePathParam } from './base.js';
import type { AgentOp, BodyOf, ResponseOf } from './types.js';

type ListOp = AgentOp<'/agent/v1/agent-teams', 'get'>;
type GetOp = AgentOp<'/agent/v1/agent-teams/{agentTeamId}', 'get'>;
type RunOp = AgentOp<'/agent/v1/agent-teams/{agentTeamId}/runs', 'post'>;
type ListRunsOp = AgentOp<'/agent/v1/agent-teams/{agentTeamId}/runs', 'get'>;
type GetRunOp = AgentOp<'/agent/v1/agent-teams/{agentTeamId}/runs/{runId}', 'get'>;

export class AgentTeams extends Resource {
  list(): Promise<ResponseOf<ListOp>> {
    return this.get<ResponseOf<ListOp>>('/agent/v1/agent-teams');
  }
  details(args: { agentTeamId: string }): Promise<ResponseOf<GetOp>> {
    const id = encodePathParam('agentTeamId', args.agentTeamId);
    return this.get<ResponseOf<GetOp>>(`/agent/v1/agent-teams/${id}`);
  }
  run(args: { agentTeamId: string } & BodyOf<RunOp>): Promise<ResponseOf<RunOp>> {
    const { agentTeamId, ...body } = args;
    const id = encodePathParam('agentTeamId', agentTeamId);
    return this.post<ResponseOf<RunOp>>(`/agent/v1/agent-teams/${id}/runs`, body);
  }
  listRuns(args: { agentTeamId: string }): Promise<ResponseOf<ListRunsOp>> {
    const id = encodePathParam('agentTeamId', args.agentTeamId);
    return this.get<ResponseOf<ListRunsOp>>(`/agent/v1/agent-teams/${id}/runs`);
  }
  getRun(args: { agentTeamId: string; runId: string }): Promise<ResponseOf<GetRunOp>> {
    const id = encodePathParam('agentTeamId', args.agentTeamId);
    const r = encodePathParam('runId', args.runId);
    return this.get<ResponseOf<GetRunOp>>(`/agent/v1/agent-teams/${id}/runs/${r}`);
  }
}
