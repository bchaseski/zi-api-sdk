export interface ZoomInfoErrorInit {
  status?: number;
  code?: string;
  requestId?: string;
  body?: unknown;
  cause?: unknown;
}

export class ZoomInfoError extends Error {
  readonly status?: number;
  readonly code?: string;
  readonly requestId?: string;
  readonly body?: unknown;

  constructor(message: string, init: ZoomInfoErrorInit = {}) {
    super(message, init.cause !== undefined ? { cause: init.cause } : undefined);
    this.name = new.target.name;
    this.status = init.status;
    this.code = init.code;
    this.requestId = init.requestId;
    this.body = init.body;
  }
}

export class ZoomInfoAuthError extends ZoomInfoError {}
export class ZoomInfoValidationError extends ZoomInfoError {}
export class ZoomInfoNotFoundError extends ZoomInfoError {}
export class ZoomInfoServerError extends ZoomInfoError {}
export class ZoomInfoNetworkError extends ZoomInfoError {}

export interface ZoomInfoRateLimitErrorInit extends ZoomInfoErrorInit {
  retryAfterMs?: number;
}

export class ZoomInfoRateLimitError extends ZoomInfoError {
  readonly retryAfterMs?: number;
  constructor(message: string, init: ZoomInfoRateLimitErrorInit = {}) {
    super(message, init);
    this.retryAfterMs = init.retryAfterMs;
  }
}

function parseRetryAfterMs(header: string | null): number | undefined {
  if (!header) return undefined;
  const seconds = Number(header);
  if (Number.isFinite(seconds)) return Math.max(0, seconds * 1000);
  const dateMs = Date.parse(header);
  if (Number.isFinite(dateMs)) return Math.max(0, dateMs - Date.now());
  return undefined;
}

interface JsonApiErrorBody {
  errors?: Array<{ detail?: string; title?: string; code?: string; status?: string }>;
  message?: string;
  error?: string;
  error_description?: string;
}

function extractDetail(body: unknown): { message?: string; code?: string } {
  if (!body || typeof body !== 'object') return {};
  const b = body as JsonApiErrorBody;
  if (Array.isArray(b.errors) && b.errors.length > 0) {
    const first = b.errors[0]!;
    return { message: first.detail ?? first.title, code: first.code };
  }
  if (typeof b.message === 'string') return { message: b.message };
  if (typeof b.error_description === 'string') return { message: b.error_description };
  if (typeof b.error === 'string') return { message: b.error };
  return {};
}

export function errorFromResponse(res: Response, body: unknown): ZoomInfoError {
  const { status } = res;
  const requestId = res.headers.get('x-request-id') ?? res.headers.get('request-id') ?? undefined;
  const detail = extractDetail(body);
  const message = detail.message ?? `Request failed with status ${status}`;
  const init: ZoomInfoErrorInit = { status, code: detail.code, requestId, body };

  if (status === 429) {
    return new ZoomInfoRateLimitError(message, {
      ...init,
      retryAfterMs: parseRetryAfterMs(res.headers.get('retry-after')),
    });
  }
  if (status === 401 || status === 403) return new ZoomInfoAuthError(message, init);
  if (status === 404) return new ZoomInfoNotFoundError(message, init);
  if (status >= 500) return new ZoomInfoServerError(message, init);
  if (status >= 400) return new ZoomInfoValidationError(message, init);
  return new ZoomInfoError(message, init);
}
