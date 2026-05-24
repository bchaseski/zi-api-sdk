import { describe, it, expect } from 'vitest';
import {
  ZoomInfoError,
  ZoomInfoAuthError,
  ZoomInfoValidationError,
  ZoomInfoRateLimitError,
  ZoomInfoNotFoundError,
  ZoomInfoServerError,
  ZoomInfoNetworkError,
  errorFromResponse,
} from '../../../src/http/errors.js';

function makeResponse(status: number, headers: Record<string, string> = {}): Response {
  return new Response(null, { status, headers });
}

describe('ZoomInfoError', () => {
  it('captures status, code, requestId, body', () => {
    const err = new ZoomInfoError('boom', {
      status: 500,
      code: 'INTERNAL',
      requestId: 'req-1',
      body: { hello: 'world' },
    });
    expect(err.message).toBe('boom');
    expect(err.status).toBe(500);
    expect(err.code).toBe('INTERNAL');
    expect(err.requestId).toBe('req-1');
    expect(err.body).toEqual({ hello: 'world' });
    expect(err).toBeInstanceOf(Error);
    expect(err.name).toBe('ZoomInfoError');
  });

  it('subclasses are instanceof ZoomInfoError', () => {
    expect(new ZoomInfoAuthError('x')).toBeInstanceOf(ZoomInfoError);
    expect(new ZoomInfoValidationError('x')).toBeInstanceOf(ZoomInfoError);
    expect(new ZoomInfoRateLimitError('x')).toBeInstanceOf(ZoomInfoError);
    expect(new ZoomInfoNotFoundError('x')).toBeInstanceOf(ZoomInfoError);
    expect(new ZoomInfoServerError('x')).toBeInstanceOf(ZoomInfoError);
    expect(new ZoomInfoNetworkError('x')).toBeInstanceOf(ZoomInfoError);
  });

  it('subclass names match their class', () => {
    expect(new ZoomInfoAuthError('x').name).toBe('ZoomInfoAuthError');
    expect(new ZoomInfoRateLimitError('x').name).toBe('ZoomInfoRateLimitError');
  });

  it('rate-limit error exposes retryAfterMs', () => {
    const err = new ZoomInfoRateLimitError('slow down', { retryAfterMs: 4200 });
    expect(err.retryAfterMs).toBe(4200);
  });
});

describe('errorFromResponse', () => {
  it('401 → ZoomInfoAuthError', () => {
    const err = errorFromResponse(makeResponse(401), { error: 'invalid_token' });
    expect(err).toBeInstanceOf(ZoomInfoAuthError);
    expect(err.status).toBe(401);
  });

  it('403 → ZoomInfoAuthError', () => {
    const err = errorFromResponse(makeResponse(403), null);
    expect(err).toBeInstanceOf(ZoomInfoAuthError);
  });

  it('400 → ZoomInfoValidationError', () => {
    const err = errorFromResponse(makeResponse(400), { errors: [{ detail: 'bad input' }] });
    expect(err).toBeInstanceOf(ZoomInfoValidationError);
    expect(err.body).toEqual({ errors: [{ detail: 'bad input' }] });
  });

  it('404 → ZoomInfoNotFoundError', () => {
    const err = errorFromResponse(makeResponse(404), null);
    expect(err).toBeInstanceOf(ZoomInfoNotFoundError);
  });

  it('429 → ZoomInfoRateLimitError with retryAfterMs parsed from Retry-After seconds', () => {
    const err = errorFromResponse(makeResponse(429, { 'retry-after': '5' }), null);
    expect(err).toBeInstanceOf(ZoomInfoRateLimitError);
    expect((err as ZoomInfoRateLimitError).retryAfterMs).toBe(5_000);
  });

  it('429 without Retry-After still produces ZoomInfoRateLimitError', () => {
    const err = errorFromResponse(makeResponse(429), null);
    expect(err).toBeInstanceOf(ZoomInfoRateLimitError);
    expect((err as ZoomInfoRateLimitError).retryAfterMs).toBeUndefined();
  });

  it('5xx → ZoomInfoServerError', () => {
    expect(errorFromResponse(makeResponse(500), null)).toBeInstanceOf(ZoomInfoServerError);
    expect(errorFromResponse(makeResponse(502), null)).toBeInstanceOf(ZoomInfoServerError);
    expect(errorFromResponse(makeResponse(503), null)).toBeInstanceOf(ZoomInfoServerError);
  });

  it('captures x-request-id header into requestId', () => {
    const err = errorFromResponse(makeResponse(500, { 'x-request-id': 'abc-123' }), null);
    expect(err.requestId).toBe('abc-123');
  });

  it('extracts JSON:API-style error detail into message when available', () => {
    const err = errorFromResponse(makeResponse(400), {
      errors: [{ detail: 'Invalid companyName', code: 'INVALID_FIELD' }],
    });
    expect(err.message).toContain('Invalid companyName');
    expect(err.code).toBe('INVALID_FIELD');
  });

  it('falls back to status text when no body detail available', () => {
    const err = errorFromResponse(makeResponse(500), null);
    expect(err.message).toMatch(/500/);
  });
});
