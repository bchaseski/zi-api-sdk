import { Resource, encodePathParam } from './base.js';
import type { PlatformOp, BodyOf, ResponseOf } from './types.js';

type ListOp = PlatformOp<'/platform/v1/metadata/entities', 'get'>;
type FieldsOp = PlatformOp<'/platform/v1/metadata/entities/{entityName}/fields', 'get'>;
type UpsertOp = PlatformOp<'/platform/v1/entities/{entityName}', 'post'>;

export class Entities extends Resource {
  list(): Promise<ResponseOf<ListOp>> {
    return this.get<ResponseOf<ListOp>>('/platform/v1/metadata/entities');
  }
  fields(args: { entityName: string }): Promise<ResponseOf<FieldsOp>> {
    return this.get<ResponseOf<FieldsOp>>(
      `/platform/v1/metadata/entities/${encodePathParam('entityName', args.entityName)}/fields`,
    );
  }
  upsertRecords(args: { entityName: string } & BodyOf<UpsertOp>): Promise<ResponseOf<UpsertOp>> {
    const { entityName, ...body } = args;
    return this.post<ResponseOf<UpsertOp>>(
      `/platform/v1/entities/${encodePathParam('entityName', entityName)}`,
      body,
    );
  }
}
