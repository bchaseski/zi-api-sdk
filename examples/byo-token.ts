/**
 * Bring-your-own access token: useful if you've already minted one elsewhere
 * (e.g. a centralized auth service, a sidecar, or testing with a token from
 * the Developer Portal "Generate Access Tokens" tab).
 */

import { ZoomInfoClient } from '../src/index.js';

async function main(): Promise<void> {
  const accessToken = process.env.ZOOMINFO_ACCESS_TOKEN;
  if (!accessToken) {
    throw new Error('Set ZOOMINFO_ACCESS_TOKEN to run this example.');
  }
  const zi = new ZoomInfoClient({ auth: { type: 'static', accessToken } });
  console.log('Usage:', await zi.users.usage());
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
