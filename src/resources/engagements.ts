import { Resource, encodePathParam } from './base.js';
import type { PlatformOp, BodyOf, ResponseOf } from './types.js';

type UpsertOp = PlatformOp<'/platform/v1/engagements/content-interactions', 'post'>;
type GetOp = PlatformOp<'/platform/v1/engagements/content-interactions/{id}', 'get'>;
type DeleteOp = PlatformOp<'/platform/v1/engagements/content-interactions/{id}', 'delete'>;

export class Engagements extends Resource {
  upsertContentInteractions(body: BodyOf<UpsertOp>): Promise<ResponseOf<UpsertOp>> {
    return this.post<ResponseOf<UpsertOp>>('/platform/v1/engagements/content-interactions', body);
  }
  getContentInteraction(args: { id: string }): Promise<ResponseOf<GetOp>> {
    return this.get<ResponseOf<GetOp>>(
      `/platform/v1/engagements/content-interactions/${encodePathParam('id', args.id)}`,
    );
  }
  deleteContentInteraction(args: { id: string }): Promise<ResponseOf<DeleteOp>> {
    return this.delete<ResponseOf<DeleteOp>>(
      `/platform/v1/engagements/content-interactions/${encodePathParam('id', args.id)}`,
    );
  }
}
