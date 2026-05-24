import { Resource } from './base.js';
import type { PlatformOp, ResponseOf } from './types.js';

type GetOp = PlatformOp<'/platform/v1/entitlements', 'get'>;

export class Entitlements extends Resource {
  /** Retrieve user entitlements (permissions filtered by role). */
  retrieve(): Promise<ResponseOf<GetOp>> {
    return this.get<ResponseOf<GetOp>>('/platform/v1/entitlements');
  }
}
