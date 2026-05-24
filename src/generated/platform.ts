// AUTO-GENERATED from openapi-platform-v1.yaml (https://docs.zoominfo.com/openapi/openapi-platform-v1.yaml).
// Regenerate with: npm run codegen
/* eslint-disable */

export interface paths {
    "/platform/v1/engagements/content-interactions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Upsert Content Interactions
         * @description Create or update content interaction engagement records
         */
        post: operations["EngagementsController_upsertContentInteractions"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/platform/v1/engagements/content-interactions/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get content interaction
         * @description Retrieve a specific content interaction engagement by ID
         */
        get: operations["EngagementsController_getContentInteractionEngagement"];
        put?: never;
        post?: never;
        /**
         * Delete content interaction
         * @description Delete a content interaction engagement record
         */
        delete: operations["EngagementsController_deleteContentInteractionEngagement"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/platform/v1/entities/{entityName}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Upsert GTM entity records
         * @description Create or update entity records in the GTM data model
         */
        post: operations["EntitiesController_upsertEntitiesRecords"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/platform/v1/entitlements": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get user entitlements
         * @description Retrieve user entitlements filtered by admin status and role type.
         */
        get: operations["EntitlementsController_getEntitlements"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/platform/v1/metadata/entities": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get GTM entities list
         * @description Retrieve a list of all GTM data model entities available to your organization
         */
        get: operations["EntitiesController_getEntitiesList"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/platform/v1/metadata/entities/{entityName}/fields": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get GTM entity fields
         * @description Retrieve detailed metadata and field definitions for a specific GTM entity
         */
        get: operations["EntitiesController_getEntityFields"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/platform/v1/workflows": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get workflows list
         * @description Get a list of workflows with optional filters and pagination
         */
        get: operations["WorkflowsController_getWorkflows"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/platform/v1/workflows/{id}/actions/execute": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Execute workflow
         * @description Execute a workflow
         */
        post: operations["WorkflowsController_executeWorkflow"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/platform/v1/workflows/executions/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get execution status
         * @description Get the status of a workflow execution
         */
        get: operations["WorkflowsController_getExecutionStatus"];
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
        /** @enum {string} */
        Channel: "Website" | "Email";
        /** @description Content interaction model */
        ContentInteraction: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["ContentInteractionAttributes"];
            /** @description The unique identifier for the resource */
            id: string;
            /**
             * @description The type of the resource
             * @default ContentInteraction
             */
            type: string;
        };
        /** @description Content interaction engagement record attributes */
        ContentInteractionAttributes: {
            /** @description Timestamp when the interaction started (if duration is present, this is the start time) */
            actionPerformedAt: string;
            /** @description Source or medium through which the interaction occurred */
            channel: components["schemas"]["Channel"];
            /** @description Category or format of the content that received the interaction. Note: Email Sends (interactionType = Send and contentType = Email) are not accepted here — email send events must be submitted via the dedicated Email object. */
            contentType: components["schemas"]["ContentType"];
            /**
             * Format: int32
             * @description Length of interaction in seconds (if applicable)
             */
            duration?: number;
            /** @description Timestamp when the interaction ended (can be calculated from actionPerformedAt + duration if not explicitly provided) */
            endedAt?: string;
            /** @description Unique content interaction identifier */
            engagementId: string;
            /** @description Unique identifier of the customer's organization/tenant/instance in the external platform where the data originated (e.g. unique CRM Organization Id) */
            instanceId: string;
            /** @description Unique URL of the customer's organization/tenant/instance in the external platform where the data originated (e.g. unique CRM Organization Url) */
            instanceUrl?: string;
            /** @description Include all attributes for this interaction that do not fit into the ContentInteraction schema (as key-value pairs) */
            interactionDetails?: {
                [key: string]: unknown;
            };
            /** @description Name of the system where the interaction data originated */
            readonly interactionProvider?: string;
            /** @description Specific action performed during the interaction. Note: When interactionType = Send, email sends (contentType = Email) are not accepted here — email send events must be submitted via the dedicated Email object. */
            interactionType: components["schemas"]["InteractionType"];
            /** @description The participant associated with this content interaction */
            participant: components["schemas"]["ParticipantAttributes"];
            /** @description Interaction status */
            status: components["schemas"]["Status"];
            /** @description Target name */
            targetName?: string;
            /** @description Target URL */
            targetUrl?: string;
        };
        /** @description Content interaction model */
        ContentInteractionCreateItem: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["ContentInteractionAttributes"];
            /**
             * @description The type of the resource
             * @default ContentInteraction
             */
            type: string;
        };
        /** @description Response model for getting a specific content interaction */
        ContentInteractionResponse: {
            /** @description The primary data of the document */
            data: components["schemas"]["ContentInteraction"];
        };
        /** @description Model for creating multiple content interaction engagements */
        ContentInteractionUpsertRequest: {
            /** @description The primary data of the document */
            data: components["schemas"]["ContentInteractionCreateItem"][];
        };
        /** @description Response model for content interaction engagement upsert operations */
        ContentInteractionUpsertResponse: {
            /** @description The primary data of the document */
            data: components["schemas"]["ContentInteraction"][];
            /** @description Non-standard meta information about the document */
            meta?: components["schemas"]["UpsertResponseMeta"];
        };
        /** @enum {string} */
        ContentType: "Demo" | "Document" | "Email" | "Form" | "Video" | "Website";
        /** @description Entitlement resource model. */
        Entitlement: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["EntitlementAttributes"];
            /** @description The unique identifier for the resource */
            id: string;
            /**
             * @description The type of the resource
             * @default Entitlement
             */
            type: string;
        };
        /** @description Entitlement details. */
        EntitlementAttributes: {
            /** @description The role code. */
            roleCode: string;
            /** @description The role name, description of the role. */
            roleName: string;
            /** @description The role type. */
            roleType: components["schemas"]["RoleType"];
            /** @description The role value, 'Y' indicates entitlement is granted, a number indicates the limit. */
            value: string;
        };
        /** @description Response model containing a list of entitlements. */
        EntitlementsResponse: {
            /** @description The primary data of the document */
            data: components["schemas"]["Entitlement"][];
        };
        /** @enum {string} */
        EntityNames: "account" | "contact" | "user";
        /** @description Attributes for workflow execution request */
        ExecuteWorkflowAttributes: {
            /** @description URL to call back with execution results */
            callback_url?: string;
        };
        /** @description Workflow execution request model */
        ExecuteWorkflowRequest: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["ExecuteWorkflowAttributes"];
            /**
             * @description The type of the resource
             * @default ExecuteWorkflowRequest
             */
            type: string;
        };
        /** @description Workflow execution request body */
        ExecuteWorkflowRequestBody: {
            /** @description The primary data of the document */
            data: components["schemas"]["ExecuteWorkflowRequest"];
        };
        /** @description Links describing the various workflows paging options */
        GetWorkflowsLinks: {
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
        /** @description Metadata for the current page of workflows returned */
        GetWorkflowsMeta: {
            /**
             * Format: uint32
             * @description The current page of workflows being returned
             */
            page: number;
            /**
             * Format: uint32
             * @description The page size as specified by the request
             */
            pageSize: number;
            /**
             * Format: uint32
             * @description The total count of workflows within the current search parameters
             */
            totalCount: number;
        };
        /** @description Response model containing a collection of GTM entities available in the data model. */
        GtmEntitiesListResponse: {
            /** @description The primary data of the document */
            data: components["schemas"]["GtmEntity"][];
        };
        /** @description Represents a GTM data model entity with its core attributes and relationships. */
        GtmEntity: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["GtmEntityAttributes"];
            /** @description The unique identifier for the resource */
            id: string;
            /**
             * @description The type of the resource
             * @default GtmEntity
             */
            type: string;
        };
        /** @description Represents a relationship between GTM entities, defining how one entity connects to another through specific field associations. */
        GtmEntityAssociation: {
            /** @description The name of the entity that this association points to */
            associatedEntity: string;
            /** @description The field name in the associated entity that establishes the relationship */
            associatedFieldName: string;
        };
        /** @description Core attributes that define a GTM data model entity, including its identity, relationships, and metadata. */
        GtmEntityAttributes: {
            /** @description Collection of associations that define how this entity relates to other entities in the data model */
            associations: components["schemas"]["GtmEntityAssociation"][];
            /** @description A detailed description explaining the purpose and usage of this entity */
            description: string;
            /** @description The human-readable name of the entity */
            displayName: string;
            /** @description The unique identifier name of the entity within the GTM data model */
            entityName: string;
        };
        /** @description Represents a field definition within a GTM entity, containing metadata about the field's characteristics and constraints. */
        GtmEntityField: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["GtmEntityFieldAttributes"];
            /** @description The unique identifier for the resource */
            id: string;
            /**
             * @description The type of the resource
             * @default GtmEntityField
             */
            type: string;
        };
        /** @description Attributes that define the characteristics and metadata of a field within a GTM entity. */
        GtmEntityFieldAttributes: {
            /** @description The data type of the field */
            dataType: string;
            /** @description A description explaining the purpose of this field */
            description: string;
            /** @description The human-readable name of the field */
            displayName: string;
            /** @description The classification type of the field */
            fieldType: string;
            /** @description The unique identifier name of the field */
            name: string;
            /** @description Available predefined values for fields with limited options */
            pickListValues?: string[];
            /** @description Reference to another entity or field */
            reference?: string;
            /** @description Indicates whether this field is required */
            required: boolean;
        };
        /** @description Response model containing a collection of GTM entity field definitions. */
        GtmEntityFieldsResponse: {
            /** @description The primary data of the document */
            data: components["schemas"]["GtmEntityField"][];
        };
        /** @description Attributes for GTM model records. */
        GtmModelAttributes: {
            [key: string]: unknown;
        };
        /** @description GtmResponseModel */
        GtmResponseModel: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["UpsertResultModel"];
            /** @description The unique identifier for the resource */
            id: string;
            /**
             * @description The type of the resource
             * @default GtmResponseModel
             */
            type: string;
        };
        /** @enum {string} */
        InteractionType: "Click" | "Save" | "Send" | "Sign" | "Submit" | "View";
        /** @description Participant model with common properties. */
        ParticipantAttributes: {
            /** @description Company domain */
            companyDomain: string;
            /** @description Company name */
            companyName?: string;
            /** @description Email address */
            email?: string;
            /** @description First name */
            firstName?: string;
            /** @description IP address */
            ipAddress?: string;
            /** @description Last name */
            lastName?: string;
            /** @description Full name */
            name?: string;
            /** @description Unique participant identifier */
            participantId?: string;
            /** @description Phone number */
            phoneNumber?: string;
            /** @description Seniority level */
            seniority?: string;
            /** @description Job title */
            title?: string;
            /** @description ZoomInfo company ID */
            readonly ziCompanyId?: string;
            /** @description ZoomInfo person ID */
            readonly ziPersonId?: string;
        };
        /**
         * @description Role type enumeration.
         * @enum {string}
         */
        RoleType: "feature" | "integration" | "data" | "dataset_detail" | "action" | "intent" | "limit" | "info" | "signal" | "vertical_dataset";
        /** @enum {string} */
        Status: "Completed";
        /** @description Represents an entity that contains records collection. */
        UpsertDataPayload: {
            /** @description The primary data of the document */
            data: components["schemas"]["UpsertRecord"][];
        };
        /** @description Represents a record. that will be created or updated. */
        UpsertRecord: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["GtmModelAttributes"];
            /** @description The unique identifier for the resource */
            id?: string;
            /**
             * @description The type of the resource
             * @default UpsertRecord
             */
            type: string;
        };
        /** @description Response model containing the results of GTM model record upsert operations. */
        UpsertResponse: {
            /** @description The primary data of the document */
            data: components["schemas"]["GtmResponseModel"];
        };
        /** @description API response meta information for upsert operations */
        UpsertResponseMeta: {
            /**
             * Format: int64
             * @description Processing time in milliseconds
             */
            processingTime: number;
            /**
             * Format: int32
             * @description Number of records that failed processing
             */
            recordsFailed: number;
            /**
             * Format: int32
             * @description Number of records processed
             */
            recordsProcessed: number;
            /**
             * Format: int32
             * @description Number of records successfully processed
             */
            recordsSuccessful: number;
            /** @description Response timestamp */
            timestamp: string;
        };
        /** @description UpsertResultModel */
        UpsertResultModel: {
            /** @description processedRecords */
            processedRecords: components["schemas"]["UpsertRecord"][];
            /** @description recordsFailed */
            recordsFailed: number;
            /** @description recordsProcessed */
            recordsProcessed: number;
            /** @description recordsSuccessful */
            recordsSuccessful: number;
        };
        /** @enum {string} */
        Versions: "1.0";
        /** @description Workflow resource model */
        Workflow: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["WorkflowAttributes"];
            /** @description The unique identifier for the resource */
            id: string;
            /**
             * @description The type of the resource
             * @default Workflow
             */
            type: string;
        };
        /** @description Attributes for a workflow in the list response */
        WorkflowAttributes: {
            /** @description Activation status of the workflow */
            active: boolean;
            /**
             * Format: date-time
             * @description Created timestamp
             */
            readonly createdAt: string;
            /**
             * Format: date-time
             * @description Last update timestamp
             */
            readonly lastUpdated: string;
            /** @description Name of the workflow */
            name: string;
            /** @description Whether the workflow can be executed on demand */
            runnableOnDemand: boolean;
        };
        /** @description Workflow execution response model */
        WorkflowExecution: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["WorkflowExecutionAttributes"];
            /** @description The unique identifier for the resource */
            id: string;
            /**
             * @description The type of the resource
             * @default WorkflowExecution
             */
            type: string;
        };
        /** @description Attributes for workflow execution response */
        WorkflowExecutionAttributes: {
            /** @description Current status of the execution */
            status: string;
            /** @description Identifier of the workflow being executed */
            workflowId: string;
        };
        /** @description Response for workflow execution */
        WorkflowExecutionResponse: {
            /** @description The primary data of the document */
            data: components["schemas"]["WorkflowExecution"];
        };
        /** @description Response containing a list of workflows */
        WorkflowsListResponse: {
            /** @description The primary data of the document */
            data: components["schemas"]["Workflow"][];
            /** @description Links related to the primary data */
            links?: components["schemas"]["GetWorkflowsLinks"];
            /** @description Non-standard meta information about the document */
            meta?: components["schemas"]["GetWorkflowsMeta"];
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
    EngagementsController_upsertContentInteractions: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Content interaction engagement data to create or update (supports single or multiple engagements) */
        requestBody: {
            content: {
                "application/vnd.api+json": components["schemas"]["ContentInteractionUpsertRequest"];
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ContentInteractionUpsertResponse"];
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
    EngagementsController_getContentInteractionEngagement: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The unique identifier of the content interaction engagement */
                id: string;
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
                    "application/vnd.api+json": components["schemas"]["ContentInteractionResponse"];
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
    EngagementsController_deleteContentInteractionEngagement: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The unique identifier of the content interaction engagement to delete */
                id: string;
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
    EntitiesController_upsertEntitiesRecords: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The unique identifier of the GTM entity. */
                entityName: components["schemas"]["EntityNames"];
            };
            cookie?: never;
        };
        /** @description Collection of entity records to create or update in the GTM data model */
        requestBody: {
            content: {
                "application/vnd.api+json": components["schemas"]["UpsertDataPayload"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["UpsertResponse"];
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
    EntitlementsController_getEntitlements: {
        parameters: {
            query: {
                /** @description Whether to retrieve admin entitlements, admin entitlements are only available to users with admin privileges, in the format of adm:roleCode, e.g. adm:fea:api. */
                "filter[admin]": boolean;
                /** @description The role type to filter by. */
                "filter[roleType]": components["schemas"]["RoleType"];
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
                    "application/vnd.api+json": components["schemas"]["EntitlementsResponse"];
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
    EntitiesController_getEntitiesList: {
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
                    "application/vnd.api+json": components["schemas"]["GtmEntitiesListResponse"];
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
    EntitiesController_getEntityFields: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The unique identifier of the GTM entity. Use the entityName from the entities metadata endpoint. */
                entityName: components["schemas"]["EntityNames"];
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
                    "application/vnd.api+json": components["schemas"]["GtmEntityFieldsResponse"];
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
    WorkflowsController_getWorkflows: {
        parameters: {
            query?: {
                /** @description Filter by active workflows */
                "filter[active]"?: boolean;
                /** @description Filter by a workflow's name */
                "filter[name]"?: string;
                /** @description Filter by workflows that can be run on demand */
                "filter[runnableOnDemand]"?: boolean;
                /** @description Page number for pagination */
                "page[number]"?: number;
                /** @description Number of items per page */
                "page[size]"?: number;
                /** @description Valid values are name, createdAt, updatedAt. Add minus sign ('-') for descending order */
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
                    "application/vnd.api+json": components["schemas"]["WorkflowsListResponse"];
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
    WorkflowsController_executeWorkflow: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Unique identifier of the workflow to execute */
                id: string;
            };
            cookie?: never;
        };
        /** @description Execution request body */
        requestBody: {
            content: {
                "application/vnd.api+json": components["schemas"]["ExecuteWorkflowRequestBody"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["WorkflowExecutionResponse"];
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
    WorkflowsController_getExecutionStatus: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Unique identifier of the execution */
                id: string;
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
                    "application/vnd.api+json": components["schemas"]["WorkflowExecutionResponse"];
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
