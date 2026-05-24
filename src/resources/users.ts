import { Resource } from './base.js';
import type { DataOp, ResponseOf } from './types.js';

type UsageOp = DataOp<'/data/v1/users/usage', 'get'>;

export class Users extends Resource {
  /** Returns the current user's API usage and limits. */
  usage(): Promise<ResponseOf<UsageOp>> {
    return this.get<ResponseOf<UsageOp>>('/data/v1/users/usage');
  }
}
