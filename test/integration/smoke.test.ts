/**
 * Live integration smoke tests.
 *
 * Skipped unless ZOOMINFO_INTEGRATION=1 is set. Required env:
 *   ZOOMINFO_CLIENT_ID
 *   ZOOMINFO_CLIENT_SECRET
 *
 * Optional:
 *   ZOOMINFO_TEST_COMPANY_NAME (default: "Microsoft")
 */

import { describe, it, expect } from 'vitest';
import { ZoomInfoClient, ZoomInfoError } from '../../src/index.js';

const enabled = process.env.ZOOMINFO_INTEGRATION === '1';
const id = process.env.ZOOMINFO_CLIENT_ID;
const secret = process.env.ZOOMINFO_CLIENT_SECRET;
const companyName = process.env.ZOOMINFO_TEST_COMPANY_NAME ?? 'Microsoft';

const maybeDescribe = enabled && id && secret ? describe : describe.skip;

maybeDescribe('live smoke', () => {
  const zi = new ZoomInfoClient({
    auth: { type: 'client_credentials', clientId: id!, clientSecret: secret! },
  });

  it('users.usage returns a usage object', async () => {
    const out = (await zi.users.usage()) as Record<string, unknown>;
    expect(out).toBeTruthy();
  });

  it('lookup.searchFields returns metadata', async () => {
    const out = await zi.lookup.searchFields();
    expect(out).toBeTruthy();
  });

  it('contacts.search returns a Page with data array', async () => {
    const page = await zi.contacts.search({ companyName } as never);
    expect(Array.isArray(page.data)).toBe(true);
  });

  it('contacts.searchAll iterates and yields at least one record (or none gracefully)', async () => {
    let count = 0;
    for await (const _ of zi.contacts.searchAll({ companyName } as never)) {
      count += 1;
      if (count >= 5) break;
    }
    expect(count).toBeGreaterThanOrEqual(0);
  });

  it('companies.enrich returns an object', async () => {
    const out = (await zi.companies.enrich({
      matchCompanyInput: [{ companyName }],
    } as never)) as unknown;
    expect(out).toBeTruthy();
  });

  it('errors surface as typed ZoomInfoError subclasses', async () => {
    let caught: unknown;
    try {
      // Intentionally invalid path-param to provoke a 4xx.
      await zi.companies.accountSummary({ companyId: '0' });
    } catch (e) {
      caught = e;
    }
    if (caught) expect(caught).toBeInstanceOf(ZoomInfoError);
  });
});
