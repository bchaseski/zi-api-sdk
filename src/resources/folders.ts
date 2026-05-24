import { Resource, encodePathParam } from './base.js';
import type { StudioOp, BodyOf, ResponseOf } from './types.js';

const BASE = '/studio/v1/folders';
type ListOp = StudioOp<'/studio/v1/folders', 'get'>;
type CreateOp = StudioOp<'/studio/v1/folders', 'post'>;
type GetOp = StudioOp<'/studio/v1/folders/{folderId}', 'get'>;
type UpdateOp = StudioOp<'/studio/v1/folders/{folderId}', 'patch'>;
type DeleteOp = StudioOp<'/studio/v1/folders/{folderId}', 'delete'>;

export class Folders extends Resource {
  create(body: BodyOf<CreateOp>): Promise<ResponseOf<CreateOp>> {
    return this.post<ResponseOf<CreateOp>>(BASE, body);
  }
  list(): Promise<ResponseOf<ListOp>> {
    return this.get<ResponseOf<ListOp>>(BASE);
  }
  retrieve(args: { folderId: string }): Promise<ResponseOf<GetOp>> {
    return this.get<ResponseOf<GetOp>>(`${BASE}/${encodePathParam('folderId', args.folderId)}`);
  }
  update(args: { folderId: string } & BodyOf<UpdateOp>): Promise<ResponseOf<UpdateOp>> {
    const { folderId, ...body } = args;
    return this.patch<ResponseOf<UpdateOp>>(`${BASE}/${encodePathParam('folderId', folderId)}`, body);
  }
  remove(args: { folderId: string }): Promise<ResponseOf<DeleteOp>> {
    return this.delete<ResponseOf<DeleteOp>>(`${BASE}/${encodePathParam('folderId', args.folderId)}`);
  }
}
