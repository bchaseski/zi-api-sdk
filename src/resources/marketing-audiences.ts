import { Resource, encodePathParam } from './base.js';
import type { MarketingOp, BodyOf, ResponseOf } from './types.js';

const BASE = '/marketing/v1/audiences';
type CreateOp = MarketingOp<'/marketing/v1/audiences', 'post'>;
type ListOp = MarketingOp<'/marketing/v1/audiences', 'get'>;
type GetOp = MarketingOp<'/marketing/v1/audiences/{audienceId}', 'get'>;
type UpdateOp = MarketingOp<'/marketing/v1/audiences/{audienceId}', 'put'>;
type DeleteOp = MarketingOp<'/marketing/v1/audiences/{audienceId}', 'delete'>;
type UploadOp = MarketingOp<'/marketing/v1/audiences/{audienceId}/uploads', 'post'>;
type GetUploadOp = MarketingOp<'/marketing/v1/audiences/{audienceId}/uploads/{uploadId}', 'get'>;

/** Marketing API audiences (a separate, older endpoint family from GTM Studio audiences). */
export class MarketingAudiences extends Resource {
  create(body: BodyOf<CreateOp>): Promise<ResponseOf<CreateOp>> {
    return this.post<ResponseOf<CreateOp>>(BASE, body);
  }
  list(): Promise<ResponseOf<ListOp>> {
    return this.get<ResponseOf<ListOp>>(BASE);
  }
  retrieve(args: { audienceId: string }): Promise<ResponseOf<GetOp>> {
    return this.get<ResponseOf<GetOp>>(`${BASE}/${encodePathParam('audienceId', args.audienceId)}`);
  }
  update(args: { audienceId: string } & BodyOf<UpdateOp>): Promise<ResponseOf<UpdateOp>> {
    const { audienceId, ...body } = args;
    return this.put<ResponseOf<UpdateOp>>(`${BASE}/${encodePathParam('audienceId', audienceId)}`, body);
  }
  remove(args: { audienceId: string }): Promise<ResponseOf<DeleteOp>> {
    return this.delete<ResponseOf<DeleteOp>>(`${BASE}/${encodePathParam('audienceId', args.audienceId)}`);
  }
  upload(args: { audienceId: string } & BodyOf<UploadOp>): Promise<ResponseOf<UploadOp>> {
    const { audienceId, ...body } = args;
    return this.post<ResponseOf<UploadOp>>(
      `${BASE}/${encodePathParam('audienceId', audienceId)}/uploads`,
      body,
    );
  }
  getUpload(args: { audienceId: string; uploadId: string }): Promise<ResponseOf<GetUploadOp>> {
    const a = encodePathParam('audienceId', args.audienceId);
    const u = encodePathParam('uploadId', args.uploadId);
    return this.get<ResponseOf<GetUploadOp>>(`${BASE}/${a}/uploads/${u}`);
  }
}
