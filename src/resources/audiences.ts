import { Resource, encodePathParam } from './base.js';
import type { StudioOp, BodyOf, ResponseOf } from './types.js';

const BASE = '/studio/v1/audiences';
type CreateOp = StudioOp<'/studio/v1/audiences', 'post'>;
type ListOp = StudioOp<'/studio/v1/audiences', 'get'>;
type GetOp = StudioOp<'/studio/v1/audiences/{audienceId}', 'get'>;
type DeleteOp = StudioOp<'/studio/v1/audiences/{audienceId}', 'delete'>;
type PatchOp = StudioOp<'/studio/v1/audiences/{audienceId}', 'patch'>;
type FilterMetaOp = StudioOp<'/studio/v1/audiences/{audienceId}/filter-metadata', 'get'>;
type UpsertMatchOp = StudioOp<'/studio/v1/audiences/{audienceId}/actions/match-criteria', 'post'>;
type EnrichOp = StudioOp<'/studio/v1/audiences/{audienceId}/actions/enrich', 'post'>;
type JobStatusOp = StudioOp<'/studio/v1/audiences/{audienceId}/jobs/{jobId}', 'get'>;

/** GTM Studio Audiences. */
export class Audiences extends Resource {
  create(body: BodyOf<CreateOp>): Promise<ResponseOf<CreateOp>> {
    return this.post<ResponseOf<CreateOp>>(BASE, body);
  }
  list(): Promise<ResponseOf<ListOp>> {
    return this.get<ResponseOf<ListOp>>(BASE);
  }
  retrieve(args: { audienceId: string }): Promise<ResponseOf<GetOp>> {
    return this.get<ResponseOf<GetOp>>(`${BASE}/${encodePathParam('audienceId', args.audienceId)}`);
  }
  remove(args: { audienceId: string }): Promise<ResponseOf<DeleteOp>> {
    return this.delete<ResponseOf<DeleteOp>>(`${BASE}/${encodePathParam('audienceId', args.audienceId)}`);
  }
  update(args: { audienceId: string } & BodyOf<PatchOp>): Promise<ResponseOf<PatchOp>> {
    const { audienceId, ...body } = args;
    return this.patch<ResponseOf<PatchOp>>(`${BASE}/${encodePathParam('audienceId', audienceId)}`, body);
  }
  filterMetadata(args: { audienceId: string }): Promise<ResponseOf<FilterMetaOp>> {
    return this.get<ResponseOf<FilterMetaOp>>(
      `${BASE}/${encodePathParam('audienceId', args.audienceId)}/filter-metadata`,
    );
  }
  upsertMatchCriteria(args: { audienceId: string } & BodyOf<UpsertMatchOp>): Promise<ResponseOf<UpsertMatchOp>> {
    const { audienceId, ...body } = args;
    return this.post<ResponseOf<UpsertMatchOp>>(
      `${BASE}/${encodePathParam('audienceId', audienceId)}/actions/match-criteria`,
      body,
    );
  }
  enrich(args: { audienceId: string } & BodyOf<EnrichOp>): Promise<ResponseOf<EnrichOp>> {
    const { audienceId, ...body } = args;
    return this.post<ResponseOf<EnrichOp>>(
      `${BASE}/${encodePathParam('audienceId', audienceId)}/actions/enrich`,
      body,
    );
  }
  jobStatus(args: { audienceId: string; jobId: string }): Promise<ResponseOf<JobStatusOp>> {
    const a = encodePathParam('audienceId', args.audienceId);
    const j = encodePathParam('jobId', args.jobId);
    return this.get<ResponseOf<JobStatusOp>>(`${BASE}/${a}/jobs/${j}`);
  }
}
