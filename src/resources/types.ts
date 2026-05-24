/**
 * Re-exports of generated OpenAPI types under friendlier names.
 *
 * Resource methods declare their parameter and return shapes using these,
 * so callers get full IntelliSense without having to navigate the raw
 * `paths` index in `src/generated/*.ts`.
 */

import type { paths as DataPaths } from '../generated/data.js';
import type { paths as CopilotPaths } from '../generated/copilot.js';
import type { paths as GtmStudioPaths } from '../generated/gtm-studio.js';
import type { paths as MarketingPaths } from '../generated/marketing.js';
import type { paths as PlatformPaths } from '../generated/platform.js';
import type { paths as AgentPaths } from '../generated/agent.js';

type JsonBody<O> =
  O extends { requestBody: { content: { 'application/json': infer T } } }
    ? T extends object
      ? T
      : Record<string, never>
    : Record<string, never>;

type JsonResponse<O> =
  O extends { responses: infer R }
    ? R extends Record<number, unknown>
      ? OkContent<R>
      : never
    : never;

type OkContent<R> =
  R extends { 200: { content: { 'application/json': infer T } } }
    ? T
    : R extends { 201: { content: { 'application/json': infer T } } }
      ? T
      : R extends { 202: { content: { 'application/json': infer T } } }
        ? T
        : R extends { 204: unknown }
          ? void
          : unknown;

type Query<O> = O extends { parameters: { query: infer Q } } ? Q : Record<string, never>;

export type DataOp<P extends keyof DataPaths, M extends keyof DataPaths[P]> = DataPaths[P][M];
export type CopilotOp<P extends keyof CopilotPaths, M extends keyof CopilotPaths[P]> = CopilotPaths[P][M];
export type StudioOp<P extends keyof GtmStudioPaths, M extends keyof GtmStudioPaths[P]> = GtmStudioPaths[P][M];
export type MarketingOp<P extends keyof MarketingPaths, M extends keyof MarketingPaths[P]> = MarketingPaths[P][M];
export type PlatformOp<P extends keyof PlatformPaths, M extends keyof PlatformPaths[P]> = PlatformPaths[P][M];
export type AgentOp<P extends keyof AgentPaths, M extends keyof AgentPaths[P]> = AgentPaths[P][M];

export type BodyOf<O> = JsonBody<O>;
export type ResponseOf<O> = JsonResponse<O>;
export type QueryOf<O> = Query<O>;
