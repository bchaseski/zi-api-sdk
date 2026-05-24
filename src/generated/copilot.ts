// AUTO-GENERATED from openapi-copilot-v1.yaml (https://docs.zoominfo.com/openapi/openapi-copilot-v1.yaml).
// Regenerate with: npm run codegen
/* eslint-disable */

export interface paths {
    "/copilot/v1/companies/{companyId}/account-summary": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Account Summary
         * @description Retrieve the account summary for a specific company.
         */
        get: operations["AccountSummaryInterface_getAccountSummary"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/copilot/v1/companies/{companyId}/account-summary/actions/ask": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Ask Account Summary Question
         * @description Ask a question about the account summary of a specific company.
         */
        post: operations["AccountSummaryInterface_askAccountSummaryQuestion"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/copilot/v1/companies/insights": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Get insights by type
         * @description Retrieve sales intelligence signals for up to 50 companies, filtered by signal type. Signals include funding events, leadership changes, intent spikes, hiring anomalies, and more.
         *
         *     # Insights API - Introduction
         *
         *     The **Insights API** provides programmatic access to ZoomInfo's curated intelligence layer — actionable data about customer activity that matters most to your business. **Insights** are automatically filtered for relevance, recency, and context based on your team's specific focus areas. This means you receive high-priority updates like decision-maker job changes at target accounts, intent spikes in your buying groups, or website visits from key personas — without the noise of every global data point.
         *
         *     ## Why Use Insights?
         *
         *     **Insights** enable two critical workflows for modern go-to-market teams:
         *
         *     - **Revenue Operations**: Orchestrate automated workflows based on meaningful account changes. For example, route leads when employment changes bring a known champion to a target account, send alerts when intent signals spike for your product category, or update CRM records when funding announcements or new projects signal budget availability.
         *
         *     - **Sales Teams**: Prioritize accounts based on key buying signals, and reach out in real time. Focus on accounts where specific decision-makers have visited your website, where intent data shows they're actively researching competitors, or where employment changes indicate new leadership in key buying roles — all without sifting through irrelevant updates.
         *
         *     ## Data Sources
         *
         *     **Insights** are powered by multiple data sources, including:
         *
         *     - **ZoomInfo Data**: Intent signals, WebSights visitor intelligence, organizational changes, and business news from public sources
         *     - **First-Party Data**: CRM activity, meeting intelligence, and email engagement from your systems
         *     - **Partner Signals**: Buyer intent and product research activity from G2, TrustRadius, and other platforms
         *
         *     ## Available Insight Types
         *
         *     For a complete list of available Insights and their filtering criteria, see the [ZoomInfo Signals Glossary](https://eng7e.seismic.com/i/7PLUSSIGNTOIgJwEd0YNcFquYltStcWzmeup___own6jqymt85zpqZZ9Ml9dbioKdxvA1oAnox7K5rO5cIjVfG5FnDjPSyasqgaogzeKTK___iPLUSSIGNQTfCOy3CcvhCmqnpK9yYiDadIILi).
         *
         *     ## Common Use Cases
         *
         *     The Insights API empowers you to surface and act on customer intelligence in any application or workflow that makes sense for your business:
         *
         *     - **Account Prioritization & Routing**: Orchestrate scoring, segmentation, and assignment workflows that connect insights across systems to route accounts to the right sellers at the right time
         *     - **Workflow Automation**: Trigger external systems like email platforms, notification tools, or data warehouses when specific insight types occur
         *     - **Real-Time Alerting**: Create custom notification rules based on your team's unique prioritization logic
         *     - **Custom Dashboards**: Build executive views of high-priority account activity across your entire portfolio
         */
        post: operations["InsightsInterface_getCompanyInsightsByType"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/copilot/v1/companies/lookalikes": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Find Similar Companies
         * @description Company Lookalikes can be used to retrieve a ranked list of companies that are similar to a given reference company.
         *     The similar companies are identified using a machine learning model that analyzes industry, revenue range, employee count, and other firmographic signals.
         *     These lookalike companies can be used to power prospecting, territory planning, or market expansion workflows where one wants to quickly find companies that "look like" a
         *     successful or high-priority account.
         *
         *     To find Company Lookalikes, select the `companyId`, which identifies the company you want to use as the basis for finding lookalikes.
         *     If you are not able to provide the `companyId`, you can provide only the `companyName` instead, the service
         *     will attempt to resolve the best matching company and then return lookalike companies based on that company. The more precise the
         *     company name is (for example, use the full company name with correct spelling and full legal name), the more likely the
         *     service is able to track down the company ID and use it to find lookalikes.
         *
         *     Behind the scenes, the model uses a semantic vector representation of the reference company's data to efficiently find similar companies in the ZoomInfo database.
         *
         *     The endpoint returns up to 100 lookalike companies, ordered from the most similar company to the least similar company (descending order by similarity score `attributes.score`).
         *     Each result includes the company name, similarity score, rank, and key firmographic attributes such as industry, revenue range, employee range, and country.
         */
        get: operations["CompanyLookalikesInterface_companyLookalikes"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/copilot/v1/contacts/lookalikes": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Contact Lookalikes
         * @description Contact Lookalikes can be used to retrieve a ranked list of people who are most similar to a given reference person.
         *     The recommendations are generated by a machine learning model that compares the reference person's profile to other contacts.
         *     The profile includes person characteristics such as title, seniority, department, as well as company characteristics such as industry and company size.
         *     These lookalike contacts can be used to identify additional stakeholders, expand buyer networks, or build targeted prospecting lists based on known high-priority contacts.
         *
         *     To find Contact Lookalikes, select the `referencePersonId`, which identifies the person whose profile you want to use as the
         *     basis for finding lookalikes. You can optionally provide a `targetCompanyId` to constrain the search to a specific
         *     company. If `targetCompanyId` is not provided, the model will search for similar contacts across all companies in the Zoominfo database.
         *
         *     Behind the scenes, the model uses a semantic vector representation of the reference person's profile to efficiently find similar contact profiles in the ZoomInfo database.
         *     It then applies a re-ranking algorithm to the set of similar contacts found, in order to boost relevance in the final return list.
         *
         *     The endpoint returns up to 100 lookalike contacts ordered from the most similar contact to the least similar contact (descending order by similarity score `attributes.score`).
         *     To control the number of lookalikes returned, use the `page[size]` parameter with any integer value between 1 and 100. Each lookalike contact contains additional metadata (`meta`)
         *     that describes the reference person used as the basis of the lookalike.
         */
        get: operations["ContactLookalikesInterface_getContactLookalikes"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/copilot/v1/contacts/recommendations": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Contact Recommendations
         * @description Contact Recommendations can be used to retrieve a ranked list of people at a target company who are most relevant for
         *     a given sales motion (use case), such as prospecting, deal acceleration, or renewal and growth. The recommendations
         *     are derived from past user interactions and account activity, and are ranked by a machine learning model.
         *     These recommendations can be used to build targeted call lists, prioritize outreach, or guide sellers toward the right
         *     stakeholders within an account.
         *
         *     To find Contact Recommendations select the appropriate `useCaseType` (for example, PROSPECTING or DEAL_ACCELERATION) and the
         *     target company (`filter[ziCompanyId]`). These inputs tell the model which sales motion you are running and which
         *     account you want to focus on, so that it can surface the most relevant personas based on historical past user interactions or engagements.
         *
         *     Behind the scenes, the model leverages data such as the user's past contact views, exports, and copies for the PROSPECTING motion,
         *     or contacts from a user's CRM related to closed won deals for the DEAL_ACCELERATION motion.
         *     The model uses this data to infer which types of people are most likely to drive success for the selected motion.
         *     It then finds similar contacts at the target company and scores them using a combination of similarity and propensity signals.
         *
         *     The endpoint returns up to 100 recommended contacts, ordered from most to least relevant. To control the number of recommendations returned,
         *     use the `page[size]` parameter with any integer value between 1 and 100. Each recommendation contains additional metadata (`meta`)
         *     that describes the reference person used to form the recommendation. Each recommendation includes the general similarity score (`score`),
         *     a re-ranking score (`reRankingScore`) which uses several propensity signals (such as contact similarity, contact quality, title boosting, etc.)
         *     to refine relevancy, and explainability metadata (`meta`) that describes why this person was recommended (for example, the reference person
         *     and source of the interaction).
         */
        get: operations["ContactRecommendationsInterface_getContactRecommendations"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/copilot/v1/customer-buyer-personas": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Customer Buyer Personas
         * @description Returns the list of Customer Buyer Personas configured for the authenticated customer.
         *
         *     A Buyer Persona represents a profile of a key decision-maker or influencer that a company's sales and marketing teams target.
         *     Personas capture attributes such as the buyer's role, objectives, priorities, and the motivations that influence purchasing decisions.
         *     Personas help organizations align their go-to-market strategy by defining who the ideal buyers are, what problems they care about, and how they should be engaged.
         *     Buyer Personas can be connected to products or services with the people most likely to purchase them.
         *
         *     If you do not know the ID of the record you need, call
         *     [List Customer Buyer Personas](ref:customerbuyerpersonainterface_listcustomerbuyerpersonas) to browse the full set.
         *
         *     Common use cases
         *     - Retrieve all configured buyer personas
         *     - Discover persona IDs for use in other API operations
         *     - Load persona data for downstream integrations or automation
         */
        get: operations["CustomerBuyerPersonaInterface_listCustomerBuyerPersonas"];
        put?: never;
        /**
         * Upsert Customer Buyer Persona
         * @description Creates or updates a Customer Buyer Persona.
         *     This endpoint performs an upsert operation:
         *     If an `id` is included in the request body, the existing persona is updated. Only the fields provided in the request are modified (partial update).
         *
         *     If an `id` is not included, a new persona is created.
         *
         *     When creating a new persona, `name` is the only required attribute. All other attributes are optional.
         *     A Buyer Persona represents a type of buyer that the customer's sales and marketing teams target. Each persona captures key details about the buyer's responsibilities, motivations,
         *     and priorities, helping teams tailor messaging and engagement strategies.
         *     Buyer Personas can be associated with specific products or services with relevant buyers.
         *
         *     Common use cases
         *     - Create new buyer personas for targeting and messaging
         *     - Update persona characteristics or engagement insights
         *     - Link personas to products or services for GTM alignment
         */
        post: operations["CustomerBuyerPersonaInterface_upsertCustomerBuyerPersona"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/copilot/v1/customer-buyer-personas/{buyerPersonaId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Customer Buyer Persona
         * @description Retrieves a single Customer Buyer Persona by its unique identifier.
         *
         *     A Buyer Persona represents a profile of a decision-maker or stakeholder that the customer's sales and marketing teams target.
         *     Each persona captures insights into who the ideal buyers are, what motivates them, and how to effectively engage them during the sales process.
         *     If the specified buyerPersonaId does not exist, the endpoint returns **404 Not Found**.
         *
         *     If you do not know the ID of the record you need, call
         *     [List Customer Buyer Personas](ref:customerbuyerpersonainterface_listcustomerbuyerpersonas) to browse the full set.
         *
         *     This endpoint is typically used to retrieve the full configuration of a specific persona before updating or referencing it in downstream workflows.
         *
         *     Common use cases
         *     - Retrieve detailed information about a specific persona
         *     - Load persona data before updating the record
         *     - Use persona context in integrations or automation workflows
         */
        get: operations["CustomerBuyerPersonaInterface_getCustomerBuyerPersona"];
        put?: never;
        post?: never;
        /**
         * Delete Customer Buyer Persona
         * @description Permanently deletes a Customer Buyer Persona identified by `buyerPersonaId`.
         *     Deleting a persona removes the associated buyer profile from the system and from any go-to-market configuration that references it.
         *     This is a hard delete operation. Once deleted, the persona cannot be recovered.
         *     If the specified buyerPersonaId does not exist, the endpoint returns **404 Not Found**.
         *     If you want to hide a persona without permanently removing it, use the [Archive Customer Buyer Persona](ref:customerbuyerpersonainterface_archivecustomerbuyerpersona) endpoint instead.
         *
         *     Common use cases
         *     - Remove outdated or incorrect personas
         *     - Clean up duplicate persona records
         *     - Reset persona configuration before recreating it
         */
        delete: operations["CustomerBuyerPersonaInterface_deleteCustomerBuyerPersona"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/copilot/v1/customer-buyer-personas/{buyerPersonaId}/actions/archive": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Archive Buyer Persona
         * @description Archives a Customer Buyer Persona.
         *     Archiving hides the persona from standard list responses while retaining the record for historical reference, audit compliance, and potential restoration.
         *     Archived personas remain stored in the system and continue to count toward customer limits.
         *     When a persona is archived, the system sets the metadata fields `archivedAt` and `archivedBy`.
         *     This action is reversible. The persona can be restored using the [Unarchive Customer Buyer Persona](ref:customerbuyerpersonainterface_unarchivecustomerbuyerpersona) endpoint.
         *
         *     Common use cases
         *     - Temporarily retire a persona that is no longer actively targeted
         *     - Maintain historical records without permanently deleting them
         *     - Clean up active persona lists while preserving data
         */
        post: operations["CustomerBuyerPersonaInterface_archiveCustomerBuyerPersona"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/copilot/v1/customer-buyer-personas/{buyerPersonaId}/actions/unarchive": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Unarchive Buyer Persona
         * @description Restores a previously archived Customer Buyer Persona.
         *     Unarchiving makes the persona visible again in standard list responses and allows it to be used again in GTM configuration and workflows.
         *     When a persona is restored, the metadata fields `archivedAt` and `archivedBy` are cleared.
         *     If the specified buyerPersonaId does not exist, the endpoint returns **404 Not Found**.
         *
         *     Common use cases
         *     - Reactivate a previously archived persona
         *     - Restore a persona that is relevant again for targeting or messaging
         *     - Re-enable personas used in go-to-market strategies
         */
        post: operations["CustomerBuyerPersonaInterface_unarchiveCustomerBuyerPersona"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/copilot/v1/customer-competitors": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Customer Competitors
         * @description Returns the list of Customer Competitors configured for the authenticated customer.
         *
         *     A Customer Competitor represents a company that competes with the customer's products or services in the market.
         *     Competitor records capture structured competitive intelligence that helps sales and marketing teams understand the competitive landscape and position their products effectively.
         *     Competitor profiles may include information such as competing products, win/loss analysis, displacement history, and reasons why deals are won or lost against a particular competitor.
         *     A competitor may optionally be linked to a ZoomInfo company record to enable additional enrichment and firmographic insights.
         *
         *     If you do not know the ID of the record you need, call
         *     [List Customer Competitors](ref:customercompetitorsinterface_listcustomercompetitors) to browse the full set.
         *
         *     Common use cases
         *     - Retrieve all competitors configured for competitive analysis
         *     - Discover competitor IDs for use in other API operations
         *     - Load competitor data for downstream integrations or automation
         */
        get: operations["CustomerCompetitorsInterface_listCustomerCompetitors"];
        put?: never;
        /**
         * Upsert Customer Competitor
         * @description Creates or updates a Customer Competitor.
         *     This endpoint performs an upsert operation:
         *     If an `id` is included in the request body, the existing competitor record is updated. Only the attributes provided in the request are modified (partial update).
         *
         *     If an `id` is not included, a new competitor record is created.
         *
         *     When creating a new competitor, `name` is the only required attribute. All other attributes are optional.
         *     Competitor records store structured competitive intelligence including competing products, win/loss insights, displacement scenarios, and positioning details that help organizations understand how they perform against competitors in the market.
         *     Competitors can also be associated with Products and Services to capture which products directly compete with one another.
         *
         *     Common use cases
         *     - Create competitor profiles for competitive intelligence
         *     - Update win/loss insights or competitive positioning
         *     - Link competitors to products or services in order to track product-level competition
         *
         *     Use [List Customer Competitors](ref:customercompetitorsinterface_listcustomercompetitors)
         *     to find the `id` of a record you want to update or to check whether a competitor already exists.
         */
        post: operations["CustomerCompetitorsInterface_upsertCustomerCompetitor"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/copilot/v1/customer-competitors/{competitorId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Customer Competitor by ID
         * @description Retrieves a single Customer Competitor by its unique identifier.
         *
         *     A Customer Competitor represents a company that competes with the customer's products or services.
         *     Competitor records capture structured competitive intelligence such as competing products, win/loss analysis, displacement scenarios,
         *     and reasons why deals are won or lost against that competitor.
         *     A competitor may optionally be linked to a ZoomInfo company record for additional enrichment.
         *     If the specified competitorId does not exist, the endpoint returns **404 Not Found**.
         *
         *     If you do not know the ID of the record you need, call
         *     [List Customer Competitors](ref:customercompetitorsinterface_listcustomercompetitors)
         *     to browse the full set.
         *
         *     Common use cases
         *     - Retrieve detailed information about a specific competitor
         *     - Load competitor data before updating the record
         *     - Use competitor intelligence in integrations or automation workflows
         */
        get: operations["CustomerCompetitorsInterface_getCustomerCompetitor"];
        put?: never;
        post?: never;
        /**
         * Delete Customer Competitor
         * @description Permanently deletes a Customer Competitor identified by `competitorId`.
         *     Deleting a competitor removes the associated competitive intelligence from the system.
         *     This is a hard delete operation and cannot be undone.
         *     If the specified `competitorId` does not exist, the endpoint returns **404 Not Found**.
         *
         *     If you want to hide a competitor without permanently removing it, use the [Archive Customer Competitor](ref:customercompetitorsinterface_archivecustomercompetitor) endpoint instead.
         *
         *     Common use cases
         *     - Remove outdated competitor profiles
         *     - Clean up duplicate competitor records
         *     - Reset competitor data before recreating it
         */
        delete: operations["CustomerCompetitorsInterface_deleteCustomerCompetitor"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/copilot/v1/customer-competitors/{competitorId}/actions/archive": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Archive Customer Competitor
         * @description Archives a Customer Competitor.
         *     Archiving hides the competitor from standard list responses while retaining the record for historical reference and audit purposes.
         *     Archived competitors remain stored in the system and continue to count toward customer limits.
         *     When a competitor is archived, the metadata fields `archivedAt` and `archivedBy` are set.
         *
         *     This action is reversible using the [Unarchive Customer Competitor](ref:customercompetitorsinterface_unarchivecustomercompetitor).
         *
         *     Common use cases
         *     - Temporarily remove inactive competitors
         *     - Preserve historical competitive intelligence
         *     - Simplify active competitor lists while retaining records
         */
        post: operations["CustomerCompetitorsInterface_archiveCustomerCompetitor"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/copilot/v1/customer-competitors/{competitorId}/actions/unarchive": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Unarchive Customer Competitor
         * @description Restores a previously archived Customer Competitor.
         *     Unarchiving makes the competitor visible again in standard list responses and allows it to be used again in competitive intelligence workflows.
         *     When a competitor is restored, the metadata fields `archivedAt` and `archivedBy` are cleared.
         *     If the specified `competitorId` does not exist, the endpoint returns **404 Not Found**.
         *
         *     Common use cases
         *     - Reactivate competitors that are relevant again
         *     - Restore archived competitive intelligence records
         *     - Re-enable competitors for GTM analysis
         */
        post: operations["CustomerCompetitorsInterface_unarchiveCustomerCompetitor"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/copilot/v1/customer-settings": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Customer Settings
         * @description Retrieves the customer settings for the authenticated customer.
         *
         *     Customer Settings represent the core company-level configuration.
         *     This includes foundational information such as the company name, description, elevator pitch, and strategic go-to-market priorities.
         *     This information provides the baseline context that AI agents use to generate recommendations, messaging, targeting insights,
         *     and account prioritization.
         *
         *     This resource is a singleton per customer, meaning each customer can have only one Customer Settings record.
         *     If no configuration has been created yet, the endpoint will return **404 Not Found**.
         *
         *     Use [Post Customer Settings](ref:customersettingsinterface_upsertcustomersettings) to create or update the settings.
         *
         *     Common use cases
         *     - Retrieve the current company context powering GTM AI features
         *     - Verify whether company configuration has been initialized
         *     - Load existing company overview information for editing or synchronization
         */
        get: operations["CustomerSettingsInterface_getCustomerSettings"];
        put?: never;
        /**
         * Upsert Customer Settings
         * @description Creates or updates the Customer Settings for the authenticated customer.
         *     Customer Settings store the Company Overview configuration including the company name, description, elevator pitch,
         *     and strategic go-to-market priorities.
         *
         *     This endpoint performs an upsert operation:
         *     If a Customer Settings record does not exist, it will be created.
         *     If a record already exists, only the fields included in the request will be updated.
         *
         *     Each customer can have only one Customer Settings record.
         *     All attributes in the request body are optional, but at least one attribute must be provided. Requests with no attributes will
         *     return a **400 Bad Request**. Updates are applied as a partial update, meaning only the fields included in the request will be modified.
         *     All other fields remain unchanged.
         *
         *     Common use cases
         *     - Initialize company configuration during setup
         *     - Update company overview information
         *     - Modify strategic priorities used by AI recommendations
         *
         *     Use [Get Customer Settings](ref:customersettingsinterface_getcustomersettings) to retrieve the current settings
         *     before updating, or [Delete Customer Settings](ref:customersettingsinterface_deletecustomersettings) to remove them.
         */
        post: operations["CustomerSettingsInterface_upsertCustomerSettings"];
        /**
         * Delete Customer Settings
         * @description Permanently deletes the Customer Settings record for the authenticated customer. Customer Settings store the customers
         *     Company Overview configuration.
         *
         *     Deleting this record removes that configuration from the system.
         *     This resource is a singleton per customer, meaning each customer can have only one Customer Settings record.
         *     If no Customer Settings record exists, the endpoint returns **404 Not Found**.
         *
         *     This is a hard delete operation. Once deleted, the record is removed from the backend and must be recreated using
         *     [Upsert Customer Settings](ref:customersettingsinterface_upsertcustomersettings) if needed.
         *
         *     Common use cases
         *     - Remove an existing company overview configuration
         *     - Reset customer-level company settings before recreating them
         *     - Clean up configuration that is no longer valid
         *
         *     Use [Get Customer Settings](ref:customersettingsinterface_getcustomersettings) to verify settings exist before deletion,
         *     or [Upsert Customer Settings](ref:customersettingsinterface_upsertcustomersettings) to recreate them if needed.
         */
        delete: operations["CustomerSettingsInterface_deleteCustomerSettings"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/copilot/v1/ideal-company-profile": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Ideal Customer Profiles
         * @description Returns a List of Ideal Customer Profile (ICPs) configured for the authenticated customer.
         *
         *     An Ideal Customer Profile represents a target company profile that aligns with a company's go-to-market strategy.
         *     Each segment defines the types of organizations most likely to benefit from the company's products or services.
         *     Segments typically describe target companies using firmographic attributes such as industry, company size, revenue range, geography, and other qualification criteria.
         *     These segments help sales and marketing teams focus outreach on the companies most likely to convert.
         *
         *     Ideal Customer Profile can be associated with products or services that are targeted toward the right types of companies.
         *
         *     If you do not know the ID of the record you need, call
         *     [List Ideal Customer Profiles](ref:customeridealcompanysegmentinterface_listidealcompanysegments) to browse the full set.
         *
         *     Common use cases
         *     - Retrieve all configured ICP segments
         *     - Discover segment IDs for use in other API operations
         *     - Sync ICP definitions with external GTM systems
         */
        get: operations["CustomerIdealCompanySegmentInterface_listIdealCompanySegments"];
        put?: never;
        /**
         * Upsert Ideal Customer Profile
         * @description Creates or updates an Ideal Customer Profile.
         *     This endpoint performs an upsert operation:
         *     If an `id` is included in the request body, the existing segment is updated. Only the attributes provided in the request are modified (partial update).
         *
         *     If an `id` is not included, a new segment is created.
         *
         *     When creating a new segment, `name` is the only required attribute. All other attributes are optional.
         *     An Ideal Customer Profile defines the type of companies that best match the organization’s target market.
         *     Segments typically describe firms using firmographic attributes such as industry, company size, revenue range, geography, and other qualification criteria.
         *
         *     Common use cases
         *     - Define new ICP segments for GTM targeting
         *     - Update firmographic filters used to identify target accounts
         *     - Align company targeting with products or services and personas
         */
        post: operations["CustomerIdealCompanySegmentInterface_upsertIdealCompanySegment"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/copilot/v1/ideal-company-profile/{segmentId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get an Ideal Customer Profile
         * @description Retrieves a single Ideal Customer Profile by its unique identifier.
         *
         *     An Ideal Customer Profile defines the profile of organizations that best match a company's target market.
         *     Segments typically describe companies using firmographic attributes such as industry, company size, revenue range, geography, and other qualification criteria.
         *     Segments may also include seed companies or structured search filters used for account matching.
         *     If the specified segmentId does not exist, the endpoint returns **404 Not Found**.
         *
         *     If you do not know the ID of the record you need, call
         *     [List Ideal Customer Profiles](ref:customeridealcompanysegmentinterface_listidealcompanysegments) to browse the full set.
         *
         *     Common use cases
         *     - Retrieve the full configuration of a specific ICP segment
         *     - Load segment details before updating the record
         *     - Use ICP definitions in integrations or automation workflows
         */
        get: operations["CustomerIdealCompanySegmentInterface_getIdealCompanySegment"];
        put?: never;
        post?: never;
        /**
         * Delete Ideal Customer Profile
         * @description Permanently deletes an Ideal Customer Profile identified by `segmentId`.
         *
         *     Deleting a segment removes the associated target company profile from the system and from any go-to-market configuration that references it.
         *     This is a hard delete operation and cannot be undone.
         *     If the specified `segmentId` does not exist, the endpoint returns **404 Not Found**.
         *     If you want to hide a segment without permanently removing it, use the [Archive Ideal Customer Profile](ref:customeridealcompanysegmentinterface_archiveidealcompanysegment) endpoint instead.
         *
         *     Use [Get Ideal Customer Profile](ref:customeridealcompanysegmentinterface_getidealcompanysegment)
         *     to verify the profile exists before deletion.
         *
         *     Common use cases
         *     - Remove outdated or incorrect ICP definitions
         *     - Clean up duplicate segments
         *     - Reset segment configuration before recreating it
         */
        delete: operations["CustomerIdealCompanySegmentInterface_deleteIdealCompanySegment"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/copilot/v1/ideal-company-profile/{segmentId}/actions/archive": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Archive ICP
         * @description Archives an Ideal Customer Profile.
         *     Archiving hides the segment from standard list responses while retaining the record for historical reference, audit purposes, and possible restoration.
         *     Archived segments remain stored in the system and continue to count toward customer limits.
         *     When a segment is archived, the system sets the metadata fields `archivedAt` and `archivedBy`.
         *     This action is reversible using the [Unarchive Ideal Customer Profile](ref:customeridealcompanysegmentinterface_unarchiveidealcompanysegment) endpoint.
         *
         *     Common use cases
         *     - Temporarily retire an ICP definition
         *     - Maintain historical GTM configuration for audit purposes
         *     - Simplify active targeting segments without losing data
         */
        post: operations["CustomerIdealCompanySegmentInterface_archiveIdealCompanySegment"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/copilot/v1/ideal-company-profile/{segmentId}/actions/unarchive": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Unarchive ICP
         * @description Restores a previously archived Ideal Customer Profile.
         *     Unarchiving makes the segment visible again in standard list responses and allows it to be used again in GTM targeting and configuration workflows.
         *     When a segment is restored, the metadata fields `archivedAt` and `archivedBy` are cleared.
         *     If the specified `segmentId` does not exist, the endpoint returns **404 Not Found**.
         *
         *     Common use cases
         *     - Reactivate previously archived ICP segments
         *     - Restore segments that are relevant again for targeting
         *     - Re-enable segments used in GTM configuration
         */
        post: operations["CustomerIdealCompanySegmentInterface_unarchiveIdealCompanySegment"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/copilot/v1/products": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Products or Services
         * @description Returns the complete list of Products or Services configured for the authenticated customer.
         *
         *     An Product or Service represents a product, service, or solution provided by your company and forms
         *     the foundation of your go-to-market configuration. Products or Services capture key context such as the product's value proposition,
         *     the pain points it addresses, proof points, target buyer personas, and ideal customer profiles.
         *
         *     Products or Services serve as the central linking object across GTM configuration, connecting Buyer Personas, Ideal Customer Profiles (ICPs),
         *     and Competitors to ensure alignment between targeting, messaging, and competitive positioning.
         *
         *     If you do not know the ID of the record you need, call
         *     [List Products or Services](ref:organizationofferingsinterface_listorganizationofferings) to browse the full set.
         *
         *     Use this endpoint to browse all products or services or retrieve product or service IDs that can be used with other endpoints.
         *
         *     Common use cases
         *     - Retrieve all configured products or services
         *     - Discover offering IDs for use in other API operations
         *     - Load offering data for downstream GTM automation or AI workflows
         */
        get: operations["OrganizationOfferingsInterface_listOrganizationOfferings"];
        put?: never;
        /**
         * Upsert Product or Service
         * @description Creates or updates a Product or Service for the authenticated customer.
         *     A Product or Service represents a product, service, or solution provided by your company.
         *
         *     Products or Services form the foundation of your go-to-market configuration and capture key context such as the product's
         *     value proposition, the pain points it addresses, proof points, target buyer personas, and the ideal customer profiles it serves.
         *
         *     This endpoint performs an upsert operation:
         *     If an `id` is included in the request body, the existing product or service is updated.
         *     Only the attributes provided in the request are modified (partial update).
         *
         *     If an `id` is not provided, a new product or service is created.
         *
         *     When creating a new product or service, name is the only required field. All other attributes are optional.
         *     A Product or Service acts as a central linking object across GTM configuration. Buyer Personas, Ideal Customer Profiles (ICPs),
         *     and Competitors can all be associated with a Product or Service to align targeting, messaging, and competitive positioning.
         *
         *     Common use cases
         *     - Create a new product or service
         *     - Update positioning, messaging, or targeting attributes for an existing product or service
         *     - Link products or services to buyer personas, ICPs, or competitors
         */
        post: operations["OrganizationOfferingsInterface_upsertOrganizationOffering"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/copilot/v1/products/{offeringId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Product or Service
         * @description Retrieves a single product or service by ID.
         *
         *     A product or service represents a discrete product or service provided by your company
         *     and forms the foundation of your go-to-market configuration. Each product or service record captures the
         *     strategic context of a product: how it is positioned in the market, whom it targets, what pain points
         *     it addresses, and the value proposition it delivers. Returns **404 Not Found** if the product or service does not
         *     exist.
         *
         *     If you do not know the ID of the record you need, call
         *     [List Products or Services](ref:organizationofferingsinterface_listorganizationofferings) to browse the full set.
         *
         *     This endpoint is typically used when retrieving the full details of a specific product or service for viewing, editing,
         *     or integration with external systems.
         *
         *     Common use cases
         *     - Retrieve the full configuration of a specific product or service
         *     - Load product or service details before updating the record
         *     - Fetch product or service context for downstream workflows or integrations
         */
        get: operations["OrganizationOfferingsInterface_getOrganizationOffering"];
        put?: never;
        post?: never;
        /**
         * Delete Product or Service
         * @description Permanently deletes a Product or Service identified by `offeringId`.
         *
         *     A Product or Service represents a product, service, or solution provided by your company and serves as a
         *     core component of your go-to-market configuration. Deleting a Product or Service removes the associated strategic context
         *     used for positioning, targeting, and competitive analysis.
         *
         *     This is a hard delete operation. Once deleted, the Product or Service is permanently removed from the system and cannot be recovered.
         *     If the specified offeringId does not exist, the endpoint returns **404 Not Found**.
         *     If you want to hide a Product or Service without permanently removing it, use the [Archive Product or Service](ref:organizationofferingsinterface_archiveorganizationoffering) endpoint instead.
         *
         *     Use [Get Product or Service](ref:organizationofferingsinterface_getorganizationoffering)
         *     to verify the Product or Service exists before deletion, or
         *     [Upsert Product or Service](ref:organizationofferingsinterface_upsertorganizationoffering)
         *     to recreate it afterward if needed.
         *
         *     Common use cases
         *     - Permanently remove an obsolete product or service
         *     - Clean up incorrect or duplicate product or service records
         *     - Reset a product or service before recreating it with updated configuration
         */
        delete: operations["OrganizationOfferingsInterface_deleteOrganizationOffering"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/copilot/v1/products/{offeringId}/actions/archive": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Archive Product or Service
         * @description Archives an Product or Service identified by `offeringId`.
         *
         *     Archiving hides the product or service from standard list responses while retaining the record for historical reference, audit purposes,
         *     and potential restoration. The archived record remains stored in the system and continues to count toward customer limits.
         *     When a product or service is archived, the system sets the metadata fields `archivedAt` and `archivedBy`.
         *     This operation is reversible. An archived product or service can be restored using the [Unarchive Product or Service](ref:organizationofferingsinterface_unarchiveorganizationoffering) endpoint.
         *
         *     Common use cases
         *     - Temporarily remove a product or service that is no longer actively sold
         *     - Hide deprecated products or services while retaining historical configuration
         *     - Maintain audit history without permanently deleting records
         */
        post: operations["OrganizationOfferingsInterface_archiveOrganizationOffering"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/copilot/v1/products/{offeringId}/actions/unarchive": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Unarchive Product or Service
         * @description Restores a previously archived Product or Service.
         *
         *     Unarchiving makes the product or service visible again in standard list responses and reactivates it for use across GTM configuration workflows.
         *     When a product or service is unarchived, the metadata fields `archivedAt` and `archivedBy` are cleared.
         *     If the specified `offeringId` does not exist, the endpoint returns **404 Not Found**.
         *
         *     Common use cases
         *     - Restore a previously archived product or service
         *     - Reactivate products or services that have returned to market
         *     - Re-enable products or services used in GTM configuration
         */
        post: operations["OrganizationOfferingsInterface_unarchiveOrganizationOffering"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /** @description Account level intent insight model */
        AccountLevelIntentInsight: {
            /**
             * Format: date-time
             * @description Date of creation of the insight.
             */
            createdAt?: string;
            /**
             * Format: date-time
             * @description Expiration date of the insight.
             */
            expiresAt?: string;
            /**
             * Format: int64
             * @description Unique id for the insight.
             */
            id?: number;
            /**
             * Format: date-time
             * @description Date of the insight.
             */
            insightDate?: string;
            /** @description Signal id. */
            signalId: string;
            /** @description Structured payload containing signal-specific data based on the signal type. */
            signalPayload: components["schemas"]["AccountLevelIntentSignalPayload"];
            /**
             * @description Type of the signal. (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            signalType: "zi.account-level-intent.spike";
            /**
             * Format: int64
             * @description Company id.
             */
            ziCompanyId: number;
        };
        /** @description Account level intent signal payload. */
        AccountLevelIntentSignalPayload: {
            /** @description Name of the intent topic cluster that spiked. e.g. 'Sales Strategy'. */
            clusterName: string;
            /**
             * Format: date-time
             * @description UTC timestamp when the signal event was originally recorded or detected.
             */
            date: string;
            /** @description Text describing this signal for display purposes. */
            displayText: string;
            /**
             * Format: int64
             * @description The account's current intent score after this signal. Values: 0 = NONE, 1 = LOW, 2 = MODERATE, 3 = HIGH. Always higher than the previous score as this represents a spike event.
             */
            score: number;
            /** @description Description of how the intent score changed (e.g. from LOW to HIGH). */
            scoreChange: string;
            /** @description List of individual intent topic names within the cluster that contributed to the spike. */
            topics?: string[];
            /** @description Geographic breakdown of where the intent activity was detected, including location name and number of active buyers. */
            topLocations?: components["schemas"]["AliLocation"][];
        };
        /** @description Represents a summary of account-related data. */
        AccountSummary: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["AccountSummaryAttributes"];
            /** @description The unique identifier for the resource */
            id: string;
            /**
             * @description The type of the resource
             * @default AccountSummary
             */
            type: string;
        };
        /** @description Attributes for the AccountSummary resource. */
        AccountSummaryAttributes: {
            /** @description Markdown content providing a summary of account-related data. */
            markdown: string;
        };
        /** @description Represents a question and answer about account-related data. */
        AccountSummaryQuestion: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["AccountSummaryQuestionAttributes"];
            /** @description The unique identifier for the resource */
            id: string;
            /**
             * @description The type of the resource
             * @default AccountSummaryQuestion
             */
            type: string;
        };
        /** @description Attributes for the AccountSummaryQuestion resource. */
        AccountSummaryQuestionAttributes: {
            /** @description The answer to the account summary question. */
            answer: string;
        };
        /** @description Request model for asking a question about account-related data. */
        AccountSummaryQuestionRequest: {
            /** @description The primary data of the document */
            data: components["schemas"]["AccountSummaryQuestionRequestResource"];
        };
        /** @description Attributes for the AccountSummaryQuestionRequest resource. */
        AccountSummaryQuestionRequestAttributes: {
            /** @description The question to ask about account-related data. */
            question: string;
        };
        /** @description Represents a request to ask a question about account-related data. */
        AccountSummaryQuestionRequestResource: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["AccountSummaryQuestionRequestAttributes"];
            /**
             * @description The type of the resource
             * @default AccountSummaryQuestionRequest
             */
            type: string;
        };
        /** @description Response model for asking a question about account-related data. */
        AccountSummaryQuestionResponse: {
            /** @description The primary data of the document */
            data: components["schemas"]["AccountSummaryQuestion"];
        };
        /** @description Resource model for an account summary response. */
        AccountSummaryResponse: {
            /** @description The primary data of the document */
            data: components["schemas"]["AccountSummary"];
        };
        /** @description Activity location information for TrustRadius signals. */
        ActivityLocationInfo: {
            /** @description City of the location. */
            locationCity?: string;
            /** @description Location country. */
            locationCountry?: string;
            /** @description Location country code. */
            locationCountryCode?: string;
            /** @description State of the location. */
            locationState?: string;
            /** @description State code of the location. */
            locationStateCode?: string;
        };
        /** @description Account Level Intent (ALI) location information. */
        AliLocation: {
            /**
             * Format: int64
             * @description Number of active buyers detected.
             */
            buyersCount: number;
            /** @description Geographic location name. */
            location: string;
        };
        /** @description Anomalous hiring insight model */
        AnomalousHiringInsight: {
            /**
             * Format: date-time
             * @description Date of creation of the insight.
             */
            createdAt?: string;
            /**
             * Format: date-time
             * @description Expiration date of the insight.
             */
            expiresAt?: string;
            /**
             * Format: int64
             * @description Unique id for the insight.
             */
            id?: number;
            /**
             * Format: date-time
             * @description Date of the insight.
             */
            insightDate?: string;
            /** @description Signal id. */
            signalId: string;
            /** @description Structured payload containing signal-specific data based on the signal type. */
            signalPayload: components["schemas"]["AnomalousHiringSignalPayload"];
            /**
             * @description Type of the signal. (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            signalType: "zi.anomaloushiring";
            /**
             * Format: int64
             * @description Company id.
             */
            ziCompanyId: number;
        };
        /** @description Anomalous hiring signal payload. */
        AnomalousHiringSignalPayload: {
            /**
             * Format: date-time
             * @description UTC timestamp when the signal event was originally recorded or detected.
             */
            date: string;
            /** @description Department where the unusual volume of hiring was detected (e.g. 'Engineering', 'Sales'). */
            department?: string;
            /** @description Text describing this signal for display purposes. */
            displayText: string;
            /** @description Summary describing the unusual hiring activity, including context about the scale or nature of the hiring surge. */
            text: string;
        };
        /** @description Award insight model */
        AwardInsight: {
            /**
             * Format: date-time
             * @description Date of creation of the insight.
             */
            createdAt?: string;
            /**
             * Format: date-time
             * @description Expiration date of the insight.
             */
            expiresAt?: string;
            /**
             * Format: int64
             * @description Unique id for the insight.
             */
            id?: number;
            /**
             * Format: date-time
             * @description Date of the insight.
             */
            insightDate?: string;
            /** @description Signal id. */
            signalId: string;
            /** @description Structured payload containing signal-specific data based on the signal type. */
            signalPayload: components["schemas"]["AwardSignalPayload"];
            /**
             * @description Type of the signal. (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            signalType: "zi.award";
            /**
             * Format: int64
             * @description Company id.
             */
            ziCompanyId: number;
        };
        /** @description Award signal payload. */
        AwardSignalPayload: {
            /**
             * Format: date-time
             * @description UTC timestamp when the signal event was originally recorded or detected.
             */
            date: string;
            /** @description Text describing this signal for display purposes. */
            displayText: string;
            /** @description The text content of the signal. */
            text: string;
        };
        /** @description Base interface for all signal payloads containing common fields. */
        BaseSignalPayload: {
            /**
             * Format: date-time
             * @description UTC timestamp when the signal event was originally recorded or detected.
             */
            date: string;
            /** @description Text describing this signal for display purposes. */
            displayText: string;
        };
        /** @description Buying committee change insight model */
        BuyingCommitteeChangeInsight: {
            /**
             * Format: date-time
             * @description Date of creation of the insight.
             */
            createdAt?: string;
            /**
             * Format: date-time
             * @description Expiration date of the insight.
             */
            expiresAt?: string;
            /**
             * Format: int64
             * @description Unique id for the insight.
             */
            id?: number;
            /**
             * Format: date-time
             * @description Date of the insight.
             */
            insightDate?: string;
            /** @description Signal id. */
            signalId: string;
            /** @description Structured payload containing signal-specific data based on the signal type. */
            signalPayload: components["schemas"]["BuyingCommitteeChangeSignalPayload"];
            /**
             * @description Type of the signal. (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            signalType: "zi.buyingcommitteechange";
            /**
             * Format: int64
             * @description Company id.
             */
            ziCompanyId: number;
        };
        /** @description Buying committee change signal payload. */
        BuyingCommitteeChangeSignalPayload: {
            /** @description Specific type of change that triggered this signal. */
            changeType: string;
            /**
             * Format: date-time
             * @description UTC timestamp when the signal event was originally recorded or detected.
             */
            date: string;
            /** @description Text describing this signal for display purposes. */
            displayText: string;
            /** @description Indicates if the person is part of an identified buying committee or decision-making group. */
            inBuyingGroup?: boolean;
            /** @description Indicates if the person holds a C-level executive position. */
            isCLevel?: boolean;
            /** @description Indicates if this person was identified as a contact of interest. */
            isPersonOfInterest?: boolean;
            /** @description Name of the person associated with this signal. */
            name: string;
            /**
             * Format: int64
             * @description ZoomInfo company ID of the person's previous employer.
             */
            previousCompanyId?: number;
            /** @description Name of the company where the person was previously employed. */
            previousCompanyName?: string;
            /** @description Person's previous job title. */
            previousTitle?: string;
            /** @description Person's job title. */
            title?: string;
            /**
             * Format: int64
             * @description ZoomInfo company id.
             */
            ziCompanyId: number;
            /**
             * Format: int64
             * @description ZoomInfo contact id for the person.
             */
            ziContactId: number;
        };
        /** @description Attributes for company insight. */
        CompanyInsight: {
            /** @description Array of insights for this company. */
            insights: components["schemas"]["InsightUnion"][];
        };
        /** @description Request model for retrieving company insights by type. */
        CompanyInsightsByTypeRequest: {
            /** @description The primary data of the document */
            data: components["schemas"]["CompanyInsightsSearch"];
        };
        /** @description Request attributes for retrieving company insights filtered by signal type. */
        CompanyInsightsByTypeRequestAttributes: {
            /** @description Optional filter for specific insight types. If not provided or empty, returns insights of all available types. */
            signalTypes?: components["schemas"]["SignalType"][];
            /** @description List of ZoomInfo company IDs to retrieve insights for (maximum 50 companies per request). */
            ziCompanyIds: number[];
        };
        /** @description Response model for retrieving company insights by type. */
        CompanyInsightsByTypeResponse: {
            /** @description The primary data of the document */
            data: components["schemas"]["CompanyInsightsByTypeResponseResource"][];
        };
        /** @description Company insights by type response resource. */
        CompanyInsightsByTypeResponseResource: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["CompanyInsight"];
            /** @description The unique identifier for the resource */
            id: string;
            /**
             * @description The type of the resource
             * @default CompanyInsights
             */
            type: string;
        };
        /** @description Company insights by type request resource. */
        CompanyInsightsSearch: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["CompanyInsightsByTypeRequestAttributes"];
            /**
             * @description The type of the resource
             * @default CompanyInsightsSearch
             */
            type: string;
        };
        /** @description Resource model for a company lookalike result. */
        CompanyLookalike: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["SimilarCompanyAttributes"];
            /** @description The unique identifier for the resource */
            id: string;
            /**
             * @description The type of the resource
             * @default CompanyLookalike
             */
            type: string;
        };
        /** @description Response model for company lookalikes */
        CompanyLookalikesResponse: {
            /** @description The primary data of the document */
            data: components["schemas"]["CompanyLookalike"][];
        };
        /** @description Base model for company-related signal payloads. */
        CompanySignalPayload: {
            /**
             * Format: date-time
             * @description UTC timestamp when the signal event was originally recorded or detected.
             */
            date: string;
            /** @description Text describing this signal for display purposes. */
            displayText: string;
            /**
             * Format: int64
             * @description ZoomInfo company id.
             */
            ziCompanyId: number;
        };
        /** @description Competitor intent insight model */
        CompetitorIntentInsight: {
            /**
             * Format: date-time
             * @description Date of creation of the insight.
             */
            createdAt?: string;
            /**
             * Format: date-time
             * @description Expiration date of the insight.
             */
            expiresAt?: string;
            /**
             * Format: int64
             * @description Unique id for the insight.
             */
            id?: number;
            /**
             * Format: date-time
             * @description Date of the insight.
             */
            insightDate?: string;
            /** @description Signal id. */
            signalId: string;
            /** @description Structured payload containing signal-specific data based on the signal type. */
            signalPayload: components["schemas"]["CompetitorIntentSignalPayload"];
            /**
             * @description Type of the signal. (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            signalType: "zi.intent.competitor.spike";
            /**
             * Format: int64
             * @description Company id.
             */
            ziCompanyId: number;
        };
        /** @description Competitor Intent Signal information. */
        CompetitorIntentSignal: {
            /**
             * Format: date-time
             * @description UTC timestamp when the signal event was originally recorded or detected.
             */
            date: string;
            /** @description Text describing this signal for display purposes. */
            displayText: string;
            /** @description Name of the competitor being researched. */
            name: string;
            /** @description Competitor's products or services that are being researched by the account. */
            productsOrServices?: string;
            /**
             * Format: int64
             * @description ZoomInfo company id.
             */
            ziCompanyId: number;
        };
        /** @description Competitor intent signal payload. */
        CompetitorIntentSignalPayload: {
            /** @description Details about the competitor being researched, including the competitor's company ID, name, and relevant products or services. */
            competitor: components["schemas"]["CompetitorIntentSignal"];
            /**
             * Format: date-time
             * @description UTC timestamp when the signal event was originally recorded or detected.
             */
            date: string;
            /** @description Text describing this signal for display purposes. */
            displayText: string;
        };
        /** @description Contact lookalikes resource */
        ContactLookalike: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["ContactLookalikeAttributes"];
            /** @description The unique identifier for the resource */
            id: string;
            /** @description Non-standard meta information about the resource */
            meta?: components["schemas"]["LookalikeMetadata"];
            /**
             * @description The type of the resource
             * @default ContactLookalike
             */
            type: string;
        };
        /** @description Attributes for a contact lookalike entity. */
        ContactLookalikeAttributes: {
            /** @description Brief description of the lookalike contact. */
            lookalikePersonBrief: string;
            /**
             * Format: int32
             * @description Rank of the lookalike contact, with 1 being the most similar to the reference person.
             */
            rank: number;
            /**
             * Format: double
             * @description Similarity score between the reference person and the lookalike contact, ranging from 0 to 1. Higher values indicate higher similarity.
             */
            score: number;
        };
        /** @description Response model for contact lookalikes. */
        ContactLookalikeResponse: {
            /** @description The primary data of the document */
            data: components["schemas"]["ContactLookalike"][];
        };
        /** @description Contact recommendation resource. */
        ContactRecommendation: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["ContactRecommendationAttributes"];
            /** @description The unique identifier for the resource */
            id: string;
            /** @description Non-standard meta information about the resource */
            meta?: components["schemas"]["ExplainabilityMetadata"];
            /**
             * @description The type of the resource
             * @default ContactRecommendation
             */
            type: string;
        };
        /** @description Attributes for a contact recommendation entity. */
        ContactRecommendationAttributes: {
            /**
             * Format: int32
             * @description Rank of the recommended contact.
             */
            rank: number;
            /** @description Brief description of the recommended person. */
            recommendedPersonBrief?: string;
            /**
             * Format: double
             * @description Rank of this recommendation based on a machine learning model. Higher values indicate greater similarity.
             */
            reRankingScore: number;
            /**
             * Format: double
             * @description Score of the recommended contact. Higher values indicate greater similarity.
             */
            score: number;
        };
        /** @description Response model for contact recommendations. */
        ContactRecommendationResponse: {
            /** @description The primary data of the document */
            data: components["schemas"]["ContactRecommendation"][];
        };
        /** @description Base model for contact-related signal payloads. */
        ContactSignalPayload: {
            /**
             * Format: date-time
             * @description UTC timestamp when the signal event was originally recorded or detected.
             */
            date: string;
            /** @description Text describing this signal for display purposes. */
            displayText: string;
            /** @description Indicates if the person is part of an identified buying committee or decision-making group. */
            inBuyingGroup?: boolean;
            /** @description Indicates if the person holds a C-level executive position. */
            isCLevel?: boolean;
            /** @description Indicates if this person was identified as a contact of interest. */
            isPersonOfInterest?: boolean;
            /** @description Name of the person associated with this signal. */
            name: string;
            /** @description Person's job title. */
            title?: string;
            /**
             * Format: int64
             * @description ZoomInfo company id.
             */
            ziCompanyId: number;
            /**
             * Format: int64
             * @description ZoomInfo contact id for the person.
             */
            ziContactId: number;
        };
        /** @description Customer Buyer Persona resource. */
        CustomerBuyerPersona: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["CustomerBuyerPersonaAttributes"];
            /** @description The unique identifier for the resource */
            id: string;
            /** @description Non-standard meta information about the resource */
            readonly meta?: components["schemas"]["GtmConfigAuditFields"];
            /**
             * @description The type of the resource
             * @default CustomerBuyerPersona
             */
            type: string;
        };
        /**
         * @description Attributes that define a customer buyer persona — a profile representing a type of buyer
         *     that the customer's sales team targets. Buyer personas capture who the ideal buyers are,
         *     what motivates them, and how to engage them effectively.
         */
        CustomerBuyerPersonaAttributes: {
            /** @description Flexible key-value store for customer-specific custom fields and extended metadata. The backend validates schema and value types. Use this to capture additional persona attributes beyond the standard fields. */
            customFields?: components["schemas"]["CustomFieldItem"][];
            /** @description Detailed description of this buyer persona, including their role, responsibilities, and relevance to the sales process. Maximum 10,000 characters. */
            description?: string;
            /** @description Name of the buyer persona. Required when creating a new record. When provided (for create or update), must be between 1 and 1024 characters. */
            name?: string;
            /** @description Personal objectives for this persona such as career goals, KPIs, and success metrics that drive their purchasing decisions. Maximum 10,000 characters. */
            personalObjectives?: string;
            /** @description Relevant offerings from the customer's portfolio that this persona would be interested in. Maximum 10,000 characters. */
            relevantOfferings?: string;
            /** @description Source type indicating how this persona record was created or last modified. Defaults to `manual`. See `GtmConfigSourceType` for allowed values. When set explicitly, the backend validates source consistency with the `created_by` and `updated_by` fields. */
            readonly source?: components["schemas"]["GtmConfigSourceType"];
            /** @description Typical job titles, functional areas, and seniority levels associated with this persona. Maximum 10,000 characters. */
            titlesFunctionsSeniority?: string;
            /** @description Messaging angle explaining what this persona cares about in the customer's offering. Maximum 10,000 characters. */
            whatDoesThisPersonaCareAbout?: string;
        };
        /** @description API model for a list of customer buyer personas. */
        CustomerBuyerPersonaListResponse: {
            /** @description The primary data of the document */
            data: components["schemas"]["CustomerBuyerPersona"][];
        };
        /** @description API model for a single customer buyer persona. */
        CustomerBuyerPersonaModel: {
            /** @description The primary data of the document */
            data: components["schemas"]["CustomerBuyerPersona"];
        };
        /** @description Customer Buyer Persona resource for upsert operations. */
        CustomerBuyerPersonaUpsert: {
            /** @description The primary data of the document */
            data: {
                /** @description The attributes defining the resource */
                attributes: components["schemas"]["CustomerBuyerPersonaAttributes"];
                /** @description The unique identifier for the resource */
                id?: string;
                /** @description Non-standard meta information about the resource */
                meta?: components["schemas"]["GtmConfigAuditFields"];
                /**
                 * @description The type of the resource
                 * @enum {string}
                 */
                type: "CustomerBuyerPersona";
            };
        };
        /** @description Customer Competitor resource. */
        CustomerCompetitor: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["CustomerCompetitorAttributes"];
            /** @description The unique identifier for the resource */
            id: string;
            /** @description Non-standard meta information about the resource */
            readonly meta?: components["schemas"]["GtmConfigAuditFields"];
            /**
             * @description The type of the resource
             * @default CustomerCompetitor
             */
            type: string;
        };
        /** @description Attributes that define a Customer Competitor — a company that competes with the customer in the market. */
        CustomerCompetitorAttributes: {
            /** @description The customer's own products that directly compete with this competitor's products or services. Useful for competitive mapping and battle-card generation. Maximum 10,000 characters. */
            competitiveProducts?: string;
            /** @description Description of the products or services this competitor offers that overlap with the customer's portfolio. Maximum 10,000 characters. */
            competitorProducts?: string;
            /** @description Accounts that the customer has won from this competitor. Useful for case-study development and competitive proof points. Maximum 10,000 characters. */
            customersWeWon?: string;
            /** @description Flexible key-value store for customer-specific custom fields and extended metadata. The backend validates schema and value types. Use this to capture additional competitor intelligence beyond the standard fields. */
            customFields?: components["schemas"]["CustomFieldItem"][];
            /** @description Detailed description of the competitor, including market position, strengths, and relevance to the customer's business. Maximum 10,000 characters. */
            description?: string;
            /** @description Name of the competitor company. Required when creating a new record. When provided (for create or update), must be between 1 and 1024 characters. */
            name?: string;
            /** @description Analysis of why this competitor loses deals, covering weaknesses, gaps, and areas where the customer holds an advantage. Maximum 10,000 characters. */
            reasonsTheyLose?: string;
            /** @description Analysis of why this competitor wins deals, covering key strengths, differentiators, and advantages in competitive situations. Maximum 10,000 characters. */
            reasonsTheyWin?: string;
            /** @description Source type indicating how this competitor record was created or last modified. Defaults to `manual`. See `GtmConfigSourceType` for allowed values. When set explicitly, the backend validates source consistency with the `created_by` and `updated_by` fields. */
            readonly source?: components["schemas"]["GtmConfigSourceType"];
            /**
             * Format: uri
             * @description URL of the competitor's website. Maximum 1024 characters.
             */
            url?: string;
        };
        /** @description API model for a list of Customer Competitors. */
        CustomerCompetitorListResponse: {
            /** @description The primary data of the document */
            data: components["schemas"]["CustomerCompetitor"][];
        };
        /** @description API model for a single Customer Competitor. */
        CustomerCompetitorModel: {
            /** @description The primary data of the document */
            data: components["schemas"]["CustomerCompetitor"];
        };
        /** @description Customer Competitor resource for upsert operations. */
        CustomerCompetitorUpsert: {
            /** @description The primary data of the document */
            data: {
                /** @description The attributes defining the resource */
                attributes: components["schemas"]["CustomerCompetitorAttributes"];
                /** @description The unique identifier for the resource */
                id?: string;
                /** @description Non-standard meta information about the resource */
                meta?: components["schemas"]["GtmConfigAuditFields"];
                /**
                 * @description The type of the resource
                 * @enum {string}
                 */
                type: "CustomerCompetitor";
            };
        };
        /** @description Customer Settings resource wrapping attributes in JSON:API format. */
        CustomerSettings: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["CustomerSettingsAttributes"];
            /** @description The unique identifier for the resource */
            id: string;
            /** @description Non-standard meta information about the resource */
            readonly meta?: components["schemas"]["GtmConfigAuditFields"];
            /**
             * @description The type of the resource
             * @default CustomerSettings
             */
            type: string;
        };
        /** @description Attributes defining customer-level settings and configuration */
        CustomerSettingsAttributes: {
            /** @description Flexible key-value storage for customer-specific custom fields and metadata. The backend validates the schema and value types. This allows storing organization-specific data beyond the standard fields. */
            customFields?: components["schemas"]["CustomFieldItem"][];
            /** @description Company description providing context about what the organization does, its market position, and its target audience. Maximum 10,000 characters. */
            description?: string;
            /** @description Brief elevator pitch or value proposition for the customer organization. Used by AI agents to understand the company's core offering. When provided (for create or update), must be less than 1024 characters. */
            elevatorPitch?: string;
            /** @description Editable display name for the customer organization. When provided (for create or update), must be between 1 and 1024 characters. */
            name?: string;
            /** @description Source type indicating how this settings record was created or last modified. Defaults to `manual`. See `GtmConfigSourceType` for allowed values. */
            readonly source?: components["schemas"]["GtmConfigSourceType"];
            /** @description Strategic priorities text describing the organization's key business objectives, growth targets, and focus areas. Used by AI agents to align GTM recommendations with business goals. Maximum 10,000 characters. */
            strategicPriorities?: string;
        };
        /** @description Customer Settings resource wrapping attributes in JSON:API format. */
        CustomerSettingsCreate: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["CustomerSettingsAttributes"];
            /**
             * @description The type of the resource
             * @default CustomerSettings
             */
            type: string;
        };
        /** @description JSON:API response containing the customer settings singleton. */
        CustomerSettingsModel: {
            /** @description The primary data of the document */
            data: components["schemas"]["CustomerSettings"];
        };
        /** @description JSON:API response containing the customer settings singleton. */
        CustomerSettingsModelCreate: {
            /** @description The primary data of the document */
            data: components["schemas"]["CustomerSettingsCreate"];
        };
        /** @description Schema for a single custom field item. */
        CustomFieldItem: {
            /**
             * @description An optional description of the field. Defaults to an empty string in the backend.
             * @default
             */
            description: string;
            /** @description The display title of the custom field. */
            title: string;
            /** @description The string value associated with this custom field. */
            value: string;
        };
        /** @description CXO change insight model */
        CxoChangeInsight: {
            /**
             * Format: date-time
             * @description Date of creation of the insight.
             */
            createdAt?: string;
            /**
             * Format: date-time
             * @description Expiration date of the insight.
             */
            expiresAt?: string;
            /**
             * Format: int64
             * @description Unique id for the insight.
             */
            id?: number;
            /**
             * Format: date-time
             * @description Date of the insight.
             */
            insightDate?: string;
            /** @description Signal id. */
            signalId: string;
            /** @description Structured payload containing signal-specific data based on the signal type. */
            signalPayload: components["schemas"]["CxoChangeSignalPayload"];
            /**
             * @description Type of the signal. (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            signalType: "zi.cxochange";
            /**
             * Format: int64
             * @description Company id.
             */
            ziCompanyId: number;
        };
        /** @description CXO change signal payload. */
        CxoChangeSignalPayload: {
            /** @description Specific type of change that triggered this signal. */
            changeType: string;
            /**
             * Format: date-time
             * @description UTC timestamp when the signal event was originally recorded or detected.
             */
            date: string;
            /** @description Text describing this signal for display purposes. */
            displayText: string;
            /** @description Indicates if the person is part of an identified buying committee or decision-making group. */
            inBuyingGroup?: boolean;
            /** @description Indicates if the person holds a C-level executive position. */
            isCLevel?: boolean;
            /** @description Indicates if this person was identified as a contact of interest. */
            isPersonOfInterest?: boolean;
            /** @description Name of the person associated with this signal. */
            name: string;
            /**
             * Format: int64
             * @description ZoomInfo company ID of the person's previous employer.
             */
            previousCompanyId?: number;
            /** @description Name of the company where the person was previously employed. */
            previousCompanyName?: string;
            /** @description Person's previous job title. */
            previousTitle?: string;
            /** @description Person's job title. */
            title?: string;
            /**
             * Format: int64
             * @description ZoomInfo company id.
             */
            ziCompanyId: number;
            /**
             * Format: int64
             * @description ZoomInfo contact id for the person.
             */
            ziContactId: number;
        };
        /** @description Divestiture insight model */
        DivestitureInsight: {
            /**
             * Format: date-time
             * @description Date of creation of the insight.
             */
            createdAt?: string;
            /**
             * Format: date-time
             * @description Expiration date of the insight.
             */
            expiresAt?: string;
            /**
             * Format: int64
             * @description Unique id for the insight.
             */
            id?: number;
            /**
             * Format: date-time
             * @description Date of the insight.
             */
            insightDate?: string;
            /** @description Signal id. */
            signalId: string;
            /** @description Structured payload containing signal-specific data based on the signal type. */
            signalPayload: components["schemas"]["DivestitureSignalPayload"];
            /**
             * @description Type of the signal. (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            signalType: "zi.divestiture";
            /**
             * Format: int64
             * @description Company id.
             */
            ziCompanyId: number;
        };
        /** @description Divestiture signal payload. */
        DivestitureSignalPayload: {
            /**
             * Format: date-time
             * @description UTC timestamp when the signal event was originally recorded or detected.
             */
            date: string;
            /** @description Text describing this signal for display purposes. */
            displayText: string;
            /** @description The text content of the signal. */
            text: string;
        };
        /** @description Earnings insight model */
        EarningsInsight: {
            /**
             * Format: date-time
             * @description Date of creation of the insight.
             */
            createdAt?: string;
            /**
             * Format: date-time
             * @description Expiration date of the insight.
             */
            expiresAt?: string;
            /**
             * Format: int64
             * @description Unique id for the insight.
             */
            id?: number;
            /**
             * Format: date-time
             * @description Date of the insight.
             */
            insightDate?: string;
            /** @description Signal id. */
            signalId: string;
            /** @description Structured payload containing signal-specific data based on the signal type. */
            signalPayload: components["schemas"]["EarningsSignalPayload"];
            /**
             * @description Type of the signal. (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            signalType: "zi.earnings";
            /**
             * Format: int64
             * @description Company id.
             */
            ziCompanyId: number;
        };
        /** @description Earnings signal payload. */
        EarningsSignalPayload: {
            /**
             * Format: date-time
             * @description UTC timestamp when the signal event was originally recorded or detected.
             */
            date: string;
            /** @description Text describing this signal for display purposes. */
            displayText: string;
            /** @description The text content of the signal. */
            text: string;
        };
        /** @description Engagement tracking signal payload. */
        EngagementTrackingSignalPayload: {
            /**
             * Format: date-time
             * @description UTC timestamp when the signal event was originally recorded or detected.
             */
            date: string;
            /** @description Text describing this signal for display purposes. */
            displayText: string;
            /**
             * Format: int64
             * @description Number of contacts at this account who have been engaged (via CRM or Chorus activity) on the open opportunity.
             */
            engagedContactsCount: number;
            /**
             * Format: date-time
             * @description UTC timestamp of the most recent engagement activity detected on the open opportunity.
             */
            lastEngagementDate: string;
        };
        /** @description Explainability metadata for a contact recommendation. */
        ExplainabilityMetadata: {
            /** @description Brief description of the reference person. */
            referencePersonBrief?: string;
            /**
             * Format: int64
             * @description Unique identifier for a reference person (ZoomInfo Person ID). A reference person is a person who the sales person has interacted with in the past through the ZoomInfo platform (e.g. copy, export, view, etc...) or which is found in the tenant's CRM for past closed won deals. Reference contacts are used to find similar contacts at the target company.
             */
            referencePersonId?: number;
            /** @description Source interaction type used to generate this recommendation, such as copied, exported, viewed, or CRM closed-won contacts. */
            sourceType?: components["schemas"]["SourceType"];
        };
        /** @description Form complete insight model */
        FormCompleteInsight: {
            /**
             * Format: date-time
             * @description Date of creation of the insight.
             */
            createdAt?: string;
            /**
             * Format: date-time
             * @description Expiration date of the insight.
             */
            expiresAt?: string;
            /**
             * Format: int64
             * @description Unique id for the insight.
             */
            id?: number;
            /**
             * Format: date-time
             * @description Date of the insight.
             */
            insightDate?: string;
            /** @description Signal id. */
            signalId: string;
            /** @description Structured payload containing signal-specific data based on the signal type. */
            signalPayload: components["schemas"]["FormCompleteSignalPayload"];
            /**
             * @description Type of the signal. (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            signalType: "zi.formcomplete";
            /**
             * Format: int64
             * @description Company id.
             */
            ziCompanyId: number;
        };
        /** @description Form complete signal payload. */
        FormCompleteSignalPayload: {
            /**
             * Format: date-time
             * @description UTC timestamp when the signal event was originally recorded or detected.
             */
            date: string;
            /** @description Text describing this signal for display purposes. */
            displayText: string;
            /** @description The customer-defined name of the submitted form, as configured in ZoomInfo FormComplete. */
            formName: string;
            /** @description Status of the form. */
            formStatus: components["schemas"]["FormStatus"];
            /** @description Indicates if the person is part of an identified buying committee or decision-making group. */
            inBuyingGroup?: boolean;
            /** @description Indicates if the person holds a C-level executive position. */
            isCLevel?: boolean;
            /** @description Indicates if this person was identified as a contact of interest. */
            isPersonOfInterest?: boolean;
            /** @description Name of the person associated with this signal. */
            name: string;
            /** @description Person's job title. */
            title?: string;
            /**
             * Format: int64
             * @description ZoomInfo company id.
             */
            ziCompanyId: number;
            /**
             * Format: int64
             * @description ZoomInfo contact id for the person.
             */
            ziContactId: number;
        };
        /**
         * @description Submission status of a completed form.
         * @enum {string}
         */
        FormStatus: "SUBMITTED" | "PENDING";
        /** @description Funding insight model */
        FundingInsight: {
            /**
             * Format: date-time
             * @description Date of creation of the insight.
             */
            createdAt?: string;
            /**
             * Format: date-time
             * @description Expiration date of the insight.
             */
            expiresAt?: string;
            /**
             * Format: int64
             * @description Unique id for the insight.
             */
            id?: number;
            /**
             * Format: date-time
             * @description Date of the insight.
             */
            insightDate?: string;
            /** @description Signal id. */
            signalId: string;
            /** @description Structured payload containing signal-specific data based on the signal type. */
            signalPayload: components["schemas"]["FundingSignalPayload"];
            /**
             * @description Type of the signal. (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            signalType: "zi.funding";
            /**
             * Format: int64
             * @description Company id.
             */
            ziCompanyId: number;
        };
        /** @description Funding signal payload - represents company funding events. */
        FundingSignalPayload: {
            /** @description Total capital raised in this funding event, expressed as a formatted string (e.g. '$10M'). */
            amount: string;
            /**
             * Format: date-time
             * @description UTC timestamp when the signal event was originally recorded or detected.
             */
            date: string;
            /** @description Text describing this signal for display purposes. */
            displayText: string;
            /** @description List of investor names participating in the funding round. */
            investors: string[];
            /** @description Type of funding round or event (e.g. 'Series A', 'Venture Round', 'Private Equity'). */
            type: string;
        };
        /** @description G2 insight model */
        G2Insight: {
            /**
             * Format: date-time
             * @description Date of creation of the insight.
             */
            createdAt?: string;
            /**
             * Format: date-time
             * @description Expiration date of the insight.
             */
            expiresAt?: string;
            /**
             * Format: int64
             * @description Unique id for the insight.
             */
            id?: number;
            /**
             * Format: date-time
             * @description Date of the insight.
             */
            insightDate?: string;
            /** @description Signal id. */
            signalId: string;
            /** @description Structured payload containing signal-specific data based on the signal type. */
            signalPayload: components["schemas"]["G2SignalPayload"];
            /**
             * @description Type of the signal. (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            signalType: "zi.g2";
            /**
             * Format: int64
             * @description Company id.
             */
            ziCompanyId: number;
        };
        /** @description G2 signal payload. */
        G2SignalPayload: {
            /**
             * Format: date-time
             * @description UTC timestamp when the signal event was originally recorded or detected.
             */
            date: string;
            /** @description Text describing this signal for display purposes. */
            displayText: string;
            /** @description Label combining type and content in the format '{type}: {content}' (e.g. 'Competitors: Acme Corp', 'Category: Sales Intelligence'). */
            subject: string;
            /** @description The type of G2 page visited. One of: 'Category', 'Compare', 'Competitors', 'Licensed Content', 'Pricing Page', 'Product Reference Page', 'Profile'. */
            type: string;
        };
        /**
         * @description Common audit fields present on all customer-level GTM configuration entities.
         *     These fields track the full lifecycle of a record including creation, modification,
         *     archival (temporary hiding), and soft deletion (permanent hiding for compliance).
         *     A record can be active, deleted only, or both.
         */
        GtmConfigAuditFields: {
            /**
             * Format: date-time
             * @description ISO 8601 timestamp when the record was archived. Archived records are identified by archivedAt and archivedBy
             */
            readonly archivedAt?: string;
            /** @description User ID of the person who archived the record */
            readonly archivedBy?: string;
            /**
             * Format: date-time
             * @description ISO 8601 timestamp when the record was originally created. Auto-populated by backend.
             */
            readonly createdAt?: string;
            /** @description User ID of the person who created the record. Extracted from the JWT token on creation. */
            readonly createdBy?: string;
            /**
             * Format: date-time
             * @description ISO 8601 timestamp of the most recent modification to the record. Auto-populated by backend.
             */
            readonly updatedAt?: string;
            /** @description User ID of the person who last modified the record. Extracted from the JWT token on update. */
            readonly updatedBy?: string;
        };
        /**
         * @description Source type indicating how a GTM configuration record was created or last modified.
         *     Used across all customer-level entities for audit provenance tracking.
         *     When source is explicitly set in a request, the corresponding created_by/updated_by must also be provided.
         *     Defaults to 'manual' when not specified.
         * @enum {string}
         */
        GtmConfigSourceType: "manual" | "import" | "system" | "mcp";
        /** @description Ideal Customer Profile resource. */
        IdealCompanySegment: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["IdealCompanySegmentAttributes"];
            /** @description The unique identifier for the resource */
            id: string;
            /** @description Non-standard meta information about the resource */
            readonly meta?: components["schemas"]["GtmConfigAuditFields"];
            /**
             * @description The type of the resource
             * @default IdealCompanySegment
             */
            type: string;
        };
        /**
         * @description Attributes that define an ideal company segment/Ideal Customer Profile.
         *
         *     Ideal company segments/Ideal Customer Profile describe the types of companies a customer wants to target.
         *     This typically contains industry, company size, revenue range, geography, etc.
         */
        IdealCompanySegmentAttributes: {
            /** @description Flexible key-value store for customer-specific custom fields and extended metadata. The backend validates schema and value types. Use this to capture additional profile criteria beyond the standard fields. */
            customFields?: components["schemas"]["CustomFieldItem"][];
            /** @description Description of the profile. Typically includes industry, company size, revenue range, geography, etc. Maximum 10,000 characters. */
            description?: string;
            /** @description Name of the Ideal Customer Profile (e.g., 'Enterprise SaaS', 'Mid-Market Financial Services'). Required when creating a new record. When provided (for create or update), must be between 1 and 1024 characters. */
            name?: string;
            /** @description Source type indicating how this profile record was created or last modified. Defaults to `manual`. See `GtmConfigSourceType` for allowed values. When set explicitly, the backend validates source consistency with the `created_by` and `updated_by` fields. */
            readonly source?: components["schemas"]["GtmConfigSourceType"];
        };
        /** @description API model for a list of Ideal Customer Profiles. */
        IdealCompanySegmentListResponse: {
            /** @description The primary data of the document */
            data: components["schemas"]["IdealCompanySegment"][];
        };
        /** @description API model for a single Ideal Customer Profile. */
        IdealCompanySegmentModel: {
            /** @description The primary data of the document */
            data: components["schemas"]["IdealCompanySegment"];
        };
        /** @description Ideal Customer Profile resource for upsert operations. */
        IdealCompanySegmentUpsert: {
            /** @description The primary data of the document */
            data: {
                /** @description The attributes defining the resource */
                attributes: components["schemas"]["IdealCompanySegmentAttributes"];
                /** @description The unique identifier for the resource */
                id?: string;
                /** @description Non-standard meta information about the resource */
                meta?: components["schemas"]["GtmConfigAuditFields"];
                /**
                 * @description The type of the resource
                 * @enum {string}
                 */
                type: "IdealCompanySegment";
            };
        };
        InsightUnion: components["schemas"]["FundingInsight"] | components["schemas"]["CxoChangeInsight"] | components["schemas"]["ScoopsInsight"] | components["schemas"]["WebsightsInsight"] | components["schemas"]["BuyingCommitteeChangeInsight"] | components["schemas"]["AccountLevelIntentInsight"] | components["schemas"]["CompetitorIntentInsight"] | components["schemas"]["MpocChangeInsight"] | components["schemas"]["G2Insight"] | components["schemas"]["TrustRadiusInsight"] | components["schemas"]["AnomalousHiringInsight"] | components["schemas"]["FormCompleteInsight"] | components["schemas"]["PodcastMentionsInsight"] | components["schemas"]["MarketingCampaignsInsight"] | components["schemas"]["TechnologyInsight"] | components["schemas"]["SeniorJobPostingsInsight"] | components["schemas"]["PersonWebsightsInsight"] | components["schemas"]["PersonBasedNewsInsight"] | components["schemas"]["WonDealInsight"] | components["schemas"]["NewContactPreviouslyWorkedForCustomerInsight"] | components["schemas"]["PersonChangeInsight"] | components["schemas"]["UpcomingMeetingInsight"] | components["schemas"]["LowActiveContactsInsight"] | components["schemas"]["NoDecisionMakerInsight"] | components["schemas"]["NoPostMeetingFollowUpInsight"] | components["schemas"]["UpcomingRenewalInsight"] | components["schemas"]["MAInsight"] | components["schemas"]["ProductLaunchInsight"] | components["schemas"]["EarningsInsight"] | components["schemas"]["PartnershipInsight"] | components["schemas"]["LayoffsInsight"] | components["schemas"]["PainPointInsight"] | components["schemas"]["DivestitureInsight"] | components["schemas"]["IPOInsight"] | components["schemas"]["AwardInsight"] | components["schemas"]["ProjectInsight"];
        /** @description IPO insight model */
        IPOInsight: {
            /**
             * Format: date-time
             * @description Date of creation of the insight.
             */
            createdAt?: string;
            /**
             * Format: date-time
             * @description Expiration date of the insight.
             */
            expiresAt?: string;
            /**
             * Format: int64
             * @description Unique id for the insight.
             */
            id?: number;
            /**
             * Format: date-time
             * @description Date of the insight.
             */
            insightDate?: string;
            /** @description Signal id. */
            signalId: string;
            /** @description Structured payload containing signal-specific data based on the signal type. */
            signalPayload: components["schemas"]["IPOSignalPayload"];
            /**
             * @description Type of the signal. (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            signalType: "zi.ipo";
            /**
             * Format: int64
             * @description Company id.
             */
            ziCompanyId: number;
        };
        /** @description IPO signal payload. */
        IPOSignalPayload: {
            /**
             * Format: date-time
             * @description UTC timestamp when the signal event was originally recorded or detected.
             */
            date: string;
            /** @description Text describing this signal for display purposes. */
            displayText: string;
            /** @description The text content of the signal. */
            text: string;
        };
        /** @description Layoffs insight model */
        LayoffsInsight: {
            /**
             * Format: date-time
             * @description Date of creation of the insight.
             */
            createdAt?: string;
            /**
             * Format: date-time
             * @description Expiration date of the insight.
             */
            expiresAt?: string;
            /**
             * Format: int64
             * @description Unique id for the insight.
             */
            id?: number;
            /**
             * Format: date-time
             * @description Date of the insight.
             */
            insightDate?: string;
            /** @description Signal id. */
            signalId: string;
            /** @description Structured payload containing signal-specific data based on the signal type. */
            signalPayload: components["schemas"]["LayoffsSignalPayload"];
            /**
             * @description Type of the signal. (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            signalType: "zi.layoffs";
            /**
             * Format: int64
             * @description Company id.
             */
            ziCompanyId: number;
        };
        /** @description Layoffs signal payload. */
        LayoffsSignalPayload: {
            /**
             * Format: date-time
             * @description UTC timestamp when the signal event was originally recorded or detected.
             */
            date: string;
            /** @description Text describing this signal for display purposes. */
            displayText: string;
            /** @description The text content of the signal. */
            text: string;
        };
        /** @description Metadata for a lookalike contact entity. */
        LookalikeMetadata: {
            /** @description Brief description of the reference person used to find lookalike contacts. */
            referencePersonBrief: string;
            /**
             * Format: int64
             * @description Unique identifier for the reference person (ZoomInfo Person ID) that is used to search contact lookalikes.
             */
            referencePersonId: number;
        };
        /** @description Low active contacts insight model */
        LowActiveContactsInsight: {
            /**
             * Format: date-time
             * @description Date of creation of the insight.
             */
            createdAt?: string;
            /**
             * Format: date-time
             * @description Expiration date of the insight.
             */
            expiresAt?: string;
            /**
             * Format: int64
             * @description Unique id for the insight.
             */
            id?: number;
            /**
             * Format: date-time
             * @description Date of the insight.
             */
            insightDate?: string;
            /** @description Signal id. */
            signalId: string;
            /** @description Structured payload containing signal-specific data based on the signal type. */
            signalPayload: components["schemas"]["LowActiveContactsSignalPayload"];
            /**
             * @description Type of the signal. (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            signalType: "zi.lowactivecontacts";
            /**
             * Format: int64
             * @description Company id.
             */
            ziCompanyId: number;
        };
        /** @description Low active contacts signal payload. */
        LowActiveContactsSignalPayload: {
            /**
             * Format: date-time
             * @description UTC timestamp when the signal event was originally recorded or detected.
             */
            date: string;
            /** @description Text describing this signal for display purposes. */
            displayText: string;
            /**
             * Format: int64
             * @description Number of contacts at this account who have been engaged (via CRM or Chorus activity) on the open opportunity.
             */
            engagedContactsCount: number;
            /**
             * Format: date-time
             * @description UTC timestamp of the most recent engagement activity detected on the open opportunity.
             */
            lastEngagementDate: string;
        };
        /** @description M&A insight model */
        MAInsight: {
            /**
             * Format: date-time
             * @description Date of creation of the insight.
             */
            createdAt?: string;
            /**
             * Format: date-time
             * @description Expiration date of the insight.
             */
            expiresAt?: string;
            /**
             * Format: int64
             * @description Unique id for the insight.
             */
            id?: number;
            /**
             * Format: date-time
             * @description Date of the insight.
             */
            insightDate?: string;
            /** @description Signal id. */
            signalId: string;
            /** @description Structured payload containing signal-specific data based on the signal type. */
            signalPayload: components["schemas"]["MASignalPayload"];
            /**
             * @description Type of the signal. (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            signalType: "zi.m&a";
            /**
             * Format: int64
             * @description Company id.
             */
            ziCompanyId: number;
        };
        /** @description Marketing campaigns insight model */
        MarketingCampaignsInsight: {
            /**
             * Format: date-time
             * @description Date of creation of the insight.
             */
            createdAt?: string;
            /**
             * Format: date-time
             * @description Expiration date of the insight.
             */
            expiresAt?: string;
            /**
             * Format: int64
             * @description Unique id for the insight.
             */
            id?: number;
            /**
             * Format: date-time
             * @description Date of the insight.
             */
            insightDate?: string;
            /** @description Signal id. */
            signalId: string;
            /** @description Structured payload containing signal-specific data based on the signal type. */
            signalPayload: components["schemas"]["MarketingCampaignsSignalPayload"];
            /**
             * @description Type of the signal. (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            signalType: "zi.marketingcampaigns";
            /**
             * Format: int64
             * @description Company id.
             */
            ziCompanyId: number;
        };
        /** @description Marketing campaigns signal payload. */
        MarketingCampaignsSignalPayload: {
            /** @description Name of the company targeted by the campaign. */
            campaignAudienceCompanyName: string;
            /** @description Name of the marketing campaign. */
            campaignName: string;
            /**
             * Format: int64
             * @description Number of clicks the campaign received.
             */
            clicks: number;
            /**
             * Format: date-time
             * @description UTC timestamp when the signal event was originally recorded or detected.
             */
            date: string;
            /** @description Summary of the marketing campaign and its targeting criteria. */
            description: string;
            /** @description Text describing this signal for display purposes. */
            displayText: string;
            /**
             * Format: int64
             * @description Number of impressions the campaign received.
             */
            impressions: number;
            /**
             * Format: int64
             * @description ZoomInfo company id.
             */
            ziCompanyId: number;
        };
        /** @description M&A signal payload. */
        MASignalPayload: {
            /**
             * Format: date-time
             * @description UTC timestamp when the signal event was originally recorded or detected.
             */
            date: string;
            /** @description Text describing this signal for display purposes. */
            displayText: string;
            /** @description The text content of the signal. */
            text: string;
        };
        /** @description MPOC change insight model */
        MpocChangeInsight: {
            /**
             * Format: date-time
             * @description Date of creation of the insight.
             */
            createdAt?: string;
            /**
             * Format: date-time
             * @description Expiration date of the insight.
             */
            expiresAt?: string;
            /**
             * Format: int64
             * @description Unique id for the insight.
             */
            id?: number;
            /**
             * Format: date-time
             * @description Date of the insight.
             */
            insightDate?: string;
            /** @description Signal id. */
            signalId: string;
            /** @description Structured payload containing signal-specific data based on the signal type. */
            signalPayload: components["schemas"]["MpocChangeSignalPayload"];
            /**
             * @description Type of the signal. (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            signalType: "zi.mpocchange";
            /**
             * Format: int64
             * @description Company id.
             */
            ziCompanyId: number;
        };
        /** @description MPOC change signal payload. */
        MpocChangeSignalPayload: {
            /** @description Specific type of change that triggered this signal. */
            changeType: string;
            /**
             * Format: date-time
             * @description UTC timestamp when the signal event was originally recorded or detected.
             */
            date: string;
            /** @description Text describing this signal for display purposes. */
            displayText: string;
            /** @description Indicates if the person is part of an identified buying committee or decision-making group. */
            inBuyingGroup?: boolean;
            /** @description Indicates if the person holds a C-level executive position. */
            isCLevel?: boolean;
            /** @description Indicates if this person was identified as a contact of interest. */
            isPersonOfInterest?: boolean;
            /** @description Name of the person associated with this signal. */
            name: string;
            /**
             * Format: int64
             * @description ZoomInfo company ID of the person's previous employer.
             */
            previousCompanyId?: number;
            /** @description Name of the company where the person was previously employed. */
            previousCompanyName?: string;
            /** @description Person's previous job title. */
            previousTitle?: string;
            /** @description Person's job title. */
            title?: string;
            /**
             * Format: int64
             * @description ZoomInfo company id.
             */
            ziCompanyId: number;
            /**
             * Format: int64
             * @description ZoomInfo contact id for the person.
             */
            ziContactId: number;
        };
        /** @description New contact previously worked for customer insight model */
        NewContactPreviouslyWorkedForCustomerInsight: {
            /**
             * Format: date-time
             * @description Date of creation of the insight.
             */
            createdAt?: string;
            /**
             * Format: date-time
             * @description Expiration date of the insight.
             */
            expiresAt?: string;
            /**
             * Format: int64
             * @description Unique id for the insight.
             */
            id?: number;
            /**
             * Format: date-time
             * @description Date of the insight.
             */
            insightDate?: string;
            /** @description Signal id. */
            signalId: string;
            /** @description Structured payload containing signal-specific data based on the signal type. */
            signalPayload: components["schemas"]["NewContactPreviouslyWorkedForCustomerSignalPayload"];
            /**
             * @description Type of the signal. (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            signalType: "zi.newcontactpreviouslyworkedforcustomer";
            /**
             * Format: int64
             * @description Company id.
             */
            ziCompanyId: number;
        };
        /** @description New contact previously worked for customer signal payload. */
        NewContactPreviouslyWorkedForCustomerSignalPayload: {
            /** @description Specific type of change that triggered this signal. */
            changeType: string;
            /**
             * Format: date-time
             * @description UTC timestamp when the signal event was originally recorded or detected.
             */
            date: string;
            /** @description Text describing this signal for display purposes. */
            displayText: string;
            /** @description Indicates if the person is part of an identified buying committee or decision-making group. */
            inBuyingGroup?: boolean;
            /** @description Indicates if the person holds a C-level executive position. */
            isCLevel?: boolean;
            /** @description Indicates if this person was identified as a contact of interest. */
            isPersonOfInterest?: boolean;
            /** @description Name of the person associated with this signal. */
            name: string;
            /**
             * Format: int64
             * @description ZoomInfo company ID of the person's previous employer.
             */
            previousCompanyId?: number;
            /** @description Name of the company where the person was previously employed. */
            previousCompanyName?: string;
            /** @description Person's previous job title. */
            previousTitle?: string;
            /** @description Person's job title. */
            title?: string;
            /**
             * Format: int64
             * @description ZoomInfo company id.
             */
            ziCompanyId: number;
            /**
             * Format: int64
             * @description ZoomInfo contact id for the person.
             */
            ziContactId: number;
        };
        /** @description No decision maker insight model */
        NoDecisionMakerInsight: {
            /**
             * Format: date-time
             * @description Date of creation of the insight.
             */
            createdAt?: string;
            /**
             * Format: date-time
             * @description Expiration date of the insight.
             */
            expiresAt?: string;
            /**
             * Format: int64
             * @description Unique id for the insight.
             */
            id?: number;
            /**
             * Format: date-time
             * @description Date of the insight.
             */
            insightDate?: string;
            /** @description Signal id. */
            signalId: string;
            /** @description Structured payload containing signal-specific data based on the signal type. */
            signalPayload: components["schemas"]["NoDecisionMakerSignalPayload"];
            /**
             * @description Type of the signal. (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            signalType: "zi.nodecisionmaker";
            /**
             * Format: int64
             * @description Company id.
             */
            ziCompanyId: number;
        };
        /** @description No decision maker signal payload. */
        NoDecisionMakerSignalPayload: {
            /**
             * Format: date-time
             * @description UTC timestamp when the signal event was originally recorded or detected.
             */
            date: string;
            /** @description Text describing this signal for display purposes. */
            displayText: string;
            /**
             * Format: int64
             * @description Number of contacts at this account who have been engaged (via CRM or Chorus activity) on the open opportunity.
             */
            engagedContactsCount: number;
            /**
             * Format: date-time
             * @description UTC timestamp of the most recent engagement activity detected on the open opportunity.
             */
            lastEngagementDate: string;
        };
        /** @description No post meeting follow up insight model */
        NoPostMeetingFollowUpInsight: {
            /**
             * Format: date-time
             * @description Date of creation of the insight.
             */
            createdAt?: string;
            /**
             * Format: date-time
             * @description Expiration date of the insight.
             */
            expiresAt?: string;
            /**
             * Format: int64
             * @description Unique id for the insight.
             */
            id?: number;
            /**
             * Format: date-time
             * @description Date of the insight.
             */
            insightDate?: string;
            /** @description Signal id. */
            signalId: string;
            /** @description Structured payload containing signal-specific data based on the signal type. */
            signalPayload: components["schemas"]["NoPostMeetingFollowUpSignalPayload"];
            /**
             * @description Type of the signal. (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            signalType: "zi.nopostmeetingfollowup";
            /**
             * Format: int64
             * @description Company id.
             */
            ziCompanyId: number;
        };
        /** @description No post meeting follow up signal payload. */
        NoPostMeetingFollowUpSignalPayload: {
            /**
             * Format: date-time
             * @description UTC timestamp when the signal event was originally recorded or detected.
             */
            date: string;
            /** @description Text describing this signal for display purposes. */
            displayText: string;
            /** @description Indicates if the person is part of an identified buying committee or decision-making group. */
            inBuyingGroup?: boolean;
            /** @description Indicates if the person holds a C-level executive position. */
            isCLevel?: boolean;
            /** @description Indicates if this person was identified as a contact of interest. */
            isPersonOfInterest?: boolean;
            /** @description System or integration that recorded the meeting (e.g. 'Chorus', 'Salesforce'). */
            meetingSource?: string;
            /** @description Name of the person associated with this signal. */
            name: string;
            /**
             * Format: int64
             * @description Number of meeting participants.
             */
            numberOfParticipants: number;
            /** @description Subject line of the meeting that occurred without a follow-up email. */
            subject: string;
            /** @description Person's job title. */
            title?: string;
            /**
             * Format: int64
             * @description ZoomInfo company id.
             */
            ziCompanyId: number;
            /**
             * Format: int64
             * @description ZoomInfo contact id for the person.
             */
            ziContactId: number;
        };
        /** @description Product or Service resource. */
        OrganizationOffering: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["OrganizationOfferingAttributes"];
            /** @description The unique identifier for the resource */
            id: string;
            /** @description Non-standard meta information about the resource */
            readonly meta?: components["schemas"]["GtmConfigAuditFields"];
            /**
             * @description The type of the resource
             * @default OrganizationOffering
             */
            type: string;
        };
        /**
         * @description Attributes that define a Product or Service  — the discrete products or services provided by a customer's company.
         *
         *     Products or services form the foundation of a customer's go-to-market configuration, capturing the essential strategic context of a product.
         *     A product or service serves as a centralized record for:
         *
         *     * Product Positioning: Capturing how the product is uniquely situated in the market.
         *     * Targeting: Identifying the specific audiences, industries, or company types the product is intended for.
         *     * Pain Point Resolution: Documenting the specific customer problems or challenges the product or service is designed to address.
         *     * Value Proposition: Defining the core benefits and outcomes the product or service provides to the customer.
         *
         *     Collectively, these attributes provide the necessary framework to build a complete GTM picture. The product or service acts as the
         *     primary anchor to which Buyer Personas, Ideal Customer Profiles, and Competitive Intelligence are linked, ensuring all
         *     revenue-generating activities are aligned with the product's strategic intent.
         */
        OrganizationOfferingAttributes: {
            /** @description Text description of competitor information relevant to this specific Product or Service. Maximum 10,000 characters. */
            competitors?: string;
            /** @description Flexible key-value store for customer-specific custom fields and extended metadata. The backend validates schema and value types. Use this to capture additional Product or Service details beyond the standard fields. */
            customFields?: components["schemas"]["CustomFieldItem"][];
            /** @description Detailed description of the Product or Service, including its purpose, target audience, and key benefits. Maximum 10,000 characters. */
            description?: string;
            /** @description Text description of the ideal company segment for this Product or Service. Maximum 10,000 characters. */
            idealCompanySegment?: string;
            /** @description Name of the Product or Service. Required when creating a new record. When provided (for create or update), must be between 1 and 1024 characters. */
            name?: string;
            /** @description Text description of the buyer personas relevant to this Product or Service. Maximum 10,000 characters. */
            offeringBuyerPersonas?: string;
            /** @description Customer pain points this Product or Service addresses. */
            painPoints?: string[];
            /** @description Reviews, testimonials, or case-study references that validate the Product or Service's effectiveness. */
            proofPoints?: string[];
            /** @description Source type indicating how this Product or Service record was created or last modified. Defaults to `manual`. See `GtmConfigSourceType` for allowed values. When set explicitly, the backend validates source consistency with the `created_by` and `updated_by` fields. */
            readonly source?: components["schemas"]["GtmConfigSourceType"];
            /**
             * Format: uri
             * @description URL of the Product or Service's webpage or landing page. Maximum 1024 characters.
             */
            url?: string;
            /** @description Value propositions as articulated by the customer — the key reasons a buyer should choose this Product or Service. */
            valueProposition?: string[];
        };
        /** @description API model for a list of products or services. */
        OrganizationOfferingListResponse: {
            /** @description The primary data of the document */
            data: components["schemas"]["OrganizationOffering"][];
        };
        /** @description API model for a single product or service. */
        OrganizationOfferingModel: {
            /** @description The primary data of the document */
            data: components["schemas"]["OrganizationOffering"];
        };
        /** @description Product or Service resource for upsert operations. */
        OrganizationOfferingUpsert: {
            /** @description The primary data of the document */
            data: {
                /** @description The attributes defining the resource */
                attributes: components["schemas"]["OrganizationOfferingAttributes"];
                /** @description The unique identifier for the resource */
                id?: string;
                /** @description Non-standard meta information about the resource */
                meta?: components["schemas"]["GtmConfigAuditFields"];
                /**
                 * @description The type of the resource
                 * @enum {string}
                 */
                type: "OrganizationOffering";
            };
        };
        /** @description Pain point insight model */
        PainPointInsight: {
            /**
             * Format: date-time
             * @description Date of creation of the insight.
             */
            createdAt?: string;
            /**
             * Format: date-time
             * @description Expiration date of the insight.
             */
            expiresAt?: string;
            /**
             * Format: int64
             * @description Unique id for the insight.
             */
            id?: number;
            /**
             * Format: date-time
             * @description Date of the insight.
             */
            insightDate?: string;
            /** @description Signal id. */
            signalId: string;
            /** @description Structured payload containing signal-specific data based on the signal type. */
            signalPayload: components["schemas"]["PainPointSignalPayload"];
            /**
             * @description Type of the signal. (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            signalType: "zi.painpoint";
            /**
             * Format: int64
             * @description Company id.
             */
            ziCompanyId: number;
        };
        /** @description Pain point signal payload. */
        PainPointSignalPayload: {
            /**
             * Format: date-time
             * @description UTC timestamp when the signal event was originally recorded or detected.
             */
            date: string;
            /** @description Text describing this signal for display purposes. */
            displayText: string;
            /** @description The text content of the signal. */
            text: string;
        };
        /** @description Partnership insight model */
        PartnershipInsight: {
            /**
             * Format: date-time
             * @description Date of creation of the insight.
             */
            createdAt?: string;
            /**
             * Format: date-time
             * @description Expiration date of the insight.
             */
            expiresAt?: string;
            /**
             * Format: int64
             * @description Unique id for the insight.
             */
            id?: number;
            /**
             * Format: date-time
             * @description Date of the insight.
             */
            insightDate?: string;
            /** @description Signal id. */
            signalId: string;
            /** @description Structured payload containing signal-specific data based on the signal type. */
            signalPayload: components["schemas"]["PartnershipSignalPayload"];
            /**
             * @description Type of the signal. (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            signalType: "zi.partnership";
            /**
             * Format: int64
             * @description Company id.
             */
            ziCompanyId: number;
        };
        /** @description Partnership signal payload. */
        PartnershipSignalPayload: {
            /**
             * Format: date-time
             * @description UTC timestamp when the signal event was originally recorded or detected.
             */
            date: string;
            /** @description Text describing this signal for display purposes. */
            displayText: string;
            /** @description The text content of the signal. */
            text: string;
        };
        /** @description Person based news insight model */
        PersonBasedNewsInsight: {
            /**
             * Format: date-time
             * @description Date of creation of the insight.
             */
            createdAt?: string;
            /**
             * Format: date-time
             * @description Expiration date of the insight.
             */
            expiresAt?: string;
            /**
             * Format: int64
             * @description Unique id for the insight.
             */
            id?: number;
            /**
             * Format: date-time
             * @description Date of the insight.
             */
            insightDate?: string;
            /** @description Signal id. */
            signalId: string;
            /** @description Structured payload containing signal-specific data based on the signal type. */
            signalPayload: components["schemas"]["PersonBasedNewsSignalPayload"];
            /**
             * @description Type of the signal. (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            signalType: "zi.personbasednews";
            /**
             * Format: int64
             * @description Company id.
             */
            ziCompanyId: number;
        };
        /** @description Person based news signal payload. */
        PersonBasedNewsSignalPayload: {
            /**
             * Format: date-time
             * @description UTC timestamp when the signal event was originally recorded or detected.
             */
            date: string;
            /** @description Summary of the news article or story featuring this contact. */
            description: string;
            /** @description Text describing this signal for display purposes. */
            displayText: string;
            /** @description Indicates if the person is part of an identified buying committee or decision-making group. */
            inBuyingGroup?: boolean;
            /** @description Indicates if the person holds a C-level executive position. */
            isCLevel?: boolean;
            /** @description Indicates if this person was identified as a contact of interest. */
            isPersonOfInterest?: boolean;
            /** @description Name of the person associated with this signal. */
            name: string;
            /** @description Name of the publication or outlet that published the news (e.g. 'TechCrunch', 'Forbes'). */
            source: string;
            /** @description Person's job title. */
            title?: string;
            /**
             * Format: int64
             * @description ZoomInfo company id.
             */
            ziCompanyId: number;
            /**
             * Format: int64
             * @description ZoomInfo contact id for the person.
             */
            ziContactId: number;
        };
        /** @description Person change insight model */
        PersonChangeInsight: {
            /**
             * Format: date-time
             * @description Date of creation of the insight.
             */
            createdAt?: string;
            /**
             * Format: date-time
             * @description Expiration date of the insight.
             */
            expiresAt?: string;
            /**
             * Format: int64
             * @description Unique id for the insight.
             */
            id?: number;
            /**
             * Format: date-time
             * @description Date of the insight.
             */
            insightDate?: string;
            /** @description Signal id. */
            signalId: string;
            /** @description Structured payload containing signal-specific data based on the signal type. */
            signalPayload: components["schemas"]["PersonChangeSignalPayload"];
            /**
             * @description Type of the signal. (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            signalType: "zi.personchange";
            /**
             * Format: int64
             * @description Company id.
             */
            ziCompanyId: number;
        };
        /** @description Base model for person-related signal payloads with change tracking. */
        PersonChangeSignalPayload: {
            /** @description Specific type of change that triggered this signal. */
            changeType: string;
            /**
             * Format: date-time
             * @description UTC timestamp when the signal event was originally recorded or detected.
             */
            date: string;
            /** @description Text describing this signal for display purposes. */
            displayText: string;
            /** @description Indicates if the person is part of an identified buying committee or decision-making group. */
            inBuyingGroup?: boolean;
            /** @description Indicates if the person holds a C-level executive position. */
            isCLevel?: boolean;
            /** @description Indicates if this person was identified as a contact of interest. */
            isPersonOfInterest?: boolean;
            /** @description Name of the person associated with this signal. */
            name: string;
            /**
             * Format: int64
             * @description ZoomInfo company ID of the person's previous employer.
             */
            previousCompanyId?: number;
            /** @description Name of the company where the person was previously employed. */
            previousCompanyName?: string;
            /** @description Person's previous job title. */
            previousTitle?: string;
            /** @description Person's job title. */
            title?: string;
            /**
             * Format: int64
             * @description ZoomInfo company id.
             */
            ziCompanyId: number;
            /**
             * Format: int64
             * @description ZoomInfo contact id for the person.
             */
            ziContactId: number;
        };
        /** @description Person websights insight model */
        PersonWebsightsInsight: {
            /**
             * Format: date-time
             * @description Date of creation of the insight.
             */
            createdAt?: string;
            /**
             * Format: date-time
             * @description Expiration date of the insight.
             */
            expiresAt?: string;
            /**
             * Format: int64
             * @description Unique id for the insight.
             */
            id?: number;
            /**
             * Format: date-time
             * @description Date of the insight.
             */
            insightDate?: string;
            /** @description Signal id. */
            signalId: string;
            /** @description Structured payload containing signal-specific data based on the signal type. */
            signalPayload: components["schemas"]["PersonWebsightsSignalPayload"];
            /**
             * @description Type of the signal. (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            signalType: "zi.personwebsights";
            /**
             * Format: int64
             * @description Company id.
             */
            ziCompanyId: number;
        };
        /**
         * @description Buying intent level inferred from a known contact's website visit behavior.
         * @enum {string}
         */
        PersonWebsightsIntentLevel: "High" | "Medium" | "Low" | "Unspecified";
        /** @description Person websights signal payload. */
        PersonWebsightsSignalPayload: {
            /**
             * Format: date-time
             * @description UTC timestamp when the signal event was originally recorded or detected.
             */
            date: string;
            /** @description Text describing this signal for display purposes. */
            displayText: string;
            /** @description Indicates if the person is part of an identified buying committee or decision-making group. */
            inBuyingGroup?: boolean;
            /** @description Intent level of the signal. */
            intentLevel: components["schemas"]["PersonWebsightsIntentLevel"];
            /** @description Indicates if the person holds a C-level executive position. */
            isCLevel?: boolean;
            /** @description Indicates if this person was identified as a contact of interest. */
            isPersonOfInterest?: boolean;
            /** @description Name of the person associated with this signal. */
            name: string;
            /** @description Person's job title. */
            title?: string;
            /** @description URL of the page on your website that the contact visited. */
            url: string;
            /**
             * Format: int64
             * @description ZoomInfo company id.
             */
            ziCompanyId: number;
            /**
             * Format: int64
             * @description ZoomInfo contact id for the person.
             */
            ziContactId: number;
        };
        /** @description Podcast mentions insight model */
        PodcastMentionsInsight: {
            /**
             * Format: date-time
             * @description Date of creation of the insight.
             */
            createdAt?: string;
            /**
             * Format: date-time
             * @description Expiration date of the insight.
             */
            expiresAt?: string;
            /**
             * Format: int64
             * @description Unique id for the insight.
             */
            id?: number;
            /**
             * Format: date-time
             * @description Date of the insight.
             */
            insightDate?: string;
            /** @description Signal id. */
            signalId: string;
            /** @description Structured payload containing signal-specific data based on the signal type. */
            signalPayload: components["schemas"]["PodcastMentionsSignalPayload"];
            /**
             * @description Type of the signal. (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            signalType: "zi.podcastmentions";
            /**
             * Format: int64
             * @description Company id.
             */
            ziCompanyId: number;
        };
        /** @description Podcast mentions signal payload. */
        PodcastMentionsSignalPayload: {
            /**
             * Format: date-time
             * @description UTC timestamp when the signal event was originally recorded or detected.
             */
            date: string;
            /** @description Text describing this signal for display purposes. */
            displayText: string;
            /** @description URL to the podcast episode where the contact appeared. */
            externalUrl?: string;
            /** @description AI-generated summary of the podcast episode in which the contact was featured as a guest. */
            text: string;
            /**
             * Format: int64
             * @description ZoomInfo company id.
             */
            ziCompanyId: number;
            /**
             * Format: int64
             * @description The ZoomInfo contact ID for the person.
             */
            ziContactId: number;
        };
        /** @description Product launch insight model */
        ProductLaunchInsight: {
            /**
             * Format: date-time
             * @description Date of creation of the insight.
             */
            createdAt?: string;
            /**
             * Format: date-time
             * @description Expiration date of the insight.
             */
            expiresAt?: string;
            /**
             * Format: int64
             * @description Unique id for the insight.
             */
            id?: number;
            /**
             * Format: date-time
             * @description Date of the insight.
             */
            insightDate?: string;
            /** @description Signal id. */
            signalId: string;
            /** @description Structured payload containing signal-specific data based on the signal type. */
            signalPayload: components["schemas"]["ProductLaunchSignalPayload"];
            /**
             * @description Type of the signal. (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            signalType: "zi.productlaunch";
            /**
             * Format: int64
             * @description Company id.
             */
            ziCompanyId: number;
        };
        /** @description Product launch signal payload. */
        ProductLaunchSignalPayload: {
            /**
             * Format: date-time
             * @description UTC timestamp when the signal event was originally recorded or detected.
             */
            date: string;
            /** @description Text describing this signal for display purposes. */
            displayText: string;
            /** @description The text content of the signal. */
            text: string;
        };
        /** @description Project insight model */
        ProjectInsight: {
            /**
             * Format: date-time
             * @description Date of creation of the insight.
             */
            createdAt?: string;
            /**
             * Format: date-time
             * @description Expiration date of the insight.
             */
            expiresAt?: string;
            /**
             * Format: int64
             * @description Unique id for the insight.
             */
            id?: number;
            /**
             * Format: date-time
             * @description Date of the insight.
             */
            insightDate?: string;
            /** @description Signal id. */
            signalId: string;
            /** @description Structured payload containing signal-specific data based on the signal type. */
            signalPayload: components["schemas"]["ProjectSignalPayload"];
            /**
             * @description Type of the signal. (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            signalType: "zi.project";
            /**
             * Format: int64
             * @description Company id.
             */
            ziCompanyId: number;
        };
        /** @description Project signal payload. */
        ProjectSignalPayload: {
            /**
             * Format: date-time
             * @description UTC timestamp when the signal event was originally recorded or detected.
             */
            date: string;
            /** @description Text describing this signal for display purposes. */
            displayText: string;
            /** @description The text content of the signal. */
            text: string;
        };
        /** @description Scoops insight model */
        ScoopsInsight: {
            /**
             * Format: date-time
             * @description Date of creation of the insight.
             */
            createdAt?: string;
            /**
             * Format: date-time
             * @description Expiration date of the insight.
             */
            expiresAt?: string;
            /**
             * Format: int64
             * @description Unique id for the insight.
             */
            id?: number;
            /**
             * Format: date-time
             * @description Date of the insight.
             */
            insightDate?: string;
            /** @description Signal id. */
            signalId: string;
            /** @description Structured payload containing signal-specific data based on the signal type. */
            signalPayload: components["schemas"]["ScoopsSignalPayload"];
            /**
             * @description Type of the signal. (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            signalType: "zi.scoop";
            /**
             * Format: int64
             * @description Company id.
             */
            ziCompanyId: number;
        };
        /** @description Scoops signal payload. */
        ScoopsSignalPayload: {
            /**
             * Format: date-time
             * @description UTC timestamp when the signal event was originally recorded or detected.
             */
            date: string;
            /** @description Text describing this signal for display purposes. */
            displayText: string;
            /** @description The text content of the signal. */
            text: string;
        };
        /** @description Senior job postings insight model */
        SeniorJobPostingsInsight: {
            /**
             * Format: date-time
             * @description Date of creation of the insight.
             */
            createdAt?: string;
            /**
             * Format: date-time
             * @description Expiration date of the insight.
             */
            expiresAt?: string;
            /**
             * Format: int64
             * @description Unique id for the insight.
             */
            id?: number;
            /**
             * Format: date-time
             * @description Date of the insight.
             */
            insightDate?: string;
            /** @description Signal id. */
            signalId: string;
            /** @description Structured payload containing signal-specific data based on the signal type. */
            signalPayload: components["schemas"]["SeniorJobPostingsSignalPayload"];
            /**
             * @description Type of the signal. (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            signalType: "zi.seniorjobpostings";
            /**
             * Format: int64
             * @description Company id.
             */
            ziCompanyId: number;
        };
        /** @description Senior job postings signal payload. */
        SeniorJobPostingsSignalPayload: {
            /**
             * Format: date-time
             * @description UTC timestamp when the signal event was originally recorded or detected.
             */
            date: string;
            /** @description Department associated with the open senior leadership role (e.g. 'Engineering', 'Finance'). */
            department?: string;
            /** @description Text describing this signal for display purposes. */
            displayText: string;
            /** @description Description of the open senior leadership role, including job title and any relevant details from the posting. */
            text: string;
        };
        /**
         * @description Type of sales intelligence signal for a company insight.
         * @enum {string}
         */
        SignalType: "zi.funding" | "zi.cxochange" | "zi.scoop" | "zi.websights" | "zi.buyingcommitteechange" | "zi.account-level-intent.spike" | "zi.intent.competitor.spike" | "zi.mpocchange" | "zi.g2" | "zi.trustradius" | "zi.anomaloushiring" | "zi.formcomplete" | "zi.podcastmentions" | "zi.marketingcampaigns" | "zi.technology" | "zi.seniorjobpostings" | "zi.personwebsights" | "zi.personbasednews" | "zi.wondeal" | "zi.newcontactpreviouslyworkedforcustomer" | "zi.personchange" | "zi.upcomingmeeting" | "zi.lowactivecontacts" | "zi.nodecisionmaker" | "zi.nopostmeetingfollowup" | "zi.upcomingrenewal" | "zi.m&a" | "zi.productlaunch" | "zi.earnings" | "zi.partnership" | "zi.layoffs" | "zi.painpoint" | "zi.divestiture" | "zi.ipo" | "zi.award" | "zi.project";
        /** @description Attributes describing a single similar company. */
        SimilarCompanyAttributes: {
            /** @description Name of the lookalike company. */
            companyName: string;
            /** @description Country where the lookalike company is headquartered. */
            country: string;
            /** @description Employee count range of the lookalike company. */
            employeeRange: string;
            /** @description Primary industry of the lookalike company. */
            industry: string;
            /**
             * Format: int32
             * @description Rank of the lookalike company in the results, with 1 being the most similar.
             */
            rank: number;
            /** @description Revenue range of the lookalike company. */
            revenueRange: string;
            /**
             * Format: double
             * @description Similarity score between the input company and the lookalike company, ranging from 0 to 1. Higher values indicate higher similarity.
             */
            score: number;
        };
        /**
         * @description Source interaction type used to generate contact recommendations.
         * @enum {string}
         */
        SourceType: "AMPLITUDE_COPIED_CONTACTS" | "AMPLITUDE_EXPORTED_CONTACTS" | "AMPLITUDE_VIEWED_CONTACTS" | "CRM_CLOSED_WON_ENGAGED_CONTACTS" | "CRM_CLOSED_WON_CONTACTS" | "COLD_START_CONTACTS";
        /** @description Technology insight model */
        TechnologyInsight: {
            /**
             * Format: date-time
             * @description Date of creation of the insight.
             */
            createdAt?: string;
            /**
             * Format: date-time
             * @description Expiration date of the insight.
             */
            expiresAt?: string;
            /**
             * Format: int64
             * @description Unique id for the insight.
             */
            id?: number;
            /**
             * Format: date-time
             * @description Date of the insight.
             */
            insightDate?: string;
            /** @description Signal id. */
            signalId: string;
            /** @description Structured payload containing signal-specific data based on the signal type. */
            signalPayload: components["schemas"]["TechnologySignalPayload"];
            /**
             * @description Type of the signal. (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            signalType: "zi.technology";
            /**
             * Format: int64
             * @description Company id.
             */
            ziCompanyId: number;
        };
        /** @description Technology signal payload. */
        TechnologySignalPayload: {
            /** @description High-level technology category (e.g. 'CRM', 'Marketing Automation', 'Cloud Infrastructure'). */
            category: string;
            /** @description Status of the Technology signal. */
            changeType: components["schemas"]["TechnologyStatus"];
            /**
             * Format: date-time
             * @description UTC timestamp when the signal event was originally recorded or detected.
             */
            date: string;
            /** @description Text describing this signal for display purposes. */
            displayText: string;
            /** @description More specific classification within the category (e.g. 'Sales CRM', 'Email Marketing'). */
            subCategory: string;
            /** @description Description of the technology and its relevance to the signal (e.g. 'Salesforce is a cloud-based CRM platform used to manage sales pipelines and customer relationships'). */
            text: string;
            /** @description Name of the technology vendor or provider (e.g. 'Salesforce', 'HubSpot'). */
            vendor: string;
        };
        /**
         * @description Indicates whether a technology was added to the company's tech stack.
         * @enum {string}
         */
        TechnologyStatus: "ADD" | "DROP";
        /** @description Generic text-based signal payload for news and announcements. */
        TextBasedSignalPayload: {
            /**
             * Format: date-time
             * @description UTC timestamp when the signal event was originally recorded or detected.
             */
            date: string;
            /** @description Text describing this signal for display purposes. */
            displayText: string;
            /** @description The text content of the signal. */
            text: string;
        };
        /**
         * @description Label indicating which type of TrustRadius page the activity occurred on.
         * @enum {string}
         */
        TrustRadiusActivityLabel: "Category" | "Product Listing" | "Product Details" | "Product Pricing" | "Product Reviews" | "Review" | "Comparison" | "Comparisons" | "Competitors" | "Features Scorecard" | "Product Paid CTA" | "Category Top Rated" | "Category Products" | "Product Overview";
        /**
         * @description Source indicating where the TrustRadius activity originated.
         * @enum {string}
         */
        TrustRadiusActivitySource: "Category" | "Competitor" | "Licensed Product";
        /**
         * @description Type of activity performed by a contact on TrustRadius.
         * @enum {string}
         */
        TrustRadiusActivityType: "view" | "click" | "share";
        /** @description TrustRadius insight model */
        TrustRadiusInsight: {
            /**
             * Format: date-time
             * @description Date of creation of the insight.
             */
            createdAt?: string;
            /**
             * Format: date-time
             * @description Expiration date of the insight.
             */
            expiresAt?: string;
            /**
             * Format: int64
             * @description Unique id for the insight.
             */
            id?: number;
            /**
             * Format: date-time
             * @description Date of the insight.
             */
            insightDate?: string;
            /** @description Signal id. */
            signalId: string;
            /** @description Structured payload containing signal-specific data based on the signal type. */
            signalPayload: components["schemas"]["TrustRadiusSignalPayload"];
            /**
             * @description Type of the signal. (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            signalType: "zi.trustradius";
            /**
             * Format: int64
             * @description Company id.
             */
            ziCompanyId: number;
        };
        /** @description TrustRadius signal payload. */
        TrustRadiusSignalPayload: {
            /** @description Label of the TrustRadius Signal. */
            activityLabel: components["schemas"]["TrustRadiusActivityLabel"];
            /** @description Activity Location Info including city, state, country, etc. */
            activityLocationInfo: components["schemas"]["ActivityLocationInfo"];
            /** @description Source of the TrustRadius Signal. */
            activitySource: components["schemas"]["TrustRadiusActivitySource"];
            /** @description Type of the TrustRadius Signal. */
            activityType: components["schemas"]["TrustRadiusActivityType"];
            /**
             * Format: date-time
             * @description UTC timestamp when the signal event was originally recorded or detected.
             */
            date: string;
            /** @description Text describing this signal for display purposes. */
            displayText: string;
            /** @description The TrustRadius page type where the activity occurred (e.g. 'ProductListing', 'Comparison', 'Competitors'). */
            name?: string;
            /** @description If the activity includes a comparison between A and B, this field indicates the name of the comparison object B. */
            nameB?: string;
            /** @description Human-readable sentence describing the activity (e.g. 'Viewed the Acme Corp product listing'). Combines the activity type with the subject product name. */
            text: string;
            /** @description Listing type of the primary product associated with this activity (e.g. 'product', 'service'). */
            type?: string;
            /** @description If the activity includes a comparison between A and B, this field indicates the type of the comparison object B. */
            typeB?: string;
            /** @description Vendor of the primary product or listing associated with this activity. */
            vendor?: string;
            /** @description If the activity includes a comparison between A and B, this field indicates the vendor of the comparison object B. */
            vendorB?: string;
        };
        /** @description Upcoming meeting insight model */
        UpcomingMeetingInsight: {
            /**
             * Format: date-time
             * @description Date of creation of the insight.
             */
            createdAt?: string;
            /**
             * Format: date-time
             * @description Expiration date of the insight.
             */
            expiresAt?: string;
            /**
             * Format: int64
             * @description Unique id for the insight.
             */
            id?: number;
            /**
             * Format: date-time
             * @description Date of the insight.
             */
            insightDate?: string;
            /** @description Signal id. */
            signalId: string;
            /** @description Structured payload containing signal-specific data based on the signal type. */
            signalPayload: components["schemas"]["UpcomingMeetingSignalPayload"];
            /**
             * @description Type of the signal. (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            signalType: "zi.upcomingmeeting";
            /**
             * Format: int64
             * @description Company id.
             */
            ziCompanyId: number;
        };
        /** @description Upcoming meeting signal payload. */
        UpcomingMeetingSignalPayload: {
            /**
             * Format: date-time
             * @description UTC timestamp when the signal event was originally recorded or detected.
             */
            date: string;
            /** @description Text describing this signal for display purposes. */
            displayText: string;
            /** @description List of external meeting participants (those outside your organization). Each entry is the participant's full name (e.g. 'Jane Doe'), full name with job title (e.g. 'Jane Doe, VP of Marketing'), or email address if no name is available (e.g. 'alex@example.com'). */
            externalParticipants: string[];
            /** @description AI-generated summary providing context about the meeting, attendees, and key talking points. */
            meetingBrief: string;
            /** @description Scheduled start time of the meeting as an ISO 8601 string (e.g. '2024-06-15T14:00:00Z'). */
            meetingStartTime: string;
            /** @description Subject line of the upcoming meeting as recorded in the calendar or CRM. */
            meetingSubject: string;
        };
        /** @description Upcoming renewal insight model */
        UpcomingRenewalInsight: {
            /**
             * Format: date-time
             * @description Date of creation of the insight.
             */
            createdAt?: string;
            /**
             * Format: date-time
             * @description Expiration date of the insight.
             */
            expiresAt?: string;
            /**
             * Format: int64
             * @description Unique id for the insight.
             */
            id?: number;
            /**
             * Format: date-time
             * @description Date of the insight.
             */
            insightDate?: string;
            /** @description Signal id. */
            signalId: string;
            /** @description Structured payload containing signal-specific data based on the signal type. */
            signalPayload: components["schemas"]["UpcomingRenewalSignalPayload"];
            /**
             * @description Type of the signal. (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            signalType: "zi.upcomingrenewal";
            /**
             * Format: int64
             * @description Company id.
             */
            ziCompanyId: number;
        };
        /** @description Upcoming renewal signal payload. */
        UpcomingRenewalSignalPayload: {
            /**
             * Format: date-time
             * @description UTC timestamp when the signal event was originally recorded or detected.
             */
            date: string;
            /** @description Text describing this signal for display purposes. */
            displayText: string;
            /**
             * Format: date-time
             * @description UTC timestamp of when the renewal is due.
             */
            renewalDate: string;
            /** @description Unique identifier for this upcoming renewal signal instance. */
            signalId: string;
        };
        /**
         * @description Type of use case for contact recommendations.
         * @enum {string}
         */
        UseCaseType: "PROSPECTING" | "DEAL_ACCELERATION" | "RENEWAL_AND_GROWTH";
        /** @enum {string} */
        Versions: "1.0";
        /** @description Websights insight model */
        WebsightsInsight: {
            /**
             * Format: date-time
             * @description Date of creation of the insight.
             */
            createdAt?: string;
            /**
             * Format: date-time
             * @description Expiration date of the insight.
             */
            expiresAt?: string;
            /**
             * Format: int64
             * @description Unique id for the insight.
             */
            id?: number;
            /**
             * Format: date-time
             * @description Date of the insight.
             */
            insightDate?: string;
            /** @description Signal id. */
            signalId: string;
            /** @description Structured payload containing signal-specific data based on the signal type. */
            signalPayload: components["schemas"]["WebsightsSignalPayload"];
            /**
             * @description Type of the signal. (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            signalType: "zi.websights";
            /**
             * Format: int64
             * @description Company id.
             */
            ziCompanyId: number;
        };
        /** @description Websights signal payload - represents web activity insights. */
        WebsightsSignalPayload: {
            /**
             * Format: date-time
             * @description UTC timestamp when the signal event was originally recorded or detected.
             */
            date: string;
            /** @description Text describing this signal for display purposes. */
            displayText: string;
            /** @description ZoomInfo-internal identifier that uniquely identifies this signal through the processing pipeline. */
            signalId: string;
            /** @description Computed intent strength label based on the pages visited. May be empty if intent level could not be determined. */
            strength: string;
            /** @description Domain of the customer's website that was visited (e.g. 'zoominfo.com'). This is the domain only, not a full URL with path. */
            url: string;
        };
        /** @description Won deal insight model */
        WonDealInsight: {
            /**
             * Format: date-time
             * @description Date of creation of the insight.
             */
            createdAt?: string;
            /**
             * Format: date-time
             * @description Expiration date of the insight.
             */
            expiresAt?: string;
            /**
             * Format: int64
             * @description Unique id for the insight.
             */
            id?: number;
            /**
             * Format: date-time
             * @description Date of the insight.
             */
            insightDate?: string;
            /** @description Signal id. */
            signalId: string;
            /** @description Structured payload containing signal-specific data based on the signal type. */
            signalPayload: components["schemas"]["WonDealSignalPayload"];
            /**
             * @description Type of the signal. (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            signalType: "zi.wondeal";
            /**
             * Format: int64
             * @description Company id.
             */
            ziCompanyId: number;
        };
        /** @description Won deal signal payload. */
        WonDealSignalPayload: {
            /** @description Monetary value of the closed deal, expressed as a formatted string (e.g. '$50,000'). */
            amount: string;
            /** @description Date the deal was closed, formatted as a string (e.g. '2024-01-15'). */
            closeDate: string;
            /** @description Name of the customer company the deal was closed with (e.g. 'Acme Corp'). */
            companyName: string;
            /**
             * Format: date-time
             * @description UTC timestamp when the signal event was originally recorded or detected.
             */
            date: string;
            /** @description Text describing this signal for display purposes. */
            displayText: string;
            /** @description Name of the CRM opportunity associated with the won deal. */
            opportunityName: string;
            /** @description Name of the CRM user who owns the opportunity. */
            opportunityOwner: string;
            /** @description Signal ID for the won deal signal. */
            signalId: string;
            /** @description CRM opportunity type classifying the nature of the deal (e.g. 'New Business', 'Renewal', 'Upsell'). */
            type: string;
        };
        /** @description The object describing a specific error from the API */
        "ZoomInfo.Core.Foundations.ErrorModel": {
            /** @description The error code describing the error category. A full list of error codes can be found in the documentation for each service */
            code: string;
            /** @description Message containing the specific details about this occurrence of the error */
            detail?: string;
            /** @description The unique id used to identify this specific error instance */
            id: string;
            /** @description An optional object identifying which part of the request caused the error */
            source?: components["schemas"]["ZoomInfo.Core.Foundations.ErrorSourceModel"];
            /** @description The HTTP status code for the error */
            status: string;
            /** @description The error name that describes this type of error */
            title?: string;
        };
        /** @description The standard error response body model for the ZoomInfo API. */
        "ZoomInfo.Core.Foundations.ErrorResponseModel": {
            /** @description A high-level detail of the error(s) that occurred during the request */
            detail?: string;
            /** @description The list of errors raised during the request */
            errors: components["schemas"]["ZoomInfo.Core.Foundations.ErrorModel"][];
            /** @description A high-level summary of the error(s) detected */
            title?: string;
        };
        "ZoomInfo.Core.Foundations.ErrorSourceModel": {
            /** @description Identifies the cookie name that caused the issue */
            cookie?: string;
            /** @description Identifies the header name that caused the error */
            header?: string;
            /** @description The name of the path or query parameter that caused the error */
            parameter?: string;
            /** @description An RFC 6901 compliant JSON pointer to the entity in the request body that caused the error */
            pointer?: string;
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    AccountSummaryInterface_getAccountSummary: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The unique identifier of the company */
                companyId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["AccountSummaryResponse"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Too Many Requests */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
        };
    };
    AccountSummaryInterface_askAccountSummaryQuestion: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The unique identifier of the company */
                companyId: number;
            };
            cookie?: never;
        };
        /** @description The request body containing the question details. */
        requestBody: {
            content: {
                "application/vnd.api+json": components["schemas"]["AccountSummaryQuestionRequest"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["AccountSummaryQuestionResponse"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Too Many Requests */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
        };
    };
    InsightsInterface_getCompanyInsightsByType: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description The request body containing company IDs(mandatory) and insight type filters. */
        requestBody: {
            content: {
                "application/vnd.api+json": components["schemas"]["CompanyInsightsByTypeRequest"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["CompanyInsightsByTypeResponse"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Too Many Requests */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
        };
    };
    CompanyLookalikesInterface_companyLookalikes: {
        parameters: {
            query?: {
                /** @description Unique ZoomInfo identifier for the reference company used to retrieve lookalikes. */
                "filter[companyId]"?: string;
                /** @description Name of the reference company used to retrieve lookalikes. Required if companyId is not provided. */
                "filter[companyName]"?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["CompanyLookalikesResponse"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Too Many Requests */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
        };
    };
    ContactLookalikesInterface_getContactLookalikes: {
        parameters: {
            query: {
                /**
                 * @description Unique identifier for the reference person (ZoomInfo Person ID) that is used to search contact lookalikes. This is a required field.
                 *
                 *     Example:
                 *     * If a `referencePersonId` pointing to a person in Microsoft is provided, and if Apple's Zoominfo Company ID is provided as `targetCompanyId`, the endpoint will search for contacts within Apple that have similar persona attributes to this reference person from Microsoft.
                 *     * Using the same example but if `targetCompanyId` **IS NOT** provided, the endpoint will search for contacts across all companies with similar persona attributes to the reference person from Microsoft.
                 */
                "filter[referencePersonId]": number;
                /**
                 * @description Unique identifier (ZoomInfo Company ID) for the target company where lookalike contacts are searched. If not provided, the search is performed within the reference person's company.
                 *
                 *     Example:
                 *     * If Apple's Zoominfo Company ID is provided, the endpoint will search for contacts within Apple that have similar persona attributes to the provided `referencePersonId`.
                 *     * If `targetCompanyId` **IS NOT** provided, the endpoint will search for contacts across all company that have similar persona attributes to the provided `referencePersonId`.
                 */
                "filter[targetCompanyId]"?: number;
                /** @description Number of records to return per page. Default is 25, maximum is 100. */
                "page[size]"?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ContactLookalikeResponse"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Too Many Requests */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
        };
    };
    ContactRecommendationsInterface_getContactRecommendations: {
        parameters: {
            query: {
                /** @description Use case type for the recommendation. This filters recommendations based on the sales motion, such as prospecting, deal acceleration, or renewal and growth. */
                "filter[useCaseType]": components["schemas"]["UseCaseType"];
                /** @description Unique identifier for a target company (ZoomInfo Company ID) in which to get contact recommendations. */
                "filter[ziCompanyId]": number;
                /** @description Number of records to return per page. Default is 25, maximum is 100. */
                "page[size]"?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ContactRecommendationResponse"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Too Many Requests */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
        };
    };
    CustomerBuyerPersonaInterface_listCustomerBuyerPersonas: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["CustomerBuyerPersonaListResponse"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Too Many Requests */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
        };
    };
    CustomerBuyerPersonaInterface_upsertCustomerBuyerPersona: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Buyer persona data to create, or fields to update. Include `id` to update an existing record; omit it to create a new one. */
        requestBody: {
            content: {
                "application/vnd.api+json": components["schemas"]["CustomerBuyerPersonaUpsert"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["CustomerBuyerPersonaModel"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Unprocessable Content */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Too Many Requests */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
        };
    };
    CustomerBuyerPersonaInterface_getCustomerBuyerPersona: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description UUID of the buyer persona to retrieve. */
                buyerPersonaId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["CustomerBuyerPersonaModel"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Too Many Requests */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
        };
    };
    CustomerBuyerPersonaInterface_deleteCustomerBuyerPersona: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description UUID of the buyer persona to permanently delete. */
                buyerPersonaId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": unknown;
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Too Many Requests */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
        };
    };
    CustomerBuyerPersonaInterface_archiveCustomerBuyerPersona: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description UUID of the buyer persona to archive. */
                buyerPersonaId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["CustomerBuyerPersonaModel"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Too Many Requests */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
        };
    };
    CustomerBuyerPersonaInterface_unarchiveCustomerBuyerPersona: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description UUID of the buyer persona to unarchive. */
                buyerPersonaId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["CustomerBuyerPersonaModel"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Too Many Requests */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
        };
    };
    CustomerCompetitorsInterface_listCustomerCompetitors: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["CustomerCompetitorListResponse"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Too Many Requests */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
        };
    };
    CustomerCompetitorsInterface_upsertCustomerCompetitor: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Customer competitor data to create, or fields to update. Include `id` to update an existing record; omit it to create a new one. */
        requestBody: {
            content: {
                "application/vnd.api+json": components["schemas"]["CustomerCompetitorUpsert"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["CustomerCompetitorModel"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Unprocessable Content */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Too Many Requests */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
        };
    };
    CustomerCompetitorsInterface_getCustomerCompetitor: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description UUID of the competitor to retrieve. */
                competitorId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["CustomerCompetitorModel"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Too Many Requests */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
        };
    };
    CustomerCompetitorsInterface_deleteCustomerCompetitor: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description UUID of the competitor to permanently delete. */
                competitorId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": unknown;
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Too Many Requests */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
        };
    };
    CustomerCompetitorsInterface_archiveCustomerCompetitor: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description UUID of the competitor to archive. */
                competitorId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["CustomerCompetitorModel"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Too Many Requests */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
        };
    };
    CustomerCompetitorsInterface_unarchiveCustomerCompetitor: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description UUID of the competitor to unarchive. */
                competitorId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["CustomerCompetitorModel"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Too Many Requests */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
        };
    };
    CustomerSettingsInterface_getCustomerSettings: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["CustomerSettingsModel"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Too Many Requests */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
        };
    };
    CustomerSettingsInterface_upsertCustomerSettings: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Customer settings to create or fields to update. */
        requestBody: {
            content: {
                "application/vnd.api+json": components["schemas"]["CustomerSettingsModelCreate"];
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["CustomerSettingsModel"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Too Many Requests */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
        };
    };
    CustomerSettingsInterface_deleteCustomerSettings: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": unknown;
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Too Many Requests */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
        };
    };
    CustomerIdealCompanySegmentInterface_listIdealCompanySegments: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["IdealCompanySegmentListResponse"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Too Many Requests */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
        };
    };
    CustomerIdealCompanySegmentInterface_upsertIdealCompanySegment: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Ideal company segment data to create, or fields to update. Include `id` to update an existing record; omit it to create a new one. */
        requestBody: {
            content: {
                "application/vnd.api+json": components["schemas"]["IdealCompanySegmentUpsert"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["IdealCompanySegmentModel"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Unprocessable Content */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Too Many Requests */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
        };
    };
    CustomerIdealCompanySegmentInterface_getIdealCompanySegment: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description UUID of the Ideal Customer Profile to retrieve. */
                segmentId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["IdealCompanySegmentModel"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Too Many Requests */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
        };
    };
    CustomerIdealCompanySegmentInterface_deleteIdealCompanySegment: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description UUID of the Ideal Customer Profile to permanently delete. */
                segmentId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": unknown;
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Too Many Requests */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
        };
    };
    CustomerIdealCompanySegmentInterface_archiveIdealCompanySegment: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description UUID of the Ideal Customer Profile to archive. */
                segmentId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["IdealCompanySegmentModel"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Too Many Requests */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
        };
    };
    CustomerIdealCompanySegmentInterface_unarchiveIdealCompanySegment: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description UUID of the Ideal Customer Profile to unarchive. */
                segmentId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["IdealCompanySegmentModel"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Too Many Requests */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
        };
    };
    OrganizationOfferingsInterface_listOrganizationOfferings: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["OrganizationOfferingListResponse"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Too Many Requests */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
        };
    };
    OrganizationOfferingsInterface_upsertOrganizationOffering: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Product or service data to create, or fields to update. Include `id` to update an existing record; omit it to create a new one. */
        requestBody: {
            content: {
                "application/vnd.api+json": components["schemas"]["OrganizationOfferingUpsert"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["OrganizationOfferingModel"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Unprocessable Content */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Too Many Requests */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
        };
    };
    OrganizationOfferingsInterface_getOrganizationOffering: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description UUID of the product or service to retrieve. */
                offeringId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["OrganizationOfferingModel"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Too Many Requests */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
        };
    };
    OrganizationOfferingsInterface_deleteOrganizationOffering: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description UUID of the product or service to permanently delete. */
                offeringId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": unknown;
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Too Many Requests */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
        };
    };
    OrganizationOfferingsInterface_archiveOrganizationOffering: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description UUID of the product or service to archive. */
                offeringId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["OrganizationOfferingModel"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Too Many Requests */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
        };
    };
    OrganizationOfferingsInterface_unarchiveOrganizationOffering: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description UUID of the product or service to unarchive. */
                offeringId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["OrganizationOfferingModel"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
            /** @description Too Many Requests */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ZoomInfo.Core.Foundations.ErrorResponseModel"];
                };
            };
        };
    };
}
