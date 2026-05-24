import { Resource, encodePathParam } from './base.js';
import type { StudioOp, BodyOf, ResponseOf } from './types.js';

type BulkCreateOp = StudioOp<'/studio/v1/audiences/{audienceId}/columns/actions/bulk/create', 'post'>;
type DataDepsOp = StudioOp<'/studio/v1/audiences/{audienceId}/columns/data-dependencies/{tool}', 'get'>;
type PatchOp = StudioOp<'/studio/v1/audiences/{audienceId}/columns/{columnId}', 'patch'>;
type DeleteOp = StudioOp<'/studio/v1/audiences/{audienceId}/columns/{columnId}', 'delete'>;

export class AudienceColumns extends Resource {
  bulkCreate(args: { audienceId: string } & BodyOf<BulkCreateOp>): Promise<ResponseOf<BulkCreateOp>> {
    const { audienceId, ...body } = args;
    const a = encodePathParam('audienceId', audienceId);
    return this.post<ResponseOf<BulkCreateOp>>(
      `/studio/v1/audiences/${a}/columns/actions/bulk/create`,
      body,
    );
  }
  dataDependencies(args: { audienceId: string; tool: string }): Promise<ResponseOf<DataDepsOp>> {
    const a = encodePathParam('audienceId', args.audienceId);
    const t = encodePathParam('tool', args.tool);
    return this.get<ResponseOf<DataDepsOp>>(
      `/studio/v1/audiences/${a}/columns/data-dependencies/${t}`,
    );
  }
  update(args: { audienceId: string; columnId: string } & BodyOf<PatchOp>): Promise<ResponseOf<PatchOp>> {
    const { audienceId, columnId, ...body } = args;
    const a = encodePathParam('audienceId', audienceId);
    const c = encodePathParam('columnId', columnId);
    return this.patch<ResponseOf<PatchOp>>(`/studio/v1/audiences/${a}/columns/${c}`, body);
  }
  remove(args: { audienceId: string; columnId: string }): Promise<ResponseOf<DeleteOp>> {
    const a = encodePathParam('audienceId', args.audienceId);
    const c = encodePathParam('columnId', args.columnId);
    return this.delete<ResponseOf<DeleteOp>>(`/studio/v1/audiences/${a}/columns/${c}`);
  }
}
