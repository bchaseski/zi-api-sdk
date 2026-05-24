/**
 * Authorization Code + PKCE example.
 *
 * Step 1: Generate a verifier/challenge, redirect the user to the authorize URL.
 * Step 2: ZoomInfo redirects back with `?code=...&state=...`.
 * Step 3: Hand the code + verifier to the SDK to mint the access token.
 *
 * This file demonstrates step 1 and step 3; step 2 is whatever HTTP framework
 * you use to handle the OAuth callback.
 */

import {
  ZoomInfoClient,
  buildAuthorizeUrl,
  generatePkceVerifier,
  pkceChallengeFromVerifier,
} from '../src/index.js';
import { randomUUID } from 'node:crypto';

async function step1(): Promise<{ verifier: string; state: string; url: string }> {
  const clientId = process.env.ZOOMINFO_CLIENT_ID!;
  const redirectUri = process.env.ZOOMINFO_REDIRECT_URI!;
  const verifier = generatePkceVerifier();
  const codeChallenge = await pkceChallengeFromVerifier(verifier);
  const state = randomUUID();
  const url = buildAuthorizeUrl({
    clientId,
    redirectUri,
    codeChallenge,
    state,
    scope: process.env.ZOOMINFO_SCOPE,
  });
  console.log('Open this URL in a browser to consent:', url);
  return { verifier, state, url };
}

async function step3(code: string, verifier: string): Promise<void> {
  const zi = new ZoomInfoClient({
    auth: {
      type: 'authorization_code_pkce',
      clientId: process.env.ZOOMINFO_CLIENT_ID!,
      clientSecret: process.env.ZOOMINFO_CLIENT_SECRET, // optional for public clients
      code,
      codeVerifier: verifier,
      redirectUri: process.env.ZOOMINFO_REDIRECT_URI!,
    },
  });
  console.log('Usage:', await zi.users.usage());
}

async function main(): Promise<void> {
  const code = process.env.ZOOMINFO_AUTH_CODE;
  const verifier = process.env.ZOOMINFO_CODE_VERIFIER;
  if (code && verifier) {
    await step3(code, verifier);
  } else {
    await step1();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
