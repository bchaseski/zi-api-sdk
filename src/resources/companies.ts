import { Resource, encodePathParam } from './base.js';
import type { Page } from '../http/pagination.js';
import type { DataOp, CopilotOp, BodyOf, ResponseOf } from './types.js';

type SearchOp = DataOp<'/data/v1/companies/search', 'post'>;
type EnrichOp = DataOp<'/data/v1/companies/enrich', 'post'>;
type EnrichHierarchyOp = DataOp<'/data/v1/companies/corporate-hierarchy/enrich', 'post'>;
type EnrichOrgChartOp = DataOp<'/data/v1/companies/org-chart/enrich', 'post'>;
type EnrichTechnologyOp = DataOp<'/data/v1/companies/technologies/enrich', 'post'>;
type EnrichHashtagOp = DataOp<'/data/v1/companies/hashtags/enrich', 'post'>;
type LookalikesOp = CopilotOp<'/copilot/v1/companies/lookalikes', 'get'>;
type InsightsOp = CopilotOp<'/copilot/v1/companies/insights', 'post'>;
type AccountSummaryOp = CopilotOp<'/copilot/v1/companies/{companyId}/account-summary', 'get'>;
type AskAccountSummaryOp = CopilotOp<'/copilot/v1/companies/{companyId}/account-summary/actions/ask', 'post'>;

export class Companies extends Resource {
  search(body: BodyOf<SearchOp>): Promise<Page<unknown>> {
    return this.postPage<unknown>('/data/v1/companies/search', body);
  }
  searchAll(body: BodyOf<SearchOp>): AsyncIterable<unknown> {
    return this.paginate(() => this.search(body));
  }

  enrich(body: BodyOf<EnrichOp>): Promise<ResponseOf<EnrichOp>> {
    return this.post<ResponseOf<EnrichOp>>('/data/v1/companies/enrich', body);
  }
  enrichHierarchy(body: BodyOf<EnrichHierarchyOp>): Promise<ResponseOf<EnrichHierarchyOp>> {
    return this.post<ResponseOf<EnrichHierarchyOp>>('/data/v1/companies/corporate-hierarchy/enrich', body);
  }
  enrichOrgChart(body: BodyOf<EnrichOrgChartOp>): Promise<ResponseOf<EnrichOrgChartOp>> {
    return this.post<ResponseOf<EnrichOrgChartOp>>('/data/v1/companies/org-chart/enrich', body);
  }
  enrichTechnologies(body: BodyOf<EnrichTechnologyOp>): Promise<ResponseOf<EnrichTechnologyOp>> {
    return this.post<ResponseOf<EnrichTechnologyOp>>('/data/v1/companies/technologies/enrich', body);
  }
  enrichHashtags(body: BodyOf<EnrichHashtagOp>): Promise<ResponseOf<EnrichHashtagOp>> {
    return this.post<ResponseOf<EnrichHashtagOp>>('/data/v1/companies/hashtags/enrich', body);
  }
  /** Find similar companies by ML lookalike model. */
  findSimilar(query: Record<string, string | number | boolean | undefined> = {}): Promise<ResponseOf<LookalikesOp>> {
    return this.get<ResponseOf<LookalikesOp>>('/copilot/v1/companies/lookalikes', query);
  }
  insightsByType(body: BodyOf<InsightsOp>): Promise<ResponseOf<InsightsOp>> {
    return this.post<ResponseOf<InsightsOp>>('/copilot/v1/companies/insights', body);
  }
  accountSummary(args: { companyId: string }): Promise<ResponseOf<AccountSummaryOp>> {
    const id = encodePathParam('companyId', args.companyId);
    return this.get<ResponseOf<AccountSummaryOp>>(`/copilot/v1/companies/${id}/account-summary`);
  }
  askAccountSummary(args: { companyId: string } & BodyOf<AskAccountSummaryOp>): Promise<ResponseOf<AskAccountSummaryOp>> {
    const { companyId, ...body } = args;
    const id = encodePathParam('companyId', companyId);
    return this.post<ResponseOf<AskAccountSummaryOp>>(
      `/copilot/v1/companies/${id}/account-summary/actions/ask`,
      body,
    );
  }
}
