export interface RetryOptions {
  maxRetries: number;
  baseDelayMs: number;
  maxDelayMs: number;
}

const RETRYABLE_STATUSES = new Set([408, 425, 429, 500, 502, 503, 504]);

export function isRetryableStatus(status: number): boolean {
  return RETRYABLE_STATUSES.has(status);
}

function parseRetryAfter(header: string | null): number | undefined {
  if (!header) return undefined;
  const seconds = Number(header);
  if (Number.isFinite(seconds)) return Math.max(0, seconds * 1000);
  const dateMs = Date.parse(header);
  if (Number.isFinite(dateMs)) return Math.max(0, dateMs - Date.now());
  return undefined;
}

export function nextDelayMs(
  attempt: number,
  retryAfterHeader: string | null,
  opts: RetryOptions,
): number {
  const fromHeader = parseRetryAfter(retryAfterHeader);
  if (fromHeader !== undefined) return Math.min(fromHeader, opts.maxDelayMs);
  const exp = opts.baseDelayMs * 2 ** attempt;
  const jitter = Math.random() * opts.baseDelayMs;
  return Math.min(exp + jitter, opts.maxDelayMs);
}

const sleep = (ms: number): Promise<void> => new Promise((r) => setTimeout(r, ms));

export async function withRetry(
  fn: (attempt: number) => Promise<Response>,
  opts: RetryOptions,
): Promise<Response> {
  let attempt = 0;
  while (true) {
    const res = await fn(attempt);
    if (!isRetryableStatus(res.status) || attempt >= opts.maxRetries) return res;
    const delay = nextDelayMs(attempt, res.headers.get('retry-after'), opts);
    await sleep(delay);
    attempt += 1;
  }
}
