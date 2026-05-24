import { Fetcher } from './http/fetcher.js';
import type { RetryOptions } from './http/retry.js';
import { createAuthProvider, type AuthConfig, type AuthProvider } from './auth/index.js';
import { Contacts } from './resources/contacts.js';
import { Companies } from './resources/companies.js';
import { Intent } from './resources/intent.js';
import { News } from './resources/news.js';
import { Scoops } from './resources/scoops.js';
import { Lookup } from './resources/lookup.js';
import { Users } from './resources/users.js';
import { Agents } from './resources/agents.js';
import { AgentTeams } from './resources/agent-teams.js';
import { BuyerPersonas } from './resources/buyer-personas.js';
import { Competitors } from './resources/competitors.js';
import { IdealCustomerProfiles } from './resources/icps.js';
import { Products } from './resources/products.js';
import { CustomerSettings } from './resources/customer-settings.js';
import { Folders } from './resources/folders.js';
import { Audiences } from './resources/audiences.js';
import { AudienceColumns } from './resources/audience-columns.js';
import { AudienceRows } from './resources/audience-rows.js';
import { MarketingAudiences } from './resources/marketing-audiences.js';
import { Entities } from './resources/entities.js';
import { Engagements } from './resources/engagements.js';
import { Workflows } from './resources/workflows.js';
import { Entitlements } from './resources/entitlements.js';

export const DEFAULT_BASE_URL = 'https://api.zoominfo.com/gtm';

export interface ZoomInfoClientOptions {
  auth: AuthConfig;
  /** Override the base URL (default: `https://api.zoominfo.com/gtm`). */
  baseUrl?: string;
  /** Override the OAuth token endpoint. */
  tokenUrl?: string;
  /** Inject a custom fetch (e.g. for tests, or undici Agent). */
  fetch?: typeof fetch;
  timeoutMs?: number;
  /** Retry knobs. Defaults: 3 retries, 250ms base, 8s cap. */
  retry?: Partial<RetryOptions>;
  /** Refresh access tokens this many ms before expiry. Default 60_000. */
  clockSkewMs?: number;
  /** Custom User-Agent suffix. */
  userAgent?: string;
}

export class ZoomInfoClient {
  readonly auth: AuthProvider;

  readonly contacts: Contacts;
  readonly companies: Companies;
  readonly intent: Intent;
  readonly news: News;
  readonly scoops: Scoops;
  readonly lookup: Lookup;
  readonly users: Users;
  readonly agents: Agents;
  readonly agentTeams: AgentTeams;
  readonly buyerPersonas: BuyerPersonas;
  readonly competitors: Competitors;
  readonly idealCustomerProfiles: IdealCustomerProfiles;
  readonly products: Products;
  readonly customerSettings: CustomerSettings;
  readonly folders: Folders;
  readonly audiences: Audiences;
  readonly audienceColumns: AudienceColumns;
  readonly audienceRows: AudienceRows;
  readonly marketingAudiences: MarketingAudiences;
  readonly entities: Entities;
  readonly engagements: Engagements;
  readonly workflows: Workflows;
  readonly entitlements: Entitlements;

  constructor(options: ZoomInfoClientOptions) {
    this.auth = createAuthProvider(options.auth, {
      tokenUrl: options.tokenUrl,
      fetch: options.fetch,
      clockSkewMs: options.clockSkewMs,
    });
    const fetcher = new Fetcher({
      baseUrl: options.baseUrl ?? DEFAULT_BASE_URL,
      authProvider: this.auth,
      fetch: options.fetch,
      timeoutMs: options.timeoutMs,
      retry: options.retry,
      userAgent: options.userAgent,
    });

    this.contacts = new Contacts(fetcher);
    this.companies = new Companies(fetcher);
    this.intent = new Intent(fetcher);
    this.news = new News(fetcher);
    this.scoops = new Scoops(fetcher);
    this.lookup = new Lookup(fetcher);
    this.users = new Users(fetcher);
    this.agents = new Agents(fetcher);
    this.agentTeams = new AgentTeams(fetcher);
    this.buyerPersonas = new BuyerPersonas(fetcher);
    this.competitors = new Competitors(fetcher);
    this.idealCustomerProfiles = new IdealCustomerProfiles(fetcher);
    this.products = new Products(fetcher);
    this.customerSettings = new CustomerSettings(fetcher);
    this.folders = new Folders(fetcher);
    this.audiences = new Audiences(fetcher);
    this.audienceColumns = new AudienceColumns(fetcher);
    this.audienceRows = new AudienceRows(fetcher);
    this.marketingAudiences = new MarketingAudiences(fetcher);
    this.entities = new Entities(fetcher);
    this.engagements = new Engagements(fetcher);
    this.workflows = new Workflows(fetcher);
    this.entitlements = new Entitlements(fetcher);
  }
}
