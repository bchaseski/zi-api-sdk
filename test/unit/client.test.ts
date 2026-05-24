import { describe, it, expect, vi } from 'vitest';
import { ZoomInfoClient } from '../../src/index.js';

interface MockCall {
  url: string;
  init: RequestInit;
}

function recordingFetch(handler: (call: MockCall) => Response | Promise<Response>) {
  const calls: MockCall[] = [];
  const fn = vi.fn(async (input: string | URL, init: RequestInit = {}) => {
    const url = typeof input === 'string' ? input : input.toString();
    calls.push({ url, init });
    return handler({ url, init });
  });
  return { fn: fn as unknown as typeof fetch, calls };
}

function ok(body: unknown, headers: Record<string, string> = {}): Response {
  return new Response(JSON.stringify(body), {
    status: 200,
    headers: { 'content-type': 'application/json', ...headers },
  });
}

describe('ZoomInfoClient', () => {
  it('exposes every resource group', () => {
    const c = new ZoomInfoClient({ auth: { type: 'static', accessToken: 'x' } });
    const expected = [
      'contacts', 'companies', 'intent', 'news', 'scoops', 'lookup', 'users',
      'agents', 'agentTeams', 'buyerPersonas', 'competitors', 'idealCustomerProfiles',
      'products', 'customerSettings', 'folders', 'audiences', 'audienceColumns',
      'audienceRows', 'marketingAudiences', 'entities', 'engagements', 'workflows',
      'entitlements',
    ];
    for (const r of expected) expect(c).toHaveProperty(r);
  });

  it('contacts.search hits the right URL with bearer auth and JSON body', async () => {
    const { fn, calls } = recordingFetch(() => ok({ data: [{ id: '1' }], links: {} }));
    const c = new ZoomInfoClient({
      auth: { type: 'static', accessToken: 'tok' },
      fetch: fn,
    });
    await c.contacts.search({ companyName: 'Acme' } as never);
    expect(calls[0]!.url).toBe('https://api.zoominfo.com/gtm/data/v1/contacts/search');
    expect(calls[0]!.init.method).toBe('POST');
    expect(calls[0]!.init.body).toBe(JSON.stringify({ companyName: 'Acme' }));
    expect(new Headers(calls[0]!.init.headers).get('authorization')).toBe('Bearer tok');
  });

  it('contacts.searchAll iterates pages', async () => {
    const { fn } = recordingFetch((call) => {
      if (call.url.includes('page=2')) {
        return ok({ data: [{ id: 'b' }] });
      }
      return ok({
        data: [{ id: 'a' }],
        links: { next: 'https://api.zoominfo.com/gtm/data/v1/contacts/search?page=2' },
      });
    });
    const c = new ZoomInfoClient({
      auth: { type: 'static', accessToken: 'tok' },
      fetch: fn,
    });
    const ids: string[] = [];
    for await (const contact of c.contacts.searchAll({ companyName: 'Acme' } as never)) {
      ids.push((contact as { id: string }).id);
    }
    expect(ids).toEqual(['a', 'b']);
  });

  it('encodes path params (companies.accountSummary)', async () => {
    const { fn, calls } = recordingFetch(() => ok({ id: '1' }));
    const c = new ZoomInfoClient({
      auth: { type: 'static', accessToken: 'tok' },
      fetch: fn,
    });
    await c.companies.accountSummary({ companyId: '12345' });
    expect(calls[0]!.url).toBe(
      'https://api.zoominfo.com/gtm/copilot/v1/companies/12345/account-summary',
    );
  });

  it('CRUD pattern: buyerPersonas archive POSTs to the action endpoint', async () => {
    const { fn, calls } = recordingFetch(() => new Response(null, { status: 204 }));
    const c = new ZoomInfoClient({
      auth: { type: 'static', accessToken: 't' },
      fetch: fn,
    });
    await c.buyerPersonas.archive({ buyerPersonaId: 'bp-1' });
    expect(calls[0]!.url).toBe(
      'https://api.zoominfo.com/gtm/copilot/v1/customer-buyer-personas/bp-1/actions/archive',
    );
    expect(calls[0]!.init.method).toBe('POST');
  });

  it('users.usage GETs /data/v1/users/usage', async () => {
    const { fn, calls } = recordingFetch(() => ok({ usage: { limit: 100, remaining: 99 } }));
    const c = new ZoomInfoClient({
      auth: { type: 'static', accessToken: 't' },
      fetch: fn,
    });
    const out = await c.users.usage();
    expect(calls[0]!.url).toBe('https://api.zoominfo.com/gtm/data/v1/users/usage');
    expect(calls[0]!.init.method).toBe('GET');
    expect(out).toEqual({ usage: { limit: 100, remaining: 99 } });
  });

  it('respects a custom baseUrl', async () => {
    const { fn, calls } = recordingFetch(() => ok({}));
    const c = new ZoomInfoClient({
      auth: { type: 'static', accessToken: 't' },
      baseUrl: 'https://mock.example.com/gtm',
      fetch: fn,
    });
    await c.users.usage();
    expect(calls[0]!.url).toBe('https://mock.example.com/gtm/data/v1/users/usage');
  });

  it('missing path param throws TypeError before issuing a request', async () => {
    const { fn, calls } = recordingFetch(() => ok({}));
    const c = new ZoomInfoClient({
      auth: { type: 'static', accessToken: 't' },
      fetch: fn,
    });
    expect(() => c.companies.accountSummary({ companyId: '' })).toThrow(TypeError);
    expect(calls).toHaveLength(0);
  });
});
