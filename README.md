# zoominfo-api

Unofficial community SDK for the [ZoomInfo Developer Portal API](https://docs.zoominfo.com/reference/overview) (OAuth 2.0, `https://api.zoominfo.com/gtm`).

> Not affiliated with or endorsed by ZoomInfo. "ZoomInfo" is a trademark of ZoomInfo Technologies LLC.

## Status

Pre-release. APIs may shift before `1.0.0`.

## Install

```bash
npm install zoominfo-api
```

Node 18+ required.

## Quick start

```ts
import { ZoomInfoClient } from 'zoominfo-api';

const zi = new ZoomInfoClient({
  auth: {
    type: 'client_credentials',
    clientId: process.env.ZOOMINFO_CLIENT_ID!,
    clientSecret: process.env.ZOOMINFO_CLIENT_SECRET!,
  },
});

const page = await zi.contacts.search({ companyName: 'Acme', page: { size: 25 } });

for await (const contact of zi.contacts.searchAll({ companyName: 'Acme' })) {
  console.log(contact.attributes.firstName);
}
```

## Auth

The SDK supports every OAuth 2.0 flow ZoomInfo documents, plus bring-your-own token:

- `client_credentials` — server-to-server, no user context
- `authorization_code_pkce` — user-context flow with PKCE
- `refresh_token` — refresh a previously-obtained access token
- `static` — supply your own access token if you manage auth elsewhere

See [examples/](./examples) for runnable snippets of each.

## Pagination

Every list method comes in two shapes:

```ts
// Page-at-a-time
const page = await zi.contacts.search({ companyName: 'Acme' });
const next = await page.next();

// Auto-paging async iterator
for await (const contact of zi.contacts.searchAll({ companyName: 'Acme' })) {
  // ...
}
```

## Errors

```ts
import {
  ZoomInfoError,
  ZoomInfoAuthError,
  ZoomInfoRateLimitError,
  ZoomInfoValidationError,
} from 'zoominfo-api';

try {
  await zi.contacts.search({ companyName: 'Acme' });
} catch (err) {
  if (err instanceof ZoomInfoRateLimitError) {
    // err.retryAfterMs, err.requestId
  }
}
```

429 and 5xx are retried automatically with exponential backoff (honoring `Retry-After`); after retries exhaust the relevant error class is thrown.

## Codegen

Types in `src/generated/schema.ts` are produced from ZoomInfo's published OpenAPI YAMLs. Refresh them with:

```bash
npm run codegen
```

The generated module is committed so consumers don't need to regenerate.

## Development

```bash
npm install
npm run codegen          # one-time
npm test
npm run typecheck
npm run build
```

Integration tests are opt-in:

```bash
ZOOMINFO_INTEGRATION=1 \
ZOOMINFO_CLIENT_ID=… \
ZOOMINFO_CLIENT_SECRET=… \
npm run test:integration
```

## Coverage

23 resource groups, ≈87 endpoints from six OpenAPI specs (Data, Copilot, GTM Studio, Marketing, Platform, Agent). Each method is hand-written and named, backed by types generated from ZoomInfo's published spec:

```
zi.contacts       zi.companies         zi.intent              zi.news
zi.scoops         zi.lookup            zi.users               zi.agents
zi.agentTeams     zi.buyerPersonas     zi.competitors         zi.idealCustomerProfiles
zi.products       zi.customerSettings  zi.folders             zi.audiences
zi.audienceColumns  zi.audienceRows    zi.marketingAudiences  zi.entities
zi.engagements    zi.workflows         zi.entitlements
```

Raw generated OpenAPI types are also re-exported under `import { schemas } from 'zoominfo-api'` for direct access.

## License

MIT
