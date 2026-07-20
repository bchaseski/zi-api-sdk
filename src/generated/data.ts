// AUTO-GENERATED from openapi-data-v1.yaml (https://docs.zoominfo.com/openapi/openapi-data-v1.yaml).
// Regenerate with: npm run codegen
/* eslint-disable */

export interface paths {
    "/data/v1/companies/corporate-hierarchy/enrich": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Enrich Corporate Hierarchy
         * @description Enrich the corporate hierarchy structure of up to 25 individual company records. Based on the provided inputs,
         *     ZoomInfo will find the Company that best matches in provided inputs and return the full corporate hierarchy
         *     structure for the matched Company. Corporate hierarchy structure includes the `familyTree` which starts at the
         *     top-level parent company for the matched Company, and lists all Subsidiaries, Acquisitions, Former Names (if a company
         *     within the hierarchy has officially changed names previously). The `familyTree` also lists all known Locations for each
         *     company within the hierarchy. If no match can be made from the provided input values, then a `NoMatch` record is returned.
         *
         *     Additionally, if the company that was matched **IS NOT** the company at the top of the hierarchy structure, the `parentage` can
         *     be provided in the response. This lists the all of the parent companies for the matched company all the way to the top-level
         *     (ultimate parent) company.
         *
         *     The desired `outputFields` must be provided for each request. For more details about all of the available output fields
         *     you can select, please use the [Lookup Enrich](ref:lookupenrichinterface_lookupenrich) endpoint (`filter[entity]=corporate-hierarchy`
         *     and `filter[fieldType]=output`). This will provide a description of each available field, as well as whether or not your account has
         *     access to this field.  If you do not have access to a field that you need, please contact your ZoomInfo Account Manager for purchasing options.
         *
         *     Each record returned by this endpoint will charge a credit from your account, unless that record is already under management
         *     (see [Credit Usage and Limits Guide](doc:credit-usage-and-limits) for more details). If we fail to find the record and return
         *     `NoMatch` or if we return an error code a credit will not be charged.
         */
        post: operations["EnrichInterface_enrichCorporateHierarchy"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/data/v1/companies/enrich": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Enrich Companies
         * @description The Enrich Companies endpoint can be used to retrieve detailed information about up to 25 individual company records.
         *     Best practice is to first use [Search Companies](ref:searchinterface_searchcompany) to identify the records
         *     you want to enrich, and then use the Company IDs as the input to specify the correct records. If your workflow does not
         *     support a two stage retrieval using both Search and Enrich endpoints, you can query the Company Enrich endpoint with more
         *     extensive input information and our system will provide the best match available to the input. The more details you provide
         *     the more likely we are to provide the correct match.
         *
         *     Once you have indicated which records you want to enrich, you must then select which fields you want to return for the
         *     records using the `outputFields` list. For more details about all of the available output fields you can select, please
         *     use the [Lookup Enrich](ref:lookupenrichinterface_lookupenrich) endpoint (`filter[entity]=company` and `filter[fieldType]=output`).
         *     This will provide a description of each available field, as well as whether or not your account has access to this field.
         *     If you do not have access to a field that you need, please contact your ZoomInfo Account Manager for purchasing options.
         *
         *     Each record returned by this endpoint will charge a credit from your account, unless that record is already under management
         *     (see [Credit Usage and Limits Guide](doc:credit-usage-and-limits) for more details). If we fail to find the record and return
         *     “No match” or if we return an error code a credit will not be charged.
         */
        post: operations["EnrichInterface_enrichCompany"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/data/v1/companies/hashtags/enrich": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Enrich Hashtags
         * @description Return a list of hashtags from ZoomInfo's company data that match to the provided company. Hashtags are predefined
         *     categorical labels that classify companies based on specific business characteristics, technologies, or attributes.
         *     They function as structured metadata tags that enable precise filtering and segmentation of companies in the ZoomInfo database.
         *
         *     With reference to ZoomInfo's [Credit Usage and Limits](doc:credit-usage-and-limits), this endpoint will charge a single credit
         *     for the company that is enriched, and the company is also counted as a Record. Each successful response will count as a
         *     Request credit.
         */
        post: operations["EnrichInterface_enrichHashtag"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/data/v1/companies/org-chart/enrich": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Enrich Org Charts
         * @description Enrich the specified Company by providing Org Chart information. For each request, a ZoomInfo Company identifier and
         *     at least one ZoomInfo Department identifier are required. This endpoint then returns ZoomInfo contacts for that company
         *     in the requested department.
         *
         *     Org Chart data displays employees organized by seniority level, enabling you to understand the structural composition
         *     of an organization. Org Chart data can be used to identify decision makers, analyze team composition, track organizational
         *     changes, and target contacts by seniority.
         *
         *     Input parameters may require specific values. You can use the [Lookup Data](ref:lookupinterface_lookup)
         *     endpoint to retrieve the list of possible values.
         *
         *     With reference to ZoomInfo's [Credit Usage and Limits](doc:credit-usage-and-limits), a credit will be counted for the enriched
         *     company, when applicable. Regardless of the number of ZoomInfo Contacts returned, a single Record will be charged per successful
         *     request. Additionally, a Request limit will be charged for each successful request.
         */
        post: operations["EnrichInterface_enrichOrgChart"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/data/v1/companies/search": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Search Companies
         * @description Returns a list of Companies from ZoomInfo's data that meet the specified search criteria.
         *
         *     Input parameters may require specific values. You can use the [Lookup Data](ref:lookupinterface_lookup)
         *     endpoint to retrieve the list of possible values
         *
         *     The Search Companies API only returns basic information about the company: including name, limited location details,
         *     website, and few other basic data points. To get the additional data for companies in your results use the
         *     [Enrich Company API](ref:enrichinterface_enrichcompany)
         *
         *     With reference to ZoomInfo's [Credit Usage and Limits](doc:credit-usage-and-limits), this endpoint does not
         *     consume any credits nor do copmanies returned count towards record limits, but each request will increment against your
         *     request limits.
         */
        post: operations["SearchInterface_searchCompany"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/data/v1/companies/technologies/enrich": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Enrich Technologies
         * @description Return a list of technologies from ZoomInfo's company data that match to the provided company. Technologies data provides
         *     a list of technologies that ZoomInfo has identified the matched company is using. These technologies are identified through
         *     analyzing company websites, analyzing job postings, company and partnership announcements, data partnerships, ai models, and
         *     many other methods.
         *
         *     With reference to ZoomInfo's [Credit Usage and Limits](doc:credit-usage-and-limits), this endpoint will charge a single credit
         *     for the company that is enriched, and the company is also counted as a Record. Each successful response will count as a
         *     Request credit.
         */
        post: operations["EnrichInterface_enrichTechnology"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/data/v1/contacts/enrich": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Enrich Contacts
         * @description Enrich Contacts can be used to retrieve detailed information about up to 25 individual contact records.
         *     Best practice is to first use the [Search Contacts](ref:searchinterface_searchcontact) to identify the records
         *     you want to enrich, and then use the Contact IDs as the input to specify the correct records. If your workflow does not
         *     support a two stage retrieval using both Search and Enrich endpoints, you can query the Contact Enrich Endpoint with more
         *     extensive input information and our system will provide the best match available to the input. The more details you provide
         *     the more likely we are to provide the correct match.
         *
         *     Once you have indicated which records you want to enrich, you must then select which fields you want to return for the
         *     records using the `outputFields` list. For more details about all of the available output fields you can select, please
         *     use the [Lookup Enrich](ref:lookupenrichinterface_lookupenrich) endpoint (`filter[entity]=contact` and `filter[fieldType]=output`).
         *     This will provide a description of each available field, as well as whether or not your account has access to this field.
         *     If you do not have access to a field that you need, please contact your ZoomInfo Account Manager for purchasing options.
         *
         *     You can also use the `requiredFields` list to indicate which fields must be available for output in order to return
         *     a record. For example, if you include `jobTitle` in `requiredFields` we will not return a contact for which we do not
         *     have a job title recorded, even if it is a perfect match for the input criteria you provided.
         *
         *     Each record returned by this endpoint will charge a credit from your account, unless that record is already under management
         *     (see [Credit Usage and Limits Guide](doc:credit-usage-and-limits) for more details). If we fail to find the record and return
         *     “No match” or if we return an error code a credit will not be charged.
         */
        post: operations["EnrichInterface_enrichContact"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/data/v1/contacts/search": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Search Contacts
         * @description Returns a list of Contacts from ZoomInfo's data that meet the specified search criteria.
         *
         *     Input parameters may require specific values. You can use the [Lookup Data](ref:lookupinterface_lookup)
         *     endpoint to retrieve the list of possible values
         *
         *     The Search Contacts API does not return emails, phone numbers, or any other data that can be used to engage with
         *     the contacts in your results, but the results do include hints for what data ZoomInfo has for a specific contact.
         *     To get the additional data for contacts, including emails or phone numbers, use the
         *     [Enrich Contact API](ref:enrichinterface_enrichcontact)
         *
         *     With reference to ZoomInfo's [Credit Usage and Limits](doc:credit-usage-and-limits), this endpoint does not
         *     consume any credits nor do contacts returned count towards record limits, but each request will increment against your
         *     request limits.
         */
        post: operations["SearchInterface_searchContact"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/data/v1/intent/enrich": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Enrich Intent
         * @description Fetch Intent Signals for a company, enriching that company's details with relevant buyer intent data. It is required
         *     for each request to provide at least one of the parameters identifying the company to enrich (`companyId`, `companyName`, or
         *     `companyWebsite`) and at least 1 and up to 50 Intent Topics must be provided in the `topic` parameter. All other parameters
         *     are optional.
         *
         *     Intent data is online behavior-based activity across the internet that links prospective buyers (companies) to a topic.
         *     Intent Signals are the way ZoomInfo tracks intent data and can be used to indicate recent content consumption for a specific
         *     topic by employees at a company. Key terminology for Intent Signals includes:
         *
         *     * **Topic** - A business subject or technology area mapped to a curated collection of keywords and search terms.
         *     When companies research content containing these keywords, it generates intent signals that indicate their buying interest
         *     * **Signal Score** - Indicates the level of a company's interest in a topic based on how recent content consumption
         *     compares to an historical baseline
         *     * **Audience Strength** - Indicates the size of the group at the company that is conducting the research
         *
         *     Use Enrich Intent to find Intent Signals for a single company. To search Intent Signals across all of the companies in
         *     the ZoomInfo database use [Search Intent](ref:searchinterface_searchintent)
         *
         *     Input parameters may require specific values. You can use the [Lookup Data](ref:lookupinterface_lookup)
         *     endpoint to retrieve the list of possible values.
         *
         *     With reference to ZoomInfo's [Credit Usage and Limits](doc:credit-usage-and-limits), this endpoint will charge a single credit
         *     for the company that is enriched, and each Intent Signal returned in the results is counted as a Record and a successful response
         *     will count as a Request credit.
         */
        post: operations["EnrichInterface_enrichIntent"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/data/v1/intent/search": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Search Intent
         * @description Returns a list of Intent Signals from ZoomInfo's data that meet the specified search criteria. It is required
         *     that every request include at least 1 and up to 50 intent topics in the request.
         *
         *     Intent data is online behavior-based activity across the internet that links prospective buyers (companies) to a topic.
         *     Intent Signals are the way ZoomInfo tracks intent data and can be used to indicate recent content consumption for a specific
         *     topic by employees at a company. Key terminology for Intent Signals includes:
         *
         *     * **Topic** - A business subject or technology area mapped to a curated collection of keywords and search terms.
         *     When companies research content containing these keywords, it generates intent signals that indicate their buying interest
         *     * **Signal Score** - Indicates the level of a company's interest in a topic based on how recent content consumption
         *     compares to an historical baseline
         *     * **Audience Strength** - Indicates the size of the group at the company that is conducting the research
         *
         *     Use Search Intent to find Intent Signals across all ZoomInfo companies. To find Intent Signals for a specific company, use the
         *     [Enrich Intent](ref:enrichinterface_enrichintent) endpoint.
         *
         *     Input parameters may require specific values. You can use the [Lookup Data](ref:lookupinterface_lookup)
         *     endpoint to retrieve the list of possible values.
         *
         *     With reference to ZoomInfo's [Credit Usage and Limits](doc:credit-usage-and-limits), this endpoint does not
         *     consume any credits, but each Intent Signal returned in the results is counted as a Record and a successful response
         *     will count as a Request credit.
         */
        post: operations["SearchInterface_searchIntent"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/data/v1/lookup/{fieldName}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Lookup Data
         * @description Returns lookup data.
         */
        get: operations["LookupInterface_lookup"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/data/v1/lookup/enrich": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Lookup Enrich Fields
         * @description Returns lookup enrich fields based on entity and field type filters.
         */
        get: operations["LookupEnrichInterface_lookupEnrich"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/data/v1/lookup/search": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Lookup Search Fields
         * @description Returns lookup search fields based on entity and field type filters.
         */
        get: operations["LookupSearchInterface_lookupSearch"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/data/v1/news/enrich": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Enrich News
         * @description Enrich the specified company with relevant News articles. A company identifier must be provided (companyId, companyName, companyWebsite);
         *     all other criteria are optional.
         *
         *     Input parameters may require specific values. You can use the [Lookup Data](ref:lookupinterface_lookup)
         *     endpoint to retrieve the list of possible values.
         *
         *     Use Enrich News to find News articles for a specific ZoomInfo company. To find News articles across the entire database of
         *     ZoomInfo Companies, use the [Search News](ref:searchinterface_searchnews) endpoint.
         *
         *     With reference to ZoomInfo's [Credit Usage and Limits](doc:credit-usage-and-limits), a credit will be counted for the enriched
         *     company. Each News article returned in the results does count towards the customer's Record limit and a successful response
         *     will count towards the Request limit. For example, a successful response that returns 10 news articles, 1 credit will be charged if
         *     applicable, 10 Records will be counted, and 1 Request will be counted.
         */
        post: operations["EnrichInterface_enrichNews"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/data/v1/news/search": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Search News
         * @description Returns a list of News articles from ZoomInfo's data that meet the specified search criteria. All inputs are optional,
         *     but at least one input must be set to get a successful response.
         *
         *     Input parameters may require specific values. You can use the [Lookup Data](ref:lookupinterface_lookup)
         *     endpoint to retrieve the list of possible values.
         *
         *     Use Search News to find News articles across all ZoomInfo companies, if you want to get News articles for a specific ZoomInfo company,
         *     use the [Enrich News](ref:enrichinterface_enrichnews) endpoint.
         *
         *     With reference to ZoomInfo's [Credit Usage and Limits](doc:credit-usage-and-limits), this endpoint does not
         *     consume any Credits. Each News article returned in the results does count towards the customer's Record Limit
         *     and a successful response will count towards the Request Limit (e.g. for a response that returns 10 news articles, 10 Records will
         *     be counted and 1 Request will be counted)
         */
        post: operations["SearchInterface_searchNews"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/data/v1/scoops/enrich": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Enrich Scoops
         * @description Enrich the specified company with relevant Scoops. A company identifier must be provided (companyId, companyName, companyWebsite);
         *     all other criteria are optional.
         *
         *     Input parameters may require specific values. You can use the [Lookup Data](ref:lookupinterface_lookup)
         *     endpoint to retrieve the list of possible values.
         *
         *     Use Enrich Scoops to find Scoops for a specific ZoomInfo company. To find Scoops across the entire database of
         *     ZoomInfo Companies, use the [Search Scoops](ref:searchinterface_searchscoop) endpoint.
         *
         *     With reference to ZoomInfo's [Credit Usage and Limits](doc:credit-usage-and-limits), a credit will be counted for the enriched
         *     company. Each Scoop returned in the results does count towards the customer's Record limit and a successful response
         *     will count towards the Request limit. For example, a successful response that returns 10 Scoops, 1 credit will be charged if
         *     applicable, 10 Records will be counted, and 1 Request will be counted.
         */
        post: operations["EnrichInterface_enrichScoop"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/data/v1/scoops/search": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Search Scoops
         * @description Returns a list of Scoops from ZoomInfo's data that meet the specified search criteria.
         *
         *     Scoops are real-time business intelligence signals that provide timely insights into significant events
         *     and changes occurring at companies. These actionable data points help sales and marketing teams identify
         *     opportunities and engage prospects at the right moment.
         *
         *     Input parameters may require specific values. You can use the [Lookup Data](ref:lookupinterface_lookup)
         *     endpoint to retrieve the list of possible values.
         *
         *     Use Search Scoops to find Scoops across all ZoomInfo companies, if you want to get Scoops for a specific ZoomInfo company,
         *     use the [Enrich Scoops](ref:enrichinterface_enrichscoop) endpoint.
         *
         *     With reference to ZoomInfo's [Credit Usage and Limits](doc:credit-usage-and-limits), this endpoint does not
         *     consume any Credits. Each Scoop returned in the results does count towards the customer's Record Limit
         *     and a successful response will count towards the Request Limit (e.g. for a response that returns 10 Scoops, 10 Records will
         *     be counted and 1 Request will be counted)
         */
        post: operations["SearchInterface_searchScoop"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/data/v1/users/usage": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Usage Data
         * @description Returns current user's API usage and limits.
         */
        get: operations["UserInterface_userUsage"];
        put?: never;
        post?: never;
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
        /** @description Address details for the company's location. */
        Address: {
            /** @description City of the company's primary address. */
            city?: string;
            /** @description Country of the company's primary address. */
            country?: string;
            /** @description State or province of the company's address. */
            state?: string;
            /** @description Street portion of the company's location. */
            street?: string;
            /** @description Zip code or postal code of the company's address. */
            zipCode?: string;
        };
        /** @description An entity with additional attributes */
        AttributedEntityModelAttributes: {
            /** @description An attribute of the entity */
            attribute?: string;
            /** @description The name of the entity */
            name: string;
        };
        /** @description Attributes for a basic entity */
        BasicEntityModelAttributes: {
            /** @description The name of the entity */
            name: string;
        };
        /** @description Model for board member filters. */
        BoardMemberLookup: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["BasicEntityModelAttributes"];
            /** @description The unique identifier for the resource */
            id: string;
            /**
             * @description The type of the resource (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            type: "BoardMember";
        };
        /** @enum {string} */
        BuyingGroupAccessLevel: "private" | "public";
        /** @description The attributes for a buying group */
        BuyingGroupAttributes: {
            /** @description The access level of the buying group */
            accessLevel: components["schemas"]["BuyingGroupAccessLevel"];
            /** @description Whether this is the default buying group */
            isDefault: boolean;
            /** @description The name of the buying group */
            name: string;
            /** @description The details of the personas of the buying group */
            personas: components["schemas"]["PersonaAttributes"][];
        };
        /** @description Model for the buying groups */
        BuyingGroupLookup: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["BuyingGroupAttributes"];
            /** @description The unique identifier for the resource */
            id: string;
            /**
             * @description The type of the resource (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            type: "BuyingGroup";
        };
        /** @description Common attributes for enrich request. */
        CommonEnrichRequestAttributes: {
            /**
             * Format: int64
             * @description Unique ZoomInfo identifier for a company.
             */
            companyId?: number;
            /** @description Company name. */
            companyName?: string;
        };
        /** @description Common attributes for enrich response. */
        CommonEnrichResponseAttributes: {
            /** @description List of alternate logos for the company. */
            alternateLogos?: string[];
            /** @description City of the company's primary address. */
            city?: string;
            /** @description Continent of the company's primary address. */
            continent?: string;
            /** @description Country of the company's primary address. */
            country?: string;
            /** @description Description associated with the company. */
            description?: string;
            /**
             * Format: int32
             * @description Employee count of the company.
             */
            employeeCount?: number;
            /** @description Employee growth rate at the company. */
            employeeGrowth?: components["schemas"]["EmployeeGrowth"];
            /** @description Employee range at the company. */
            employeeRange?: string;
            /** @description Fax number of the company headquarters. */
            fax?: string;
            /** @description The industry grouping for the company. A company can have multiple industries. */
            industries?: string[];
            /** @description The industry grouping for the company along with it's codes. A company can have multiple industries. */
            industryCodes?: components["schemas"]["IndustryCode"][];
            /** @description The URL which can be used to retrieve the logo for the company. */
            logo?: string;
            /** @description Four-digit numerical codes assigned by the U.S. government to business establishments to identify the primary business of the establishment. */
            naicsCodes?: components["schemas"]["NaicsCode"][];
            /** @description Company name. */
            name?: string;
            /** @description Company phone number. */
            phone?: string;
            /** @description Top-level industry for a company. */
            primaryIndustry?: string[];
            /** @description Top-level industry for a company along with its code. */
            primaryIndustryCode?: components["schemas"]["PrimaryIndustryCode"][];
            /** @description Top-level sub-industry for a company along with its code. */
            primarySubIndustryCode?: components["schemas"]["PrimarySubIndustryCode"][];
            /** @description Revenue range for a company. */
            revenueRange?: string;
            /** @description The Standard Industrial Classification is a system for classifying industries by a four-digit numerical code assigned by the U.S. government to business establishments to identify the primary business of the establishment. */
            sicCodes?: components["schemas"]["SicCode"][];
            /** @description Social media URLs for the company (e.g., Facebook, Twitter, LinkedIn and so on). */
            socialMediaUrls?: components["schemas"]["SocialMediaUrl"][];
            /** @description State or province of the company's primary address. */
            state?: string;
            /** @description Street portion of the company's primary address. */
            street?: string;
            /** @description Company public stock exchange ticker. */
            ticker?: string;
            /** @description Company type (private, public, npo, education, government, other). */
            type?: string;
            /** @description Company website. */
            website?: string;
            /** @description Zip code or postal code of the company's primary address. */
            zipCode?: string;
        };
        /** @description Common hierarchy information. */
        CommonHierarchyInfo: {
            /** @description City of the company's primary address. */
            city?: string;
            /** @description State or province of the company's primary address. */
            state?: string;
        };
        /** @description Common request attributes for search requests. */
        CommonSearchRequestAttributes: {
            /** @description Full Company Address. */
            address?: string;
            /** @description Search for companies based on description. Accepts a space-separated list of individual words. */
            companyDescription?: string;
            /** @description Company ranking (e.g., Fortune 500). Accepts a comma-separated list of IDs. */
            companyRanking?: string;
            /** @description Company hierarchical structure values. Accepts a comma-separated list of values from 'UNSPECIFIED', 'LOCATION', 'DIVISION', 'ACQUISITION', 'SUBSIDIARY', 'FORMER_NEW_NAME'. */
            companyStructureIncludedSubUnitTypes?: string;
            /** @description Company stock ticker symbol. */
            companyTicker?: string[];
            /** @description Company type (private, public, etc.). Accepts a comma-separated list of types. */
            companyType?: string;
            /** @description Continent of the primary address of the associated company. */
            continent?: string;
            /** @description Country of the primary address of the associated company. */
            country?: string;
            /** @description Employee count range. Accepts a comma-separated list of values. Alternatively, for more granular ranges, you can use the employeeRangeMin and employeeRangeMax parameters. */
            employeeCount?: string;
            /** @description Maximum employee count for a company. Use with employeeRangeMin to set a range. Alternatively, you can use the employeeCount parameter to search for pre-defined ranges. */
            employeeRangeMax?: string;
            /** @description Minimum employee count for a company. Use with employeeRangeMax to set a range. Alternatively, you can use the employeeCount parameter to search for pre-defined ranges. */
            employeeRangeMin?: string;
            /** @description Accepts a comma-separated list of U.S. and Canada states and metro areas. Companies from any of these regions will be excluded from search results. */
            excludedRegions?: string;
            /**
             * Format: int32
             * @description Maximum funding amount in thousands (e.g., 1 = 1000, 500 = 500,000). If fundingAmountMax is used without fundingAmountMin, the result will be the amount specified or less.
             */
            fundingAmountMax?: number;
            /**
             * Format: int32
             * @description Minimum funding amount in thousands (e.g., 1 = 1000, 500 = 500,000). If fundingAmountMin is used without fundingAmountMax, the result will be the amount specified or greater.
             */
            fundingAmountMin?: number;
            /**
             * Format: date
             * @description End date of the funding in YYYY-MM-DD format. If fundingStartDate and fundingEndDate are both specified, they will be used as a range. Start date after end date returns an error. If start date and end date are the same, will return results for exact date.
             */
            fundingEndDate?: string;
            /**
             * Format: date
             * @description Start date of the funding in YYYY-MM-DD format. If fundingStartDate and fundingEndDate are both specified, they will be used as a range. Start date after end date returns an error. If start date and end date are the same, will return results for exact date.
             */
            fundingStartDate?: string;
            /** @description Hash tags for a company. Can include a comma-separated list. */
            hashTagString?: string;
            /** @description Top-level industry that the contact works in. A contact can have multiple top level industries. Tags are based on the contact's current company. Can include a comma-separated list. */
            industryCodes?: string;
            /** @description Industry keywords associated with a company. Can include either 'AND' or 'OR' operators. For example, 'software AND security' or 'software OR security' */
            industryKeywords?: string;
            /** @description Location type (PersonOrHQ, PersonAndHQ, Person, HQ, PersonThenHQ). */
            locationSearchType?: string;
            /** @description Company metro area. Accepts a comma-separated list of U.S. and Canada metro areas. */
            metroRegion?: string;
            /** @description Four-digit numerical codes assigned by the U.S. government to business establishments to identify the primary business of the establishment. Accepts a comma-separated list of values. */
            naicsCodes?: string;
            /** @description Maximum one year employee growth rate for a company. Use with oneYearEmployeeGrowthRateMin to set a range. */
            oneYearEmployeeGrowthRateMax?: string;
            /** @description Minimum one year employee growth rate for a company. Use with oneYearEmployeeGrowthRateMax to set a range. */
            oneYearEmployeeGrowthRateMin?: string;
            /** @description Default is false. Used in conjunction with the industryCodes input parameter. When set to true, any result returned must have one of the specified industries as a primary industry. If no industries are specified, then this parameter will be ignored. */
            primaryIndustriesOnly?: boolean;
            /** @description Annual revenue range in U.S. dollars. Accepts a comma-separated list of values. */
            revenue?: string;
            /**
             * Format: int32
             * @description Maximum annual revenue for a company in U.S. dollars (expressed in thousands). Use with revenueMin to set a range.
             */
            revenueMax?: number;
            /**
             * Format: int32
             * @description Minimum annual revenue for a company in U.S. dollars (expressed in thousands). Use with revenueMax to set a range.
             */
            revenueMin?: number;
            /** @description The Standard Industrial Classification is a system for classifying industries by a four-digit code numerical assigned by the U.S. government to business establishments to identify the primary business of the establishment. Accepts a comma-separated list. */
            sicCodes?: string;
            /** @description State or province of the company's address. */
            state?: string;
            /** @description Street address portion of the company's location. */
            street?: string;
            /** @description Company sub types (e.g., division, subsidiary). Use this in conjunction with parentId or ultimateParentId. */
            subUnitTypes?: string;
            /** @description Technology Product Tags. Can include a comma-separated list. */
            techAttributeTagList?: string;
            /** @description Maximum two year employee growth rate for a company. Use with twoYearEmployeeGrowthRateMin to set a range. */
            twoYearEmployeeGrowthRateMax?: string;
            /** @description Minimum two year employee growth rate for a company. Use with twoYearEmployeeGrowthRateMax to set a range. */
            twoYearEmployeeGrowthRateMin?: string;
            /** @description Zip Code or Postal Code of the company's address. */
            zipCode?: string;
            /**
             * Format: int16
             * @description Used in conjunction with zipCode, designates a geographical radius (in miles) from the zipCode provided. Supported values are [10, 25, 50, 100, 250]
             */
            zipCodeRadiusMiles?: number;
            /** @description Maximum number of ZoomInfo contacts associated with company. */
            zoominfoContactsMax?: string;
            /** @description Minimum number of ZoomInfo contacts associated with company. */
            zoominfoContactsMin?: string;
        };
        /** @description Common request attributes for company and contact search requests. */
        CompanyAndContactSearchRequestAttributes: {
            /** @description Unique ZoomInfo identifier for a company. */
            companyId?: string;
            /** @description Company name. */
            companyName?: string;
            /** @description Company website URL in http://www.example.com format. Accepts a comma-separated list. */
            companyWebsite?: string;
            /**
             * Format: date
             * @description Engagement end date in YYYY-MM-DD format. EngagementStartDate is required.
             */
            engagementEndDate?: string;
            /**
             * Format: date
             * @description Engagement start date in YYYY-MM-DD format.
             */
            engagementStartDate?: string;
            /** @description List of engagement types to search for. Accepted values are 'email', 'phone', 'online meeting'. Accepts a comma-separated list of these values. */
            engagementType?: string[];
            /** @description Exclude companies with these technology product tags. String can be one value ('131315') or a comma-separated list which is treated as OR logic ('131315, 132222'). Individual values can also include AND logic ('131315 AND 131301, 132222'). This last example would be evaluated as ((131201 AND 131301) OR 132222). */
            excludeTechAttributeTagList?: string;
            /** @description ZoomInfo Company ID for parent company. */
            parentId?: string;
            /** @description Company sub types (e.g., division, subsidiary). Use this in conjunction with parentId or ultimateParentId. */
            ultimateParentId?: string;
        };
        /** @description Metadata describing the result of a company enrich match, including the match status and the input criteria used for the match. Used to provide additional context about how the company enrich response was determined. */
        CompanyAttributeMeta: {
            /** @description The input criteria that was used to perform the company enrich match. This provides traceability for the match result. */
            input: components["schemas"]["CompanyEnrichRequestCriteria"];
            /** @description The match status for the company enrich operation, indicating whether a match was found and the type of match. */
            matchStatus: components["schemas"]["CompanyMatchStatus"];
            /** @description Details about any warnings encountered during the validation of the enrich request input criteria. */
            warnings?: components["schemas"]["Warning"][];
        };
        /** @description Model for the company enrich  input lookup */
        CompanyEnrichInputLookUp: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["LookupFieldAttributes"];
            /** @description The unique identifier for the resource */
            id: string;
            /**
             * @description The type of the resource (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            type: "CompanyEnrichInput";
        };
        /** @description Model for the company enrich output lookup */
        CompanyEnrichOutputLookUp: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["LookupFieldAttributes"];
            /** @description The unique identifier for the resource */
            id: string;
            /**
             * @description The type of the resource (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            type: "CompanyEnrichOutput";
        };
        /** @description Company enrich request. */
        CompanyEnrichRequest: {
            /** @description The primary data of the document */
            data: components["schemas"]["CompanyEnrichRequestResource"];
        };
        /** @description Company enrich request attributes. */
        CompanyEnrichRequestAttributes: {
            /** @description List of criteria to match against. */
            matchCompanyInput: components["schemas"]["CompanyEnrichRequestCriteria"][];
            /** @description List of fields to be returned in the response. */
            outputFields: ("alternateLogos" | "businessModel" | "certificationDate" | "certified" | "city" | "companyFunding" | "companyStatus" | "companyStatusDate" | "competitors" | "continent" | "country" | "createdDate" | "departmentBudgets" | "description" | "domainList" | "employeeCount" | "employeeCountByDepartment" | "employeeGrowth" | "employeeRange" | "engagements" | "fax" | "foundedYear" | "id" | "industries" | "industryCodes" | "isDefunct" | "lastUpdatedDate" | "locationCount" | "locationMatch" | "logo" | "metroArea" | "naicsCodes" | "name" | "numberOfContactsInZoomInfo" | "parentId" | "parentName" | "phone" | "primaryIndustry" | "primaryIndustryCode" | "primarySubIndustryCode" | "products" | "recentFundingAmount" | "recentFundingDate" | "revenue" | "revenueRange" | "sicCodes" | "socialMediaUrls" | "state" | "street" | "subUnitIndustries" | "subUnitType" | "ticker" | "totalFundingAmount" | "type" | "ultimateParentEmployees" | "ultimateParentId" | "ultimateParentName" | "ultimateParentRevenue" | "website" | "zipCode")[];
        };
        /** @description Company enrich request criteria. */
        CompanyEnrichRequestCriteria: {
            /** @description City portion of the company's primary address. */
            companyCity?: string;
            /** @description Country of the company's primary address. You can use free text or see the Country lookup endpoint for values. */
            companyCountry?: string;
            /** @description Fax number of the company headquarters. */
            companyFax?: string;
            /**
             * Format: int64
             * @description Unique ZoomInfo identifier for a company.
             */
            companyId?: number;
            /** @description Company name. */
            companyName?: string;
            /** @description Phone number of the company headquarters. */
            companyPhone?: string;
            /** @description Company state (U.S.) or province (Canada). You can use free text state or province names (e.g., 'new hampshire'), or the two-letter common abbreviation for a U.S. state (e.g., 'nh'). */
            companyState?: string;
            /** @description Street portion of the company's primary address. */
            companyStreet?: string;
            /** @description Company stock ticker symbol. */
            companyTicker?: string;
            /** @description Company website URL in http://www.example.com format. Accepts a comma-separated list. */
            companyWebsite?: string;
            /** @description Zip code or postal code of the company's primary address. */
            companyZipCode?: string;
            /** @description IP address associated with the company. */
            ipAddress?: string;
        };
        /** @description Company enrich request resource. */
        CompanyEnrichRequestResource: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["CompanyEnrichRequestAttributes"];
            /**
             * @description The type of the resource
             * @default CompanyEnrich
             */
            type: string;
        };
        /** @description Company enrich response. */
        CompanyEnrichResponse: {
            /** @description The primary data of the document */
            data: components["schemas"]["CompanyEnrichResponseResourceUnion"][];
        };
        /** @description Company enrich response attributes. */
        CompanyEnrichResponseAttributes: {
            /** @description List of alternate logos for the company. */
            alternateLogos?: string[];
            /** @description Business model for a company. */
            businessModel?: string[];
            /**
             * Format: date-time
             * @description Date of certification.
             */
            certificationDate?: string;
            /** @description Denotes if ZoomInfo's research and data team has confirmed activity within the past 12 months. */
            certified?: boolean;
            /** @description City of the company's primary address. */
            city?: string;
            /** @description List of funding rounds including date, type , investors, and amount. */
            companyFunding?: components["schemas"]["CompanyFunding"][];
            /** @description Company status. */
            companyStatus?: components["schemas"]["CompanyStatus"];
            /**
             * Format: date-time
             * @description Date of last company status update.
             */
            companyStatusDate?: string;
            /** @description List of competitors. */
            competitors?: components["schemas"]["Competitor"][];
            /** @description Continent of the company's primary address. */
            continent?: string;
            /** @description Country of the company's primary address. */
            country?: string;
            /**
             * Format: date-time
             * @description Date on which the company record was created.
             */
            createdDate?: string;
            /** @description Estimated department budgets. Returns estimated budget values including marketingBudget, financeBudget, itBudget and hrBudget. */
            departmentBudgets?: components["schemas"]["DepartmentBudget"];
            /** @description Description associated with the company. */
            description?: string;
            /** @description List of domains associated with a company. */
            domainList?: string[];
            /**
             * Format: int32
             * @description Employee count of the company.
             */
            employeeCount?: number;
            /** @description Employee count by company department. */
            employeeCountByDepartment?: components["schemas"]["EmployeeCountByDepartment"];
            /** @description Employee growth rate at the company. */
            employeeGrowth?: components["schemas"]["EmployeeGrowth"];
            /** @description Employee range at the company. */
            employeeRange?: string;
            /** @description List of the company's engagements. Includes the date and type of each engagement. */
            engagements?: components["schemas"]["Engagement"][];
            /** @description Fax number of the company headquarters. */
            fax?: string;
            /** @description Year the company was founded. */
            foundedYear?: string;
            /** @description The industry grouping for the company. A company can have multiple industries. */
            industries?: string[];
            /** @description The industry grouping for the company along with it's codes. A company can have multiple industries. */
            industryCodes?: components["schemas"]["IndustryCode"][];
            /** @description Indicates whether the company still exists. */
            isDefunct?: boolean;
            /**
             * Format: date-time
             * @description Date on which the company record was last updated.
             */
            lastUpdatedDate?: string;
            /**
             * Format: int32
             * @description Number of office locations associated with a company.
             */
            locationCount?: number;
            /** @description Location details that match address-related input parameters. Includes companyId, address, and addressStatus (CURRENT, VALID, PAST). */
            locationMatch?: components["schemas"]["LocationMatch"];
            /** @description The URL which can be used to retrieve the logo for the company. */
            logo?: string;
            /** @description Company metro area. */
            metroArea?: string;
            /** @description Four-digit numerical codes assigned by the U.S. government to business establishments to identify the primary business of the establishment. */
            naicsCodes?: components["schemas"]["NaicsCode"][];
            /** @description Company name. */
            name?: string;
            /**
             * Format: int32
             * @description Number of ZoomInfo contacts associated with company.
             */
            numberOfContactsInZoomInfo?: number;
            /**
             * Format: int64
             * @description Unique ZoomInfo identifier associated with the parent company.
             */
            parentId?: number;
            /** @description Company name associated with the parent company. */
            parentName?: string;
            /** @description Company phone number. */
            phone?: string;
            /** @description Top-level industry for a company. */
            primaryIndustry?: string[];
            /** @description Top-level industry for a company along with its code. */
            primaryIndustryCode?: components["schemas"]["PrimaryIndustryCode"][];
            /** @description Top-level sub-industry for a company along with its code. */
            primarySubIndustryCode?: components["schemas"]["PrimarySubIndustryCode"][];
            /** @description List of products associated with a company. */
            products?: string[];
            /**
             * Format: int32
             * @description Most recent funding amount.
             */
            recentFundingAmount?: number;
            /**
             * Format: date-time
             * @description Date of most recent funding.
             */
            recentFundingDate?: string;
            /**
             * Format: int64
             * @description Approximate yearly revenue for the company in 1000's. For example, a $100M company is expressed as 100000.
             */
            revenue?: number;
            /** @description Revenue range for a company. */
            revenueRange?: string;
            /** @description The Standard Industrial Classification is a system for classifying industries by a four-digit numerical code assigned by the U.S. government to business establishments to identify the primary business of the establishment. */
            sicCodes?: components["schemas"]["SicCode"][];
            /** @description Social media URLs for the company (e.g., Facebook, Twitter, LinkedIn and so on). */
            socialMediaUrls?: components["schemas"]["SocialMediaUrl"][];
            /** @description State or province of the company's primary address. */
            state?: string;
            /** @description Street portion of the company's primary address. */
            street?: string;
            /** @description Company sub unit industries. */
            subUnitIndustries?: string[];
            /** @description Company sub unit types (e.g., division, subsidiary, etc.). */
            subUnitType?: string;
            /** @description Company public stock exchange ticker. */
            ticker?: string;
            /**
             * Format: int32
             * @description Total funding to date.
             */
            totalFundingAmount?: number;
            /** @description Company type (private, public, npo, education, government, other). */
            type?: string;
            /**
             * Format: int32
             * @description Approximate number of people employed by the ultimate parent company.
             */
            ultimateParentEmployees?: number;
            /**
             * Format: int64
             * @description Unique ZoomInfo identifier for ultimate parent company (if exists).
             */
            ultimateParentId?: number;
            /** @description Company name for ultimate parent company (if exists). */
            ultimateParentName?: string;
            /**
             * Format: int32
             * @description Approximate yearly revenue for the ultimate parent company.
             */
            ultimateParentRevenue?: number;
            /** @description Company website. */
            website?: string;
            /** @description Zip code or postal code of the company's primary address. */
            zipCode?: string;
        };
        /** @description Represents the possible resource types returned in a company enrich response, including both a successful company match and a no-match result. Used to encapsulate the response resource for company enrichment. */
        CompanyEnrichResponseResourceUnion: components["schemas"]["EnrichCompany"] | components["schemas"]["NoMatchCompany"];
        /** @description Company funding details. */
        CompanyFunding: {
            /**
             * Format: int64
             * @description Amount of funding round.
             */
            amount?: number;
            /** @description Date of funding round. */
            date?: string;
            /** @description Investors in funding round. */
            investors?: string[];
            /** @description Type of funding round. */
            type?: string;
        };
        /** @enum {string} */
        CompanyMatchStatus: "FULL_MATCH" | "NO_MATCH" | "LIMIT_EXCEEDED" | "INVALID_INPUT";
        /** @description Model for the company rankings */
        CompanyRankingLookup: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["BasicEntityModelAttributes"];
            /** @description The unique identifier for the resource */
            id: string;
            /**
             * @description The type of the resource (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            type: "CompanyRanking";
        };
        /** @description ZoomInfo Company */
        CompanyResponse: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["CompanySearchResponseAttributes"];
            /** @description The unique identifier for the resource */
            id: string;
            /**
             * @description The type of the resource
             * @default Company
             */
            type: string;
        };
        /** @description Model for the company search input lookup */
        CompanySearchInputLookUp: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["LookupFieldAttributes"];
            /** @description The unique identifier for the resource */
            id: string;
            /**
             * @description The type of the resource (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            type: "CompanySearchInput";
        };
        /** @description Model for the company search output lookup */
        CompanySearchOutputLookUp: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["LookupFieldAttributes"];
            /** @description The unique identifier for the resource */
            id: string;
            /**
             * @description The type of the resource (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            type: "CompanySearchOutput";
        };
        /** @description Company search request. */
        CompanySearchRequest: {
            /** @description The primary data of the document */
            data: components["schemas"]["CompanySearchResource"];
        };
        /** @description Request attributes for company search. */
        CompanySearchRequestAttributes: {
            /** @description Full Company Address. */
            address?: string;
            /** @description Search using Business Model (B2C, B2B, B2G) for a company. Default is All. */
            businessModel?: string[];
            /**
             * Format: int32
             * @description Denotes if ZoomInfo's research and data team has confirmed activity within the past 12 months. 1 = certified, 0 = not certified.
             */
            certified?: number;
            /** @description Search for companies based on description. Accepts a space-separated list of individual words. */
            companyDescription?: string;
            /** @description Unique ZoomInfo identifier for a company. */
            companyId?: string;
            /** @description Company name. */
            companyName?: string;
            /** @description Company ranking (e.g., Fortune 500). Accepts a comma-separated list of IDs. */
            companyRanking?: string;
            /** @description Company hierarchical structure values. Accepts a comma-separated list of values from 'UNSPECIFIED', 'LOCATION', 'DIVISION', 'ACQUISITION', 'SUBSIDIARY', 'FORMER_NEW_NAME'. */
            companyStructureIncludedSubUnitTypes?: string;
            /** @description Company stock ticker symbol. */
            companyTicker?: string[];
            /** @description Company type (private, public, etc.). Accepts a comma-separated list of types. */
            companyType?: string;
            /** @description Company website URL in http://www.example.com format. Accepts a comma-separated list. */
            companyWebsite?: string;
            /** @description Continent of the primary address of the associated company. */
            continent?: string;
            /** @description Country of the primary address of the associated company. */
            country?: string;
            /** @description Employee count range. Accepts a comma-separated list of values. Alternatively, for more granular ranges, you can use the employeeRangeMin and employeeRangeMax parameters. */
            employeeCount?: string;
            /** @description Maximum employee count for a company. Use with employeeRangeMin to set a range. Alternatively, you can use the employeeCount parameter to search for pre-defined ranges. */
            employeeRangeMax?: string;
            /** @description Minimum employee count for a company. Use with employeeRangeMax to set a range. Alternatively, you can use the employeeCount parameter to search for pre-defined ranges. */
            employeeRangeMin?: string;
            /**
             * Format: date
             * @description Engagement end date in YYYY-MM-DD format. EngagementStartDate is required.
             */
            engagementEndDate?: string;
            /**
             * Format: date
             * @description Engagement start date in YYYY-MM-DD format.
             */
            engagementStartDate?: string;
            /** @description List of engagement types to search for. Accepted values are 'email', 'phone', 'online meeting'. Accepts a comma-separated list of these values. */
            engagementType?: string[];
            /** @description Defaults to false. Set true to exclude defunct companies from results. */
            excludeDefunctCompanies?: boolean;
            /** @description Accepts a comma-separated list of U.S. and Canada states and metro areas. Companies from any of these regions will be excluded from search results. */
            excludedRegions?: string;
            /** @description Exclude companies with these technology product tags. String can be one value ('131315') or a comma-separated list which is treated as OR logic ('131315, 132222'). Individual values can also include AND logic ('131315 AND 131301, 132222'). This last example would be evaluated as ((131201 AND 131301) OR 132222). */
            excludeTechAttributeTagList?: string;
            /**
             * Format: int32
             * @description Maximum finance department budget amount in thousands (e.g., 1 = 1000, 500 = 500,000).  Minimum value is 0, maximum value is 2147483647 (approximately 2 trillion).
             */
            financeDepartmentBudgetMax?: number;
            /**
             * Format: int32
             * @description Minimum finance department budget amount in thousands (e.g., 1 = 1000, 500 = 500,000).  Minimum value is 0, maximum value is 2147483647 (approximately 2 trillion).
             */
            financeDepartmentBudgetMin?: number;
            /**
             * Format: int32
             * @description Maximum funding amount in thousands (e.g., 1 = 1000, 500 = 500,000). If fundingAmountMax is used without fundingAmountMin, the result will be the amount specified or less.
             */
            fundingAmountMax?: number;
            /**
             * Format: int32
             * @description Minimum funding amount in thousands (e.g., 1 = 1000, 500 = 500,000). If fundingAmountMin is used without fundingAmountMax, the result will be the amount specified or greater.
             */
            fundingAmountMin?: number;
            /**
             * Format: date
             * @description End date of the funding in YYYY-MM-DD format. If fundingStartDate and fundingEndDate are both specified, they will be used as a range. Start date after end date returns an error. If start date and end date are the same, will return results for exact date.
             */
            fundingEndDate?: string;
            /**
             * Format: date
             * @description Start date of the funding in YYYY-MM-DD format. If fundingStartDate and fundingEndDate are both specified, they will be used as a range. Start date after end date returns an error. If start date and end date are the same, will return results for exact date.
             */
            fundingStartDate?: string;
            /** @description Hash tags for a company. Can include a comma-separated list. */
            hashTagString?: string;
            /**
             * Format: int32
             * @description Maximum human resources department budget amount in thousands (e.g., 1 = 1000, 500 = 500,000).  Minimum value is 0, maximum value is 2147483647 (approximately 2 trillion).
             */
            hrDepartmentBudgetMax?: number;
            /**
             * Format: int32
             * @description Minimum human resources department budget amount in thousands (e.g., 1 = 1000, 500 = 500,000).  Minimum value is 0, maximum value is 2147483647 (approximately 2 trillion).
             */
            hrDepartmentBudgetMin?: number;
            /** @description Top-level industry that the contact works in. A contact can have multiple top level industries. Tags are based on the contact's current company. Can include a comma-separated list. */
            industryCodes?: string;
            /** @description Industry keywords associated with a company. Can include either 'AND' or 'OR' operators. For example, 'software AND security' or 'software OR security' */
            industryKeywords?: string;
            /**
             * Format: int32
             * @description Maximum information technology department budget amount in thousands (e.g., 1 = 1000, 500 = 500,000).  Minimum value is 0, maximum value is 2147483647 (approximately 2 trillion).
             */
            itDepartmentBudgetMax?: number;
            /**
             * Format: int32
             * @description Minimum information technology department budget amount in thousands (e.g., 1 = 1000, 500 = 500,000).  Minimum value is 0, maximum value is 2147483647 (approximately 2 trillion).
             */
            itDepartmentBudgetMin?: number;
            /** @description Location type (PersonOrHQ, PersonAndHQ, Person, HQ, PersonThenHQ). */
            locationSearchType?: string;
            /**
             * Format: int32
             * @description Maximum marketing department budget amount in thousands (e.g., 1 = 1000, 500 = 500,000).  Minimum value is 0, maximum value is 2147483647 (approximately 2 trillion).
             */
            marketingDepartmentBudgetMax?: number;
            /**
             * Format: int32
             * @description Minimum marketing department budget amount in thousands (e.g., 1 = 1000, 500 = 500,000).  Minimum value is 0, maximum value is 2147483647 (approximately 2 trillion).
             */
            marketingDepartmentBudgetMin?: number;
            /** @description Company metro area. Accepts a comma-separated list of U.S. and Canada metro areas. */
            metroRegion?: string;
            /** @description Four-digit numerical codes assigned by the U.S. government to business establishments to identify the primary business of the establishment. Accepts a comma-separated list of values. */
            naicsCodes?: string;
            /** @description Maximum one year employee growth rate for a company. Use with oneYearEmployeeGrowthRateMin to set a range. */
            oneYearEmployeeGrowthRateMax?: string;
            /** @description Minimum one year employee growth rate for a company. Use with oneYearEmployeeGrowthRateMax to set a range. */
            oneYearEmployeeGrowthRateMin?: string;
            /** @description ZoomInfo Company ID for parent company. */
            parentId?: string;
            /** @description Default is false. Used in conjunction with the industryCodes input parameter. When set to true, any result returned must have one of the specified industries as a primary industry. If no industries are specified, then this parameter will be ignored. */
            primaryIndustriesOnly?: boolean;
            /** @description Annual revenue range in U.S. dollars. Accepts a comma-separated list of values. */
            revenue?: string;
            /**
             * Format: int32
             * @description Maximum annual revenue for a company in U.S. dollars (expressed in thousands). Use with revenueMin to set a range.
             */
            revenueMax?: number;
            /**
             * Format: int32
             * @description Minimum annual revenue for a company in U.S. dollars (expressed in thousands). Use with revenueMax to set a range.
             */
            revenueMin?: number;
            /** @description The Standard Industrial Classification is a system for classifying industries by a four-digit code numerical assigned by the U.S. government to business establishments to identify the primary business of the establishment. Accepts a comma-separated list. */
            sicCodes?: string;
            /** @description State or province of the company's address. */
            state?: string;
            /** @description Street address portion of the company's location. */
            street?: string;
            /** @description Company sub types (e.g., division, subsidiary). Use this in conjunction with parentId or ultimateParentId. */
            subUnitTypes?: string;
            /** @description Technology Product Tags. Can include a comma-separated list. */
            techAttributeTagList?: string;
            /** @description Maximum two year employee growth rate for a company. Use with twoYearEmployeeGrowthRateMin to set a range. */
            twoYearEmployeeGrowthRateMax?: string;
            /** @description Minimum two year employee growth rate for a company. Use with twoYearEmployeeGrowthRateMax to set a range. */
            twoYearEmployeeGrowthRateMin?: string;
            /** @description Company sub types (e.g., division, subsidiary). Use this in conjunction with parentId or ultimateParentId. */
            ultimateParentId?: string;
            /** @description Returns whether or not record is under management if set to true. */
            underManagement?: boolean;
            /** @description Zip Code or Postal Code of the company's address. */
            zipCode?: string;
            /**
             * Format: int16
             * @description Used in conjunction with zipCode, designates a geographical radius (in miles) from the zipCode provided. Supported values are [10, 25, 50, 100, 250]
             */
            zipCodeRadiusMiles?: number;
            /** @description Maximum number of ZoomInfo contacts associated with company. */
            zoominfoContactsMax?: string;
            /** @description Minimum number of ZoomInfo contacts associated with company. */
            zoominfoContactsMin?: string;
        };
        /** @description Company search request resource. */
        CompanySearchResource: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["CompanySearchRequestAttributes"];
            /**
             * @description The type of the resource
             * @default CompanySearch
             */
            type: string;
        };
        /** @description A list of companies that match the criteria specified in the request */
        CompanySearchResponse: {
            /** @description The primary data of the document */
            data: components["schemas"]["CompanyResponse"][];
            /** @description Links related to the primary data */
            links?: components["schemas"]["Links"];
            /** @description Non-standard meta information about the document */
            meta?: components["schemas"]["ResultMeta"];
        };
        /** @description Response attributes for company search. */
        CompanySearchResponseAttributes: {
            /** @description City of the company's primary address. */
            city?: string;
            /** @description Country of the company's primary address. */
            country?: string;
            /** @description Approximate number of people employed by the company. */
            employeeCount?: string;
            /** @description The URL which can be used to retrieve the logo for the company. */
            logo?: string;
            /** @description Management status of the record. */
            managementStatus?: components["schemas"]["ManagementStatus"];
            /** @description Company Name. */
            name?: string;
            /** @description Approximate yearly revenue for the company in 1000's. For example, a 100M company is expressed as 100000. */
            revenue?: string;
            /** @description State or province of the company's primary address. */
            state?: string;
            /** @description Company website URL. */
            website?: string;
        };
        /**
         * @description Represents the current status of the company
         * @enum {string}
         */
        CompanyStatus: "NEW" | "ALIVE" | "DEFUNCT_DOMAIN_DOWN" | "DEFUNCT_DECLARATION" | "DEFUNCT_MANUAL" | "DEFUNCT_FORMER_NAME" | "DEFUNCT_ACQUISITION";
        /** @description Model for the company type */
        CompanyTypeLookup: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["BasicEntityModelAttributes"];
            /** @description The unique identifier for the resource */
            id: string;
            /**
             * @description The type of the resource (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            type: "CompanyType";
        };
        /** @description Competitor details. */
        Competitor: {
            /**
             * Format: int32
             * @description EmployeeCount of the competitor.
             */
            employeeCount?: number;
            /**
             * Format: int64
             * @description Unique ZoomInfo identifier for the competitor.
             */
            id?: number;
            /** @description Name of the competitor. */
            name?: string;
            /**
             * Format: int32
             * @description Ranking of the competitor.
             */
            rank?: number;
            /** @description Website of the competitor. */
            website?: string;
        };
        /** @description ZoomInfo Contact */
        Contact: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["ContactSearchResponseAttributes"];
            /** @description The unique identifier for the resource */
            id: string;
            /**
             * @description The type of the resource
             * @default Contact
             */
            type: string;
        };
        /** @description Metadata describing the result of a contact enrich match, including the match status and the input criteria used for the match. Used to provide additional context about how the contact enrich response was determined. */
        ContactAttributeMeta: {
            /** @description The input criteria that was used to perform the contact enrich match. This provides traceability for the match result. */
            input: components["schemas"]["ContactEnrichRequestCriteria"];
            /** @description The match status for the contact enrich operation, indicating whether a match was found and the type of match. */
            matchStatus: components["schemas"]["ContactMatchStatus"];
            /** @description Details about any warnings encountered during the validation of the enrich request input criteria. */
            warnings?: components["schemas"]["Warning"][];
        };
        /** @description Contact's company data for an enrich request. */
        ContactCompanyEnrich: {
            /** @description List of alternate logos for the company. */
            alternateLogos?: string[];
            /** @description City of the company's primary address. */
            city?: string;
            /** @description Continent of the company's primary address. */
            continent?: string;
            /** @description Country of the company's primary address. */
            country?: string;
            /** @description Description associated with the company. */
            description?: string;
            /** @description Contact primary division name at current place of employment. */
            division?: string;
            /**
             * Format: int32
             * @description Employee count of the company.
             */
            employeeCount?: number;
            /** @description Employee growth rate at the company. */
            employeeGrowth?: components["schemas"]["EmployeeGrowth"];
            /** @description Employee range at the company. */
            employeeRange?: string;
            /** @description Fax number of the company headquarters. */
            fax?: string;
            /**
             * Format: int64
             * @description Unique ZoomInfo ID
             */
            id?: number;
            /** @description The industry grouping for the company. A company can have multiple industries. */
            industries?: string[];
            /** @description The industry grouping for the company along with it's codes. A company can have multiple industries. */
            industryCodes?: components["schemas"]["IndustryCode"][];
            /** @description The URL which can be used to retrieve the logo for the company. */
            logo?: string;
            /** @description Four-digit numerical codes assigned by the U.S. government to business establishments to identify the primary business of the establishment. */
            naicsCodes?: components["schemas"]["NaicsCode"][];
            /** @description Company name. */
            name?: string;
            /** @description Company phone number. */
            phone?: string;
            /** @description Top-level industry for a company. */
            primaryIndustry?: string[];
            /** @description Top-level industry for a company along with its code. */
            primaryIndustryCode?: components["schemas"]["PrimaryIndustryCode"][];
            /** @description Top-level sub-industry for a company along with its code. */
            primarySubIndustryCode?: components["schemas"]["PrimarySubIndustryCode"][];
            /** @description Company ranking list (e.g., Fortune 500 and so on). */
            ranking?: string[];
            /** @description Company revenue (e.g., 400 Million). */
            revenue?: string;
            /**
             * Format: int64
             * @description Company revenue expressed numerically (e.g. 400000000).
             */
            revenueNumeric?: number;
            /** @description Revenue range for a company. */
            revenueRange?: string;
            /** @description The Standard Industrial Classification is a system for classifying industries by a four-digit numerical code assigned by the U.S. government to business establishments to identify the primary business of the establishment. */
            sicCodes?: components["schemas"]["SicCode"][];
            /** @description Social media URLs for the company (e.g., Facebook, Twitter, LinkedIn and so on). */
            socialMediaUrls?: components["schemas"]["SocialMediaUrl"][];
            /** @description State or province of the company's primary address. */
            state?: string;
            /** @description Street portion of the company's primary address. */
            street?: string;
            /** @description Company public stock exchange ticker. */
            ticker?: string;
            /** @description Company type (private, public, npo, education, government, other). */
            type?: string;
            /** @description Company website. */
            website?: string;
            /** @description Zip code or postal code of the company's primary address. */
            zipCode?: string;
        };
        /** @description Contact's company data. */
        ContactCompanySearch: {
            /**
             * Format: int64
             * @description Unique ZoomInfo identifier for a company.
             */
            id?: number;
            /** @description Company Name. */
            name?: string;
        };
        /** @description Alternative phone number or email with its source identifier. */
        ContactDataWithSource: {
            /** @description The source identifier indicating which data source provided this value. */
            source?: string;
            /** @description The phone number or email address value. */
            value?: string;
        };
        /** @description Model for the contact search enrich lookup */
        ContactEnrichInputLookUp: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["LookupFieldAttributes"];
            /** @description The unique identifier for the resource */
            id: string;
            /**
             * @description The type of the resource (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            type: "ContactEnrichInput";
        };
        /** @description Model for the contact enrich output lookup */
        ContactEnrichOutputLookUp: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["LookupFieldAttributes"];
            /** @description The unique identifier for the resource */
            id: string;
            /**
             * @description The type of the resource (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            type: "ContactEnrichOutput";
        };
        /** @description Contact enrich request. */
        ContactEnrichRequest: {
            /** @description The primary data of the document */
            data: components["schemas"]["ContactEnrichRequestResource"];
        };
        /** @description Contact enrich request attributes. */
        ContactEnrichRequestAttributes: {
            /** @description List of matchPersonInput. */
            matchPersonInput: components["schemas"]["ContactEnrichRequestCriteria"][];
            /** @description Specifies the fields to include in the response. To request company-related fields for a contact, use camel-case field names corresponding to the company object (e.g., companyName, companyPhone, companyId, companyRevenue). */
            outputFields: ("city" | "companyAlternateLogos" | "companyCity" | "companyContinent" | "companyCountry" | "companyDescription" | "companyDivision" | "companyEmployeeCount" | "companyEmployeeGrowth" | "companyEmployeeRange" | "companyFax" | "companyId" | "companyIndustries" | "companyIndustryCodes" | "companyLogo" | "companyNaicsCodes" | "companyName" | "companyPhone" | "companyPrimaryIndustry" | "companyPrimaryIndustryCode" | "companyPrimarySubIndustryCode" | "companyRanking" | "companyRevenue" | "companyRevenueNumeric" | "companyRevenueRange" | "companySicCodes" | "companySocialMediaUrls" | "companyState" | "companyStreet" | "companyTicker" | "companyType" | "companyWebsite" | "companyZipCode" | "contactAccuracyScore" | "continent" | "country" | "directPhoneAlt" | "directPhoneDoNotCall" | "education" | "email" | "emailAlt" | "employmentHistory" | "engagements" | "externalUrls" | "firstName" | "hasCanadianEmail" | "hashedEmails" | "id" | "isDefunct" | "jobFunction" | "jobTitle" | "lastName" | "lastUpdatedDate" | "locationCompanyId" | "managementLevel" | "metroArea" | "middleName" | "mobilePhone" | "mobilePhoneAlt" | "mobilePhoneDoNotCall" | "noticeProvidedDate" | "personHasMoved" | "phone" | "picture" | "positionStartDate" | "region" | "salutation" | "state" | "street" | "suffix" | "supplementalEmail" | "techSkills" | "validDate" | "withinCalifornia" | "withinCanada" | "withinEu" | "yearsOfExperience" | "zipCode")[];
            /** @description List of fields that are required for the match. */
            requiredFields?: string[];
        };
        /** @description The Enrich API provides the ability to enrich contact and company data with ZoomInfo's proprietary data. */
        ContactEnrichRequestCriteria: {
            /**
             * Format: int64
             * @description Unique ZoomInfo identifier for a company.
             */
            companyId?: number;
            /** @description Company name. */
            companyName?: string;
            /** @description Minimum accuracy score for enrich result. This score indicates the likelihood that a contact is reachable and still employed by the company listed. Minimum score is 70 and maximum is 99. */
            contactAccuracyScoreMin?: string;
            /** @description Email address for the contact in example@example.com format. */
            emailAddress?: string;
            /** @description Social media URLs for the contact (e.g., Facebook, Twitter, LinkedIn). */
            externalURL?: string;
            /** @description Contact first name. */
            firstName?: string;
            /** @description Contact full name. */
            fullName?: string;
            /** @description Hashed email value for the contact. Allows matching via an email address with the extra security of not exposing the email. Supported hash algorithms are: MD5, SHA1, SHA256 and SHA512. */
            hashedEmail?: string;
            /** @description Contact title at current place of employment. */
            jobTitle?: string;
            /** @description Contact last name. */
            lastName?: string;
            /**
             * Format: date
             * @description The date after which the contact's profile was last updated. Uses YYYY-MM-DD format.
             */
            lastUpdatedDateAfter?: string;
            /**
             * Format: int64
             * @description Unique ZoomInfo identifier for the contact.
             */
            personId?: number;
            /** @description Contact direct or mobile phone number. */
            phone?: string;
            /**
             * Format: date
             * @description The date after which the contact's profile was last validated. Uses YYYY-MM-DD format.
             */
            validDateAfter?: string;
        };
        /** @description Contact enrich request resource. */
        ContactEnrichRequestResource: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["ContactEnrichRequestAttributes"];
            /**
             * @description The type of the resource
             * @default ContactEnrich
             */
            type: string;
        };
        /** @description Contact enrich response. */
        ContactEnrichResponse: {
            /** @description The primary data of the document */
            data: components["schemas"]["ContactEnrichResponseResourceUnion"][];
        };
        /** @description Contact enrich response attributes. */
        ContactEnrichResponseAttributes: {
            /** @description City portion of the contact's work address. */
            city?: string;
            /** @description Contact's company data. */
            company?: components["schemas"]["ContactCompanyEnrich"];
            /** @description This score indicates the likelihood that a contact is reachable and still employed by the company listed. Minimum score is 75 and maximum is 99. */
            contactAccuracyScore?: string;
            /** @description Continent of the contact's work address. */
            continent?: string;
            /** @description Country of the contact's work address. */
            country?: string;
            /** @description Alternative direct phone numbers with their sources, providing multiple direct phone options from different data sources. */
            directPhoneAlt?: components["schemas"]["ContactDataWithSource"][];
            /** @description Contact flagged with do not call for direct phone. */
            directPhoneDoNotCall?: boolean;
            /** @description Contact education details. */
            education?: components["schemas"]["Education"][];
            /** @description Work email address for the contact in example@example.com format. */
            email?: string;
            /** @description Alternative email addresses with their sources, providing multiple email options from different data sources. */
            emailAlt?: components["schemas"]["ContactDataWithSource"][];
            /** @description Contact employment history. */
            employmentHistory?: components["schemas"]["EmploymentHistory"][];
            /** @description List of the contact's engagements. Includes the date and type of each engagement. */
            engagements?: components["schemas"]["Engagement"][];
            /** @description Social media URLs for the contact (e.g., Facebook, Twitter, LinkedIn). */
            externalUrls?: components["schemas"]["ExternalUrl"][];
            /** @description Contact first name. */
            firstName?: string;
            /** @description Indicates whether the contact's email address is associated with a Canada domain. */
            hasCanadianEmail?: boolean;
            /** @description Contact MD5 encrypted email address(es). */
            hashedEmails?: string[];
            /** @description Indicates whether the company associated with the contact still exists. */
            isDefunct?: boolean;
            /** @description Contact job function at current place of employment. */
            jobFunction?: components["schemas"]["JobFunction"];
            /** @description Contact job title at current place of employment. */
            jobTitle?: string;
            /** @description Contact last name. */
            lastName?: string;
            /**
             * Format: date-time
             * @description Date on which the contact record was last updated.
             */
            lastUpdatedDate?: string;
            /**
             * Format: int64
             * @description Company Id of contact's company.
             */
            locationCompanyId?: number;
            /** @description Contact management level. */
            managementLevel?: string[];
            /** @description Metro area of the contact's work address. */
            metroArea?: string;
            /** @description Contact middle name. */
            middleName?: string;
            /** @description Contact mobile phone. */
            mobilePhone?: string;
            /** @description Alternative mobile phone numbers with their sources, providing multiple mobile phone options from different data sources. */
            mobilePhoneAlt?: components["schemas"]["ContactDataWithSource"][];
            /** @description Contact flagged with do not call for mobile phone. */
            mobilePhoneDoNotCall?: boolean;
            /**
             * Format: date
             * @description Date on which the contact was notified of inclusion in ZoomInfo's database. Uses YYYY-MM-DD format.
             */
            noticeProvidedDate?: string;
            /** @description Indicates ZoomInfo recognizes the contact does not match ZoomInfo's current company but does match known employment history. */
            personHasMoved?: string;
            /** @description Contact direct phone number. */
            phone?: string;
            /** @description The URL which can be used to retrieve a photo for the contact. */
            picture?: string;
            /**
             * Format: date-time
             * @description The date on which the contact began their current employment.
             */
            positionStartDate?: string;
            /** @description State or province of the contact's work address. */
            region?: string;
            /** @description Contact salutation. */
            salutation?: string;
            /** @description State or province of the contact's work address. */
            state?: string;
            /** @description Street portion of the contact's work address. */
            street?: string;
            /** @description Contact suffix. */
            suffix?: string;
            /** @description Supplemental email address for the contact in example@example.com format. */
            supplementalEmail?: string;
            /** @description List of technology skills identified for a contact. */
            techSkills?: components["schemas"]["TechSkill"][];
            /**
             * Format: date-time
             * @description Date on which the contact record was last validated.
             */
            validDate?: string;
            /** @description Indicates whether the contact's work address is in California. */
            withinCalifornia?: boolean;
            /** @description Indicates whether the contact's work address is in Canada. */
            withinCanada?: boolean;
            /** @description Indicates whether the contact's work address is in Europe. */
            withinEu?: boolean;
            /** @description Years of overall experience. */
            yearsOfExperience?: string;
            /** @description Zip code or postal code of the contact's work address. */
            zipCode?: string;
        };
        /** @description Represents the possible resource types returned in a contact enrich response, including both a successful contact match and a no-match result. Used to encapsulate the response resource for contact enrichment. */
        ContactEnrichResponseResourceUnion: components["schemas"]["EnrichContact"] | components["schemas"]["NoMatchContact"];
        /**
         * @description Match status indicating the result of an enrich request.
         * @enum {string}
         */
        ContactMatchStatus: "FULL_MATCH" | "NO_MATCH" | "NON_MATCH_BY_LAST_UPDATED_DATE" | "NON_MATCH_BY_VALID_DATE" | "NON_MATCH_BY_REQUIRED_FIELDS" | "NON_MATCH_BY_CONTACT_ACCURACY_MIN" | "COMPANY_ONLY_MATCH" | "CONTACT_ONLY_MATCH" | "OPT_OUT" | "LIMIT_EXCEEDED" | "INVALID_INPUT";
        /** @description Model for the contact search input lookup */
        ContactSearchInputLookUp: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["LookupFieldAttributes"];
            /** @description The unique identifier for the resource */
            id: string;
            /**
             * @description The type of the resource (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            type: "ContactSearchInput";
        };
        /** @description Model for the contact search output lookup */
        ContactSearchOutputLookUp: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["LookupFieldAttributes"];
            /** @description The unique identifier for the resource */
            id: string;
            /**
             * @description The type of the resource (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            type: "ContactSearchOutput";
        };
        /** @description Contact search request. */
        ContactSearchRequest: {
            /** @description The primary data of the document */
            data: components["schemas"]["ContactSearchResource"];
        };
        /** @description Request Attributes for contact search. */
        ContactSearchRequestAttributes: {
            /** @description Full Company Address. */
            address?: string;
            /** @description Exclude or include board members from search results. Default behavior is to exclude board members from search results. Submit this as “include” to include board members, set this as “only” to only include board members. */
            boardMember?: string;
            /** @description Filters results based on the provided Buying Group ID. Only one ID can be submitted. */
            buyingGroup?: string[];
            /** @description Search for companies based on description. Accepts a space-separated list of individual words. */
            companyDescription?: string;
            /** @description Unique ZoomInfo identifier for a company. */
            companyId?: string;
            /** @description Company name. */
            companyName?: string;
            /** @description Defaults to only include the present company for a contact. Set this to “past” to return past companies, set this to “pastAndPresent” to include both. */
            companyPastOrPresent?: string;
            /** @description Company ranking (e.g., Fortune 500). Accepts a comma-separated list of IDs. */
            companyRanking?: string;
            /** @description Company hierarchical structure values. Accepts a comma-separated list of values from 'UNSPECIFIED', 'LOCATION', 'DIVISION', 'ACQUISITION', 'SUBSIDIARY', 'FORMER_NEW_NAME'. */
            companyStructureIncludedSubUnitTypes?: string;
            /** @description Company stock ticker symbol. */
            companyTicker?: string[];
            /** @description Company type (private, public, etc.). Accepts a comma-separated list of types. */
            companyType?: string;
            /** @description Company website URL in http://www.example.com format. Accepts a comma-separated list. */
            companyWebsite?: string;
            /** @description Maximum accuracy score for search results. This score indicates the likelihood that a contact is reachable and still employed by the company listed. Minimum score is 70 and maximum is 99. */
            contactAccuracyScoreMax?: string;
            /** @description Minimum accuracy score for search results. This score indicates the likelihood that a contact is reachable and still employed by the company listed. Minimum score is 70 and maximum is 99. */
            contactAccuracyScoreMin?: string;
            /** @description Continent of the primary address of the associated company. */
            continent?: string;
            /** @description Country of the primary address of the associated company. */
            country?: string;
            /** @description Searches by contact's education. */
            degree?: string;
            /** @description Contact department at current place of employment. Accepts a comma-separated list of values. */
            department?: string;
            /** @description Email address for the contact in example@example.com format. */
            emailAddress?: string;
            /** @description Employee count range. Accepts a comma-separated list of values. Alternatively, for more granular ranges, you can use the employeeRangeMin and employeeRangeMax parameters. */
            employeeCount?: string;
            /** @description Maximum employee count for a company. Use with employeeRangeMin to set a range. Alternatively, you can use the employeeCount parameter to search for pre-defined ranges. */
            employeeRangeMax?: string;
            /** @description Minimum employee count for a company. Use with employeeRangeMax to set a range. Alternatively, you can use the employeeCount parameter to search for pre-defined ranges. */
            employeeRangeMin?: string;
            /** @description Search by contact's past employments. Accepts an array of past employment criteria. Contacts matching ANY of the provided past employment records will be returned. */
            employmentHistory?: components["schemas"]["ContactsEmploymentHistory"][];
            /**
             * Format: date
             * @description Engagement end date in YYYY-MM-DD format. EngagementStartDate is required.
             */
            engagementEndDate?: string;
            /**
             * Format: date
             * @description Engagement start date in YYYY-MM-DD format.
             */
            engagementStartDate?: string;
            /** @description List of engagement types to search for. Accepted values are 'email', 'phone', 'online meeting'. Accepts a comma-separated list of these values. */
            engagementType?: string[];
            /** @description Contact title at current place of employment using exact match logic. Use OR to input multiple job titles. */
            exactJobTitle?: string;
            /** @description Accepts a comma-separated list of U.S. and Canada states and metro areas. Companies from any of these regions will be excluded from search results. */
            excludedRegions?: string;
            /** @description Comma-separated list of job titles to exclude from search results. */
            excludeJobTitle?: string;
            /** @description Comma-separated list of management levels to exclude from search results. */
            excludeManagementLevel?: string;
            /** @description Defaults to false. To include partial profiles in your search results, set this to true. Contacts who do not have an active company associated with them are considered partial profiles. */
            excludePartialProfiles?: boolean;
            /** @description Exclude companies with these technology product tags. String can be one value ('131315') or a comma-separated list which is treated as OR logic ('131315, 132222'). Individual values can also include AND logic ('131315 AND 131301, 132222'). This last example would be evaluated as ((131201 AND 131301) OR 132222). */
            excludeTechAttributeTagList?: string;
            /** @description Defaults to false. Set this to true to include only executives in search results. */
            executivesOnly?: boolean;
            /** @description Contact first name. */
            firstName?: string;
            /** @description Contact full name. */
            fullName?: string;
            /**
             * Format: int32
             * @description Maximum funding amount in thousands (e.g., 1 = 1000, 500 = 500,000). If fundingAmountMax is used without fundingAmountMin, the result will be the amount specified or less.
             */
            fundingAmountMax?: number;
            /**
             * Format: int32
             * @description Minimum funding amount in thousands (e.g., 1 = 1000, 500 = 500,000). If fundingAmountMin is used without fundingAmountMax, the result will be the amount specified or greater.
             */
            fundingAmountMin?: number;
            /**
             * Format: date
             * @description End date of the funding in YYYY-MM-DD format. If fundingStartDate and fundingEndDate are both specified, they will be used as a range. Start date after end date returns an error. If start date and end date are the same, will return results for exact date.
             */
            fundingEndDate?: string;
            /**
             * Format: date
             * @description Start date of the funding in YYYY-MM-DD format. If fundingStartDate and fundingEndDate are both specified, they will be used as a range. Start date after end date returns an error. If start date and end date are the same, will return results for exact date.
             */
            fundingStartDate?: string;
            /** @description Defaults to include. Set this to “exclude” to exclude contacts who have been notified of inclusion in ZoomInfo's database. Set this to “only” to only include contacts who have been notified. */
            hasBeenNotified?: string;
            /** @description Hashed email value for the contact. Allows searching via an email address with the extra security of not exposing the email. Supported hash algorithms are: MD5, SHA1, SHA256 and SHA512. */
            hashedEmail?: string;
            /** @description Hash tags for a company. Can include a comma-separated list. */
            hashTagString?: string;
            /** @description Top-level industry that the contact works in. A contact can have multiple top level industries. Tags are based on the contact's current company. Can include a comma-separated list. */
            industryCodes?: string;
            /** @description Industry keywords associated with a company. Can include either 'AND' or 'OR' operators. For example, 'software AND security' or 'software OR security' */
            industryKeywords?: string;
            /** @description Contact job function at their current place of employment. */
            jobFunction?: string;
            /** @description Contact title at current place of employment. Use OR to input multiple job titles. */
            jobTitle?: string;
            /** @description Contact last name. */
            lastName?: string;
            /**
             * Format: date
             * @description Limit results to only contacts that have a `lastUpdateDate` **after** the provided value.
             *     The value must be a date formatted using the ISO 8601 date format (YYYY-MM-DD).
             *
             *     Example value: `2024-01-01` will return only contacts with a `lastUpdatedDate` after January 1, 2024
             */
            lastUpdatedDateAfter?: string;
            /**
             * Format: int32
             * @description Number of months within which the contact's profile was last updated.
             */
            lastUpdatedInMonths?: number;
            /** @description Searches by contact's locationIds. */
            locationCompanyId?: number[];
            /** @description Location type (PersonOrHQ, PersonAndHQ, Person, HQ, PersonThenHQ). */
            locationSearchType?: string;
            /** @description Contact management level at current place of employment. */
            managementLevel?: string;
            /** @description Company metro area. Accepts a comma-separated list of U.S. and Canada metro areas. */
            metroRegion?: string;
            /** @description Contact middle initial. */
            middleInitial?: string;
            /** @description Four-digit numerical codes assigned by the U.S. government to business establishments to identify the primary business of the establishment. Accepts a comma-separated list of values. */
            naicsCodes?: string;
            /** @description Maximum one year employee growth rate for a company. Use with oneYearEmployeeGrowthRateMin to set a range. */
            oneYearEmployeeGrowthRateMax?: string;
            /** @description Minimum one year employee growth rate for a company. Use with oneYearEmployeeGrowthRateMax to set a range. */
            oneYearEmployeeGrowthRateMin?: string;
            /** @description ZoomInfo Company ID for parent company. */
            parentId?: string;
            /** @description Unique ZoomInfo identifier for the contact. Can include a comma-separated list. */
            personId?: string;
            /**
             * @description List of phone numbers used to locate the contacts your are searching for. The phone numbers can either
             *     be direct dial office phone numbers or mobile phone numbers. Contacts will be returned if they match a single
             *     phone number from the provided list. Phone numbers can be formatted in any standard format as all non-digit
             *     characters will be stripped before searching.
             *
             *     Example: `800-555-2345` is functionally equivalent to `8005552345` as an input value
             */
            phone?: string[];
            /**
             * Format: date
             * @description Maximum date for when a contact began current employment. Use with positionStartDateMin to set a range. Uses YYYY-MM-DD format.
             */
            positionStartDateMax?: string;
            /**
             * Format: date
             * @description Minimum date for when a contact began current employment. Use with positionStartDateMax to set a range. Uses YYYY-MM-DD format.
             */
            positionStartDateMin?: string;
            /** @description Default is false. Used in conjunction with the industryCodes input parameter. When set to true, any result returned must have one of the specified industries as a primary industry. If no industries are specified, then this parameter will be ignored. */
            primaryIndustriesOnly?: boolean;
            /** @description Specify a list of required fields for each record returned. Can include email (business email), phone (direct or company phone), directPhone (contact's direct phone), personalEmail, and mobilePhone. Can include a comma-separated list of these fields. */
            requiredFields?: string;
            /** @description Annual revenue range in U.S. dollars. Accepts a comma-separated list of values. */
            revenue?: string;
            /**
             * Format: int32
             * @description Maximum annual revenue for a company in U.S. dollars (expressed in thousands). Use with revenueMin to set a range.
             */
            revenueMax?: number;
            /**
             * Format: int32
             * @description Minimum annual revenue for a company in U.S. dollars (expressed in thousands). Use with revenueMax to set a range.
             */
            revenueMin?: number;
            /** @description School name. */
            school?: string;
            /** @description The Standard Industrial Classification is a system for classifying industries by a four-digit code numerical assigned by the U.S. government to business establishments to identify the primary business of the establishment. Accepts a comma-separated list. */
            sicCodes?: string;
            /** @description State or province of the company's address. */
            state?: string;
            /** @description Street address portion of the company's location. */
            street?: string;
            /** @description Company sub types (e.g., division, subsidiary). Use this in conjunction with parentId or ultimateParentId. */
            subUnitTypes?: string;
            /** @description Supplemental email address for the contact in example@example.com format. */
            supplementalEmail?: string[];
            /** @description Technology Product Tags. Can include a comma-separated list. */
            techAttributeTagList?: string;
            /** @description List of technology skill IDs for a contact. Default criteria is OR between multiple values. Should only contain string numbers. Find the IDs for the skills in the lookup endpoint. */
            techSkills?: string[];
            /** @description Maximum two year employee growth rate for a company. Use with twoYearEmployeeGrowthRateMin to set a range. */
            twoYearEmployeeGrowthRateMax?: string;
            /** @description Minimum two year employee growth rate for a company. Use with twoYearEmployeeGrowthRateMax to set a range. */
            twoYearEmployeeGrowthRateMin?: string;
            /** @description Company sub types (e.g., division, subsidiary). Use this in conjunction with parentId or ultimateParentId. */
            ultimateParentId?: string;
            /** @description Returns whether or not record is under management if set to true. */
            underManagement?: boolean;
            /**
             * Format: date
             * @description Limit results to only contacts that have a `validDate` **after** the provided value.
             *     The value must be a date formatted using the ISO 8601 date format (YYYY-MM-DD)
             *
             *     Example value: `2024-01-01` will return only contacts with a `validDate` after January 1, 2024
             */
            validDateAfter?: string;
            /** @description List of Web References for a contact. Default criteria is OR between multiple values. Should only contain english letters and numbers. */
            webReferences?: string[];
            /** @description Total years of experience. Accepts a comma-separated list. */
            yearsOfExperience?: string;
            /** @description Zip Code or Postal Code of the company's address. */
            zipCode?: string;
            /**
             * Format: int16
             * @description Used in conjunction with zipCode, designates a geographical radius (in miles) from the zipCode provided. Supported values are [10, 25, 50, 100, 250]
             */
            zipCodeRadiusMiles?: number;
            /** @description Maximum number of ZoomInfo contacts associated with company. */
            zoominfoContactsMax?: string;
            /** @description Minimum number of ZoomInfo contacts associated with company. */
            zoominfoContactsMin?: string;
        };
        /** @description Contact search request resource. */
        ContactSearchResource: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["ContactSearchRequestAttributes"];
            /**
             * @description The type of the resource
             * @default ContactSearch
             */
            type: string;
        };
        /** @description A list of contacts that match the criteria specified in the request */
        ContactSearchResponse: {
            /** @description The primary data of the document */
            data: components["schemas"]["Contact"][];
            /** @description Links related to the primary data */
            links?: components["schemas"]["Links"];
            /** @description Non-standard meta information about the document */
            meta?: components["schemas"]["ResultMeta"];
        };
        /** @description Response attributes for contact search. */
        ContactSearchResponseAttributes: {
            /** @description Contact's company data for search request. */
            company?: components["schemas"]["ContactCompanySearch"];
            /**
             * Format: double
             * @description This score indicates the likelihood that a contact is reachable and still employed by the company listed. Minimum score is 75 and maximum is 99.
             */
            contactAccuracyScore?: number;
            /** @description Contact flagged with do not call for direct phone. */
            directPhoneDoNotCall?: boolean;
            /** @description Contact first name. */
            firstName?: string;
            /** @description Indicates whether ZoomInfo has a country for the contact. */
            hasCompanyCountry?: boolean;
            /** @description Indicates whether ZoomInfo has company headcount data for the contact. */
            hasCompanyEmployeeCount?: boolean;
            /** @description Indicates whether ZoomInfo has company industry for the contact. */
            hasCompanyIndustry?: boolean;
            /** @description Indicates whether ZoomInfo has a company phone number for the contact. */
            hasCompanyPhone?: boolean;
            /** @description Indicates whether ZoomInfo has company revenue data for the contact. */
            hasCompanyRevenue?: boolean;
            /** @description Indicates whether ZoomInfo has a state for the contact. */
            hasCompanyState?: boolean;
            /** @description Indicates whether ZoomInfo has a street address for the contact. */
            hasCompanyStreet?: boolean;
            /** @description Indicates whether ZoomInfo has a zip code or postal code for the contact. */
            hasCompanyZipCode?: boolean;
            /** @description Indicates whether ZoomInfo has a direct phone number for the contact. */
            hasDirectPhone?: boolean;
            /** @description Indicates whether ZoomInfo has an email address for the contact. */
            hasEmail?: boolean;
            /** @description Indicates whether ZoomInfo has a mobile phone number for the contact. */
            hasMobilePhone?: boolean;
            /** @description Indicates whether ZoomInfo has a supplemental email address for the contact. */
            hasSupplementalEmail?: boolean;
            /** @description Contact job title at current place of employment. */
            jobTitle?: string;
            /** @description Contact last name. */
            lastName?: string;
            /**
             * Format: date-time
             * @description Date on which the contact record was last updated.
             */
            lastUpdatedDate?: string;
            /** @description Comma-separated list of contact management levels. */
            managementLevel?: string;
            /** @description Management status of the record. */
            managementStatus?: components["schemas"]["ManagementStatus"];
            /** @description Contact middle name. */
            middleName?: string;
            /** @description Contact flagged with do not call for mobile phone. */
            mobilePhoneDoNotCall?: boolean;
            /** @description Get last Education information. */
            school?: string;
            /**
             * Format: date-time
             * @description Date on which the contact record was last validated.
             */
            validDate?: string;
        };
        /** @description Contact's past employment information used for contact search criteria. */
        ContactsEmploymentHistory: {
            /** @description Company name of past employment. */
            companyName: string;
            /** @description Job title at past employment. */
            jobTitle: string;
        };
        /** @description Model for a continent */
        ContinentLookup: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["BasicEntityModelAttributes"];
            /** @description The unique identifier for the resource */
            id: string;
            /**
             * @description The type of the resource (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            type: "Continent";
        };
        /** @description Metadata describing the result of a corporate hierarchy enrich match, including the match status and the input criteria used for the match. Used to provide additional context about how the corporate hierarchy enrich response was determined. */
        CorporateHierarchyAttributeMeta: {
            /** @description The input criteria that was used to perform the corporate hierarchy enrich match. This provides traceability for the match result. */
            input: components["schemas"]["CorporateHierarchyEnrichRequestCriteria"];
            /** @description The match status for the corporate hierarchy enrich operation, indicating whether a match was found and the type of match. */
            matchStatus: components["schemas"]["CompanyMatchStatus"];
            /** @description Details about any warnings encountered during the validation of the enrich request input criteria. */
            warnings?: components["schemas"]["Warning"][];
        };
        /** @description Model for the corporate hierarchy enrich input lookup */
        CorporateHierarchyEnrichInputLookUp: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["LookupFieldAttributes"];
            /** @description The unique identifier for the resource */
            id: string;
            /**
             * @description The type of the resource (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            type: "CorporateHierarchyEnrichInput";
        };
        /** @description Model for the corporate hierarchy enrich output lookup */
        CorporateHierarchyEnrichOutputLookUp: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["LookupFieldAttributes"];
            /** @description The unique identifier for the resource */
            id: string;
            /**
             * @description The type of the resource (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            type: "CorporateHierarchyEnrichOutput";
        };
        /** @description Corporate hierarchy enrich request. */
        CorporateHierarchyEnrichRequest: {
            /** @description The primary data of the document */
            data: components["schemas"]["CorporateHierarchyEnrichRequestResource"];
        };
        /** @description Corporate hierarchy enrich request attributes. */
        CorporateHierarchyEnrichRequestAttributes: {
            /** @description List of criteria to match against. */
            matchCompanyInput: components["schemas"]["CorporateHierarchyEnrichRequestCriteria"][];
            /** @description List of fields to be returned in the response. */
            outputFields: string[];
        };
        /** @description Corporate hierarchy enrich request criteria. */
        CorporateHierarchyEnrichRequestCriteria: {
            /**
             * Format: int64
             * @description Unique ZoomInfo identifier for a company.
             */
            companyId?: number;
            /** @description Company name. */
            companyName?: string;
            /** @description Company website URL in http://www.example.com format. */
            companyWebsite?: string;
        };
        /** @description Corporate hierarchy enrich request resource. */
        CorporateHierarchyEnrichRequestResource: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["CorporateHierarchyEnrichRequestAttributes"];
            /**
             * @description The type of the resource
             * @default CorporateHierarchyEnrich
             */
            type: string;
        };
        /** @description Corporate hierarchy enrich response. */
        CorporateHierarchyEnrichResponse: {
            /** @description The primary data of the document */
            data: components["schemas"]["CorporateHierarchyEnrichResponseResourceUnion"][];
        };
        /** @description Corporate hierarchy enrich response attributes. */
        CorporateHierarchyEnrichResponseAttributes: {
            /**
             * Format: int64
             * @description Unique ZoomInfo identifier for a company.
             */
            companyId?: number;
            /** @description Lists companies and locations in the family tree for this company. */
            familyTree?: components["schemas"]["FamilyTree"][];
            /** @description Lists companies higher up in the corporate hierarchy for this company. */
            parentage?: components["schemas"]["Parentage"][];
        };
        /** @description Represents the possible resource types returned in a corporate hierarchy enrich response, including both a successful corporate hierarchy match and a no-match result. Used to encapsulate the response resource for corporate hierarchy enrichment. */
        CorporateHierarchyEnrichResponseResourceUnion: components["schemas"]["EnrichCorporateHierarchy"] | components["schemas"]["NoMatchCorporateHierarchy"];
        /** @description Model for a country */
        CountryLookup: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["BasicEntityModelAttributes"];
            /** @description The unique identifier for the resource */
            id: string;
            /**
             * @description The type of the resource (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            type: "Country";
        };
        /** @description Department budget details. */
        DepartmentBudget: {
            /**
             * Format: int32
             * @description Finance budget.
             */
            financialBudget?: number;
            /**
             * Format: int32
             * @description HR budget.
             */
            hrBudget?: number;
            /**
             * Format: int32
             * @description IT budget.
             */
            itBudget?: number;
            /**
             * Format: int32
             * @description Marketing budget.
             */
            marketingBudget?: number;
        };
        /** @description Model for the department */
        DepartmentLookup: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["BasicEntityModelAttributes"];
            /** @description The unique identifier for the resource */
            id: string;
            /**
             * @description The type of the resource (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            type: "Department";
        };
        /** @description Contact education details. */
        Education: {
            /** @description School type (e.g., High School, College, University). */
            educationDegree?: components["schemas"]["EducationDegree"];
            /** @description School name. */
            school?: string;
        };
        /** @description Education degree for match */
        EducationDegree: {
            /** @description Area of study for the degree (e.g., Computer Science, Business Administration, Economics). */
            areaOfStudy?: string;
            /** @description Degree type (e.g., Bachelor of Science, Master of Arts, Doctor of Philosophy). */
            degree?: string;
        };
        /** @description Employee count by department. */
        EmployeeCountByDepartment: {
            /**
             * Format: int32
             * @description CSuite.
             */
            cSuite?: number;
            /**
             * Format: int32
             * @description EngineeringAndTechnical.
             */
            engineeringAndTechnical?: number;
            /**
             * Format: int32
             * @description Finance.
             */
            finance?: number;
            /**
             * Format: int32
             * @description HumanResources.
             */
            humanResources?: number;
            /**
             * Format: int32
             * @description InformationTechnology.
             */
            informationTechnology?: number;
            /**
             * Format: int32
             * @description Legal.
             */
            legal?: number;
            /**
             * Format: int32
             * @description Marketing.
             */
            marketing?: number;
            /**
             * Format: int32
             * @description MedicalAndHealth.
             */
            medicalAndHealth?: number;
            /**
             * Format: int32
             * @description Operations.
             */
            operations?: number;
            /**
             * Format: int32
             * @description Sales.
             */
            sales?: number;
        };
        /** @description Model for the employee count */
        EmployeeCountLookup: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["BasicEntityModelAttributes"];
            /** @description The unique identifier for the resource */
            id: string;
            /**
             * @description The type of the resource (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            type: "EmployeeCount";
        };
        /** @description Employee growth of the company in the past two years. A one- and two-year growth percentage is provided as well as a quarter-by-quarter breakdown of total employee count. */
        EmployeeGrowth: {
            /** @description Quarter-by-quarter breakdown of total employee count. */
            employeeGrowthDataPoints?: components["schemas"]["EmployeeGrowthDataPoint"][];
            /** @description One-year growth rate. */
            oneYearGrowthRate?: string;
            /** @description Two-year growth rate. */
            twoYearGrowthRate?: string;
        };
        /** @description Quarter-by-quarter breakdown of total employee count. */
        EmployeeGrowthDataPoint: {
            /**
             * Format: int64
             * @description Total employee count for the data point.
             */
            employeeCount?: number;
            /** @description Label for the data point (e.g., '21 - Q1'). */
            label?: string;
        };
        /** @description Company for match. */
        EmploymentCompany: {
            /**
             * Format: int64
             * @description Unique ZoomInfo identifier for a company.
             */
            companyId?: number;
            /** @description Company name. */
            companyName?: string;
            /** @description Company phone. */
            companyPhone?: string;
            /** @description Company website URL in http://www.example.com format. */
            companyWebsite?: string;
        };
        /** @description Contact employment history */
        EmploymentHistory: {
            /** @description Company for employment */
            company?: components["schemas"]["EmploymentCompany"];
            /**
             * Format: date
             * @description Start date for this employment. Uses YYYY-MM-DD format.
             */
            fromDate?: string;
            /** @description Contact title at current place of employment */
            jobTitle?: string;
            /** @description Contact management level */
            managementLevel?: string[];
            /**
             * Format: date
             * @description End date for this employment. Uses YYYY-MM-DD format.
             */
            toDate?: string;
        };
        /** @description Engagement details. */
        Engagement: {
            /**
             * Format: date-time
             * @description Date of engagement.
             */
            engagementDate?: string;
            /** @description Type of engagement. */
            engagementType?: string;
        };
        /** @description A matching company was identified from the provided input data. This result will always be a FULL_MATCH (where the company information matched). The match status can be found within the meta object for reference. */
        EnrichCompany: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["CompanyEnrichResponseAttributes"];
            /** @description The unique identifier for the resource */
            id: string;
            /** @description Non-standard meta information about the resource */
            meta?: components["schemas"]["CompanyAttributeMeta"];
            /**
             * @description The type of the resource (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            type: "Company";
        };
        /** @description A matching contact was identified from the provided input data. This result could be either a FULL_MATCH (where both the company and contact information matched), a CONTACT_ONLY_MATCH (only the contact information provided matched and only contact fields requested are returned), or a COMPANY_ONLY_MATCH (only the company information provided matched and only the company fields requested are returned). The match status can be found within the meta object to determine which case was met. */
        EnrichContact: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["ContactEnrichResponseAttributes"];
            /** @description The unique identifier for the resource */
            id: string;
            /** @description Non-standard meta information about the resource */
            meta?: components["schemas"]["ContactAttributeMeta"];
            /**
             * @description The type of the resource (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            type: "Contact";
        };
        /** @description A matching corporate hierarchy was identified from the provided input data. This result will always be a FULL_MATCH (where the company information matched). The match status can be found within the meta object for reference. */
        EnrichCorporateHierarchy: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["CorporateHierarchyEnrichResponseAttributes"];
            /** @description The unique identifier for the resource */
            id: string;
            /** @description Non-standard meta information about the resource */
            meta?: components["schemas"]["CorporateHierarchyAttributeMeta"];
            /**
             * @description The type of the resource (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            type: "CorporateHierarchy";
        };
        /**
         * @description All possible enrich lookup field names
         * @enum {string}
         */
        EnrichEntityNameEnum: "company" | "contact" | "scoop" | "news" | "intent" | "technology" | "hashtag" | "orgChart" | "corporate-hierarchy";
        /** @description Social media URLs for the contact (e.g., Facebook, Twitter, LinkedIn). */
        ExternalUrl: {
            /** @description Type of social media account (e.g., Facebook, Twitter, LinkedIn). */
            type?: string;
            /** @description URL for the social media account. */
            url?: string;
        };
        /** @description Family node information. */
        FamilyNode: {
            /** @description City of the company's primary address. */
            city?: string;
            /**
             * Format: int64
             * @description Unique ZoomInfo identifier for a company.
             */
            companyId?: number;
            /** @description Denotes a branch or sub-branch of the family tree within the corporate hierarchy. */
            familyNodes?: components["schemas"]["FamilyNode"][];
            /** @description Company name. */
            name?: string;
            /** @description State or province of the company's primary address. */
            state?: string;
            /** @description Denotes the type of sub-unit represented by a family node within the corporate hierarchy. */
            subUnitTypeInfo: components["schemas"]["SubUnitTypeInfo"];
        };
        /** @description Family tree information. */
        FamilyTree: {
            /** @description City of the company's primary address. */
            city?: string;
            /**
             * Format: int64
             * @description Unique ZoomInfo identifier for a company.
             */
            companyId?: number;
            /** @description Denotes a branch or sub-branch of the family tree within the corporate hierarchy. */
            familyNodes?: components["schemas"]["FamilyNode"][];
            /** @description Company name. */
            name?: string;
            /** @description State or province of the company's primary address. */
            state?: string;
        };
        /**
         * @description All possible lookup field names
         * @enum {string}
         */
        FieldNameEnum: "board-members" | "buying-groups" | "company-rankings" | "company-types" | "continents" | "countries" | "departments" | "employee-count" | "hashtags" | "industries" | "intent-topics" | "job-functions" | "job-titles" | "management-levels" | "metro-regions" | "naics-codes" | "news-categories" | "revenue-ranges" | "scoop-departments" | "scoop-topics" | "scoop-types" | "sic-codes" | "states" | "sub-unit-types" | "tech-categories" | "tech-products" | "tech-skills" | "tech-vendors" | "years-of-experience";
        /** @enum {string} */
        FieldTypeEnum: "input" | "output";
        /** @description Model for the hashtag enrich input lookup */
        HashtagEnrichInputLookUp: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["LookupFieldAttributes"];
            /** @description The unique identifier for the resource */
            id: string;
            /**
             * @description The type of the resource (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            type: "HashtagEnrichInput";
        };
        /** @description Model for the technology enrich output lookup */
        HashtagEnrichOutputLookUp: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["LookupFieldAttributes"];
            /** @description The unique identifier for the resource */
            id: string;
            /**
             * @description The type of the resource (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            type: "HashtagEnrichOutput";
        };
        /** @description Hashtag enrich request. */
        HashtagEnrichRequest: {
            /** @description The primary data of the document */
            data: components["schemas"]["HashtagEnrichRequestResource"];
        };
        /** @description Request attributes for hashtag enrich. */
        HashtagEnrichRequestAttributes: {
            /**
             * Format: int64
             * @description Unique ZoomInfo Identifier for the company.
             */
            companyId?: number;
        };
        /** @description Hashtag enrich request resource. */
        HashtagEnrichRequestResource: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["HashtagEnrichRequestAttributes"];
            /**
             * @description The type of the resource
             * @default HashtagEnrich
             */
            type: string;
        };
        /** @description Hashtag enrich response. */
        HashtagEnrichResponse: {
            /** @description The primary data of the document */
            data: components["schemas"]["HashtagEnrichResponseResource"][];
            /** @description Non-standard meta information about the document */
            meta?: components["schemas"]["NonPaginatedResultMeta"];
        };
        /** @description Hashtag enrich response Attributes. */
        HashtagEnrichResponseAttributes: {
            /** @description Indicates whether the hashtag is categorized. */
            categorizedFlag?: boolean;
            /** @description Description of the data being returned. */
            description?: string;
            /** @description Display label for a hashtag. */
            displayLabel?: string;
            /** @description Display score for the hashtag. */
            displayScore?: string;
            /** @description Group associated with the hashtag. */
            group?: string;
            /** @description Indicates whether the hashtag is hidden. */
            hidden?: boolean;
            /** @description Label for the hashtag. */
            label?: string;
            /** @description Parent Category for the retrieved data. */
            parentCategory?: string;
            /**
             * Format: int32
             * @description Priority of the hashtag.
             */
            priority?: number;
            /** @description Search string for a hashtag. */
            searchString?: string;
        };
        /** @description Hashtag enrich response resource. */
        HashtagEnrichResponseResource: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["HashtagEnrichResponseAttributes"];
            /** @description The unique identifier for the resource */
            id: string;
            /**
             * @description The type of the resource
             * @default Hashtag
             */
            type: string;
        };
        /** @description Model for the hashtag lookup results */
        HashtagLookup: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["BasicEntityModelAttributes"];
            /** @description The unique identifier for the resource */
            id: string;
            /**
             * @description The type of the resource (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            type: "Hashtag";
        };
        /** @description The industry grouping for the company along with it's codes. A company can have multiple industries. */
        IndustryCode: {
            /** @description Unique identifier for the industry code. */
            id?: string;
            /** @description Name of the industry code. */
            name?: string;
        };
        /** @description Model for the industry */
        IndustryLookup: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["BasicEntityModelAttributes"];
            /** @description The unique identifier for the resource */
            id: string;
            /**
             * @description The type of the resource (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            type: "Industry";
        };
        /** @description ZoomInfo Company */
        IntentCompany: {
            /** @description Indicates whether a company has other topics with increased consumption. Values are true and false. */
            hasOtherTopicConsumption?: boolean;
            /** @description ZoomInfo unique identifier for the company. */
            id?: string;
            /** @description Company name. */
            name?: string;
            /** @description Company domain. */
            website?: string;
        };
        /** @description Model for the intent enrich input lookup */
        IntentEnrichInputLookUp: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["LookupFieldAttributes"];
            /** @description The unique identifier for the resource */
            id: string;
            /**
             * @description The type of the resource (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            type: "IntentEnrichInput";
        };
        /** @description Model for the intent enrich output lookup */
        IntentEnrichOutputLookUp: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["LookupFieldAttributes"];
            /** @description The unique identifier for the resource */
            id: string;
            /**
             * @description The type of the resource (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            type: "IntentEnrichOutput";
        };
        /** @description Intent enrich request. */
        IntentEnrichRequest: {
            /** @description The primary data of the document */
            data: components["schemas"]["IntentEnrichRequestResource"];
        };
        /** @description Intent enrich request attributes. */
        IntentEnrichRequestAttributes: {
            /** @description Maximum audience strength score. Use with audienceStrengthMin to form a range. Values are A, B, C, D, and E, with A indicating a larger audience. */
            audienceStrengthMax?: string;
            /** @description Minimum audience strength score. Use with audienceStrengthMax to form a range. Values are A, B, C, D, and E, with A indicating a larger audience. */
            audienceStrengthMin?: string;
            /**
             * Format: int64
             * @description Unique ZoomInfo identifier for a company.
             */
            companyId?: number;
            /** @description Company name. */
            companyName?: string;
            /** @description Company website URL in http://www.example.com format. Accepts a comma-separated list. */
            companyWebsite?: string;
            /** @description Default is true. Set to false to exclude recommended contacts from results. */
            findRecommendedContacts?: boolean;
            /**
             * Format: date
             * @description End date for a company signaling interest in a topic. Uses YYYY-MM-DD format.
             */
            signalEndDate?: string;
            /**
             * Format: int32
             * @description Maximum signal score. Use with signalScoreMin to form a range. Minimum score is 60 and maximum is 100.
             */
            signalScoreMax?: number;
            /**
             * Format: int32
             * @description Minimum signal score. Use with signalScoreMax to form a range. Minimum score is 60 and maximum is 100.
             */
            signalScoreMin?: number;
            /**
             * Format: date
             * @description Start date for a company signaling interest in a topic. Uses YYYY-MM-DD format.
             */
            signalStartDate?: string;
            /** @description Intent topics. Accepts an Array of up to 50 Strings. See the 'Intent Topics' Lookup endpoint for values. */
            topics: string[];
        };
        /** @description Intent enrich request resource. */
        IntentEnrichRequestResource: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["IntentEnrichRequestAttributes"];
            /**
             * @description The type of the resource
             * @default IntentEnrich
             */
            type: string;
        };
        /** @description A list of Intent topics that match the criteria specified in the request */
        IntentEnrichResponse: {
            /** @description The primary data of the document */
            data: components["schemas"]["IntentEnrichResponseResource"][];
            /** @description Links related to the primary data */
            links?: components["schemas"]["Links"];
            /** @description Non-standard meta information about the document */
            meta?: components["schemas"]["ResultMeta"];
        };
        /** @description Attributes of a single intent result. */
        IntentEnrichResponseAttributes: {
            /** @description Audience strength for the topic. */
            audienceStrength?: string;
            /** @description Intent category. */
            category?: string;
            /** @description Company data for the intent topic. */
            company?: components["schemas"]["IntentCompany"];
            /** @description Suggested contacts at the company that are related to the intent topic. */
            recommendedContacts?: components["schemas"]["RecommendedContact"][];
            /**
             * Format: date-time
             * @description Date the signal was identified.
             */
            signalDate?: string;
            /**
             * Format: int32
             * @description Signal score for the topic.
             */
            signalScore?: number;
            /**
             * Format: int32
             * @description The total number of intent signals detected during your specified timeframe.
             */
            spikesInDateRange?: number;
            /** @description Intent topic. */
            topic?: string;
            /** @description Up to top 3 signal locations identified for the Intent */
            topSignalLocations?: components["schemas"]["TopSignalLocation"][];
        };
        /** @description Intent */
        IntentEnrichResponseResource: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["IntentEnrichResponseAttributes"];
            /** @description The unique identifier for the resource */
            id: string;
            /**
             * @description The type of the resource
             * @default Intent
             */
            type: string;
        };
        /** @description Request attributes for intent. */
        IntentRequestAttributes: {
            /** @description Maximum audience strength score. Use with audienceStrengthMin to form a range. Values are A, B, C, D, and E, with A indicating a larger audience. */
            audienceStrengthMax?: string;
            /** @description Minimum audience strength score. Use with audienceStrengthMax to form a range. Values are A, B, C, D, and E, with A indicating a larger audience. */
            audienceStrengthMin?: string;
            /** @description Default is true. Set to false to exclude recommended contacts from results. */
            findRecommendedContacts?: boolean;
            /**
             * Format: date
             * @description End date for a company signaling interest in a topic. Uses YYYY-MM-DD format.
             */
            signalEndDate?: string;
            /**
             * Format: int32
             * @description Maximum signal score. Use with signalScoreMin to form a range. Minimum score is 60 and maximum is 100.
             */
            signalScoreMax?: number;
            /**
             * Format: int32
             * @description Minimum signal score. Use with signalScoreMax to form a range. Minimum score is 60 and maximum is 100.
             */
            signalScoreMin?: number;
            /**
             * Format: date
             * @description Start date for a company signaling interest in a topic. Uses YYYY-MM-DD format.
             */
            signalStartDate?: string;
            /** @description Intent topics. Accepts an Array of up to 50 Strings. See the 'Intent Topics' Lookup endpoint for values. */
            topics: string[];
        };
        /** @description ZoomInfo Intent */
        IntentResponse: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["IntentSearchResponseAttributes"];
            /** @description The unique identifier for the resource */
            id: string;
            /**
             * @description The type of the resource
             * @default Intent
             */
            type: string;
        };
        /** @description Attributes of a single intent result. */
        IntentResponseAttributes: {
            /** @description Audience strength for the topic. */
            audienceStrength?: string;
            /** @description Intent category. */
            category?: string;
            /** @description Company data for the intent topic. */
            company?: components["schemas"]["IntentCompany"];
            /** @description Suggested contacts at the company that are related to the intent topic. */
            recommendedContacts?: components["schemas"]["RecommendedContact"][];
            /**
             * Format: date-time
             * @description Date the signal was identified.
             */
            signalDate?: string;
            /**
             * Format: int32
             * @description Signal score for the topic.
             */
            signalScore?: number;
            /**
             * Format: int32
             * @description The total number of intent signals detected during your specified timeframe.
             */
            spikesInDateRange?: number;
            /** @description Intent topic. */
            topic?: string;
        };
        /** @description Model for the intent search input lookup */
        IntentSearchInputLookUp: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["LookupFieldAttributes"];
            /** @description The unique identifier for the resource */
            id: string;
            /**
             * @description The type of the resource (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            type: "IntentSearchInput";
        };
        /** @description Model for the intent search output lookup */
        IntentSearchOutputLookUp: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["LookupFieldAttributes"];
            /** @description The unique identifier for the resource */
            id: string;
            /**
             * @description The type of the resource (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            type: "IntentSearchOutput";
        };
        /** @description Intent search request. */
        IntentSearchRequest: {
            /** @description The primary data of the document */
            data: components["schemas"]["IntentSearchResource"];
        };
        /** @description Request Attributes for intent search. */
        IntentSearchRequestAttributes: {
            /** @description Full Company Address. */
            address?: string;
            /** @description Maximum audience strength score. Use with audienceStrengthMin to form a range. Values are A, B, C, D, and E, with A indicating a larger audience. */
            audienceStrengthMax?: string;
            /** @description Minimum audience strength score. Use with audienceStrengthMax to form a range. Values are A, B, C, D, and E, with A indicating a larger audience. */
            audienceStrengthMin?: string;
            /** @description Search using Business Model (B2C, B2B, B2G) for a company. Default is All. */
            businessModel?: string[];
            /** @description Search for companies based on description. Accepts a space-separated list of individual words. */
            companyDescription?: string;
            /** @description Company ranking (e.g., Fortune 500). Accepts a comma-separated list of IDs. */
            companyRanking?: string;
            /** @description Company hierarchical structure values. Accepts a comma-separated list of values from 'UNSPECIFIED', 'LOCATION', 'DIVISION', 'ACQUISITION', 'SUBSIDIARY', 'FORMER_NEW_NAME'. */
            companyStructureIncludedSubUnitTypes?: string;
            /** @description Company stock ticker symbol. */
            companyTicker?: string[];
            /** @description Company type (private, public, etc.). Accepts a comma-separated list of types. */
            companyType?: string;
            /** @description Continent of the primary address of the associated company. */
            continent?: string;
            /** @description Country of the primary address of the associated company. */
            country?: string;
            /** @description Employee count range. Accepts a comma-separated list of values. Alternatively, for more granular ranges, you can use the employeeRangeMin and employeeRangeMax parameters. */
            employeeCount?: string;
            /** @description Maximum employee count for a company. Use with employeeRangeMin to set a range. Alternatively, you can use the employeeCount parameter to search for pre-defined ranges. */
            employeeRangeMax?: string;
            /** @description Minimum employee count for a company. Use with employeeRangeMax to set a range. Alternatively, you can use the employeeCount parameter to search for pre-defined ranges. */
            employeeRangeMin?: string;
            /** @description Accepts a comma-separated list of U.S. and Canada states and metro areas. Companies from any of these regions will be excluded from search results. */
            excludedRegions?: string;
            /** @description Default is true. Set to false to exclude recommended contacts from results. */
            findRecommendedContacts?: boolean;
            /**
             * Format: int32
             * @description Maximum funding amount in thousands (e.g., 1 = 1000, 500 = 500,000). If fundingAmountMax is used without fundingAmountMin, the result will be the amount specified or less.
             */
            fundingAmountMax?: number;
            /**
             * Format: int32
             * @description Minimum funding amount in thousands (e.g., 1 = 1000, 500 = 500,000). If fundingAmountMin is used without fundingAmountMax, the result will be the amount specified or greater.
             */
            fundingAmountMin?: number;
            /**
             * Format: date
             * @description End date of the funding in YYYY-MM-DD format. If fundingStartDate and fundingEndDate are both specified, they will be used as a range. Start date after end date returns an error. If start date and end date are the same, will return results for exact date.
             */
            fundingEndDate?: string;
            /**
             * Format: date
             * @description Start date of the funding in YYYY-MM-DD format. If fundingStartDate and fundingEndDate are both specified, they will be used as a range. Start date after end date returns an error. If start date and end date are the same, will return results for exact date.
             */
            fundingStartDate?: string;
            /** @description Hash tags for a company. Can include a comma-separated list. */
            hashTagString?: string;
            /** @description Top-level industry that the contact works in. A contact can have multiple top level industries. Tags are based on the contact's current company. Can include a comma-separated list. */
            industryCodes?: string;
            /** @description Industry keywords associated with a company. Can include either 'AND' or 'OR' operators. For example, 'software AND security' or 'software OR security' */
            industryKeywords?: string;
            /** @description Location type (PersonOrHQ, PersonAndHQ, Person, HQ, PersonThenHQ). */
            locationSearchType?: string;
            /** @description Company metro area. Accepts a comma-separated list of U.S. and Canada metro areas. */
            metroRegion?: string;
            /** @description Four-digit numerical codes assigned by the U.S. government to business establishments to identify the primary business of the establishment. Accepts a comma-separated list of values. */
            naicsCodes?: string;
            /** @description Maximum one year employee growth rate for a company. Use with oneYearEmployeeGrowthRateMin to set a range. */
            oneYearEmployeeGrowthRateMax?: string;
            /** @description Minimum one year employee growth rate for a company. Use with oneYearEmployeeGrowthRateMax to set a range. */
            oneYearEmployeeGrowthRateMin?: string;
            /** @description Default is false. Used in conjunction with the industryCodes input parameter. When set to true, any result returned must have one of the specified industries as a primary industry. If no industries are specified, then this parameter will be ignored. */
            primaryIndustriesOnly?: boolean;
            /** @description Annual revenue range in U.S. dollars. Accepts a comma-separated list of values. */
            revenue?: string;
            /**
             * Format: int32
             * @description Maximum annual revenue for a company in U.S. dollars (expressed in thousands). Use with revenueMin to set a range.
             */
            revenueMax?: number;
            /**
             * Format: int32
             * @description Minimum annual revenue for a company in U.S. dollars (expressed in thousands). Use with revenueMax to set a range.
             */
            revenueMin?: number;
            /** @description The Standard Industrial Classification is a system for classifying industries by a four-digit code numerical assigned by the U.S. government to business establishments to identify the primary business of the establishment. Accepts a comma-separated list. */
            sicCodes?: string;
            /**
             * Format: date
             * @description End date for a company signaling interest in a topic. Uses YYYY-MM-DD format.
             */
            signalEndDate?: string;
            /**
             * Format: int32
             * @description Maximum signal score. Use with signalScoreMin to form a range. Minimum score is 60 and maximum is 100.
             */
            signalScoreMax?: number;
            /**
             * Format: int32
             * @description Minimum signal score. Use with signalScoreMax to form a range. Minimum score is 60 and maximum is 100.
             */
            signalScoreMin?: number;
            /**
             * Format: date
             * @description Start date for a company signaling interest in a topic. Uses YYYY-MM-DD format.
             */
            signalStartDate?: string;
            /** @description State or province of the company's address. */
            state?: string;
            /** @description Street address portion of the company's location. */
            street?: string;
            /** @description Company sub types (e.g., division, subsidiary). Use this in conjunction with parentId or ultimateParentId. */
            subUnitTypes?: string;
            /** @description Technology Product Tags. Can include a comma-separated list. */
            techAttributeTagList?: string;
            /** @description Intent topics. Accepts an Array of up to 50 Strings. See the 'Intent Topics' Lookup endpoint for values. */
            topics: string[];
            /** @description Maximum two year employee growth rate for a company. Use with twoYearEmployeeGrowthRateMin to set a range. */
            twoYearEmployeeGrowthRateMax?: string;
            /** @description Minimum two year employee growth rate for a company. Use with twoYearEmployeeGrowthRateMax to set a range. */
            twoYearEmployeeGrowthRateMin?: string;
            /** @description Zip Code or Postal Code of the company's address. */
            zipCode?: string;
            /**
             * Format: int16
             * @description Used in conjunction with zipCode, designates a geographical radius (in miles) from the zipCode provided. Supported values are [10, 25, 50, 100, 250]
             */
            zipCodeRadiusMiles?: number;
            /** @description Maximum number of ZoomInfo contacts associated with company. */
            zoominfoContactsMax?: string;
            /** @description Minimum number of ZoomInfo contacts associated with company. */
            zoominfoContactsMin?: string;
        };
        /** @description Intent search request resource. */
        IntentSearchResource: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["IntentSearchRequestAttributes"];
            /**
             * @description The type of the resource
             * @default IntentSearch
             */
            type: string;
        };
        /** @description A list of intents that match the criteria specified in the request */
        IntentSearchResponse: {
            /** @description The primary data of the document */
            data: components["schemas"]["IntentResponse"][];
            /** @description Links related to the primary data */
            links?: components["schemas"]["Links"];
            /** @description Non-standard meta information about the document */
            meta?: components["schemas"]["ResultMeta"];
        };
        /** @description Response attributes for intent search. */
        IntentSearchResponseAttributes: {
            /** @description Audience strength for the topic. */
            audienceStrength?: string;
            /** @description Intent category. */
            category?: string;
            /** @description Company data for the intent topic. */
            company?: components["schemas"]["IntentCompany"];
            /** @description Suggested contacts at the company that are related to the intent topic. */
            recommendedContacts?: components["schemas"]["RecommendedContact"][];
            /**
             * Format: date-time
             * @description Date the signal was identified.
             */
            signalDate?: string;
            /**
             * Format: int32
             * @description Signal score for the topic.
             */
            signalScore?: number;
            /**
             * Format: int32
             * @description The total number of intent signals detected during your specified timeframe.
             */
            spikesInDateRange?: number;
            /** @description Intent topic. */
            topic?: string;
        };
        /** @description Model for the intent topic */
        IntentTopicLookup: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["TopicEntityModelAttributes"];
            /** @description The unique identifier for the resource */
            id: string;
            /**
             * @description The type of the resource (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            type: "IntentTopic";
        };
        /** @description Contact job function at current place of employment. */
        JobFunction: {
            /** @description Department associated with the job function. */
            department?: string;
            /** @description Name of the job function. */
            name?: string;
        };
        /** @description Model for the job function */
        JobFunctionLookup: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["BasicEntityModelAttributes"];
            /** @description The unique identifier for the resource */
            id: string;
            /**
             * @description The type of the resource (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            type: "JobFunction";
        };
        /** @description Model for the job title hierarchy */
        JobTitleLookup: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["OrderedEntityModelAttributes"];
            /** @description The unique identifier for the resource */
            id: string;
            /**
             * @description The type of the resource (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            type: "JobTitle";
        };
        /** @description Helpful links for fetching different pages of data from the current result set. When using these links, please provide the exact same request body between requests */
        Links: {
            /**
             * Format: uri
             * @description A link to the first page of data
             */
            first?: string;
            /**
             * Format: uri
             * @description A link to the last page of data
             */
            last?: string;
            /**
             * Format: uri
             * @description A link to the next page of data
             */
            next?: string;
            /**
             * Format: uri
             * @description A link to the previous page of data
             */
            prev?: string;
        };
        /** @description Location details that match address-related input parameters. Includes companyId, address, and addressStatus (CURRENT, VALID, PAST). */
        LocationMatch: {
            /** @description Address details for the company's location. */
            address?: components["schemas"]["Address"];
            /** @description Address status for the location (CURRENT, VALID, PAST). */
            addressStatus?: string;
            /**
             * Format: int64
             * @description Unique ZoomInfo identifier for the company.
             */
            companyId?: number;
        };
        /** @description Represents the possible resource types returned in a lookup enrich input response. */
        LookupEnrichInputOutputResponseResourceUnion: components["schemas"]["ContactEnrichInputLookUp"] | components["schemas"]["CompanyEnrichInputLookUp"] | components["schemas"]["NewsEnrichInputLookUp"] | components["schemas"]["IntentEnrichInputLookUp"] | components["schemas"]["ScoopEnrichInputLookUp"] | components["schemas"]["TechnologyEnrichInputLookUp"] | components["schemas"]["HashtagEnrichInputLookUp"] | components["schemas"]["OrgChartEnrichInputLookUp"] | components["schemas"]["CorporateHierarchyEnrichInputLookUp"] | components["schemas"]["ContactEnrichOutputLookUp"] | components["schemas"]["CompanyEnrichOutputLookUp"] | components["schemas"]["NewsEnrichOutputLookUp"] | components["schemas"]["IntentEnrichOutputLookUp"] | components["schemas"]["ScoopEnrichOutputLookUp"] | components["schemas"]["TechnologyEnrichOutputLookUp"] | components["schemas"]["HashtagEnrichOutputLookUp"] | components["schemas"]["OrgChartEnrichOutputLookUp"] | components["schemas"]["CorporateHierarchyEnrichOutputLookUp"];
        /** @description Lookup enrich output response */
        LookupEnrichResponse: {
            /** @description The primary data of the document */
            data: components["schemas"]["LookupEnrichInputOutputResponseResourceUnion"][];
        };
        /** @description Common attributes for lookup fields, used in both input and output lookups. */
        LookupFieldAttributes: {
            /** @description The access level of the lookup field is currently limited to input fields and is not available for output fields. */
            accessGranted?: boolean;
            /** @description The description of the lookup field */
            description: string;
            /** @description The name of the lookup field */
            fieldName: string;
            /** @description The type of the input lookup field e.g: Long or String */
            fieldType?: string;
        };
        /** @description Lookup response */
        LookupResponse: {
            /** @description The primary data of the document */
            data: components["schemas"]["LookupResponseResourceUnion"][];
        };
        LookupResponseResourceUnion: components["schemas"]["BoardMemberLookup"] | components["schemas"]["BuyingGroupLookup"] | components["schemas"]["CompanyRankingLookup"] | components["schemas"]["CompanyTypeLookup"] | components["schemas"]["ContinentLookup"] | components["schemas"]["CountryLookup"] | components["schemas"]["DepartmentLookup"] | components["schemas"]["EmployeeCountLookup"] | components["schemas"]["HashtagLookup"] | components["schemas"]["IndustryLookup"] | components["schemas"]["IntentTopicLookup"] | components["schemas"]["JobFunctionLookup"] | components["schemas"]["JobTitleLookup"] | components["schemas"]["ManagementLevelLookup"] | components["schemas"]["MetroRegionLookup"] | components["schemas"]["NAICSCodeLookup"] | components["schemas"]["NewsCategoryLookup"] | components["schemas"]["RevenueRangeLookup"] | components["schemas"]["ScoopDepartmentLookup"] | components["schemas"]["ScoopTopicLookup"] | components["schemas"]["ScoopTypeLookup"] | components["schemas"]["SICCodeLookup"] | components["schemas"]["StateLookup"] | components["schemas"]["SubUnitTypeLookup"] | components["schemas"]["TechCategoryLookup"] | components["schemas"]["TechProductLookup"] | components["schemas"]["TechSkillLookup"] | components["schemas"]["TechVendorLookup"] | components["schemas"]["YearsOfExperienceLookup"];
        /** @description Represents the possible resource types returned in a lookup search input response. */
        LookupSearchInputOutputResponseResourceUnion: components["schemas"]["ContactSearchInputLookUp"] | components["schemas"]["CompanySearchInputLookUp"] | components["schemas"]["NewsSearchInputLookUp"] | components["schemas"]["IntentSearchInputLookUp"] | components["schemas"]["ScoopSearchInputLookUp"] | components["schemas"]["ContactSearchOutputLookUp"] | components["schemas"]["CompanySearchOutputLookUp"] | components["schemas"]["NewsSearchOutputLookUp"] | components["schemas"]["IntentSearchOutputLookUp"] | components["schemas"]["ScoopSearchOutputLookUp"];
        /** @description Lookup search output response */
        LookupSearchResponse: {
            /** @description The primary data of the document */
            data: components["schemas"]["LookupSearchInputOutputResponseResourceUnion"][];
        };
        /** @description Model for the management level */
        ManagementLevelLookup: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["BasicEntityModelAttributes"];
            /** @description The unique identifier for the resource */
            id: string;
            /**
             * @description The type of the resource (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            type: "ManagementLevel";
        };
        /** @description Management status of the record. */
        ManagementStatus: {
            /**
             * Format: date-time
             * @description Indicates when record was purchased if it is under management.
             */
            purchaseDate?: string;
            /** @description Indicates whether record is under management within the contract period. */
            underManagement?: boolean;
        };
        /** @description Model for a metro region */
        MetroRegionLookup: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["BasicEntityModelAttributes"];
            /** @description The unique identifier for the resource */
            id: string;
            /**
             * @description The type of the resource (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            type: "MetroRegion";
        };
        /** @description The North American Industry Classification System (NAICS) is the standard used by Federal statistical agencies in classifying business establishments for the purpose of collecting, analyzing, and publishing statistical data related to the U.S. business economy. */
        NaicsCode: {
            /** @description Unique identifier for the NAICS code. */
            id?: string;
            /** @description Name of the NAICS code. */
            name?: string;
        };
        /** @description Model for the NAICS code */
        NAICSCodeLookup: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["BasicEntityModelAttributes"];
            /** @description The unique identifier for the resource */
            id: string;
            /**
             * @description The type of the resource (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            type: "NAICSCode";
        };
        /** @description Model for the news category */
        NewsCategoryLookup: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["BasicEntityModelAttributes"];
            /** @description The unique identifier for the resource */
            id: string;
            /**
             * @description The type of the resource (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            type: "NewsCategory";
        };
        /** @description Company related to the news article. */
        NewsCompany: {
            /**
             * Format: int64
             * @description Unique ZoomInfo identifier for the company.
             */
            id: number;
            /** @description Company name. */
            name: string;
        };
        /** @description Model for the news enrich input lookup */
        NewsEnrichInputLookUp: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["LookupFieldAttributes"];
            /** @description The unique identifier for the resource */
            id: string;
            /**
             * @description The type of the resource (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            type: "NewsEnrichInput";
        };
        /** @description Model for the news enrich output lookup */
        NewsEnrichOutputLookUp: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["LookupFieldAttributes"];
            /** @description The unique identifier for the resource */
            id: string;
            /**
             * @description The type of the resource (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            type: "NewsEnrichOutput";
        };
        /** @description News enrich request. */
        NewsEnrichRequest: {
            /** @description The primary data of the document */
            data: components["schemas"]["NewsEnrichResource"];
        };
        /** @description Request attributes for news enrich. */
        NewsEnrichRequestAttributes: {
            /** @description Category of news articles. Accepts an Array of String. See the 'News Categories' lookup endpoint for values. */
            categories?: string[];
            /**
             * Format: int64
             * @description Unique ZoomInfo identifier for the company.
             */
            companyId?: number;
            /**
             * Format: date
             * @description Specify the latest publishing date for news articles articles. Uses YYYY-MM-DD format (e.g., 2020-01-31 will return all new articles published on or before Jan 31, 2020).
             */
            pageDateMax?: string;
            /**
             * Format: date
             * @description Specify the earliest publishing date for news articles returned. Uses YYYY-MM-DD format (e.g., 2020-01-01 will return all news articles published on or after Jan 1, 2020).
             */
            pageDateMin?: string;
            /** @description News URL strings. Accepts an Array of String. Minimum of 5 characters per input */
            url?: string[];
        };
        /** @description News enrich request resource. */
        NewsEnrichResource: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["NewsEnrichRequestAttributes"];
            /**
             * @description The type of the resource
             * @default NewsEnrich
             */
            type: string;
        };
        /** @description A list of News that match the criteria specified in the request */
        NewsEnrichResponse: {
            /** @description The primary data of the document */
            data: components["schemas"]["NewsEnrichResponseResource"][];
            /** @description Links related to the primary data */
            links?: components["schemas"]["Links"];
            /** @description Non-standard meta information about the document */
            meta?: components["schemas"]["ResultMeta"];
        };
        /** @description News */
        NewsEnrichResponseResource: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["NewsResponseAttributes"];
            /** @description The unique identifier for the resource */
            id: string;
            /**
             * @description The type of the resource
             * @default News
             */
            type: string;
        };
        /** @description Request attributes for news. */
        NewsRequestAttributes: {
            /** @description Category of news articles. Accepts an Array of String. See the 'News Categories' lookup endpoint for values. */
            categories?: string[];
            /**
             * Format: date
             * @description Specify the latest publishing date for news articles articles. Uses YYYY-MM-DD format (e.g., 2020-01-31 will return all new articles published on or before Jan 31, 2020).
             */
            pageDateMax?: string;
            /**
             * Format: date
             * @description Specify the earliest publishing date for news articles returned. Uses YYYY-MM-DD format (e.g., 2020-01-01 will return all news articles published on or after Jan 1, 2020).
             */
            pageDateMin?: string;
            /** @description News URL strings. Accepts an Array of String. Minimum of 5 characters per input */
            url?: string[];
        };
        /** @description News */
        NewsResponse: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["NewsResponseAttributes"];
            /** @description The unique identifier for the resource */
            id: string;
            /**
             * @description The type of the resource
             * @default News
             */
            type: string;
        };
        /** @description Attributes of a single news result. */
        NewsResponseAttributes: {
            /** @description Categories assigned to the article. */
            categories?: string[];
            /** @description Companies mentioned in the article. */
            company?: components["schemas"]["NewsCompany"][];
            /** @description Summary or body of the article. */
            description?: string;
            /** @description Domain name of the news source. */
            domain?: string;
            /** @description URL of the article image. */
            imageUrl?: string;
            /**
             * Format: date-time
             * @description Publish date of the article.
             */
            pageDate?: string;
            /** @description Title of the news article. */
            title?: string;
            /** @description Full URL of the article. */
            url?: string;
        };
        /** @description Model for the news search input lookup */
        NewsSearchInputLookUp: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["LookupFieldAttributes"];
            /** @description The unique identifier for the resource */
            id: string;
            /**
             * @description The type of the resource (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            type: "NewsSearchInput";
        };
        /** @description Model for the news search output lookup */
        NewsSearchOutputLookUp: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["LookupFieldAttributes"];
            /** @description The unique identifier for the resource */
            id: string;
            /**
             * @description The type of the resource (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            type: "NewsSearchOutput";
        };
        /** @description News search request. */
        NewsSearchRequest: {
            /** @description The primary data of the document */
            data: components["schemas"]["NewsSearchResource"];
        };
        /** @description News search request resource. */
        NewsSearchResource: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["NewsRequestAttributes"];
            /**
             * @description The type of the resource
             * @default NewsSearch
             */
            type: string;
        };
        /** @description A list of News that match the criteria specified in the request */
        NewsSearchResponse: {
            /** @description The primary data of the document */
            data: components["schemas"]["NewsResponse"][];
            /** @description Links related to the primary data */
            links?: components["schemas"]["Links"];
            /** @description Non-standard meta information about the document */
            meta?: components["schemas"]["ResultMeta"];
        };
        /** @description There was not a matching company found for the provided input or is been filtered out because of match statue - LIMIT_EXCEEDED (User credit limit has been exceeded). Exact details can be found within the meta object including the match status and other accompanying metadata. */
        NoMatchCompany: {
            /** @description The unique identifier of the resource */
            id: string;
            /** @description Non-standard meta information about the resource */
            meta?: components["schemas"]["CompanyAttributeMeta"];
            /**
             * @description The type identifier of the resource (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            type: "NoMatch";
        };
        /** @description There was not a matching contact found for the provided input or is been filtered out because either of match statues - NON_MATCH_BY_LAST_UPDATED_DATE (Contact's last updated date is before requested date for field lastUpdatedDateAfter), NON_MATCH_BY_VALID_DATE (Contact's valid date is before requested date for field validDateAfter), NON_MATCH_BY_REQUIRED_FIELDS (Required fields data for the enrich request are missing), NON_MATCH_BY_CONTACT_ACCURACY_MIN (Contact's contact accuracy score is below the requested minimum for field contactAccuracyScoreMin), OPT_OUT (Contact has opted out of ZoomInfo's data collection), LIMIT_EXCEEDED (User credit limit has been exceeded). Exact details can be found within the meta object including the match status and other accompanying metadata. */
        NoMatchContact: {
            /** @description The unique identifier of the resource */
            id: string;
            /** @description Non-standard meta information about the resource */
            meta?: components["schemas"]["ContactAttributeMeta"];
            /**
             * @description The type identifier of the resource (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            type: "NoMatch";
        };
        /** @description There was not a matching corporate hierarchy found for the provided input or is been filtered out because of match statue - LIMIT_EXCEEDED (User credit limit has been exceeded). Exact details can be found within the meta object including the match status and other accompanying metadata. */
        NoMatchCorporateHierarchy: {
            /** @description The unique identifier of the resource */
            id: string;
            /** @description Non-standard meta information about the resource */
            meta?: components["schemas"]["CorporateHierarchyAttributeMeta"];
            /**
             * @description The type identifier of the resource (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            type: "NoMatch";
        };
        /** @description Metadata for non-paginated results, including the total number of results */
        NonPaginatedResultMeta: {
            /**
             * Format: uint32
             * @description The total number of results based on the specified filters
             */
            totalResults: number;
        };
        /** @description An ordered entity */
        OrderedEntityModelAttributes: {
            /** @description The name of the entity */
            name: string;
            /** @description The ranking order of the entity */
            order?: string;
        };
        /** @description Model for the orgChart enrich input lookup */
        OrgChartEnrichInputLookUp: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["LookupFieldAttributes"];
            /** @description The unique identifier for the resource */
            id: string;
            /**
             * @description The type of the resource (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            type: "OrgChartEnrichInput";
        };
        /** @description Model for the org chart enrich output lookup */
        OrgChartEnrichOutputLookUp: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["LookupFieldAttributes"];
            /** @description The unique identifier for the resource */
            id: string;
            /**
             * @description The type of the resource (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            type: "OrgChartEnrichOutput";
        };
        /** @description Org chart enrich request. */
        OrgChartEnrichRequest: {
            /** @description The primary data of the document */
            data: components["schemas"]["OrgChartEnrichRequestResource"];
        };
        /** @description Org chart enrich request attributes. */
        OrgChartEnrichRequestAttributes: {
            /** @description The ID of the company for which you want to view the org chart. */
            companyId?: string;
            /** @description Maximum accuracy score for search results. This score indicates the likelihood that a contact is reachable and still employed by the company listed. Minimum score is 70 and maximum is 99. */
            contactAccuracyScoreMax?: string;
            /** @description Minimum accuracy score for search results. This score indicates the likelihood that a contact is reachable and still employed by the company listed. Minimum score is 70 and maximum is 99. */
            contactAccuracyScoreMin?: string;
            /** @description A comma-separated string of departments to display org charts for. */
            department?: string;
        };
        /** @description Org chart enrich request resource. */
        OrgChartEnrichRequestResource: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["OrgChartEnrichRequestAttributes"];
            /**
             * @description The type of the resource
             * @default OrgChartEnrich
             */
            type: string;
        };
        /** @description Org charts that match the criteria specified in the request */
        OrgChartEnrichResponse: {
            /** @description The primary data of the document */
            data: components["schemas"]["OrgChartEnrichResponseResource"][];
            /** @description Links related to the primary data */
            links?: components["schemas"]["Links"];
            /** @description Non-standard meta information about the document */
            meta?: components["schemas"]["ResultMeta"];
        };
        /** @description Org chart enrich response attributes. */
        OrgChartEnrichResponseAttributes: {
            /** @description Unique ZoomInfo identifier for a company. */
            companyId?: string;
            /** @description Company name. */
            companyName?: string;
            /**
             * Format: double
             * @description This score indicates the likelihood that a contact is reachable and still employed by the company listed. Minimum score is 75 and maximum is 99.
             */
            contactAccuracyScore?: number;
            /** @description Contact department at current place of employment. */
            department?: string;
            /** @description Contact first name. */
            firstName?: string;
            /** @description Indicates whether ZoomInfo has a direct phone number for the contact. */
            hasDirectPhone?: boolean;
            /** @description Indicates whether ZoomInfo has an email address for the contact. */
            hasEmail?: boolean;
            /** @description Contact job function at current place of employment. */
            jobFunction?: string;
            /** @description Contact last name. */
            lastName?: string;
            /** @description Date on which the contact record was last updated. */
            lastUpdatedDate?: string;
            /** @description Contact middle name */
            middleName?: string;
            /**
             * Format: int32
             * @description Secondary tier within orgChartTier.
             */
            orgChartSubTier?: number;
            /**
             * Format: int32
             * @description Integer representing hierarchy within a department, with 1 being the highest.
             */
            orgChartTier?: number;
            /** @description Contact job title at current place of employment. */
            title?: string;
        };
        /** @description Org chart. */
        OrgChartEnrichResponseResource: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["OrgChartEnrichResponseAttributes"];
            /** @description The unique identifier for the resource */
            id: string;
            /**
             * @description The type of the resource
             * @default OrgChart
             */
            type: string;
        };
        /** @description Meta information related to the current page and total number of pages */
        Page: {
            /**
             * Format: uint32
             * @description The current page number of the results
             */
            number: number;
            /**
             * Format: uint32
             * @description The total number of pages within the current result set
             */
            total: number;
        };
        /** @description Lists companies higher up in the corporate hierarchy for this company. */
        Parentage: {
            /** @description Denotes the date when the parent company acquired the input company if available. */
            acquiredByDate?: string;
            /** @description City of the company's primary address. */
            city?: string;
            /** @description Unique ZoomInfo identifier for a company. */
            companyId?: string;
            /** @description Company name. */
            companyName?: string;
            /** @description State or province of the company's primary address. */
            state?: string;
            /** @description Contains a description of the sub unit listed in the corporate hierarchy. */
            subUnitDesc?: string;
            /** @description Company sub types (e.g., division, subsidiary). Use this in conjunction with parentId or ultimateParentId. */
            subUnitType?: string;
        };
        /** @description The attributes of the persona */
        PersonaAttributes: {
            /** @description The departments and job functions of the persona */
            departmentsAndJobFunctions: string[];
            /** @description The management levels of the persona */
            managementLevels: string[];
            /** @description The titles of the persona */
            titles?: string[] | null;
        };
        /** @description Top-level industry for a company along with its code. */
        PrimaryIndustryCode: {
            /** @description Unique identifier for the industry code. */
            id?: string;
            /** @description Name of the industry code. */
            name?: string;
        };
        /** @description Top-level sub-industry for a company along with its code. */
        PrimarySubIndustryCode: {
            /** @description Unique identifier for the sub-industry code. */
            id?: string;
            /** @description Name of the sub-industry code. */
            name?: string;
        };
        /** @description Recommended contact for intent search response. */
        RecommendedContact: {
            /** @description Company name of the contact. */
            companyName?: string;
            /** @description Contact first name. */
            firstName?: string;
            /** @description Unique ZoomInfo identifier for the contact. */
            id: string;
            /** @description Contact's job functions. This is an array of job functions that the contact holds or has held. */
            jobFunctions?: components["schemas"]["JobFunction"][];
            /** @description Contact job title at current place of employment. */
            jobTitle?: string;
            /** @description Contact last name. */
            lastName?: string;
        };
        /** @description Metadata including paging information and the total number of records in the result set */
        ResultMeta: {
            /** @description Paging information for the current result set */
            page: components["schemas"]["Page"];
            /**
             * Format: uint32
             * @description The total number of results based on the specified filters
             */
            totalResults: number;
        };
        /** @description Model for revenue ranges. Values are in $1,000s */
        RevenueRangeLookup: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["BasicEntityModelAttributes"];
            /** @description The unique identifier for the resource */
            id: string;
            /**
             * @description The type of the resource (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            type: "RevenueRange";
        };
        /** @description ScoopCompany */
        ScoopCompany: {
            /** @description Unique ZoomInfo identifier for a company. */
            id?: string;
            /** @description Company name. */
            name?: string;
        };
        /** @description ScoopContact */
        ScoopContact: {
            /** @description Contact first name. */
            firstName?: string;
            /**
             * Format: int64
             * @description Unique ZoomInfo identifier for a person.
             */
            id?: number;
            /** @description Contact job function at their current place of employment. */
            jobFunction?: components["schemas"]["JobFunction"][];
            /** @description Contact job title at current place of employment. */
            jobTitle?: string;
            /** @description Contact last name. */
            lastName?: string;
        };
        /** @description Model for the scoop department */
        ScoopDepartmentLookup: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["BasicEntityModelAttributes"];
            /** @description The unique identifier for the resource */
            id: string;
            /**
             * @description The type of the resource (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            type: "ScoopDepartment";
        };
        /** @description Model for the scoop enrich input lookup */
        ScoopEnrichInputLookUp: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["LookupFieldAttributes"];
            /** @description The unique identifier for the resource */
            id: string;
            /**
             * @description The type of the resource (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            type: "ScoopEnrichInput";
        };
        /** @description Model for the scoop enrich output lookup */
        ScoopEnrichOutputLookUp: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["LookupFieldAttributes"];
            /** @description The unique identifier for the resource */
            id: string;
            /**
             * @description The type of the resource (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            type: "ScoopEnrichOutput";
        };
        /** @description Scoop enrich request. */
        ScoopEnrichRequest: {
            /** @description The primary data of the document */
            data: components["schemas"]["ScoopEnrichRequestResource"];
        };
        /** @description Scoop enrich request attributes. */
        ScoopEnrichRequestAttributes: {
            /** @description ZoomInfo unique identifier for the company. Will accept a comma-separated list. */
            companyId?: string;
            /** @description Company name. */
            companyName?: string;
            /** @description Company website URL in http://www.example.com format. Accepts a comma-separated list. */
            companyWebsite?: string;
            /** @description Retrieve scoops based on department (IT, finance, HR and so on). See the Scoop Departments lookup endpoint for valid inputs.. */
            department?: string;
            /** @description Search for scoops based on description.  Accepts a space-separated list of individual words. */
            description?: string;
            /**
             * Format: date
             * @description Ending date to search for scoops based on publication date. Form a range using publishedStartDate. Uses YYYY-MM-DD format.
             */
            publishedEndDate?: string;
            /**
             * Format: date
             * @description Starting date to search for scoops based on publication date. Form a range using publishedEndDate or omit publishedEndDate to search to the current date. Uses YYYY-MM-DD format.
             */
            publishedStartDate?: string;
            /** @description ZoomInfo unique identifier for a Scoop. Accepts a comma-separated list. */
            scoopId?: string;
            /** @description Retrieve scoops based on topic (e.g. integration, consolidation and compliance). Accepts a comma-separated list of IDs from the lookup endpoint. */
            scoopTopic?: string;
            /** @description Retrieve scoops based on type (e.g. earnings, awards and partnerships). Accepts a comma-separated list of IDs from the lookup endpoint. */
            scoopType?: string;
            /** @description Default is false. Setting true will only return scoops that have been updated since publishedStartDate. */
            updatedSinceCreation?: boolean;
        };
        /** @description Scoop enrich request resource. */
        ScoopEnrichRequestResource: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["ScoopEnrichRequestAttributes"];
            /**
             * @description The type of the resource
             * @default ScoopEnrich
             */
            type: string;
        };
        /** @description A list of scoop that match the criteria specified in the request */
        ScoopEnrichResponse: {
            /** @description The primary data of the document */
            data: components["schemas"]["ScoopEnrichResponseResource"][];
            /** @description Links related to the primary data */
            links?: components["schemas"]["Links"];
            /** @description Non-standard meta information about the document */
            meta?: components["schemas"]["ResultMeta"];
        };
        /** @description Scoop enrich response attributes. */
        ScoopEnrichResponseAttributes: {
            /** @description Company */
            company?: components["schemas"]["ScoopCompany"];
            /** @description Contacts associated with a scoop. */
            contacts?: components["schemas"]["ScoopContact"][];
            /** @description Description associated with the scoop */
            description?: string;
            /** @description ZoomInfo unique identifier for a scoop. */
            id?: string;
            /** @description URL for a scoop. */
            link?: string;
            /** @description Link text for a scoop. */
            linkText?: string;
            /**
             * Format: date-time
             * @description Date when a scoop was originally published.
             */
            originalPublishedDate?: string;
            /**
             * Format: date-time
             * @description Date when a scoop was published.
             */
            publishedDate?: string;
            /** @description Scoop topics. */
            topics?: {
                [key: string]: unknown;
            }[];
            /** @description Types associated with a scoop. */
            types?: {
                [key: string]: unknown;
            }[];
            /** @description Text related to an updated scoop. */
            updateText?: string;
        };
        /** @description Scoop */
        ScoopEnrichResponseResource: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["ScoopEnrichResponseAttributes"];
            /** @description The unique identifier for the resource */
            id: string;
            /**
             * @description The type of the resource
             * @default Scoop
             */
            type: string;
        };
        /** @description Scoop common request attributes. */
        ScoopRequestCommonAttributes: {
            /** @description Retrieve scoops based on department (IT, finance, HR and so on). See the Scoop Departments lookup endpoint for valid inputs.. */
            department?: string;
            /** @description Search for scoops based on description.  Accepts a space-separated list of individual words. */
            description?: string;
            /**
             * Format: date
             * @description Ending date to search for scoops based on publication date. Form a range using publishedStartDate. Uses YYYY-MM-DD format.
             */
            publishedEndDate?: string;
            /**
             * Format: date
             * @description Starting date to search for scoops based on publication date. Form a range using publishedEndDate or omit publishedEndDate to search to the current date. Uses YYYY-MM-DD format.
             */
            publishedStartDate?: string;
            /** @description ZoomInfo unique identifier for a Scoop. Accepts a comma-separated list. */
            scoopId?: string;
            /** @description Retrieve scoops based on topic (e.g. integration, consolidation and compliance). Accepts a comma-separated list of IDs from the lookup endpoint. */
            scoopTopic?: string;
            /** @description Retrieve scoops based on type (e.g. earnings, awards and partnerships). Accepts a comma-separated list of IDs from the lookup endpoint. */
            scoopType?: string;
            /** @description Default is false. Setting true will only return scoops that have been updated since publishedStartDate. */
            updatedSinceCreation?: boolean;
        };
        /** @description Scoop search contact attributes. */
        ScoopRequestContactAttributes: {
            /** @description Exclude or include board members from search results. Default behavior is to exclude board members from search results. Submit this as “include” to include board members, set this as “only” to only include board members.. */
            boardMember?: string;
            /** @description Search using Business Model (B2C, B2B, B2G) for a company. Default is All. */
            businessModel?: string[];
            /**
             * Format: int32
             * @description Denotes if ZoomInfo's research and data team has confirmed activity within the past 12 months. 1 = certified, 0 = not certified.
             */
            certified?: number;
            /** @description Defaults to only include the present company for a contact. Set this to “past” to return past companies, set this to “pastAndPresent” to include both. */
            companyPastOrPresent?: string;
            /** @description Maximum accuracy score for search results. This score indicates the likelihood that a contact is reachable and still employed by the company listed. Minimum score is 70 and maximum is 99. */
            contactAccuracyScoreMax?: string;
            /** @description Minimum accuracy score for search results. This score indicates the likelihood that a contact is reachable and still employed by the company listed. Minimum score is 70 and maximum is 99. */
            contactAccuracyScoreMin?: string;
            /** @description Searches by contact's education. */
            degree?: string;
            /** @description Email address for the contact in example@example.com format. */
            emailAddress?: string;
            /** @description Contact title at current place of employment using exact match logic. Use OR to input multiple job titles. */
            exactJobTitle?: string;
            /** @description Comma-separated list of job titles to exclude from search results. */
            excludeJobTitle?: string;
            /** @description Comma separated list of management levels to exclude from search results. */
            excludeManagementLevel?: string;
            /** @description Defaults to false. To include partial profiles in your search results, set this to true. Contacts who do not have an active company associated with them are considered partial profiles. */
            excludePartialProfiles?: boolean;
            /** @description Defaults to false. Set this to true to include only Executives in search results. */
            executivesOnly?: boolean;
            /** @description Contact first name. */
            firstName?: string;
            /** @description Contact full name. */
            fullName?: string;
            /** @description Defaults to include. Set this to “exclude” to exclude contacts who have been notified of inclusion in ZoomInfo's database. Set this to “only” to only include contacts who have been notified. */
            hasBeenNotified?: string;
            /** @description Hashed email value for the contact. Allows searching via an email address with the extra security of not exposing the email. Supported hash algorithms are: MD5, SHA1, SHA256 and SHA512. */
            hashedEmail?: string;
            /** @description Contact job function at their current place of employment. */
            jobFunction?: string;
            /** @description Contact job title at current place of employment. */
            jobTitle?: string;
            /** @description Contact last name. */
            lastName?: string;
            /**
             * Format: int32
             * @description Number of months within which the contact's profile was last updated.
             */
            lastUpdatedInMonths?: number;
            /** @description Searches by contact's locationIds. */
            locationCompanyId?: number[];
            /** @description Contact management level at current place of employment. */
            managementLevel?: string;
            /** @description Contact middle initial. */
            middleInitial?: string;
            /** @description Unique ZoomInfo identifier for the contact. Can include a comma-separated list. */
            personId?: string;
            /** @description Specify the fields that must be present for a record to return. Accepts a comma-separated list. */
            requiredFields?: string;
            /** @description School name. */
            school?: string;
        };
        /** @description News */
        ScoopResponse: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["ScoopSearchResponseAttributes"];
            /** @description The unique identifier for the resource */
            id: string;
            /**
             * @description The type of the resource
             * @default Scoop
             */
            type: string;
        };
        /** @description Scoop common response attributes. */
        ScoopResponseCommonAttributes: {
            /** @description Company */
            company?: components["schemas"]["ScoopCompany"];
            /** @description Contacts associated with a scoop. */
            contacts?: components["schemas"]["ScoopContact"][];
            /** @description Description associated with the scoop */
            description?: string;
            /** @description ZoomInfo unique identifier for a scoop. */
            id?: string;
            /** @description URL for a scoop. */
            link?: string;
            /** @description Link text for a scoop. */
            linkText?: string;
            /**
             * Format: date-time
             * @description Date when a scoop was originally published.
             */
            originalPublishedDate?: string;
            /**
             * Format: date-time
             * @description Date when a scoop was published.
             */
            publishedDate?: string;
            /** @description Scoop topics. */
            topics?: {
                [key: string]: unknown;
            }[];
            /** @description Types associated with a scoop. */
            types?: {
                [key: string]: unknown;
            }[];
            /** @description Text related to an updated scoop. */
            updateText?: string;
        };
        /** @description Model for the scoop search input lookup */
        ScoopSearchInputLookUp: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["LookupFieldAttributes"];
            /** @description The unique identifier for the resource */
            id: string;
            /**
             * @description The type of the resource (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            type: "ScoopSearchInput";
        };
        /** @description Model for the scoop search output lookup */
        ScoopSearchOutputLookUp: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["LookupFieldAttributes"];
            /** @description The unique identifier for the resource */
            id: string;
            /**
             * @description The type of the resource (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            type: "ScoopSearchOutput";
        };
        /** @description News search request. */
        ScoopSearchRequest: {
            /** @description The primary data of the document */
            data: components["schemas"]["ScoopSearchResource"];
        };
        /** @description Scoop search request attributes. */
        ScoopSearchRequestAttributes: {
            /** @description Full Company Address. */
            address?: string;
            /** @description Exclude or include board members from search results. Default behavior is to exclude board members from search results. Submit this as “include” to include board members, set this as “only” to only include board members.. */
            boardMember?: string;
            /** @description Search using Business Model (B2C, B2B, B2G) for a company. Default is All. */
            businessModel?: string[];
            /**
             * Format: int32
             * @description Denotes if ZoomInfo's research and data team has confirmed activity within the past 12 months. 1 = certified, 0 = not certified.
             */
            certified?: number;
            /** @description Search for companies based on description. Accepts a space-separated list of individual words. */
            companyDescription?: string;
            /** @description Defaults to only include the present company for a contact. Set this to “past” to return past companies, set this to “pastAndPresent” to include both. */
            companyPastOrPresent?: string;
            /** @description Company ranking (e.g., Fortune 500). Accepts a comma-separated list of IDs. */
            companyRanking?: string;
            /** @description Company hierarchical structure values. Accepts a comma-separated list of values from 'UNSPECIFIED', 'LOCATION', 'DIVISION', 'ACQUISITION', 'SUBSIDIARY', 'FORMER_NEW_NAME'. */
            companyStructureIncludedSubUnitTypes?: string;
            /** @description Company stock ticker symbol. */
            companyTicker?: string[];
            /** @description Company type (private, public, etc.). Accepts a comma-separated list of types. */
            companyType?: string;
            /** @description Maximum accuracy score for search results. This score indicates the likelihood that a contact is reachable and still employed by the company listed. Minimum score is 70 and maximum is 99. */
            contactAccuracyScoreMax?: string;
            /** @description Minimum accuracy score for search results. This score indicates the likelihood that a contact is reachable and still employed by the company listed. Minimum score is 70 and maximum is 99. */
            contactAccuracyScoreMin?: string;
            /** @description Continent of the primary address of the associated company. */
            continent?: string;
            /** @description Country of the primary address of the associated company. */
            country?: string;
            /** @description Searches by contact's education. */
            degree?: string;
            /** @description Retrieve scoops based on department (IT, finance, HR and so on). See the Scoop Departments lookup endpoint for valid inputs.. */
            department?: string;
            /** @description Search for scoops based on description.  Accepts a space-separated list of individual words. */
            description?: string;
            /** @description Email address for the contact in example@example.com format. */
            emailAddress?: string;
            /** @description Employee count range. Accepts a comma-separated list of values. Alternatively, for more granular ranges, you can use the employeeRangeMin and employeeRangeMax parameters. */
            employeeCount?: string;
            /** @description Maximum employee count for a company. Use with employeeRangeMin to set a range. Alternatively, you can use the employeeCount parameter to search for pre-defined ranges. */
            employeeRangeMax?: string;
            /** @description Minimum employee count for a company. Use with employeeRangeMax to set a range. Alternatively, you can use the employeeCount parameter to search for pre-defined ranges. */
            employeeRangeMin?: string;
            /** @description Contact title at current place of employment using exact match logic. Use OR to input multiple job titles. */
            exactJobTitle?: string;
            /** @description Accepts a comma-separated list of U.S. and Canada states and metro areas. Companies from any of these regions will be excluded from search results. */
            excludedRegions?: string;
            /** @description Comma-separated list of job titles to exclude from search results. */
            excludeJobTitle?: string;
            /** @description Comma separated list of management levels to exclude from search results. */
            excludeManagementLevel?: string;
            /** @description Defaults to false. To include partial profiles in your search results, set this to true. Contacts who do not have an active company associated with them are considered partial profiles. */
            excludePartialProfiles?: boolean;
            /** @description Defaults to false. Set this to true to include only Executives in search results. */
            executivesOnly?: boolean;
            /** @description Contact first name. */
            firstName?: string;
            /** @description Contact full name. */
            fullName?: string;
            /**
             * Format: int32
             * @description Maximum funding amount in thousands (e.g., 1 = 1000, 500 = 500,000). If fundingAmountMax is used without fundingAmountMin, the result will be the amount specified or less.
             */
            fundingAmountMax?: number;
            /**
             * Format: int32
             * @description Minimum funding amount in thousands (e.g., 1 = 1000, 500 = 500,000). If fundingAmountMin is used without fundingAmountMax, the result will be the amount specified or greater.
             */
            fundingAmountMin?: number;
            /**
             * Format: date
             * @description End date of the funding in YYYY-MM-DD format. If fundingStartDate and fundingEndDate are both specified, they will be used as a range. Start date after end date returns an error. If start date and end date are the same, will return results for exact date.
             */
            fundingEndDate?: string;
            /**
             * Format: date
             * @description Start date of the funding in YYYY-MM-DD format. If fundingStartDate and fundingEndDate are both specified, they will be used as a range. Start date after end date returns an error. If start date and end date are the same, will return results for exact date.
             */
            fundingStartDate?: string;
            /** @description Defaults to include. Set this to “exclude” to exclude contacts who have been notified of inclusion in ZoomInfo's database. Set this to “only” to only include contacts who have been notified. */
            hasBeenNotified?: string;
            /** @description Hashed email value for the contact. Allows searching via an email address with the extra security of not exposing the email. Supported hash algorithms are: MD5, SHA1, SHA256 and SHA512. */
            hashedEmail?: string;
            /** @description Hash tags for a company. Can include a comma-separated list. */
            hashTagString?: string;
            /** @description Top-level industry that the contact works in. A contact can have multiple top level industries. Tags are based on the contact's current company. Can include a comma-separated list. */
            industryCodes?: string;
            /** @description Industry keywords associated with a company. Can include either 'AND' or 'OR' operators. For example, 'software AND security' or 'software OR security' */
            industryKeywords?: string;
            /** @description Contact job function at their current place of employment. */
            jobFunction?: string;
            /** @description Contact job title at current place of employment. */
            jobTitle?: string;
            /** @description Contact last name. */
            lastName?: string;
            /**
             * Format: int32
             * @description Number of months within which the contact's profile was last updated.
             */
            lastUpdatedInMonths?: number;
            /** @description Searches by contact's locationIds. */
            locationCompanyId?: number[];
            /** @description Location type (PersonOrHQ, PersonAndHQ, Person, HQ, PersonThenHQ). */
            locationSearchType?: string;
            /** @description Contact management level at current place of employment. */
            managementLevel?: string;
            /** @description Company metro area. Accepts a comma-separated list of U.S. and Canada metro areas. */
            metroRegion?: string;
            /** @description Contact middle initial. */
            middleInitial?: string;
            /** @description Four-digit numerical codes assigned by the U.S. government to business establishments to identify the primary business of the establishment. Accepts a comma-separated list of values. */
            naicsCodes?: string;
            /** @description Maximum one year employee growth rate for a company. Use with oneYearEmployeeGrowthRateMin to set a range. */
            oneYearEmployeeGrowthRateMax?: string;
            /** @description Minimum one year employee growth rate for a company. Use with oneYearEmployeeGrowthRateMax to set a range. */
            oneYearEmployeeGrowthRateMin?: string;
            /** @description Unique ZoomInfo identifier for the contact. Can include a comma-separated list. */
            personId?: string;
            /** @description Default is false. Used in conjunction with the industryCodes input parameter. When set to true, any result returned must have one of the specified industries as a primary industry. If no industries are specified, then this parameter will be ignored. */
            primaryIndustriesOnly?: boolean;
            /**
             * Format: date
             * @description Ending date to search for scoops based on publication date. Form a range using publishedStartDate. Uses YYYY-MM-DD format.
             */
            publishedEndDate?: string;
            /**
             * Format: date
             * @description Starting date to search for scoops based on publication date. Form a range using publishedEndDate or omit publishedEndDate to search to the current date. Uses YYYY-MM-DD format.
             */
            publishedStartDate?: string;
            /** @description Specify the fields that must be present for a record to return. Accepts a comma-separated list. */
            requiredFields?: string;
            /** @description Annual revenue range in U.S. dollars. Accepts a comma-separated list of values. */
            revenue?: string;
            /**
             * Format: int32
             * @description Maximum annual revenue for a company in U.S. dollars (expressed in thousands). Use with revenueMin to set a range.
             */
            revenueMax?: number;
            /**
             * Format: int32
             * @description Minimum annual revenue for a company in U.S. dollars (expressed in thousands). Use with revenueMax to set a range.
             */
            revenueMin?: number;
            /** @description School name. */
            school?: string;
            /** @description ZoomInfo unique identifier for a Scoop. Accepts a comma-separated list. */
            scoopId?: string;
            /** @description Retrieve scoops based on topic (e.g. integration, consolidation and compliance). Accepts a comma-separated list of IDs from the lookup endpoint. */
            scoopTopic?: string;
            /** @description Retrieve scoops based on type (e.g. earnings, awards and partnerships). Accepts a comma-separated list of IDs from the lookup endpoint. */
            scoopType?: string;
            /** @description The Standard Industrial Classification is a system for classifying industries by a four-digit code numerical assigned by the U.S. government to business establishments to identify the primary business of the establishment. Accepts a comma-separated list. */
            sicCodes?: string;
            /** @description State or province of the company's address. */
            state?: string;
            /** @description Street address portion of the company's location. */
            street?: string;
            /** @description Company sub types (e.g., division, subsidiary). Use this in conjunction with parentId or ultimateParentId. */
            subUnitTypes?: string;
            /** @description Technology Product Tags. Can include a comma-separated list. */
            techAttributeTagList?: string;
            /** @description Maximum two year employee growth rate for a company. Use with twoYearEmployeeGrowthRateMin to set a range. */
            twoYearEmployeeGrowthRateMax?: string;
            /** @description Minimum two year employee growth rate for a company. Use with twoYearEmployeeGrowthRateMax to set a range. */
            twoYearEmployeeGrowthRateMin?: string;
            /** @description Default is false. Setting true will only return scoops that have been updated since publishedStartDate. */
            updatedSinceCreation?: boolean;
            /** @description Zip Code or Postal Code of the company's address. */
            zipCode?: string;
            /**
             * Format: int16
             * @description Used in conjunction with zipCode, designates a geographical radius (in miles) from the zipCode provided. Supported values are [10, 25, 50, 100, 250]
             */
            zipCodeRadiusMiles?: number;
            /** @description Maximum number of ZoomInfo contacts associated with company. */
            zoominfoContactsMax?: string;
            /** @description Minimum number of ZoomInfo contacts associated with company. */
            zoominfoContactsMin?: string;
        };
        /** @description Scoop search request resource. */
        ScoopSearchResource: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["ScoopSearchRequestAttributes"];
            /**
             * @description The type of the resource
             * @default ScoopSearch
             */
            type: string;
        };
        /** @description A list of News that match the criteria specified in the request */
        ScoopSearchResponse: {
            /** @description The primary data of the document */
            data: components["schemas"]["ScoopResponse"][];
            /** @description Links related to the primary data */
            links?: components["schemas"]["Links"];
            /** @description Non-standard meta information about the document */
            meta?: components["schemas"]["ResultMeta"];
        };
        /** @description Scoop search response attributes. */
        ScoopSearchResponseAttributes: {
            /** @description Company */
            company?: components["schemas"]["ScoopCompany"];
            /** @description Contacts associated with a scoop. */
            contacts?: components["schemas"]["ScoopContact"][];
            /** @description Description associated with the scoop */
            description?: string;
            /** @description ZoomInfo unique identifier for a scoop. */
            id?: string;
            /** @description URL for a scoop. */
            link?: string;
            /** @description Link text for a scoop. */
            linkText?: string;
            /**
             * Format: date-time
             * @description Date when a scoop was originally published.
             */
            originalPublishedDate?: string;
            /**
             * Format: date-time
             * @description Date when a scoop was published.
             */
            publishedDate?: string;
            /** @description Scoop topics. */
            topics?: {
                [key: string]: unknown;
            }[];
            /** @description Types associated with a scoop. */
            types?: {
                [key: string]: unknown;
            }[];
            /** @description Text related to an updated scoop. */
            updateText?: string;
        };
        /** @description Model for the scoop topic */
        ScoopTopicLookup: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["BasicEntityModelAttributes"];
            /** @description The unique identifier for the resource */
            id: string;
            /**
             * @description The type of the resource (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            type: "ScoopTopic";
        };
        /** @description Model for the scoop type */
        ScoopTypeLookup: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["BasicEntityModelAttributes"];
            /** @description The unique identifier for the resource */
            id: string;
            /**
             * @description The type of the resource (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            type: "ScoopType";
        };
        /**
         * @description All possible search lookup field names
         * @enum {string}
         */
        SearchEntityNameEnum: "company" | "contact" | "scoop" | "news" | "intent";
        /** @description The Standard Industrial Classification is a system for classifying industries by a four-digit code. */
        SicCode: {
            /** @description Unique identifier for the SIC code. */
            id?: string;
            /** @description Name of the SIC code. */
            name?: string;
        };
        /** @description Model for the SIC code */
        SICCodeLookup: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["BasicEntityModelAttributes"];
            /** @description The unique identifier for the resource */
            id: string;
            /**
             * @description The type of the resource (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            type: "SICCode";
        };
        /** @description Social media information for the company. */
        SocialMediaUrl: {
            /** @description Number of followers for the social media account. */
            followerCount?: string;
            /** @description Type of social media account. Supported types are Facebook, Twitter (X.com), LinkedIn). */
            type?: string;
            /** @description URL for the social media account. */
            url?: string;
        };
        /** @description Model for a state */
        StateLookup: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["BasicEntityModelAttributes"];
            /** @description The unique identifier for the resource */
            id: string;
            /**
             * @description The type of the resource (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            type: "State";
        };
        /** @description Denotes the type of sub-unit represented by a family node within the corporate hierarchy. */
        SubUnitTypeInfo: {
            /** @description Description of the sub unit type. */
            typeDescription: string;
            /** @description ID of the sub unit type. */
            typeId?: number;
        };
        /** @description Model for sub unit types */
        SubUnitTypeLookup: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["BasicEntityModelAttributes"];
            /** @description The unique identifier for the resource */
            id: string;
            /**
             * @description The type of the resource (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            type: "SubUnitType";
        };
        /** @description An entity with additional array attributes */
        TechCategoryEntityModelAttributes: {
            /** @description The names of the tech categories */
            categories: string[];
        };
        /** @description Model for the tech category, the attribute is the parent category */
        TechCategoryLookup: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["TechCategoryEntityModelAttributes"];
            /** @description The unique identifier for the resource */
            id: string;
            /**
             * @description The type of the resource (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            type: "TechCategory";
        };
        /** @description Model for the technology enrich input lookup */
        TechnologyEnrichInputLookUp: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["LookupFieldAttributes"];
            /** @description The unique identifier for the resource */
            id: string;
            /**
             * @description The type of the resource (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            type: "TechnologyEnrichInput";
        };
        /** @description Model for the technology enrich output lookup */
        TechnologyEnrichOutputLookUp: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["LookupFieldAttributes"];
            /** @description The unique identifier for the resource */
            id: string;
            /**
             * @description The type of the resource (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            type: "TechnologyEnrichOutput";
        };
        /** @description Technology enrich request. */
        TechnologyEnrichRequest: {
            /** @description The primary data of the document */
            data: components["schemas"]["TechnologyEnrichRequestResource"];
        };
        /** @description Request attributes for technology enrich. */
        TechnologyEnrichRequestAttributes: {
            /**
             * Format: int64
             * @description Unique ZoomInfo Identifier for the company.
             */
            companyId?: number;
        };
        /** @description Technology enrich request resource. */
        TechnologyEnrichRequestResource: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["TechnologyEnrichRequestAttributes"];
            /**
             * @description The type of the resource
             * @default TechnologyEnrich
             */
            type: string;
        };
        /** @description Technology enrich response. */
        TechnologyEnrichResponse: {
            /** @description The primary data of the document */
            data: components["schemas"]["TechnologyEnrichResponseResource"][];
            /** @description Non-standard meta information about the document */
            meta?: components["schemas"]["NonPaginatedResultMeta"];
        };
        /** @description Technology enrich response attributes. */
        TechnologyEnrichResponseAttributes: {
            /** @description Attribute of the technology. */
            attribute?: string;
            /** @description Category for the retrieved data. */
            category?: string;
            /** @description Parent Category for the retrieved data. */
            categoryParent?: string;
            /**
             * Format: date
             * @description Date when the data was created. Uses YYYY-MM-DD format.
             */
            createdDate?: string;
            /** @description Description of the data being returned. */
            description?: string;
            /** @description Domain associated with the data being returned. */
            domain?: string;
            /** @description The URL which can be used to retrieve the logo. */
            logo?: string;
            /**
             * Format: date
             * @description Date when the data was last modified. Uses YYYY-MM-DD format.
             */
            modifiedDate?: string;
            /** @description Product associated with the data being returned. */
            product?: string;
            /** @description Vendor associated with the data being returned. */
            vendor?: string;
            /** @description Website associated with the data being returned. */
            website?: string;
        };
        /** @description Technology enrich response resource. */
        TechnologyEnrichResponseResource: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["TechnologyEnrichResponseAttributes"];
            /** @description The unique identifier for the resource */
            id: string;
            /**
             * @description The type of the resource
             * @default Technology
             */
            type: string;
        };
        /** @description Model for the tech product, the attribute is the product's full coded id 'vendorId.parentCategoryId.categoryId.productId' */
        TechProductLookup: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["AttributedEntityModelAttributes"];
            /** @description The unique identifier for the resource */
            id: string;
            /**
             * @description The type of the resource (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            type: "TechProduct";
        };
        /** @description Technology skill identified for a contact. */
        TechSkill: {
            /** @description Unique identifier for the technology skill. */
            id?: string;
            /** @description Name of the technology skill. */
            name?: string;
        };
        /** @description Model for the tech skill */
        TechSkillLookup: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["BasicEntityModelAttributes"];
            /** @description The unique identifier for the resource */
            id: string;
            /**
             * @description The type of the resource (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            type: "TechSkill";
        };
        /** @description Model for the tech vendor */
        TechVendorLookup: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["BasicEntityModelAttributes"];
            /** @description The unique identifier for the resource */
            id: string;
            /**
             * @description The type of the resource (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            type: "TechVendor";
        };
        /** @description A topic entity */
        TopicEntityModelAttributes: {
            /** @description The category of the topic */
            category: string;
            /** @description The department of the topic */
            department: string;
            /** @description The description of the topic */
            description: string;
            /** @description The job function of the topic */
            jobFunction: string;
            /** @description The name of the entity */
            name: string;
        };
        /** @description Intent enrich request attributes. */
        TopSignalLocation: {
            /** @description City for the intent's signal location. */
            city?: string;
            /** @description Country for the intent's signal location. */
            country?: string;
            /** @description State for the intent's signal location. */
            state?: string;
        };
        /** @description Usage response. */
        UsageResponse: {
            /** @description The primary data of the document */
            data: components["schemas"]["UsageResponseResource"][];
        };
        /** @description Usage response. */
        UsageResponseResource: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["UserUsageAttributes"];
            /** @description The unique identifier for the resource */
            id: string;
            /**
             * @description The type of the resource
             * @default UserUsage
             */
            type: string;
        };
        /** @description Attributes describing user usage */
        UserUsageAttributes: {
            /** @description List of usage data */
            usage: components["schemas"]["UserUsageModel"][];
        };
        /** @description Model containing information about usage data */
        UserUsageModel: {
            /**
             * Format: int64
             * @description The number of this type of request you have already used.
             */
            currentUsage?: number;
            /** @description Description of the limit type. */
            description?: string;
            /** @description Type of limit. Options are request, record, uniqueID, webSightsApiRequest, and webSightsApiRecord. */
            limitType?: string;
            /**
             * Format: int64
             * @description The number of this type of request you are subscribed for. This is generally an usage limit for a contract period.
             */
            totalLimit?: number;
            /**
             * Format: int64
             * @description The remaining number of this type of request you can make before requiring additional purchase.
             */
            usageRemaining?: number;
        };
        /** @enum {string} */
        Versions: "1.0";
        /** @description Warning details for validation issues. */
        Warning: {
            /** @description Warning code. */
            code?: string;
            /** @description Fields associated with the warning. */
            fields?: string[];
            /** @description Warning message. */
            message?: string;
        };
        /** @description Model for the years of experience */
        YearsOfExperienceLookup: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["BasicEntityModelAttributes"];
            /** @description The unique identifier for the resource */
            id: string;
            /**
             * @description The type of the resource (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            type: "YearsOfExperience";
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
    EnrichInterface_enrichCorporateHierarchy: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description The request body containing corporate hierarchy enrich criteria. */
        requestBody: {
            content: {
                "application/vnd.api+json": components["schemas"]["CorporateHierarchyEnrichRequest"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["CorporateHierarchyEnrichResponse"];
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
    EnrichInterface_enrichCompany: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description The request body containing company enrich criteria. */
        requestBody: {
            content: {
                "application/vnd.api+json": components["schemas"]["CompanyEnrichRequest"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["CompanyEnrichResponse"];
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
    EnrichInterface_enrichHashtag: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description The request body containing company hashtag enrich criteria. */
        requestBody: {
            content: {
                "application/vnd.api+json": components["schemas"]["HashtagEnrichRequest"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["HashtagEnrichResponse"];
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
    EnrichInterface_enrichOrgChart: {
        parameters: {
            query?: {
                /** @description Page number for the results. */
                "page[number]"?: number;
                /** @description Number of records to return per page. Default is 25. */
                "page[size]"?: number;
                /** @description Sort results by valid output fields: contactAccuracyScore and lastName. If no valid fields are specified, results default to relevance-based sorting. Add minus sign ('-') for descending order. */
                sort?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description The request body containing org chart enrich criteria. */
        requestBody: {
            content: {
                "application/vnd.api+json": components["schemas"]["OrgChartEnrichRequest"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["OrgChartEnrichResponse"];
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
    SearchInterface_searchCompany: {
        parameters: {
            query?: {
                /**
                 * @description The page of results that you want to retrieve. If not provided, the first page
                 *     of results will be returned. Use in connection with `page[size]` to handle large result sets.
                 *
                 *     Example: `page[number]=2&page[size]=25` will return the second page of result (results 26-50 based
                 *     on the `sort` value).
                 */
                "page[number]"?: number;
                /**
                 * @description Sets the number of records to return per page. If not provided, the default is 25 records per
                 *     page. Valid values for page size are any integer from 1 to 100.
                 */
                "page[size]"?: number;
                /**
                 * @description Sort results by the specified output field. Valid values are name, employeeCount, and revenue.
                 *     Add minus sign ('-') for descending order. The default sort if not provided is to sort the results
                 *     by revenue in descending order `-revenue`
                 *
                 *     Examples:
                 *     - `name` will sort results by company name in ascending alphabetical order.
                 *     - `-employeeCount` will sort results in descending order (from company with the most number of employees
                 *     to the company with the least number of employees)
                 */
                sort?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description The request body containing company search criteria. */
        requestBody: {
            content: {
                "application/vnd.api+json": components["schemas"]["CompanySearchRequest"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["CompanySearchResponse"];
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
    EnrichInterface_enrichTechnology: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description The request body containing company technologies enrich criteria. */
        requestBody: {
            content: {
                "application/vnd.api+json": components["schemas"]["TechnologyEnrichRequest"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["TechnologyEnrichResponse"];
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
    EnrichInterface_enrichContact: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description The request body containing contact enrich criteria. */
        requestBody: {
            content: {
                "application/vnd.api+json": components["schemas"]["ContactEnrichRequest"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ContactEnrichResponse"];
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
    SearchInterface_searchContact: {
        parameters: {
            query?: {
                /**
                 * @description The page of results that you want to retrieve. If not provided, the first page
                 *     of results will be returned. Use in connection with `page[size]` to handle large result sets.
                 *
                 *     Example: `page[number]=2&page[size]=25` will return the second page of result (results 26-50 based
                 *     on the `sort` value).
                 */
                "page[number]"?: number;
                /**
                 * @description Sets the number of records to return per page. If not provided, the default is 25 records per
                 *     page. Valid values for page size are any integer from 1 to 100.
                 */
                "page[size]"?: number;
                /**
                 * @description Sort results by the specified output field. Valid values are contactAccuracyScore, lastName, companyName,
                 *     hierarchy, sourceCount, lastMentioned, and relevance. Add minus sign ('-') for descending order. The default
                 *     value if not provided is sorting by relevance in descending order `-relevance`
                 *
                 *     Examples:
                 *     - `lastName` will sort results by contact last name in ascending alphabetical order.
                 *     - `-lastMentioned` will sort results in descending order (most recently to least recently mentioned)
                 *     by the `lastMentioned` date for each contact
                 */
                sort?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description The request body containing contact search criteria. */
        requestBody: {
            content: {
                "application/vnd.api+json": components["schemas"]["ContactSearchRequest"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ContactSearchResponse"];
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
    EnrichInterface_enrichIntent: {
        parameters: {
            query?: {
                /** @description Page number for the results. */
                "page[number]"?: number;
                /** @description Number of records to return per page. Default is 25. */
                "page[size]"?: number;
                /** @description Valid values are audiencestrength, category, companybname, issuedate, signaldate, signalscore, signalstrength, surgescore, topic. Add minus sign ('-') for descending order. */
                sort?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description The request body containing intent enrich criteria. */
        requestBody: {
            content: {
                "application/vnd.api+json": components["schemas"]["IntentEnrichRequest"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["IntentEnrichResponse"];
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
    SearchInterface_searchIntent: {
        parameters: {
            query?: {
                /**
                 * @description The page of results that you want to retrieve. If not provided, the first page
                 *     of results will be returned. Use in connection with `page[size]` to handle large result sets.
                 *
                 *     Example: `page[number]=2&page[size]=25` will return the second page of result (results 26-50 based
                 *     on the `sort` value).
                 */
                "page[number]"?: number;
                /**
                 * @description Sets the number of records to return per page. If not provided, the default is 25 records per
                 *     page. Valid values for page size are any integer from 1 to 100.
                 */
                "page[size]"?: number;
                /**
                 * @description Sort results by the specified output field. Valid values are `signalDate`, `companyName`, `signalScore`,
                 *     `category`, `topic`, and `audienceStrength`. Add minus sign ('-') for descending order. The default,
                 *     if not provided, is to sort the results by `topic` name in descending order (`-topic`)
                 *
                 *     Examples:
                 *     - `companyName` will sort results by company name in ascending alphabetical order.
                 *     - `-signalDate` will sort results in descending order by signal date (from most recent signals to
                 *     the oldest signals)
                 */
                sort?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description The request body containing intent search criteria. */
        requestBody: {
            content: {
                "application/vnd.api+json": components["schemas"]["IntentSearchRequest"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["IntentSearchResponse"];
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
    LookupInterface_lookup: {
        parameters: {
            query?: {
                /** @description The category of the lookup field. Only applicable when accessing hashtag lookups e.g. 'Unified Communications' */
                "filter[category]"?: string;
                /** @description The parentCategory. Only applicable when accessing hashtag and tech lookups e.g. 'Communication and Collaboration' */
                "filter[parentCategory]"?: string;
                /** @description The subCategory. Only applicable when accessing hashtag and tech lookups e.g. 'Unified Communications as a Service' */
                "filter[subCategory]"?: string;
                /** @description The vendor of the lookup field. Only applicable when accessing hashtag and tech lookups e.g. 'microsoft corporation' */
                "filter[vendor]"?: string;
            };
            header?: never;
            path: {
                /** @description The name of the lookup field e.g. 'company-rankings' */
                fieldName: components["schemas"]["FieldNameEnum"];
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
                    "application/vnd.api+json": components["schemas"]["LookupResponse"];
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
    LookupEnrichInterface_lookupEnrich: {
        parameters: {
            query: {
                /** @description The entity type to filter by. Options are 'contact', 'company', 'scoop', 'news', 'intent', 'technology', 'orgChart', or 'corporate-hierarchy'. */
                "filter[entity]": components["schemas"]["EnrichEntityNameEnum"];
                /** @description The field type to filter by. Options are 'input' or 'output'. */
                "filter[fieldType]": components["schemas"]["FieldTypeEnum"];
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
                    "application/vnd.api+json": components["schemas"]["LookupEnrichResponse"];
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
    LookupSearchInterface_lookupSearch: {
        parameters: {
            query: {
                /** @description The entity type to filter by. Options are 'contact', 'company', 'scoop', 'news', or 'intent'. */
                "filter[entity]": components["schemas"]["SearchEntityNameEnum"];
                /** @description The field type to filter by. Options are 'input' or 'output'. */
                "filter[fieldType]": components["schemas"]["FieldTypeEnum"];
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
                    "application/vnd.api+json": components["schemas"]["LookupSearchResponse"];
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
    EnrichInterface_enrichNews: {
        parameters: {
            query?: {
                /** @description Page number for the results. */
                "page[number]"?: number;
                /** @description Number of records to return per page. Default is 25. */
                "page[size]"?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description The request body containing news enrich criteria. */
        requestBody: {
            content: {
                "application/vnd.api+json": components["schemas"]["NewsEnrichRequest"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["NewsEnrichResponse"];
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
    SearchInterface_searchNews: {
        parameters: {
            query?: {
                /**
                 * @description The page of results that you want to retrieve. If not provided, the first page
                 *     of results will be returned. Use in connection with `page[size]` to handle large result sets.
                 *
                 *     Example: `page[number]=2&page[size]=25` will return the second page of result (results 26-50 based
                 *     on the `sort` value).
                 */
                "page[number]"?: number;
                /**
                 * @description Sets the number of records to return per page. If not provided, the default is 25 records per
                 *     page. Valid values for page size are any integer from 1 to 100.
                 */
                "page[size]"?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description The request body containing news search criteria. */
        requestBody: {
            content: {
                "application/vnd.api+json": components["schemas"]["NewsSearchRequest"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["NewsSearchResponse"];
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
    EnrichInterface_enrichScoop: {
        parameters: {
            query?: {
                /** @description Page number for the results. */
                "page[number]"?: number;
                /** @description Number of records to return per page. Default is 25. */
                "page[size]"?: number;
                /** @description Sort results by valid output fields: scoopId, originalPublishedDate, description, link, or linkText. Add minus sign ('-') for descending order. */
                sort?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description The request body containing news enrich criteria. */
        requestBody: {
            content: {
                "application/vnd.api+json": components["schemas"]["ScoopEnrichRequest"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ScoopEnrichResponse"];
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
    SearchInterface_searchScoop: {
        parameters: {
            query?: {
                /**
                 * @description The page of results that you want to retrieve. If not provided, the first page
                 *     of results will be returned. Use in connection with `page[size]` to handle large result sets.
                 *
                 *     Example: `page[number]=2&page[size]=25` will return the second page of result (results 26-50 based
                 *     on the `sort` value).
                 */
                "page[number]"?: number;
                /**
                 * @description Sets the number of records to return per page. If not provided, the default is 25 records per
                 *     page. Valid values for page size are any integer from 1 to 100.
                 */
                "page[size]"?: number;
                /**
                 * @description Sort results by the specified output field. Valid values are `scoopId`, `originalPublishedDate`, `description`,
                 *     `link`, and `linkText`. Add minus sign ('-') for descending order. The default, if not provided, is to sort the
                 *     results by `originalPublishedDate` in descending order (`-originalPublishedDate`)
                 *
                 *     Examples:
                 *     - `scoopId` will sort results by Scoop id in ascending alphabetical order.
                 *     - `-description` will sort results in reverse alphabetical order by the Scoop description
                 */
                sort?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description The request body containing scoop search criteria. */
        requestBody: {
            content: {
                "application/vnd.api+json": components["schemas"]["ScoopSearchRequest"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ScoopSearchResponse"];
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
    UserInterface_userUsage: {
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
                    "application/vnd.api+json": components["schemas"]["UsageResponse"];
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
}
