// AUTO-GENERATED from openapi-agent-v1.yaml (https://docs.zoominfo.com/openapi/openapi-agent-v1.yaml).
// Regenerate with: npm run codegen
/* eslint-disable */

export interface paths {
    "/agent/v1/agent-teams": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Agent Teams
         * @description Returns a list of Agent Teams. Each Agent Team contains information about the Agent Team including its name,
         *     the registered triggers that can initiate an Agent Team run, and whether the Agent Team and its triggers are
         *     currently active.
         *
         *     Agent Teams can be run using [Run Agent Team](ref:agentteamscontroller_runagentteam). Any Agent Team can
         *     be executed manually using that endpoint, regardless of whether the Agent Team is marked as active or inactive.
         *     To get additional details for an Agent Team, including the required inputs needed to create a new run, please use
         *     [Get Agent Team Details](ref:agentteamscontroller_getagentteamdetails)
         */
        get: operations["AgentTeamsController_listAgentTeams"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/agent/v1/agent-teams/{agentTeamId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Agent Team Details
         * @description Fetch an Agent Team by id, returning the full Agent Team details. The Agent Team details include configured input
         *     parameters that are required when executing an Agent Team using the [Run Agent Team](ref:agentteamscontroller_runagentteam) endpoint.
         *
         *     Use [List Agent Teams](ref:agentteamscontroller_listagentteams) to find an Agent Team if you don't already know the identifier
         *     you are looking to get details for.
         */
        get: operations["AgentTeamsController_getAgentTeamDetails"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/agent/v1/agent-teams/{agentTeamId}/runs": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Agent Team Runs
         * @description Fetch all runs for an Agent Team.
         *
         *     Do not use this endpoint to poll for the status of an Agent Team run, for that please use
         *     [Get Agent Team Results](ref:agentteamscontroller_getagentteamrun). The list of Agent Team runs
         *     will always return sorted in reverse chronological order.
         */
        get: operations["AgentTeamsController_listAgentTeamRuns"];
        put?: never;
        /**
         * Run Agent Team
         * @description Triggers an Agent Team run. Any Agent Team can be run manually using this endpoint, even if the
         *     Agent Team is marked with inactive.
         *
         *     Agent Teams run asynchronously, so this endpoint returns the Agent Team run with the id created
         *     and the initial run status. Poll [Get Agent Team Results](ref:agentteamscontroller_getagentteamrun)
         *     to get status updates on the Agent Team run.
         */
        post: operations["AgentTeamsController_runAgentTeam"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/agent/v1/agent-teams/{agentTeamId}/runs/{runId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Agent Team Results
         * @description Retrieves the current status and available output for a previously started Agent Team run.
         *
         *     Poll this endpoint after executing an Agent Team run to check the status of that Agent Team.
         *     Returns `404` when the Agent Team or run does not exist, or if the run does not belong to the
         *     specified Agent Team.
         */
        get: operations["AgentTeamsController_getAgentTeamRun"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/agent/v1/agents": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List agents
         * @description List available agents
         */
        get: operations["AgentInterace_listAgents"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/agent/v1/agents/{agentId}/actions/interact": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Interact with Agent
         * @description Interact with Agent
         */
        post: operations["AgentInterace_interactAgent"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/agent/v1/agents/{agentId}/actions/stream": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Interact with Agent (Stream)
         * @description Interact with Agent (Stream)
         */
        post: operations["AgentInterace_interactAgentStream"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/agent/v1/pulses": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Pulses
         * @description Returns the authenticated user's active pulses as a lightweight collection optimized for consumption
         *     by large language models (LLMs). Each entry includes a plain-text summary of the rendered content,
         *     priority, category, typed identity references for associated companies and contacts, and an optional
         *     `context` explanation.
         *
         *     Designed for AI / agent consumption. Dismissed, saved, and expired pulses are excluded.
         *
         *
         *     ## Ordering
         *     Results are returned in stable descending order of `meta.createdAt`, then by `priority`
         *     (`HIGH` first, then `MEDIUM`, then `LOW`), then by `id` ascending as a tiebreaker. The ordering
         *     is consistent across pages so pagination is safe under concurrent inserts.
         */
        get: operations["PulsesController_listPulses"];
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
        /** @description Action Arguments */
        ActionArguments: Record<string, never>;
        /** @description Additional Fields */
        AdditionalFields: Record<string, never>;
        /** @description Agent List Resource */
        AgentList: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["AgentListItem"];
            /** @description The unique identifier for the resource */
            id: string;
            /**
             * @description The type of the resource
             * @default agent
             */
            type: string;
        };
        /** @description Agent List Item */
        AgentListItem: {
            /** @description Agent identifier */
            name: string;
        };
        /** @description Agent List Response */
        AgentListResponse: {
            /** @description The primary data of the document */
            data: components["schemas"]["AgentList"][];
        };
        /** @description Agent Properties */
        AgentProps: Record<string, never>;
        /** @description Agent State */
        AgentState: Record<string, never>;
        /** @description Agent Team resource. */
        AgentTeam: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["AgentTeamAttributes"];
            /** @description The unique identifier for the resource */
            id: string;
            /** @description Non-standard meta information about the resource */
            meta?: components["schemas"]["AgentTeamMeta"];
            /**
             * @description The type of the resource
             * @default AgentTeam
             */
            type: string;
        };
        /** @description Public Agent Team details. */
        AgentTeamAttributes: {
            /** @description Flag indicating whether the Agent Team's triggers are active or not. Agent Teams that are inactive can still be triggered manually */
            active: boolean;
            /** @description Human-readable description of the Agent Team. This field is omitted when no objective or description is defined. */
            description?: string;
            /** @description Name of the Agent Team. */
            name: string;
            /** @description The trigger types associated with this Agent Team */
            triggers: components["schemas"]["AgentTeamTriggerType"][];
        };
        /** @description Agent Team resource with full input parameter details. */
        AgentTeamDetail: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["AgentTeamDetailAttributes"];
            /** @description The unique identifier for the resource */
            id: string;
            /** @description Non-standard meta information about the resource */
            meta?: components["schemas"]["AgentTeamMeta"];
            /**
             * @description The type of the resource
             * @default AgentTeam
             */
            type: string;
        };
        /** @description Public Agent Team details. */
        AgentTeamDetailAttributes: {
            /** @description Flag indicating whether the Agent Team's triggers are active or not. Agent Teams that are inactive can still be triggered manually */
            active: boolean;
            /** @description Human-readable description of the Agent Team. This field is omitted when no objective or description is defined. */
            description?: string;
            /** @description The input parameters defined for this Agent Team. */
            inputs?: components["schemas"]["InputParameter"][];
            /** @description Name of the Agent Team. */
            name: string;
            /** @description The trigger types associated with this Agent Team */
            triggers: components["schemas"]["AgentTeamTriggerType"][];
        };
        /** @description Response for a single Agent Team with input parameter details */
        AgentTeamDetailResponse: {
            /** @description The primary data of the document */
            data: components["schemas"]["AgentTeamDetail"];
        };
        /** @description Input parameter passed to an Agent Team run. */
        AgentTeamInput: {
            /** @description Name of the Agent Team input. */
            name: string;
            /** @description Value supplied for the input. */
            value: string;
        };
        /** @description Metadata information for an Agent Team */
        AgentTeamMeta: {
            /**
             * Format: date-time
             * @description The timestamp when this Agent Team was created
             */
            createdAt: string;
            /**
             * Format: int32
             * @description The id of the user that created this Agent Team
             */
            createdBy: number;
            /**
             * Format: int32
             * @description The total amount of AI Credits consumed by this Agent Team over its lifespan
             */
            creditsUsed: number;
            /**
             * Format: date-time
             * @description The date of the last successful run of this Agent Team
             */
            lastRunDate?: string;
            /**
             * Format: date-time
             * @description The timestamp for the last time this Agent Team was updated
             */
            updatedAt: string;
        };
        /** @description Model describing an Agent Team run */
        AgentTeamRun: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["AgentTeamRunAttributes"];
            /** @description The unique identifier for the resource */
            id: string;
            /** @description Non-standard meta information about the resource */
            meta?: components["schemas"]["AgentTeamRunMeta"];
            /**
             * @description The type of the resource
             * @default AgentTeamRun
             */
            type: string;
        };
        /** @description Attributes describing an Agent Team run */
        AgentTeamRunAttributes: {
            /** @description The unique identifier of the Agent Team associated with this run. */
            agentTeamId: string;
            /** @description The inputs provided for this run of the Agent Team */
            inputs?: components["schemas"]["AgentTeamInput"][];
            /** @description Final or in-progress output for the Agent Team run. This field is omitted for runs that have not yet produced output. */
            output?: string;
            /** @description Current execution status of the Agent Team run. */
            status: components["schemas"]["AgentTeamRunStatus"];
        };
        /** @description Metadata information for an Agent Team run */
        AgentTeamRunMeta: {
            /**
             * Format: date-time
             * @description The UTC date time when the Agent Team run completed
             */
            completedAt?: string;
            /**
             * Format: date-time
             * @description The UTC date time when the Agent Team run was created
             */
            createdAt: string;
            /**
             * Format: int32
             * @description The id of the user that executed this Agent Team run
             */
            createdBy: number;
            /**
             * Format: int32
             * @description The total number of credits consumed by this Agent Team run. This value is only provided after the Agent Team has successfully finished executing
             */
            totalCredits?: number;
            /**
             * Format: date-time
             * @description The UTC date time when the Agent Team run was last updated
             */
            updatedAt: string;
        };
        /** @description Response containing a single Agent Team run. */
        AgentTeamRunResponse: {
            /** @description The primary data of the document */
            data: components["schemas"]["AgentTeamRun"];
        };
        /** @description Response containing a list of Agent Team runs. */
        AgentTeamRunsListResponse: {
            /** @description The primary data of the document */
            data: components["schemas"]["AgentTeamRun"][];
            /** @description Links related to the primary data */
            links?: components["schemas"]["PagingLinks"];
            /** @description Non-standard meta information about the document */
            meta?: components["schemas"]["PagingMeta"];
        };
        /**
         * @description Lifecycle states for an Agent Team run.
         * @enum {string}
         */
        AgentTeamRunStatus: "QUEUED" | "RUNNING" | "COMPLETED" | "FAILED" | "CANCELLED" | "STOPPING";
        /** @description Response containing a list of Agent Teams. */
        AgentTeamsListResponse: {
            /** @description The primary data of the document */
            data: components["schemas"]["AgentTeam"][];
            /** @description Links related to the primary data */
            links?: components["schemas"]["PagingLinks"];
            /** @description Non-standard meta information about the document */
            meta?: components["schemas"]["PagingMeta"];
        };
        /** @enum {string} */
        AgentTeamTriggerType: "MANUAL" | "ACCOUNT_CHANGE" | "WEBSITE_VISIT" | "EMAIL_RECEIVED" | "MEETING" | "WEBHOOK" | "CONTACT_CHANGE" | "OPPORTUNITY_CHANGE" | "SCHEDULE";
        /** @description Control Props */
        ControlProps: Record<string, never>;
        /** @description Control Value */
        ControlValue: Record<string, never>;
        /** @description Describes an input parameter that is used to start an agent team run */
        InputParameter: {
            /** @description The name of the input parameter. This will be provided in the `name` attribute for the `RunAgentTeamRequest` */
            name: string;
            /** @description Indicates whether the parameter is required to start the Agent Team run */
            required: boolean;
            /** @description The data type of the input parameter. Currently only STRING type parameters are supported */
            type: components["schemas"]["InputParameterType"];
        };
        /** @enum {string} */
        InputParameterType: "STRING";
        /** @description Interact Request Body */
        InteractRequest: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["InteractRequestModel"];
            /**
             * @description The type of the resource
             * @default InteractRequest
             */
            type: string;
        };
        /** @description Interact Request Body */
        InteractRequestBody: {
            /** @description The primary data of the document */
            data: components["schemas"]["InteractRequest"];
        };
        /** @description InteractRequestModel */
        InteractRequestModel: {
            /** @description Interaction Id */
            interactionId?: string;
            /** @description Message */
            message: string;
            /** @description Relationships */
            relationships?: components["schemas"]["Relationship"][];
            /** @description Sections */
            sections?: components["schemas"]["ThreadMessageSections"][];
            /** @description StructuredContent */
            structuredContent?: components["schemas"]["StructuredContent"];
            /** @description Thread Id */
            threadId?: string;
            /** @description User Message Id */
            userMessageId?: string;
            /** @description Users Id */
            usersId?: string;
        };
        /** @description Meta Information */
        MetaInfo: Record<string, never>;
        /** @description Links describing the available paging options. */
        PagingLinks: {
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
        /** @description Metadata for the current page of results. */
        PagingMeta: {
            /**
             * Format: uint32
             * @description The current page of results being returned.
             */
            page: number;
            /**
             * Format: uint32
             * @description The page size as specified by the request.
             */
            pageSize: number;
            /**
             * Format: uint32
             * @description The total count of results within the current search parameters.
             */
            totalCount: number;
        };
        /** @description A pulse delivered to the authenticated user. */
        Pulse: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["PulseAttributes"];
            /** @description The unique identifier for the resource */
            id: string;
            /** @description Non-standard meta information about the resource */
            meta?: components["schemas"]["PulseMeta"];
            /**
             * @description The type of the resource
             * @default Pulse
             */
            type: string;
        };
        /** @description Lightweight view of a pulse optimized for consumption by large language models (LLMs). Omits content blocks, recipients, data sources, and calls to action (CTAs) in favor of typed identity references for associated companies and contacts plus an LLM-generated relevance explanation. */
        PulseAttributes: {
            /** @description Category the pulse belongs to. */
            category: components["schemas"]["PulseCategory"];
            /** @description Companies associated with the pulse. Each entry carries a ZoomInfo company identifier and display name so agents can chain into other ZoomInfo APIs without an additional lookup step. Absent when the pulse has no company associations (for example, a contact-only pulse). */
            companies?: components["schemas"]["PulseCompanyRef"][];
            /** @description Contacts associated with the pulse. Each entry carries a ZoomInfo contact identifier and display name so agents can chain into other ZoomInfo APIs without an additional lookup step. Absent when the pulse has no contact associations (for example, a company-only pulse). */
            contacts?: components["schemas"]["PulseContactRef"][];
            /** @description LLM-generated natural-language context explaining why this pulse is relevant to the authenticated user. Non-deterministic: the wording, length, and emphasis can change across invocations and across underlying model versions. Treat the field as opaque context, not as a stable contract for downstream parsing. */
            context?: string;
            /** @description Priority level assigned to the pulse. */
            priority: components["schemas"]["PulsePriority"];
            /** @description Type of pulse content. */
            pulseType: components["schemas"]["PulseType"];
            /** @description Underlying signal that drove the pulse. Present only on signal-derived pulses; absent on task, event, and summary pulses. */
            signalType?: components["schemas"]["PulseSignalType"];
            /** @description Plain-text summary of the rendered pulse content. Suitable as input to a large language model (LLM). Absent when the content block fails to render or contains no extractable text. */
            summary?: string;
            /** @description Display title of the pulse. */
            title: string;
        };
        /**
         * @description Top-level category a pulse belongs to.
         * @enum {string}
         */
        PulseCategory: "FINANCIAL" | "PEOPLE" | "ACTIVITY" | "COMPETITIVE" | "INITIATIVE" | "ENGAGEMENT" | "PLAY" | "OTHER";
        /** @description Identity of a company associated with a pulse. The `id` is a ZoomInfo company identifier and can be passed to other ZoomInfo APIs (for example the Data API enrichment endpoints). */
        PulseCompanyRef: {
            /**
             * Format: int64
             * @description ZoomInfo company identifier.
             */
            id: number;
            /** @description Display name of the company. */
            name: string;
        };
        /** @description Identity of a contact associated with a pulse. The `id` is a ZoomInfo contact identifier and can be passed to other ZoomInfo APIs. */
        PulseContactRef: {
            /**
             * Format: int64
             * @description ZoomInfo contact identifier.
             */
            id: number;
            /** @description Display name of the contact. */
            name: string;
        };
        /** @description System-managed metadata for a pulse. */
        PulseMeta: {
            /**
             * Format: date-time
             * @description Time at which the pulse was created.
             */
            createdAt: string;
            /**
             * Format: date-time
             * @description Time at which the pulse expires. Absent when the pulse has no expiration.
             */
            expiresAt?: string;
        };
        /**
         * @description Priority level of a pulse.
         * @enum {string}
         */
        PulsePriority: "HIGH" | "MEDIUM" | "LOW";
        /**
         * @description Underlying signal that drove the pulse. New signal types are introduced by adding values to this enum; consumers should accept additive enum changes without treating them as a breaking schema change.
         * @enum {string}
         */
        PulseSignalType: "CONTACT_NEW_HIRES" | "CONTACT_PROMOTIONS" | "CONTACT_DEPARTURES" | "UPCOMING_MEETING" | "WEBSITE_VISITOR" | "COMPETITOR_INTENT" | "WEBSITE_SPIKES" | "FORM_COMPLETE" | "WEBSITE_VISITS" | "COMPANY_FUNDING" | "HIRING" | "ANOMALOUS_HIRING" | "EARNINGS" | "INITIAL_PUBLIC_OFFERING" | "LAYOFFS" | "G2_TRUST_RADIUS" | "PODCAST_MENTIONS" | "PERSON_BASED_NEWS" | "BUYING_INTENT_SPIKE" | "TECHNOLOGY_ADDED";
        /** @description Response containing a page of the authenticated user's active pulses. */
        PulsesListResponse: {
            /** @description The primary data of the document */
            data: components["schemas"]["Pulse"][];
            /** @description Links related to the primary data */
            links?: components["schemas"]["PagingLinks"];
            /** @description Non-standard meta information about the document */
            meta?: components["schemas"]["PagingMeta"];
        };
        /**
         * @description Type of pulse content.
         * @enum {string}
         */
        PulseType: "INSIGHT" | "TASK" | "EVENT" | "SUMMARY";
        /** @description Relationship */
        Relationship: {
            /** @description Entity Id */
            entityId: string;
            /** @description Entity Type */
            entityType: string;
        };
        /** @description Render Properties */
        RenderProps: Record<string, never>;
        /** @description Agent Team run request resource. */
        RunAgentTeamRequest: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["RunAgentTeamRequestAttributes"];
            /**
             * @description The type of the resource
             * @default RunAgentTeamRequest
             */
            type: string;
        };
        /** @description Attributes for an Agent Team run request. */
        RunAgentTeamRequestAttributes: {
            /** @description Optional list of named input values to pass to the Agent Team. */
            inputs?: components["schemas"]["AgentTeamInput"][];
        };
        /** @description Request body for running an Agent Team. */
        RunAgentTeamRequestBody: {
            /** @description The primary data of the document */
            data: components["schemas"]["RunAgentTeamRequest"];
        };
        /** @description SSE Response Body */
        SseResponseBody: {
            /** @description Server-sent events stream content */
            data: string;
        };
        /** @description StructuredContent */
        StructuredContent: {
            /** @description Agent Props */
            agentProps?: components["schemas"]["AgentProps"];
            /** @description Agent State */
            agentState?: components["schemas"]["AgentState"];
            /** @description Trigger Actions */
            triggerActions?: components["schemas"]["TriggerActions"][];
        };
        /** @description Structured Content Object */
        StructuredContentObject: Record<string, never>;
        /** @description Response Model */
        Thread: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["ThreadMessages"];
            /** @description The unique identifier for the resource */
            id: string;
            /**
             * @description The type of the resource
             * @default Thread
             */
            type: string;
        };
        /** @description ThreadMessageResponse */
        ThreadMessageResponse: {
            /** @description The primary data of the document */
            data: components["schemas"]["Thread"];
        };
        /** @description ThreadMessages */
        ThreadMessages: {
            /** @description Additional Fields */
            additionalFields?: components["schemas"]["AdditionalFields"];
            /** @description Content */
            content: string;
            /**
             * Format: date-time
             * @description Created At
             */
            createdAt?: string;
            /**
             * Format: date-time
             * @description Deleted At
             */
            deletedAt?: string;
            /** @description Id */
            id?: string;
            /** @description Parent Thread Message Id */
            parentThreadMessageId: string;
            /** @description Role */
            role: string;
            /** @description Sections */
            sections?: components["schemas"]["ThreadMessageSections"][];
            /** @description State */
            state: string;
            /** @description Structured Content */
            structuredContent: components["schemas"]["StructuredContent"];
            /**
             * Format: uuid
             * @description Thread Id
             */
            threadId: string;
            /**
             * Format: date-time
             * @description Updated At
             */
            updatedAt?: string;
            /** @description Users Id */
            usersId: string;
        };
        /** @description ThreadMessageSectionControl */
        ThreadMessageSectionControl: {
            /** @description Additional Fields */
            additionalFields?: components["schemas"]["AdditionalFields"];
            /**
             * Format: date-time
             * @description Created At
             */
            createdAt?: string;
            /**
             * Format: date-time
             * @description Deleted At
             */
            deletedAt?: string;
            /** @description Entity Id */
            entityId: string;
            /** @description Entity Type */
            entityType: string;
            /** @description Id */
            id?: string;
            /** @description Inline */
            inline: boolean;
            /** @description Name */
            name: string;
            /** @description Props */
            props: components["schemas"]["ControlProps"];
            /**
             * Format: uuid
             * @description Thread Message Section Id
             */
            threadMessageSectionId: string;
            /** @description Type */
            type: string;
            /**
             * Format: date-time
             * @description Updated At
             */
            updatedAt?: string;
            /** @description Value */
            value: components["schemas"]["ControlValue"];
        };
        /** @description ThreadMessageSections */
        ThreadMessageSections: {
            /** @description Additional Fields */
            additionalFields?: components["schemas"]["AdditionalFields"];
            /** @description Content */
            content: string;
            /** @description Content Type */
            contentType: string;
            /**
             * @description Controls
             * @default []
             */
            controls: components["schemas"]["ThreadMessageSectionControl"][];
            /**
             * Format: date-time
             * @description Created At
             */
            createdAt?: string;
            /**
             * Format: date-time
             * @description Deleted At
             */
            deletedAt?: string;
            /** @description Id */
            id?: string;
            /** @description Meta */
            meta: components["schemas"]["MetaInfo"];
            /** @description Render Props */
            renderProps: components["schemas"]["RenderProps"];
            /** @description Section Name */
            sectionName: string;
            /** @description State */
            state: string;
            /** @description Structured Content */
            structuredContent: components["schemas"]["StructuredContentObject"];
            /**
             * Format: uuid
             * @description Thread Message Id
             */
            threadMessageId: string;
            /**
             * Format: date-time
             * @description Updated At
             */
            updatedAt?: string;
            /** @description User Facing */
            userFacing: boolean;
        };
        /** @description ThreadRelationships */
        ThreadRelationships: {
            /** @description Additional Fields */
            additionalFields?: components["schemas"]["AdditionalFields"];
            /**
             * Format: date-time
             * @description Created At
             */
            createdAt?: string;
            /**
             * Format: date-time
             * @description Deleted At
             */
            deletedAt?: string;
            /** @description Entity Id */
            entityId: string;
            /** @description Entity Type */
            entityType: string;
            /** @description Id */
            id?: string;
            /** @description Thread Id */
            threadId?: string;
            /**
             * Format: date-time
             * @description Updated At
             */
            updatedAt?: string;
            /** @description Users Id */
            usersId?: string;
        };
        /** @description Threads */
        Threads: {
            /** @description Additional Fields */
            additionalFields?: components["schemas"]["AdditionalFields"];
            /**
             * Format: date-time
             * @description Created At
             */
            createdAt?: string;
            /** @description Current Thread Message Id */
            currentThreadMessageId: string;
            /**
             * Format: date-time
             * @description Deleted At
             */
            deletedAt?: string;
            /** @description Id */
            id?: string;
            /** @description Messages */
            messages: components["schemas"]["ThreadMessages"][];
            /** @description Name */
            name: string;
            /** @description Relationships */
            relationships?: components["schemas"]["ThreadRelationships"][];
            /** @description Status */
            status: components["schemas"]["ThreadStatus"];
            /**
             * Format: date-time
             * @description Updated At
             */
            updatedAt?: string;
            /** @description Users Id */
            usersId: string;
        };
        /**
         * @description ThreadStatus
         * @enum {string}
         */
        ThreadStatus: "ACTIVE" | "INACTIVE";
        /** @description TriggerActions */
        TriggerActions: {
            /** @description Arguments */
            arguments?: components["schemas"]["ActionArguments"];
            /** @description Id */
            id: string;
        };
        /** @description ValidationError */
        ValidationError: {
            /** @description Location */
            loc: (string | number)[];
            /** @description Message */
            msg: string;
            /** @description Error Type */
            type: string;
        };
        /** @enum {string} */
        Versions: "1.0";
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
    AgentTeamsController_listAgentTeams: {
        parameters: {
            query?: {
                /** @description Filter Agent Teams by name. */
                "filter[name]"?: string;
                /** @description The page of results you would like to fetch. The default value if not provided is `1` to fetch the first page of results */
                "page[number]"?: number;
                /**
                 * @description The number of Agent Teams to return per page of results. Allowable values are between 1 and 100.
                 *     The default value if not provided is 25 Agent Teams per page.
                 */
                "page[size]"?: number;
                /**
                 * @description Sort results by the specified output field. Valid values are name, createdAt, and updatedAt.
                 *     Add minus sign ('-') before the sort field name for descending order. The default sort if not
                 *     provided is `name` (sorted by name in alphabetical order)
                 */
                sort?: string;
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
                    "application/vnd.api+json": components["schemas"]["AgentTeamsListResponse"];
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
    AgentTeamsController_getAgentTeamDetails: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The unique identifier of the Agent Team */
                agentTeamId: string;
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
                    "application/vnd.api+json": components["schemas"]["AgentTeamDetailResponse"];
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
    AgentTeamsController_listAgentTeamRuns: {
        parameters: {
            query?: {
                /** @description The page of results you would like to fetch. The default value if not provided is `1` to fetch the first page of results. */
                "page[number]"?: number;
                /**
                 * @description The number of Agent Team runs to return per page of results. Allowable values are between 1 and 100.
                 *     The default value if not provided is 25 Agent Team runs per page.
                 */
                "page[size]"?: number;
            };
            header?: never;
            path: {
                /** @description The unique identifier of the Agent Team */
                agentTeamId: string;
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
                    "application/vnd.api+json": components["schemas"]["AgentTeamRunsListResponse"];
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
    AgentTeamsController_runAgentTeam: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The unique identifier of the Agent Team to run. */
                agentTeamId: string;
            };
            cookie?: never;
        };
        /** @description Request body containing optional named inputs for the Agent Team run. */
        requestBody?: {
            content: {
                "application/vnd.api+json": components["schemas"]["RunAgentTeamRequestBody"];
            };
        };
        responses: {
            /** @description Accepted */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["AgentTeamRunResponse"];
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
    AgentTeamsController_getAgentTeamRun: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The unique identifier of the Agent Team associated with the run. */
                agentTeamId: string;
                /** @description The unique identifier of the Agent Team run. */
                runId: string;
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
                    "application/vnd.api+json": components["schemas"]["AgentTeamRunResponse"];
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
    AgentInterace_listAgents: {
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
                    "application/vnd.api+json": components["schemas"]["AgentListResponse"];
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
    AgentInterace_interactAgent: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The agent to interact with */
                agentId: string;
            };
            cookie?: never;
        };
        /** @description The POST body */
        requestBody: {
            content: {
                "application/vnd.api+json": components["schemas"]["InteractRequestBody"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ThreadMessageResponse"];
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
    AgentInterace_interactAgentStream: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The agent to interact with */
                agentId: string;
            };
            cookie?: never;
        };
        /** @description The POST body */
        requestBody: {
            content: {
                "application/vnd.api+json": components["schemas"]["InteractRequestBody"];
            };
        };
        responses: {
            /** @description The request has succeeded. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/event-stream": components["schemas"]["SseResponseBody"];
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
    PulsesController_listPulses: {
        parameters: {
            query?: {
                /** @description The page of results to fetch. The default value if not provided is `1` to fetch the first page of results. */
                "page[number]"?: number;
                /**
                 * @description The number of pulses to return per page of results. Allowable values are between 1 and 100.
                 *     The default value if not provided is 25 pulses per page.
                 */
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
                    "application/vnd.api+json": components["schemas"]["PulsesListResponse"];
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
}
