import { Resource, encodePathParam } from './base.js';
import type { StudioOp, BodyOf, ResponseOf } from './types.js';

type GetOp = StudioOp<'/studio/v1/audiences/{audienceId}/rows/{rowId}', 'get'>;
type ListOp = StudioOp<'/studio/v1/audiences/{audienceId}/rows/actions/search', 'post'>;
type UpsertOp = StudioOp<'/studio/v1/audiences/{audienceId}/rows/actions/bulk/upsert', 'post'>;
type DeleteOp = StudioOp<'/studio/v1/audiences/{audienceId}/rows/actions/bulk/delete', 'delete'>;

export class AudienceRows extends Resource {
  retrieve(args: { audienceId: string; rowId: string }): Promise<ResponseOf<GetOp>> {
    const a = encodePathParam('audienceId', args.audienceId);
    const r = encodePathParam('rowId', args.rowId);
    return this.get<ResponseOf<GetOp>>(`/studio/v1/audiences/${a}/rows/${r}`);
  }
  list(args: { audienceId: string } & BodyOf<ListOp>): Promise<ResponseOf<ListOp>> {
    const { audienceId, ...body } = args;
    const a = encodePathParam('audienceId', audienceId);
    return this.post<ResponseOf<ListOp>>(`/studio/v1/audiences/${a}/rows/actions/search`, body);
  }
  bulkUpsert(args: { audienceId: string } & BodyOf<UpsertOp>): Promise<ResponseOf<UpsertOp>> {
    const { audienceId, ...body } = args;
    const a = encodePathParam('audienceId', audienceId);
    return this.post<ResponseOf<UpsertOp>>(`/studio/v1/audiences/${a}/rows/actions/bulk/upsert`, body);
  }
  bulkDelete(args: { audienceId: string }): Promise<ResponseOf<DeleteOp>> {
    const a = encodePathParam('audienceId', args.audienceId);
    return this.delete<ResponseOf<DeleteOp>>(`/studio/v1/audiences/${a}/rows/actions/bulk/delete`);
  }
}
