/**
 * Server-to-server example using the Client Credentials grant.
 *
 * Run:
 *   ZOOMINFO_CLIENT_ID=... ZOOMINFO_CLIENT_SECRET=... npx tsx examples/client-credentials.ts
 */

import { ZoomInfoClient } from '../src/index.js';

async function main(): Promise<void> {
  const clientId = process.env.ZOOMINFO_CLIENT_ID;
  const clientSecret = process.env.ZOOMINFO_CLIENT_SECRET;
  if (!clientId || !clientSecret) {
    throw new Error('Set ZOOMINFO_CLIENT_ID and ZOOMINFO_CLIENT_SECRET to run this example.');
  }

  const zi = new ZoomInfoClient({
    auth: { type: 'client_credentials', clientId, clientSecret },
  });

  const usage = await zi.users.usage();
  console.log('Usage:', usage);

  const page = await zi.contacts.search({ companyName: 'Acme' } as never);
  console.log(`First page: ${page.data.length} contacts`);

  let total = 0;
  for await (const _contact of zi.contacts.searchAll({ companyName: 'Acme' } as never)) {
    total += 1;
    if (total >= 50) break;
  }
  console.log(`Iterated ${total} contacts`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
