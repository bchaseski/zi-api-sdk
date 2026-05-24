export { ZoomInfoClient, DEFAULT_BASE_URL, type ZoomInfoClientOptions } from './client.js';

export {
  type AuthProvider,
  type AuthConfig,
  type AuthProviderOptions,
  type StaticTokenConfig,
  type ClientCredentialsConfig,
  type AuthorizationCodePkceConfig,
  type RefreshTokenConfig,
  StaticTokenProvider,
  ClientCredentialsProvider,
  AuthorizationCodePkceProvider,
  RefreshTokenProvider,
  createAuthProvider,
  generatePkceVerifier,
  pkceChallengeFromVerifier,
  buildAuthorizeUrl,
  DEFAULT_TOKEN_URL,
  DEFAULT_AUTHORIZE_URL,
} from './auth/index.js';

export {
  ZoomInfoError,
  ZoomInfoAuthError,
  ZoomInfoValidationError,
  ZoomInfoNotFoundError,
  ZoomInfoRateLimitError,
  ZoomInfoServerError,
  ZoomInfoNetworkError,
} from './http/errors.js';

export type { Page, PageLinks, PageMeta } from './http/pagination.js';
export type { RetryOptions } from './http/retry.js';

export { Contacts } from './resources/contacts.js';
export { Companies } from './resources/companies.js';
export { Intent } from './resources/intent.js';
export { News } from './resources/news.js';
export { Scoops } from './resources/scoops.js';
export { Lookup } from './resources/lookup.js';
export { Users } from './resources/users.js';
export { Agents } from './resources/agents.js';
export { AgentTeams } from './resources/agent-teams.js';
export { BuyerPersonas } from './resources/buyer-personas.js';
export { Competitors } from './resources/competitors.js';
export { IdealCustomerProfiles } from './resources/icps.js';
export { Products } from './resources/products.js';
export { CustomerSettings } from './resources/customer-settings.js';
export { Folders } from './resources/folders.js';
export { Audiences } from './resources/audiences.js';
export { AudienceColumns } from './resources/audience-columns.js';
export { AudienceRows } from './resources/audience-rows.js';
export { MarketingAudiences } from './resources/marketing-audiences.js';
export { Entities } from './resources/entities.js';
export { Engagements } from './resources/engagements.js';
export { Workflows } from './resources/workflows.js';
export { Entitlements } from './resources/entitlements.js';

// Re-export the raw generated OpenAPI types for users who want them.
export * as schemas from './generated/index.js';

export const VERSION = '0.1.0';
