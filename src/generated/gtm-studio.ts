// AUTO-GENERATED from openapi-gtm-studio-v1.yaml (https://docs.zoominfo.com/openapi/openapi-gtm-studio-v1.yaml).
// Regenerate with: npm run codegen
/* eslint-disable */

export interface paths {
    "/studio/v1/audiences": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Audiences
         * @description Retrieves a paginated list of all audiences, with optional filtering and sorting.
         *     Use this endpoint to browse audiences or to find an `audienceId` before operating on rows, columns, or enrichment.
         *     Filter by `type` (`CONTACT` or `COMPANY`) and `searchText` (case-insensitive contains match on audience name).
         *     Use `sort` to order results by `name`, `createdAt`, `updatedAt`, or `recordCount`; prefix with `-` for descending order (default: `-updatedAt`).
         *     Use `page[number]` and `page[size]` (default `25`, max `100`) to paginate.
         *     Returns `200` with a paginated array of audience resources and navigation links.
         *     Returns `400` if filter or sort parameters are invalid.
         */
        get: operations["Audiences_listAudiences"];
        put?: never;
        /**
         * Create New Audience
         * @description Create a new Go-to-Marketing (GTM) Studio audience. An audience is a collection of contacts or companies
         *     that can be organized, filtered, and managed for marketing and sales purposes. You can use audiences to build
         *     and maintain business-critical datasets or enrich customer lists from trade shows and conferences.
         *
         *     You can define the audience name, audience type (`CONTACT` or `COMPANY`), and the source of the audience.
         *     Currently, only `CUSTOM` audience sources are supported meaning the audience has no linked source dataset.
         *     Requests to create audiences can optionally include definitions for columns to be added to the audience.
         *     If no column definitions are provided, the audience will be created without any columns, and columns may
         *     be added in the future using the [Create New Columns](ref:columns_addcolumns) endpoint.
         *
         *     Folders can be used to organize and group similar audiences or audiences that will be used for similar purposes.
         *     Folders can be created using the [Create New Folder](ref:folders_createfolder) endpoint, and the id can be provided
         *     in the `folderId` field to create the audience within that folder. You can use the [List Folders](ref:folders_listfolders)
         *     endpoint to get a list of existing folders to place the audience into. If a `folderId` is not provided, the audience
         *     creation process will create a new folder with the same name as the audience.
         *
         *     When `autoMatchCriteria` is `true`, the system uses AI to automatically infer match criteria
         *     mappings for columns — for example, mapping an "Email" column to `CONTACT_EMAIL`.
         *
         *     Returns `201 Created` with the audience resource.
         *     Returns `400` if required fields are missing or `type` is invalid.
         */
        post: operations["Audiences_createAudience"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/studio/v1/audiences/{audienceId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Fetch Audience
         * @description Retrieves the full state of a single audience by its `audienceId`.
         *     Returns all audience attributes — name, type, source origin, current `recordCount`, folder location, creation and update timestamps, and the complete column structure with all column properties.
         *     Use this endpoint to check audience configuration before writing rows or before running enrichment.
         *     Returns `200` with the audience resource.
         *     Returns `404` if no audience matches the provided `audienceId`.
         */
        get: operations["Audiences_getAudience"];
        put?: never;
        post?: never;
        /**
         * Delete Audience
         * @description Permanently deletes an audience and all associated data — rows, column definitions, and enrichment history.
         *     This action is irreversible; the audience and all its data cannot be recovered after deletion.
         *     Use this endpoint only when retiring an audience entirely; to remove specific records, use the Delete Rows endpoint instead.
         *     Returns `204 No Content` on success.
         *     Returns `404` if no audience matches the provided `audienceId`.
         */
        delete: operations["Audiences_deleteAudience"];
        options?: never;
        head?: never;
        /**
         * Update Audience
         * @description Updates one or more metadata attributes of an existing audience without requiring a full replacement.
         *     Supported fields: `name`, `folderId`, `description`, and `notes`. Only fields present in the request body are modified; all other attributes remain unchanged.
         *     Use this endpoint to rename an audience, move it to a different folder, or update its description or notes.
         *     Returns `200` with the updated audience resource.
         *     Returns `400` if the request body is malformed or contains unsupported fields.
         *     Returns `404` if no audience matches the provided `audienceId`.
         */
        patch: operations["Audiences_patchAudience"];
        trace?: never;
    };
    "/studio/v1/audiences/{audienceId}/actions/enrich": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Enrich Audience
         * @description Initiates an asynchronous enrichment job that appends ZoomInfo intelligence data to rows in the specified audience.
         *
         *     The request body must include a `scope` field specifying the enrichment target:
         *     - `AUDIENCE`: Enriches all rows in the audience. The `rows` and `columns` fields are optional.
         *     - `ROW`: Enriches specific rows by `rowId`. The `rows` field is required and must contain at least one element. The `columns` field is optional.
         *
         *     This operation is asynchronous. Returns `202 Accepted` with an `EnrichJob` resource containing the job id.
         *     Poll the [Get Async Job Status](ref:jobs_getAsyncJobStatus) endpoint at `GET /v1/audiences/{audienceId}/jobs/{jobId}` using that job id to monitor progress and detect `SUCCEEDED`, `PARTIALLY_SUCCEEDED`, or `FAILED` terminal states.
         *
         *     Returns `202 Accepted` on successful job creation.
         *     Returns `204 No Content` if no rows match the provided scope.
         *     Returns `400` for malformed requests, missing required fields, or invalid scope combinations.
         *     Returns `402` if enrichment cannot be processed for the account.
         *     Returns `404` if no audience matches the provided `audienceId`.
         */
        post: operations["Audiences_enrichAudience"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/studio/v1/audiences/{audienceId}/actions/match-criteria": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Upsert Column Match Criteria
         * @description Upserts match criteria for the audience's designated match column (the column used for enrichment matching).
         *     Match criteria define how audience column values are mapped to ZoomInfo attributes (for example, mapping an "Email" column to `CONTACT_EMAIL`) for enrichment resolution.
         *
         *     If a request body is provided, the supplied match criteria are applied directly — each entry maps an audience `columnId` to a ZoomInfo attribute field.
         *     If the request body is omitted or `matchCriteria` is not provided, the system attempts to auto-map match criteria using AI.
         *     If the match column does not exist, it will be created automatically.
         *
         *     Existing match criteria on the audience's match column are replaced by the new values.
         *     Returns `200` with the updated match column resource.
         *     Returns `400` if a `columnId` does not exist in the audience or a `mappedTo` value is invalid.
         *     Returns `404` if no audience matches the provided `audienceId`.
         */
        post: operations["Audiences_upsertMatchCriteria"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/studio/v1/audiences/{audienceId}/columns/{columnId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /**
         * Delete Column
         * @description Permanently removes a specific column from an audience, including all cell values stored in that column across every row.
         *     Only columns where `isDeletable` is `true` can be removed using this endpoint; attempting to delete a non-deletable column returns `400`.
         *     This action is irreversible — all data in the deleted column cannot be recovered.
         *     Returns `204 No Content` on successful deletion.
         *     Returns `400` if the column is not deletable.
         *     Returns `404` if the `audienceId` or `columnId` does not exist.
         */
        delete: operations["Columns_deleteColumn"];
        options?: never;
        head?: never;
        /**
         * Update Column
         * @description Updates a specific column's definition within an audience.
         *     Supported fields: `name`, `isFrozen`, and `isHidden`. Only fields present in the request body are modified.
         *     Use this endpoint to rename a column or toggle its display state.
         *     Returns `200` with the updated column resource.
         *     Returns `400` if the update is invalid or the column is not editable (`isEditable: false`).
         *     Returns `404` if the `audienceId` or `columnId` does not exist.
         */
        patch: operations["Columns_patchColumn"];
        trace?: never;
    };
    "/studio/v1/audiences/{audienceId}/columns/actions/bulk/create": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create New Columns
         * @description Adds one or more columns to an existing audience in a single bulk operation.
         *     Columns define the data fields available for each row in the audience; each column has a `name`, a `dataType` (e.g., `TEXT`, `INTEGER`, `EMAIL`, `DATE`, `BOOLEAN`), and behavior flags (`isFrozen`, `isHidden`).
         *
         *     Supported column types:
         *     - `CUSTOM` (`columnType: CUSTOM`) - Static user-provided values
         *     - `FORMULA` (`columnType: FORMULA`) - Values generated from a formula prompt
         *     - `AI` (`columnType: AI`) - AI-generated values with optional `tool` and `dataDependencies` context
         *     - `ZOOMINFO_MATCH` (`columnType: ZOOMINFO_MATCH`) - Enrichment-driven values (configure via Upsert Column Match Criteria endpoint)
         *
         *     Returns `201 Created` with the full array of created column resources including system-assigned `columnId` values and read-only flags.
         *     Returns `400` if required fields are missing or `dataType` is invalid.
         *     Returns `404` if no audience matches the provided `audienceId`.
         */
        post: operations["Columns_addColumns"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/studio/v1/audiences/{audienceId}/columns/data-dependencies/{tool}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Column Data Dependencies
         * @description Returns the available data dependencies for AI-powered columns so clients can build valid prompts and grounding context before creating the column.
         *     This endpoint solves data dependency discovery for AI workflows by listing which audience columns and knowledge sources can be used as context for the selected AI column type.
         *     Use this to discover valid context sources, validate that selected context is supported, and choose relevant data dependencies that improve AI-generated output quality.
         *     Response entries include data dependency identifiers, display names, data types, and whether the source comes from an audience column (`COLUMN`) or from a knowledge source (`KNOWLEDGE_BASE`).
         *     Returns `200 OK` with the list of supported data dependencies for the requested `tool`.
         *     Returns `400` if `tool` is invalid or not supported for data dependency discovery.
         *     Returns `404` if no audience matches the provided `audienceId`.
         */
        get: operations["Columns_getSupportedDataDependencies"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/studio/v1/audiences/{audienceId}/filter-metadata": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Audience Filter Metadata
         * @description Returns the available filter operators for each column in the specified audience.
         *     Use this endpoint before building a filter-based row query to discover which operators — such as `EQUALS`, `CONTAINS`, `NOT_EQUALS` are supported for each column.
         *     The response includes per-operator configuration: whether multiple values are supported (`isMultipleSupported`), the maximum number of allowed values (`valueCountLimit`), and the minimum character requirement per value for string-based operators (`minCharLimit`).
         *     Use this metadata to validate filter inputs client-side before sending a List Rows request.
         *     Returns `200` with a list of `FilterMetadata` objects keyed by `columnId`.
         *     Returns `404` if no audience matches the provided `audienceId`.
         */
        get: operations["Audiences_getAudienceFilterMetadata"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/studio/v1/audiences/{audienceId}/jobs/{jobId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Job Status
         * @description Returns the current status and progress of any previously initiated asynchronous job for an audience.
         *     Covers all job types: `AUDIENCE_CREATE`, `AUDIENCE_ENRICH`, and `ROW_UPSERT`.
         *     Provide the `audienceId` and `jobId` returned by the originating operation.
         *     The response includes the job status — one of `SCHEDULED` (queued), `RUNNING` (actively processing), `SUCCEEDED` (finished successfully), `PARTIALLY_SUCCEEDED` (completed with some failures), `FAILED` (terminated with errors), or `CANCELLED` — and a `percentProgress` value.
         *     Returns `200` with the job status resource.
         *     Returns `404` if the `audienceId` or `jobId` does not exist.
         */
        get: operations["Audiences_getJobStatus"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/studio/v1/audiences/{audienceId}/rows/{rowId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Row by ID
         * @description Retrieves a single row from an audience by its `rowId`.
         *     Returns the full row record including all cell values and their `CellState` — `RESULT` (value present), `BLANK` (no value set), `LOADING` (enrichment in progress), `ERROR` (enrichment failed for this cell), or `NO_RESULT` (enrichment completed but returned no match).
         *     To limit the response to specific columns, pass one or more `columnId` values in the `columns` query parameter; if omitted, all columns are returned.
         *     Use this endpoint to inspect individual records, verify enrichment results, or retrieve a row before an update operation.
         *     Returns `200` with the row resource.
         *     Returns `404` if the `audienceId` or `rowId` does not exist.
         */
        get: operations["Rows_getRowById"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/studio/v1/audiences/{audienceId}/rows/actions/bulk/delete": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /**
         * Delete Rows
         * @description Permanently removes multiple rows from an audience in a single bulk operation.
         *     Provide an array of `rowId` values in the request body. All row data and associated cell values are deleted and cannot be recovered.
         *     Use this endpoint to clean audiences of outdated, duplicate, or irrelevant records. To delete the entire audience, use the Delete Audience endpoint instead.
         *     This operation is asynchronous. Returns `202 Accepted` with a `jobId`. Poll the [Get Async Job Status](ref:jobs_getAsyncJobStatus) endpoint at `GET /v1/audiences/{audienceId}/jobs/{jobId}` using that `jobId` to confirm all rows have been removed.
         *     Returns `400` if the request body is malformed or `rowId` values are invalid.
         */
        delete: operations["Rows_deleteRows"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/studio/v1/audiences/{audienceId}/rows/actions/bulk/upsert": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Bulk Upsert Rows
         * @description Creates and/or updates multiple rows in an audience in a single bulk operation.
         *     Each entry in the request body includes cell values keyed by `columnId`. Including a `rowId` updates that existing row; omitting `rowId` creates a new row.
         *     Both creates and updates can be combined freely in the same request.
         *     By default, `runEnrichment` is `false` — enrichment does not run automatically; set it to `true` to trigger enrichment on affected rows after the upsert.
         *     To limit enrichment to specific columns, provide `columnId` values in the `columns` query parameter; if omitted, all enrichable columns are processed.
         *     Returns `200` with `data[]` row resources — each entry includes `id`, `type`, and `attributes.values` with full cell details (`columnId`, `value`, `state`, and `errorDetails` when applicable).
         *     Returns `400` if the request body is malformed or `columnId` references are invalid.
         */
        post: operations["Rows_upsertRows"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/studio/v1/audiences/{audienceId}/rows/actions/search": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * List Rows
         * @description Retrieves rows from an audience with support for filtering, sorting, and pagination.
         *     Rows are individual contact or company records; each row contains cells keyed by `columnId`, where each cell reports its `value` and a `CellState` — `RESULT` (value present), `BLANK` (no value set), `LOADING` (enrichment in progress), `ERROR` (enrichment failed for this cell), or `NO_RESULT` (enrichment returned no match).
         *     Provide a flat `filters` array in the request body to narrow results by column values and conditions.
         *     Use `page[number]` and `page[size]` (default `25`, max `100`) to paginate through results.
         *     Use the `sort` query parameter with a `columnId` value and a `-` prefix for descending order.
         *     Use the `columns` query parameter to limit which columns are returned per row.
         *     Returns `200` with a paginated array of rows and navigation links.
         *     Returns `400` if filter criteria are malformed or column references are invalid.
         */
        post: operations["Rows_listRows"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/studio/v1/folders": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Folders
         * @description Retrieves a paginated list of all folders, with optional filtering and sorting.
         *     Use this endpoint to browse the folder structure or to find a `folderId` before creating or moving an audience.
         *     Filter by `createdById`, `updatedById`, `searchText` (partial name match), or date ranges (`createdAfter`, `createdBefore`, `updatedAfter`, `updatedBefore`).
         *     Use `sort` to order results by `name`, `createdAt`, `updatedAt`, `audienceCount`, or `recentlyViewed`; prefix with `-` for descending order (default: `-updatedAt`).
         *     Use `page[number]` and `page[size]` (default `25`, max `100`) to paginate.
         *     Returns `200` with a paginated array of folder resources including `audiences` (list of audience IDs in each folder) and navigation links.
         *     Returns `400` if filter or sort parameters are invalid.
         */
        get: operations["Folders_listFolders"];
        put?: never;
        /**
         * Create New Folder
         * @description Creates a new folder for organizing audiences in GTM Studio.
         *     Folders group related audiences together, making it easier to navigate and manage large collections — for example, grouping by campaign, region, or team.
         *     Specify `name` and optionally set `starred` to `true` to mark the folder for quick access. The folder is created empty; audiences are assigned to it via the Create Audience or Update Audience endpoints using `folderId`.
         *     Returns `201 Created` with the full folder resource including the system-assigned `folderId` and creation metadata.
         *     Returns `400` if required fields are missing or invalid.
         */
        post: operations["Folders_createFolder"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/studio/v1/folders/{folderId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Specific Folder
         * @description Retrieves the full state of a single folder by its `folderId`.
         *     Returns all folder attributes — name, starred status, description, notes, creation and update timestamps, and the list of `audienceId` values contained in the folder.
         *     Use this endpoint to inspect a folder's contents before operating on its audiences, or to verify folder state after an update.
         *     Returns `200` with the folder resource.
         *     Returns `404` if no folder matches the provided `folderId`.
         */
        get: operations["Folders_getFolderById"];
        put?: never;
        post?: never;
        /**
         * Delete Specific Folder
         * @description Permanently deletes a folder from GTM Studio.
         *     Deleting a folder removes the audiences it contained as well.
         *     This action is irreversible.
         *     Returns `204 No Content` on success.
         *     Returns `404` if no folder matches the provided `folderId`.
         */
        delete: operations["Folders_deleteFolder"];
        options?: never;
        head?: never;
        /**
         * Update Folder
         * @description Updates one or more attributes of an existing folder without requiring a full replacement.
         *     Supported fields: `name`, `starred`, `description`, and `notes`. Only fields present in the request body are modified; all other attributes remain unchanged.
         *     Use this endpoint to rename a folder, star or unstar it, or update its description and notes.
         *     Returns `200` with the updated folder resource.
         *     Returns `404` if no folder matches the provided `folderId`.
         */
        patch: operations["Folders_updateFolder"];
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /** @description Column model representing an AI column — values are generated by AI. The optional `tool` determines which AI capability is used. */
        AiColumn: {
            /**
             * @description Column type indicating the source and type of this column. (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            columnType: "AI";
            /** @description List of data dependencies that provide additional context to the AI model for this column. Each data dependency references an existing audience column or a knowledge base attribute used to guide generation. */
            dataDependencies?: components["schemas"]["ColumnContextInput"][];
            /** @description Data type of the column. Optional for AI columns; required for static and ZoomInfo match columns. */
            dataType?: components["schemas"]["ColumnDataType"];
            /** @description Whether this column can be deleted via the Delete Column endpoint. Read-only; set by the system. */
            readonly isDeletable: boolean;
            /** @description Whether this column's value can be updated via the Update rows endpoint. Read-only; set by the system. */
            readonly isEditable: boolean;
            /** @description Whether this column's values can be included in data exports. Read-only; set by the system. */
            readonly isExportable: boolean;
            /** @description Whether this column supports row filtering via the filterCriteria. Read-only; set by the system. */
            readonly isFilterable: boolean;
            /**
             * @description Whether this column is pinned (frozen) to the left in grid views. Optional; defaults to `false`.
             * @default false
             */
            isFrozen: boolean;
            /**
             * @description Whether this column is hidden from grid views. Optional; defaults to `false`.
             * @default false
             */
            isHidden: boolean;
            /** @description Whether this column supports row sorting via the List Rows endpoint. Read-only; set by the system. */
            readonly isSortable: boolean;
            /** @description Display name of the column shown in the UI and returned in row responses. */
            name: string;
            /** @description The prompt provided to the AI model to generate values for this column. The prompt can include instructions and guidance on the expected analysis, generation behavior, and output format. */
            prompt: string;
            /** @description Optional AI tool used to process this AI column. If omitted, the default AI workflow is used. */
            tool?: components["schemas"]["AiTool"];
        };
        /** @description Base attributes shared by AI-powered columns. The `prompt` guides how the AI should generate values for the column. */
        AiColumnBase: {
            /**
             * @description Column type indicating the source and type of this column.
             * @enum {string}
             */
            columnType: "AI";
            /** @description Data type of the column. Optional for AI columns; required for static and ZoomInfo match columns. */
            dataType?: components["schemas"]["ColumnDataType"];
            /** @description Whether this column can be deleted via the Delete Column endpoint. Read-only; set by the system. */
            readonly isDeletable: boolean;
            /** @description Whether this column's value can be updated via the Update rows endpoint. Read-only; set by the system. */
            readonly isEditable: boolean;
            /** @description Whether this column's values can be included in data exports. Read-only; set by the system. */
            readonly isExportable: boolean;
            /** @description Whether this column supports row filtering via the filterCriteria. Read-only; set by the system. */
            readonly isFilterable: boolean;
            /**
             * @description Whether this column is pinned (frozen) to the left in grid views. Optional; defaults to `false`.
             * @default false
             */
            isFrozen: boolean;
            /**
             * @description Whether this column is hidden from grid views. Optional; defaults to `false`.
             * @default false
             */
            isHidden: boolean;
            /** @description Whether this column supports row sorting via the List Rows endpoint. Read-only; set by the system. */
            readonly isSortable: boolean;
            /** @description Display name of the column shown in the UI and returned in row responses. */
            name: string;
            /** @description The prompt provided to the AI model to generate values for this column. The prompt can include instructions and guidance on the expected analysis, generation behavior, and output format. */
            prompt: string;
            /** @description Optional AI tool used to process this AI column. If omitted, the default AI workflow is used. */
            tool?: components["schemas"]["AiTool"];
        };
        /**
         * @description Defines AI tool names used by AI columns and data dependency discovery.
         * @enum {string}
         */
        AiTool: "AI_DATA_ANALYSIS" | "AI_WEB_RESEARCH" | "AI_CONVERSATION_INTELLIGENCE" | "AI_EMAILER";
        /** @description Audience request resource. */
        Audience: {
            /** @description The attributes defining the resource */
            attributes: Omit<components["schemas"]["AudienceAttributes"], "origin">;
            /**
             * @description The type of the resource
             * @default Audience
             */
            type: string;
        };
        AudienceAttributes: components["schemas"]["CustomAudienceAttributes"];
        /** @description Audience model representing audience details. */
        AudienceAttributesBase: {
            /** @description Optional free-text description of the audience's purpose or contents. */
            description?: string;
            /** @description UUID of the folder that contains this audience. If omitted on create, a new folder matching the audience name is created automatically. */
            folderId?: string;
            /** @description Display name of the audience. */
            name: string;
            /** @description Optional notes about the audience for internal reference. */
            notes?: string;
            /**
             * Format: int32
             * @description Total number of rows currently in the audience. Read-only; updated automatically as rows are added or removed.
             */
            readonly recordCount: number;
            /** @description Record type for this audience. `CONTACT` for person-level records; `COMPANY` for account-level records. Set at creation and cannot be changed. */
            type: components["schemas"]["AudienceType"];
        };
        /** @description JSON API model for Audience enrichment request. */
        AudienceEnrichmentJsonApiModel: {
            /** @description The primary data of the document */
            data: components["schemas"]["EnrichAudience"];
        };
        /** @description Audience filter metadata request resource. */
        AudienceFilterMetadata: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["FilterMetadataAttributes"];
            /** @description The unique identifier for the resource */
            id: string;
            /**
             * @description The type of the resource
             * @default AudienceFilterMetadata
             */
            type: string;
        };
        /** @description JSON API model for Audience filter metadata request. */
        AudienceFilterMetadataJsonApiModel: {
            /** @description The primary data of the document */
            data: components["schemas"]["AudienceFilterMetadata"];
        };
        /** @description JSON API model for Audience. */
        AudienceJsonApiModel: {
            /** @description The primary data of the document */
            data: components["schemas"]["Audience"];
        };
        /** @description Metadata for Audience model. */
        AudienceMeta: {
            /**
             * Format: date-time
             * @description The timestamp when the resource was created
             */
            readonly createdAt: string;
            /**
             * Format: uint32
             * @description Id of the user who created the resource
             */
            readonly createdById: number;
            /** @description Name of the user who created the resource */
            readonly createdByName: string;
            /**
             * Format: date-time
             * @description The timestamp when the resource was last updated
             */
            readonly updatedAt: string;
            /**
             * Format: uint32
             * @description Id of the user who last updated the resource
             */
            readonly updatedById: number;
            /** @description Name of the user who last updated the resource */
            readonly updatedByName: string;
        };
        /** @description JSON API model for Audience list. */
        AudiencesJsonApiList: {
            /** @description The primary data of the document */
            data: components["schemas"]["ReadAudience"][];
            /** @description Links related to the primary data */
            links?: components["schemas"]["AudiencesPagingLinks"];
            /** @description Non-standard meta information about the document */
            meta?: components["schemas"]["Pagination"];
        };
        /** @description Paging links for Audience list. */
        AudiencesPagingLinks: {
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
        /**
         * @description Determines the record type the audience holds. Set at creation and cannot be changed.
         * @enum {string}
         */
        AudienceType: "CONTACT" | "COMPANY";
        /** @description JSON API model for Audience. */
        AudienceUpdateJsonApiModel: {
            /** @description The primary data of the document */
            data: components["schemas"]["UpdateAudience"];
        };
        /** @description Defines the data and processing state for a single cell within a row. */
        CellDetails: {
            /** @description The `columnId` identifying which column this cell belongs to. */
            columnId: string;
            /** @description Populated only when `state` is `ERROR`. Contains the error reason and whether re-running enrichment is expected to succeed. */
            readonly errorDetails?: components["schemas"]["CellErrorDetails"];
            /** @description Processing state of this cell. One of `RESULT`, `BLANK`, `LOADING`, `ERROR`, or `NO_RESULT`. Read-only. */
            readonly state: components["schemas"]["CellState"];
            /** @description The cell's current value. Type must match the column's `dataType`. Provide on create/update; returned on read. This could be of datatypes `string`, `number`, `boolean`, `string array`, `numeric array`, `JsonString(JsonObject, JsonArrayOfObjects)` depending on the column definition */
            value: string | number | boolean | components["schemas"]["StringArrayItem"] | components["schemas"]["NumericArrayItem"];
        };
        /** @description Describes an error that occurred during enrichment for a specific cell. */
        CellErrorDetails: {
            /** @description Full explanation of the error — what went wrong and why. */
            description: string;
            /** @description Whether re-running enrichment for this cell is expected to succeed. If `false`, the error is permanent until the underlying data issue is resolved. */
            retryable: boolean;
            /** @description Short human-readable label for the error. */
            summary: string;
        };
        /**
         * @description Processing state of a cell value within a row. Indicates whether enrichment has run and what the outcome was.
         * @enum {string}
         */
        CellState: "RESULT" | "BLANK" | "LOADING" | "ERROR" | "NO_RESULT";
        /** @description Column Create request resource. */
        Column: {
            /** @description The attributes defining the resource */
            attributes: Omit<components["schemas"]["ColumnAttributes"], "columnType">;
            /**
             * @description The type of the resource
             * @default Column
             */
            type: string;
        };
        /**
         * @description CUSTOM - Column model representing static column in an audience.
         *     FORMULA - Column model representing a formula-based column where values are generated from a prompt.
         *     AI - Column model representing an AI-powered column where values are generated using a prompt, optional tool selection, and optional data dependency context.
         *     ZOOMINFO_MATCH - Column model representing a ZoomInfo match column — values are populated by matching rows against ZoomInfo's database using defined criteria. This Column accepts only ZI_COMPANY_ID or ZI_CONTACT_ID as data type since these columns are used for matching against ZoomInfo data and these are the only supported data types for matching.
         */
        ColumnAttributes: components["schemas"]["StaticColumn"] | components["schemas"]["FormulaColumn"] | components["schemas"]["ZoominfoMatchColumn"] | components["schemas"]["AiColumn"];
        /**
         * @description Only Some columns can be created while creating an audience, so we are having a separate model to represent it
         *     For example ZoomInfo Match columns are created based on the match criteria defined by the user based on other columns, Without the other columns we cannot create the match columns,
         *     so we will not have the option to create match columns while creating an audience, but only after the audience is created and other columns are created then only we can create the match columns,
         *     that's why we have a separate model for column creation
         */
        ColumnAttributesForAudienceCreate: components["schemas"]["StaticColumn"];
        /** @description Defines a context input for an AI column, referencing either an existing column in the audience or a knowledge base attribute. This context is used to inform the AI's analysis or generation when producing values for the column. */
        ColumnContextInput: {
            /** @description The `columnId` of an existing column in the audience whose values should be included as context for the AI when generating values for the column, OR the `id` of a knowledge base attribute configured. */
            id: string;
            /** @description The type of context input. Can be either an existing column (`COLUMN`) or a knowledge base (`KNOWLEDGE_BASE`). */
            type: components["schemas"]["ColumnInputType"];
        };
        /** @description Defines a supported data dependency for a selected AI column type. */
        ColumnDataDependency: {
            /** @description The data type of the data dependency */
            dataType: components["schemas"]["ColumnDataType"];
            /** @description The description of the data dependency */
            description?: string;
            /** @description The unique identifier for the data dependency */
            id: string;
            /** @description The name of the data dependency */
            name: string;
            /** @description The source category for this context input. `COLUMN` means an existing audience column; `KNOWLEDGE_BASE` means an external knowledge source available to AI. */
            type: components["schemas"]["ColumnInputType"];
        };
        /** @description Resource model for list of column data dependencies supported for a specific column type. */
        ColumnDataDependencyList: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["ColumnDataDependency"][];
            /**
             * @description The type of the resource
             * @default ColumnDataDependencyList
             */
            type: string;
        };
        /** @description JSON API model for list of column data dependencies supported for a specific column type. */
        ColumnDataDependencyListModel: {
            /** @description The primary data of the document */
            data: components["schemas"]["ColumnDataDependencyList"];
        };
        /** @enum {string} */
        ColumnDataType: "TEXT" | "BOOLEAN" | "DATE" | "STRING_LIST" | "NUMBER_LIST" | "EMAIL_LIST" | "PHONE_LIST" | "PHONE" | "EMAIL" | "LARGE_TEXT" | "INTEGER" | "DECIMAL" | "OBJECT" | "URL" | "URL_LIST" | "CHECKBOX" | "PERCENT" | "OPAQUE_IDENTIFIER" | "ORDINAL_IDENTIFIER" | "REFERENCE" | "PICKLIST" | "MULTIPICKLIST" | "CURRENCY" | "ZI_CONTACT_ID" | "ZI_COMPANY_ID" | "MARKUP";
        /**
         * @description Defines the type of context input used for AI column generation.
         * @enum {string}
         */
        ColumnInputType: "COLUMN" | "KNOWLEDGE_BASE";
        /** @description JSON API model for create Column. */
        ColumnJsonApiModel: {
            /** @description The primary data of the document */
            data: components["schemas"]["Column"][];
        };
        /** @description Metadata for Column model. */
        ColumnMeta: {
            /**
             * Format: date-time
             * @description The timestamp when the resource was created
             */
            readonly createdAt: string;
            /**
             * Format: uint32
             * @description Id of the user who created the resource
             */
            readonly createdById: number;
            /** @description Name of the user who created the resource */
            readonly createdByName: string;
            /**
             * Format: date-time
             * @description The timestamp when the resource was last updated
             */
            readonly updatedAt: string;
            /**
             * Format: uint32
             * @description Id of the user who last updated the resource
             */
            readonly updatedById: number;
            /** @description Name of the user who last updated the resource */
            readonly updatedByName: string;
        };
        /** @enum {string} */
        ColumnType: "CUSTOM" | "CRM_SEARCH" | "CRM" | "CSV" | "FORMULA" | "ACCOUNT_AI" | "CONNECTORS" | "ROUTING" | "SNOWFLAKE" | "AI" | "ZOOMINFO_COPILOT_SIGNALS" | "ZOOMINFO_AUDIENCE" | "ZOOMINFO_JOB_POSTINGS" | "ZOOMINFO_WEBSIGHTS" | "ZOOMINFO_CONTACT_CHANGES" | "ZOOMINFO_TECHNOLOGIES" | "ZOOMINFO_INTENT" | "ZOOMINFO_SCOOPS" | "ZOOMINFO_COMPANY" | "ZOOMINFO_CONTACT" | "ZOOMINFO_CUSTOM" | "ZOOMINFO_MATCH" | "ZOOMINFO_CONTACT_SEARCH" | "SIGNALS_AUDIENCE_DEFAULT" | "JSON_PARSER" | "REFERENCE_MAPPER" | "AUDIENCE_LOOKUP" | "GRAPHQL_AUDIENCE_DEFAULT" | "GRAPHQL" | "ACCOUNT_LOOK_ALIKE" | "CONTACT_LOOK_ALIKE" | "ZOOMINFO_FEDERATED_SEARCH";
        /** @description JSON API model for Column update. */
        ColumnUpdateJsonApiModel: {
            /** @description The primary data of the document */
            data?: components["schemas"]["UpdateColumn"];
        };
        /** @description Audience model representing audience details. */
        CreateAudienceAttributes: {
            /** @description The Columns in the audience */
            columns?: components["schemas"]["CreateColumnDuringAudienceCreation"][];
            /** @description Optional free-text description of the audience's purpose or contents. */
            description?: string;
            /** @description UUID of the folder that contains this audience. If omitted on create, a new folder matching the audience name is created automatically. */
            folderId?: string;
            /** @description Display name of the audience. */
            name: string;
            /** @description Optional notes about the audience for internal reference. */
            notes?: string;
            /**
             * Format: int32
             * @description Total number of rows currently in the audience. Read-only; updated automatically as rows are added or removed.
             */
            readonly recordCount: number;
            /** @description Record type for this audience. `CONTACT` for person-level records; `COMPANY` for account-level records. Set at creation and cannot be changed. */
            type: components["schemas"]["AudienceType"];
        };
        /** @description Audience response resource returned on creation. */
        CreateAudienceResponse: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["CreateAudienceResponseAttributes"];
            /** @description The unique identifier for the resource */
            id: string;
            /** @description Non-standard meta information about the resource */
            readonly meta?: components["schemas"]["AudienceMeta"];
            /**
             * @description The type of the resource
             * @default Audience
             */
            type: string;
        };
        /** @description Audience attributes returned upon creation */
        CreateAudienceResponseAttributes: {
            /** @description The Columns in the audience */
            readonly columns?: components["schemas"]["ReadColumn"][];
            /** @description Optional free-text description of the audience's purpose or contents. */
            description?: string;
            /** @description UUID of the folder that contains this audience. If omitted on create, a new folder matching the audience name is created automatically. */
            folderId?: string;
            /** @description Display name of the folder that contains this audience. */
            readonly folderName?: string;
            /** @description Display name of the audience. */
            name: string;
            /** @description Optional notes about the audience for internal reference. */
            notes?: string;
            /** @description The origin of the audience source */
            readonly origin: components["schemas"]["SourceOrigin"];
            /**
             * Format: int32
             * @description Total number of rows currently in the audience. Read-only; updated automatically as rows are added or removed.
             */
            readonly recordCount: number;
            /** @description Record type for this audience. `CONTACT` for person-level records; `COMPANY` for account-level records. Set at creation and cannot be changed. */
            type: components["schemas"]["AudienceType"];
        };
        /** @description JSON API model for the Create Audience response. */
        CreateAudienceResponseJsonApiModel: {
            /** @description The primary data of the document */
            data: components["schemas"]["CreateAudienceResponse"];
        };
        /** @description Column Create request resource model during audience creation. This model only includes attributes that are allowed during the creation of an audience, eg. Excludes ZoomInfo Match columns since they depend on other columns to be created first. */
        CreateColumnDuringAudienceCreation: {
            /** @description The attributes defining the resource */
            attributes: Omit<components["schemas"]["ColumnAttributesForAudienceCreate"], "columnType">;
            /** @description The unique identifier for the resource */
            id: string;
            /** @description Non-standard meta information about the resource */
            meta?: components["schemas"]["ColumnMeta"];
            /**
             * @description The type of the resource
             * @default Column
             */
            type: string;
        };
        /** @description Column Create request resource model during audience creation. This model only includes attributes that are allowed during the creation of an audience, eg. Excludes ZoomInfo Match columns since they depend on other columns to be created first. */
        CreateColumnDuringAudienceCreationCreateItem: {
            /** @description The attributes defining the resource */
            attributes: Omit<components["schemas"]["ColumnAttributesForAudienceCreate"], "columnType">;
            /** @description Non-standard meta information about the resource */
            meta?: components["schemas"]["ColumnMeta"];
            /**
             * @description The type of the resource
             * @default Column
             */
            type: string;
        };
        /** @description Audience model representing audience details. */
        CustomAudienceAttributes: {
            /** @description The Columns in the audience */
            columns?: components["schemas"]["CreateColumnDuringAudienceCreationCreateItem"][];
            /** @description Optional free-text description of the audience's purpose or contents. */
            description?: string;
            /** @description UUID of the folder that contains this audience. If omitted on create, a new folder matching the audience name is created automatically. */
            folderId?: string;
            /** @description Display name of the audience. */
            name: string;
            /** @description Optional notes about the audience for internal reference. */
            notes?: string;
            /**
             * @description The origin of the audience source (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            origin: "CUSTOM";
            /** @description Record type for this audience. `CONTACT` for person-level records; `COMPANY` for account-level records. Set at creation and cannot be changed. */
            type: components["schemas"]["AudienceType"];
        };
        /** @description Deleting Rows Request Models */
        DeleteRowJsonApiModel: {
            /** @description The primary data of the document */
            data: components["schemas"]["RowIdentifier"][];
        };
        /** @description Audience enrichment request resource. */
        EnrichAudience: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["EnrichAudienceAttributes"];
            /**
             * @description The type of the resource
             * @default AudienceEnrichment
             */
            type: string;
        };
        /**
         * @description Defines the scope and targets for an enrichment operation.
         *     - If `scope` is `AUDIENCE`, enriches all rows; `rows` and `columns` are optional.
         *     - If `scope` is `ROW`, enriches specific rows; `rows` must be provided with at least one element. `columns` is optional.
         */
        EnrichAudienceAttributes: {
            /** @description List of `columnId` values to enrich for enrichment operations. Optional and can be provided for any scope value. */
            columns?: string[];
            /** @description List of `rowId` values to enrich. Required if `scope` is `ROW`; must contain at least one element. Ignored if `scope` is `AUDIENCE`. */
            rows?: string[];
            /** @description The scope of the enrichment operation. */
            scope: components["schemas"]["EnrichmentScope"];
        };
        /** @description Enrich async job response resource. */
        EnrichJob: {
            /** @description The unique identifier of the resource */
            id: string;
            /**
             * @description The type identifier of the resource
             * @default EnrichJob
             */
            type: string;
        };
        /** @description JSON API model for Enrich job response. */
        EnrichJobJsonApiModel: {
            /** @description The primary data of the document */
            data: components["schemas"]["EnrichJob"];
        };
        /**
         * @description Specifies the scope of enrichment operation: `AUDIENCE` enriches all rows, `ROW` enriches specific rows by ID.
         * @enum {string}
         */
        EnrichmentScope: "AUDIENCE" | "ROW";
        /** @description Filter metadata for a single column — lists which operators are valid and their constraints. */
        FilterMetadata: {
            /** @description `columnId` for which the filter metadata applies. This corresponds to the `columnId` values returned in audience details and used in filter criteria for row queries. */
            columnId: string;
            /** @description List of filter operators supported for this column, each with its configuration constraints. */
            filterOperators: components["schemas"]["FilterOperatorConfig"][];
            /** @description Indicates whether this column supports filtering. If `false`, do not include it in filter criteria. */
            isFilterable: boolean;
        };
        /** @description Filter metadata model representing the filter configuration and types allowed for each column. */
        FilterMetadataAttributes: {
            /** @description List of filter metadata for each column. */
            filterMetadata: components["schemas"]["FilterMetadata"][];
        };
        /** @description Configuration constraints for a single filter operator on a column. */
        FilterOperatorConfig: {
            /** @description Whether multiple values can be provided in the `values` field for this operator. */
            isMultipleSupported: boolean;
            /**
             * Format: uint32
             * @description Minimum number of characters required per value for string-based operators. If absent, no minimum character limit is enforced.
             */
            minCharLimit?: number;
            /** @description The filter operator this configuration applies to. */
            operator: components["schemas"]["GenericFilterOperator"];
            /**
             * Format: uint32
             * @description Maximum number of values allowed for this operator. If `0`, pass an empty array `[]`. If absent, no limit is enforced.
             */
            valueCountLimit?: number;
        };
        /** @description Folder request resource. */
        Folder: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["FolderAttributes"];
            /** @description The unique identifier for the resource */
            id: string;
            /** @description Non-standard meta information about the resource */
            readonly meta?: components["schemas"]["FolderMeta"];
            /**
             * @description The type of the resource
             * @default Folder
             */
            type: string;
        };
        /** @description Attributes for a folder that organizes audiences in GTM Studio. */
        FolderAttributes: {
            /** @description List of `audienceId` values for the audiences contained in this folder. Read-only; updated automatically as audiences are added or moved. */
            readonly audiences?: string[];
            /** @description Optional free-text description of the folder's purpose. */
            description?: string;
            /** @description Display name of the folder. Required on create. */
            name: string;
            /** @description Optional notes about the folder for internal reference. */
            notes?: string;
            /**
             * @description Whether the folder is starred for quick access. Optional; defaults to `false`.
             * @default false
             */
            starred: boolean;
        };
        /** @description Folder request resource. */
        FolderCreate: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["FolderAttributes"];
            /**
             * @description The type of the resource
             * @default Folder
             */
            type: string;
        };
        /** @description JSON API model for Folder List. */
        FolderJsonApiList: {
            /** @description The primary data of the document */
            data: components["schemas"]["Folder"][];
            /** @description Links related to the primary data */
            links?: components["schemas"]["FoldersPagingLinks"];
            /** @description Non-standard meta information about the document */
            meta?: components["schemas"]["Pagination"];
        };
        /** @description JSON API model for Folder. */
        FolderJsonApiModel: {
            /** @description The primary data of the document */
            data: components["schemas"]["Folder"];
        };
        /** @description JSON API model for Folder. */
        FolderJsonApiModelCreate: {
            /** @description The primary data of the document */
            data: components["schemas"]["FolderCreate"];
        };
        /** @description Metadata for Folder model. */
        FolderMeta: {
            /**
             * Format: date-time
             * @description The timestamp when the resource was created
             */
            readonly createdAt: string;
            /**
             * Format: uint32
             * @description Id of the user who created the resource
             */
            readonly createdById: number;
            /** @description Name of the user who created the resource */
            readonly createdByName: string;
            /**
             * Format: date-time
             * @description The timestamp when the resource was last updated
             */
            readonly updatedAt: string;
            /**
             * Format: uint32
             * @description Id of the user who last updated the resource
             */
            readonly updatedById: number;
            /** @description Name of the user who last updated the resource */
            readonly updatedByName: string;
        };
        /** @description Paging links for Folder list. */
        FoldersPagingLinks: {
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
        /** @description Column model representing a formula column — values are generated by a formula prompt. Requires only `name` and `prompt`. */
        FormulaColumn: {
            /**
             * @description Column type indicating the source and type of this column. (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            columnType: "FORMULA";
            /** @description Data type of the column. Optional for AI columns; required for static and ZoomInfo match columns. */
            dataType?: components["schemas"]["ColumnDataType"];
            /** @description Whether this column can be deleted via the Delete Column endpoint. Read-only; set by the system. */
            readonly isDeletable: boolean;
            /** @description Whether this column's value can be updated via the Update rows endpoint. Read-only; set by the system. */
            readonly isEditable: boolean;
            /** @description Whether this column's values can be included in data exports. Read-only; set by the system. */
            readonly isExportable: boolean;
            /** @description Whether this column supports row filtering via the filterCriteria. Read-only; set by the system. */
            readonly isFilterable: boolean;
            /**
             * @description Whether this column is pinned (frozen) to the left in grid views. Optional; defaults to `false`.
             * @default false
             */
            isFrozen: boolean;
            /**
             * @description Whether this column is hidden from grid views. Optional; defaults to `false`.
             * @default false
             */
            isHidden: boolean;
            /** @description Whether this column supports row sorting via the List Rows endpoint. Read-only; set by the system. */
            readonly isSortable: boolean;
            /** @description Display name of the column shown in the UI and returned in row responses. */
            name: string;
            /** @description Formula prompt used to generate values for this column. */
            prompt: string;
        };
        /**
         * @description Supported expression languages for formula columns.
         * @enum {string}
         */
        FormulaExpressionLanguage: "JAVASCRIPT";
        /** @description Represents a single filter field with its associated properties */
        GenericFilterFieldForAudience: {
            /** @description The column id to filter on */
            columnId: string;
            /** @description The operator to use for filtering */
            filterOperator: components["schemas"]["GenericFilterOperator"];
            /**
             * @description Discriminator value to identify this as a filter (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            type: "Filter";
            /** @description The values to filter against, should match the column data type */
            values: components["schemas"]["StringArray"] | components["schemas"]["NumericArray"];
        };
        /** @description Represents a group of filters combined with a logical operator (AND/OR) */
        GenericFilterGroupForAudience: {
            /** @description The list of filter items in this group */
            filters?: components["schemas"]["GenericFilters"][];
            /** @description The logical operator to combine filters (AND or OR) */
            operator: components["schemas"]["Operator"];
        };
        /** @enum {string} */
        GenericFilterOperator: "EQUALS" | "NOT_EQUALS" | "CONTAINS" | "DOES_NOT_CONTAINS" | "CONTAINS_WORD" | "DOES_NOT_CONTAIN_WORD" | "EMPTY" | "NOT_EMPTY" | "STARTS_WITH" | "DOES_NOT_START_WITH" | "GREATER_THAN" | "LESS_THAN" | "GREATER_THAN_OR_EQUAL" | "LESS_THAN_OR_EQUAL" | "IN_RANGE" | "IS_TRUE" | "IS_FALSE" | "HAS_ONE_OF" | "HAS_NONE_OF" | "HAS_ALL_OF" | "IS_EXACT_DATE" | "BEFORE" | "AFTER" | "WITHIN" | "ROLLING_RANGE";
        GenericFilters: components["schemas"]["GenericFilterFieldForAudience"];
        /** @description Attributes defining the request parameters for retrieving Rows */
        GetRowsAttributes: {
            /** @description Filter criteria to narrow down the rows returned. */
            filter?: components["schemas"]["GenericFilterGroupForAudience"];
            /** @description List of specific Row IDs to retrieve. */
            ids?: string[];
        };
        /** @description JSON API model for get Rows. */
        GetRowsJsonApiModel: {
            /** @description The primary data of the document */
            data: components["schemas"]["Row"][];
            /** @description Links related to the primary data */
            links?: components["schemas"]["RowSearchPagingLinks"];
            /** @description Non-standard meta information about the document */
            meta?: components["schemas"]["Pagination"];
        };
        /** @description Current status and progress of an asynchronous job. */
        JobResponseStatus: {
            /**
             * Format: uint8
             * @description Completion percentage of the job, from `0` to `100`. Not always present for all job types.
             */
            percentProgress?: number;
            /** @description Current state of the job. One of `SCHEDULED`, `RUNNING`, `SUCCEEDED`, `PARTIALLY_SUCCEEDED`, `FAILED`, or `CANCELLED`. */
            status: components["schemas"]["RunStatus"];
        };
        /** @description Job status resource. */
        JobStatusResponse: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["JobResponseStatus"];
            /** @description The unique identifier for the resource */
            id: string;
            /**
             * @description The type of the resource
             * @default JobStatus
             */
            type: string;
        };
        /** @description JSON API model for Job status response. */
        JobStatusResponseJsonApiModel: {
            /** @description The primary data of the document */
            data: components["schemas"]["JobStatusResponse"];
        };
        /** @description Defines a single match criterion that maps an audience column to a ZoomInfo attribute for row matching during enrichment. */
        MatchCriteria: {
            /** @description The `columnId` of the audience column whose value is used as the match input. */
            columnId: string;
            /** @description The ZoomInfo attribute this column maps to. For company audiences use fields that are supported for company records; for contact audiences use fields that are supported for contact records. */
            mappedTo: components["schemas"]["MatchFields"];
        };
        /** @enum {string} */
        MatchFields: "COMPANY_WEBSITE" | "COMPANY_NAME" | "ZOOMINFO_COMPANY_ID" | "COMPANY_COUNTRY" | "COMPANY_STATE" | "COMPANY_CITY" | "COMPANY_ZIP_CODE" | "COMPANY_PHONE" | "COMPANY_TICKER" | "COMPANY_LINKEDIN_ID" | "COMPANY_IP_ADDRESSES" | "COMPANY_METRO_AREA" | "COMPANY_LINKEDIN_URL" | "COMPANY_FACEBOOK_URL" | "COMPANY_TWITTER_URL" | "COMPANY_GOOGLE_PLUS_URL" | "COMPANY_YOUTUBE_URL" | "COMPANY_LOCATION" | "COMPANY_LOCATION_CODE" | "CONTACT_FIRST_NAME" | "CONTACT_LAST_NAME" | "CONTACT_EMAIL" | "JOB_TITLE" | "DIRECT_PHONE" | "MOBILE_PHONE" | "CONTACT_STREET" | "CONTACT_CITY" | "CONTACT_STATE" | "CONTACT_COUNTRY" | "CONTACT_ZIP_CODE" | "ZOOMINFO_CONTACT_ID" | "CONTACT_MIDDLE_NAME" | "CONTACT_LINKEDIN_URL" | "CONTACT_TWITTER_URL" | "CONTACT_LINKEDIN_COMPANY_ID" | "CONTACT_ZOOMINFO_COMPANY_ID" | "CONTACT_PARENT_ID" | "CONTACT_HASHED_EMAILS" | "CONTACT_LINKEDIN_PRIVATE_IDS";
        /**
         * @description Record type used for row matching during enrichment.
         * @enum {string}
         */
        MatchType: "CONTACT" | "COMPANY";
        /** @description Represents a list of numeric values for a field */
        NumericArray: number[];
        /** @description Represents a list of numeric values for a field */
        NumericArrayItem: number[];
        /** @enum {string} */
        Operator: "AND" | "OR";
        /** @description Page details for paginated responses. */
        Page: {
            /**
             * Format: uint32
             * @description Current page number
             */
            number: number;
            /**
             * Format: uint32
             * @description Number of items per page
             */
            size: number;
        };
        /** @description Pagination details for paginated responses. */
        Pagination: {
            /** @description Field representing the current page number */
            page: components["schemas"]["Page"];
            /**
             * Format: uint32
             * @description Total number of items available
             */
            total: number;
        };
        /** @description Audience read request resource. */
        ReadAudience: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["ReadAudienceAttributes"];
            /** @description The unique identifier for the resource */
            id: string;
            /** @description Non-standard meta information about the resource */
            readonly meta?: components["schemas"]["AudienceMeta"];
            /**
             * @description The type of the resource
             * @default Audience
             */
            type: string;
        };
        /** @description Audience model representing audience details. */
        ReadAudienceAttributes: {
            /** @description The Columns in the audience */
            readonly columns?: components["schemas"]["ReadColumn"][];
            /** @description Optional free-text description of the audience's purpose or contents. */
            description?: string;
            /** @description UUID of the folder that contains this audience. If omitted on create, a new folder matching the audience name is created automatically. */
            folderId?: string;
            /** @description Display name of the folder that contains this audience. */
            readonly folderName?: string;
            /** @description Display name of the audience. */
            name: string;
            /** @description Optional notes about the audience for internal reference. */
            notes?: string;
            /** @description The origin of the audience source */
            readonly origin: components["schemas"]["SourceOrigin"];
            /**
             * Format: int32
             * @description Total number of rows currently in the audience. Read-only; updated automatically as rows are added or removed.
             */
            readonly recordCount: number;
            /** @description Record type for this audience. `CONTACT` for person-level records; `COMPANY` for account-level records. Set at creation and cannot be changed. */
            type: components["schemas"]["AudienceType"];
        };
        /** @description JSON API model for Audience. */
        ReadAudienceJsonApiModel: {
            /** @description The primary data of the document */
            data: components["schemas"]["ReadAudience"];
        };
        /** @description Column Read resource model. */
        ReadColumn: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["ReadColumnAttributes"];
            /** @description The unique identifier for the resource */
            id: string;
            /** @description Non-standard meta information about the resource */
            readonly meta?: components["schemas"]["ColumnMeta"];
            /**
             * @description The type of the resource
             * @default Column
             */
            type: string;
        };
        /** @description Base attributes shared by all column types in an audience. */
        ReadColumnAttributes: {
            /** @description Column type indicating the source and type of this column. */
            columnType: components["schemas"]["ColumnType"];
            /** @description List of data dependencies that provide context to the AI model for this column. Returned for `AI` columns if data dependencies were specified. */
            dataDependencies?: components["schemas"]["ColumnContextInput"][];
            /** @description Data type of the column. Optional for AI columns; required for static and ZoomInfo match columns. */
            dataType?: components["schemas"]["ColumnDataType"];
            /** @description Whether this column can be deleted via the Delete Column endpoint. Read-only; set by the system. */
            readonly isDeletable: boolean;
            /** @description Whether this column's value can be updated via the Update rows endpoint. Read-only; set by the system. */
            readonly isEditable: boolean;
            /** @description Whether this column's values can be included in data exports. Read-only; set by the system. */
            readonly isExportable: boolean;
            /** @description Whether this column supports row filtering via the filterCriteria. Read-only; set by the system. */
            readonly isFilterable: boolean;
            /**
             * @description Whether this column is pinned (frozen) to the left in grid views. Optional; defaults to `false`.
             * @default false
             */
            isFrozen: boolean;
            /**
             * @description Whether this column is hidden from grid views. Optional; defaults to `false`.
             * @default false
             */
            isHidden: boolean;
            /** @description Whether this column supports row sorting via the List Rows endpoint. Read-only; set by the system. */
            readonly isSortable: boolean;
            /** @description List of match criteria defining how rows are matched against ZoomInfo data. Returned for `ZOOMINFO_MATCH` columns. */
            matchCriteria?: components["schemas"]["MatchCriteria"][];
            /** @description Display name of the column shown in the UI and returned in row responses. */
            name: string;
            /** @description Formula or AI prompt used to generate values for this column. Returned for `FORMULA` and `AI` columns. */
            prompt?: string;
            /** @description Optional script configuration for `FORMULA` columns. Includes generated formula language and expression. */
            scriptConfiguration?: components["schemas"]["ScriptConfiguration"];
            /** @description Optional AI tool used to process this AI column. Returned for `AI` columns if a tool was selected. */
            tool?: components["schemas"]["AiTool"];
        };
        /** @description JSON API model for read Column. */
        ReadColumnJsonApiModel: {
            /** @description The primary data of the document */
            data: components["schemas"]["ReadColumn"];
        };
        /** @description JSON API model for read Column. */
        ReadColumnListJsonApiModel: {
            /** @description The primary data of the document */
            data: components["schemas"]["ReadColumn"][];
        };
        /** @description Attributes defining Row. */
        Row: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["RowAttributes"];
            /** @description The unique identifier for the resource */
            id: string;
            /**
             * @description The type of the resource
             * @default Row
             */
            type: string;
        };
        /** @description Row async job response resource. */
        RowAsyncJob: {
            /** @description The unique identifier of the resource */
            id: string;
            /**
             * @description The type identifier of the resource
             * @default RowAsyncJob
             */
            type: string;
        };
        /** @description JSON API model for Row async job response. */
        RowAsyncJobJsonApiModel: {
            /** @description The primary data of the document */
            data: components["schemas"]["RowAsyncJob"];
        };
        /** @description Contains all cell data for a row, organized as an array of `CellDetails` objects — one per column. */
        RowAttributes: {
            /** @description Array of cell details for this row. Each entry corresponds to one column identified by `columnId`. */
            values: components["schemas"]["CellDetails"][];
        };
        /** @description Row Delete request resource. */
        RowIdentifier: {
            /** @description The unique identifier of the resource */
            id: string;
            /**
             * @description The type identifier of the resource
             * @default Row
             */
            type: string;
        };
        /** @description JSON API model for Row. */
        RowJsonApiModel: {
            /** @description The primary data of the document */
            data: components["schemas"]["Row"];
        };
        /** @description Row Get request resource. */
        RowSearch: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["GetRowsAttributes"];
            /**
             * @description The type of the resource
             * @default RowSearch
             */
            type: string;
        };
        /** @description JSON API model for get Rows request. */
        RowSearchJsonApiModel: {
            /** @description The primary data of the document */
            data: components["schemas"]["RowSearch"];
        };
        /** @description Paging links for get Rows. */
        RowSearchPagingLinks: {
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
        /** @description JSON API model for bulk upsert Row request. Row `id` is optional — omit to create, provide to update. */
        RowUpsertListApiModel: {
            /** @description The primary data of the document */
            data: components["schemas"]["UpsertRow"][];
        };
        /**
         * @description Terminal and in-progress states for an asynchronous job.
         * @enum {string}
         */
        RunStatus: "SCHEDULED" | "RUNNING" | "SUCCEEDED" | "PARTIALLY_SUCCEEDED" | "FAILED" | "CANCELLED";
        /** @description Optional script configuration returned for `FORMULA` columns. Contains the generated expression and its language. */
        ScriptConfiguration: {
            /** @description Generated formula expression evaluated for this column. */
            expression: string;
            /** @description Expression language used for formula evaluation. */
            language: components["schemas"]["FormulaExpressionLanguage"];
        };
        /**
         * @description Indicates how the audience was originally populated. Read-only; set by the system based on the creation method.
         * @enum {string}
         */
        SourceOrigin: "CUSTOM" | "CRM" | "CSV" | "ZOOMINFO_SIGNALS" | "SNOWFLAKE" | "ZOOMINFO" | "DERIVED_ZOOMINFO_CONTACTS" | "DERIVED_CRM_CONTACTS" | "DERIVED_CRM_ACCOUNTS" | "DERIVED_CRM_OPPORTUNITIES" | "AUDIENCE_COPY" | "GRAPHQL";
        /** @description Column model representing static column in an audience. */
        StaticColumn: {
            /**
             * @description Column type indicating the source and type of this column. (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            columnType: "CUSTOM";
            /** @description Data type of the column. Optional for AI columns; required for static and ZoomInfo match columns. */
            dataType: components["schemas"]["ColumnDataType"];
            /** @description Whether this column can be deleted via the Delete Column endpoint. Read-only; set by the system. */
            readonly isDeletable: boolean;
            /** @description Whether this column's value can be updated via the Update rows endpoint. Read-only; set by the system. */
            readonly isEditable: boolean;
            /** @description Whether this column's values can be included in data exports. Read-only; set by the system. */
            readonly isExportable: boolean;
            /** @description Whether this column supports row filtering via the filterCriteria. Read-only; set by the system. */
            readonly isFilterable: boolean;
            /**
             * @description Whether this column is pinned (frozen) to the left in grid views. Optional; defaults to `false`.
             * @default false
             */
            isFrozen: boolean;
            /**
             * @description Whether this column is hidden from grid views. Optional; defaults to `false`.
             * @default false
             */
            isHidden: boolean;
            /** @description Whether this column supports row sorting via the List Rows endpoint. Read-only; set by the system. */
            readonly isSortable: boolean;
            /** @description Display name of the column shown in the UI and returned in row responses. */
            name: string;
        };
        /** @description Represents a list of string values for a field */
        StringArray: string[];
        /** @description Represents a list of string values for a field */
        StringArrayItem: string[];
        /** @description Audience request resource. */
        UpdateAudience: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["UpdateAudienceAttributes"];
            /**
             * @description The type of the resource
             * @default Audience
             */
            type: string;
        };
        /** @description Audience model representing audience details. */
        UpdateAudienceAttributes: {
            /** @description Optional free-text description of the audience's purpose or contents. */
            description?: string;
            /** @description UUID of the folder that contains this audience. If omitted on create, a new folder matching the audience name is created automatically. */
            folderId?: string;
            /** @description Display name of the audience. */
            name?: string;
            /** @description Optional notes about the audience for internal reference. */
            notes?: string;
        };
        /** @description Column update request resource. */
        UpdateColumn: {
            /** @description The attributes defining the resource */
            attributes?: components["schemas"]["UpdateColumnAttributes"];
            /**
             * @description The type of the resource
             * @default Column
             */
            type: string;
        };
        /** @description Base attributes shared by all column types in an audience. */
        UpdateColumnAttributes: {
            /** @description Column type indicating the source and type of this column. */
            columnType?: components["schemas"]["ColumnType"];
            /**
             * @description Whether this column is pinned (frozen) to the left in grid views. Optional; defaults to `false`.
             * @default false
             */
            isFrozen: boolean;
            /**
             * @description Whether this column is hidden from grid views. Optional; defaults to `false`.
             * @default false
             */
            isHidden: boolean;
            /** @description Display name of the column shown in the UI and returned in row responses. */
            name?: string;
        };
        /** @description Folder request resource. */
        UpdateFolder: {
            /** @description The attributes defining the resource */
            attributes?: components["schemas"]["UpdateFolderAttributes"];
            /**
             * @description The type of the resource
             * @default Folder
             */
            type: string;
        };
        /** @description Attributes for a folder that organizes audiences in GTM Studio. */
        UpdateFolderAttributes: {
            /** @description Optional free-text description of the folder's purpose. */
            description?: string;
            /** @description Display name of the folder. Required on create. */
            name?: string;
            /** @description Optional notes about the folder for internal reference. */
            notes?: string;
            /**
             * @description Whether the folder is starred for quick access. Optional; defaults to `false`.
             * @default false
             */
            starred: boolean;
        };
        /** @description JSON API model for Folder. */
        UpdateFolderJsonApiModel: {
            /** @description The primary data of the document */
            data?: components["schemas"]["UpdateFolder"];
        };
        /** @description Request attributes for upserting match criteria on the audience's designated match column. Match criteria define how audience column values are mapped to ZoomInfo attributes for enrichment matching. If omitted, auto-mapping is attempted for all eligible columns. */
        UpsertMatchCriteriaAttributes: {
            /** @description Array of match criteria to apply to the audience's match column. Each entry maps an audience `columnId` to a ZoomInfo attribute field (e.g., mapping an 'Email' column to `CONTACT_EMAIL`). If not provided, auto-mapping is attempted. */
            matchCriteria?: components["schemas"]["MatchCriteria"][];
        };
        /** @description Upsert match criteria request resource. */
        UpsertMatchCriteriaRequest: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["UpsertMatchCriteriaAttributes"];
            /** @description The unique identifier for the resource */
            readonly id: string;
            /**
             * @description The type of the resource
             * @default UpsertMatchCriteria
             */
            type: string;
        };
        /** @description JSON API model for upsert match criteria request. */
        UpsertMatchCriteriaRequestJsonApiModel: {
            /** @description The primary data of the document */
            data: components["schemas"]["UpsertMatchCriteriaRequest"];
        };
        /** @description Row attributes for upsert operations. Identical to `RowAttributes` but `id` is optional — omit it to create a new row, provide it to update an existing one. */
        UpsertRow: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["RowAttributes"];
            /** @description The unique identifier for the resource */
            id?: string;
            /**
             * @description The type of the resource
             * @default Row
             */
            type: string;
        };
        /** @description JSON API response for bulk row upsert. Returns created/updated rows in `data[]`, matching the get row by ID response shape (includes `state` and `errorDetails` per cell). */
        UpsertRowsJsonApiModel: {
            /** @description The primary data of the document */
            data: components["schemas"]["Row"][];
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
        /** @description Column model representing a ZoomInfo match column — values are populated by matching rows against ZoomInfo's database using defined criteria. This Column accepts only ZI_COMPANY_ID or ZI_CONTACT_ID as data type since these columns are used for matching against ZoomInfo data and these are the only supported data types for matching. */
        ZoominfoMatchColumn: {
            /**
             * @description Column type indicating the source and type of this column. (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            columnType: "ZOOMINFO_MATCH";
            /** @description Data type of the column. Optional for AI columns; required for static and ZoomInfo match columns. */
            dataType: components["schemas"]["ColumnDataType"];
            /** @description Whether this column can be deleted via the Delete Column endpoint. Read-only; set by the system. */
            readonly isDeletable: boolean;
            /** @description Whether this column's value can be updated via the Update rows endpoint. Read-only; set by the system. */
            readonly isEditable: boolean;
            /** @description Whether this column's values can be included in data exports. Read-only; set by the system. */
            readonly isExportable: boolean;
            /** @description Whether this column supports row filtering via the filterCriteria. Read-only; set by the system. */
            readonly isFilterable: boolean;
            /**
             * @description Whether this column is pinned (frozen) to the left in grid views. Optional; defaults to `false`.
             * @default false
             */
            isFrozen: boolean;
            /**
             * @description Whether this column is hidden from grid views. Optional; defaults to `false`.
             * @default false
             */
            isHidden: boolean;
            /** @description Whether this column supports row sorting via the List Rows endpoint. Read-only; set by the system. */
            readonly isSortable: boolean;
            /** @description Display name of the column shown in the UI and returned in row responses. */
            name: string;
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
    Audiences_listAudiences: {
        parameters: {
            query?: {
                /** @description Search audiences by name using a case-insensitive contains match. */
                "filter[searchText]"?: string;
                /** @description Filter audiences by record type. `CONTACT` for person-level records; `COMPANY` for account-level records. */
                "filter[type]"?: components["schemas"]["AudienceType"];
                /** @description Page number for the results. */
                "page[number]"?: number;
                /** @description Number of records to return per page. Default is 25. */
                "page[size]"?: number;
                /**
                 * @description Field based on which to sort the results. Use '-' prefix for descending order.
                 *     Allowed values: name, createdAt, updatedAt, recordCount
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
                    "application/vnd.api+json": components["schemas"]["AudiencesJsonApiList"];
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
    Audiences_createAudience: {
        parameters: {
            query?: {
                /** @description When `true`, the system uses AI to automatically infer and apply match criteria mappings for columns (for example, mapping an "Email" column to `CONTACT_EMAIL`). Defaults to `false`. Set to `true` to enable auto-mapping; leave `false` to define match criteria manually. */
                autoMatchCriteria?: boolean;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Request body containing the audience creation details */
        requestBody: {
            content: {
                "application/vnd.api+json": components["schemas"]["AudienceJsonApiModel"];
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["CreateAudienceResponseJsonApiModel"];
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
    Audiences_getAudience: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The unique identifier for the audience */
                audienceId: string;
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
                    "application/vnd.api+json": components["schemas"]["ReadAudienceJsonApiModel"];
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
    Audiences_deleteAudience: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The unique identifier for the audience */
                audienceId: string;
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
    Audiences_patchAudience: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The unique identifier for the audience */
                audienceId: string;
            };
            cookie?: never;
        };
        /** @description Request body containing the audience patch details */
        requestBody: {
            content: {
                "application/vnd.api+json": components["schemas"]["AudienceUpdateJsonApiModel"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ReadAudienceJsonApiModel"];
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
    Audiences_enrichAudience: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The unique identifier for the audience */
                audienceId: string;
            };
            cookie?: never;
        };
        /** @description Request body containing the enrichment details */
        requestBody: {
            content: {
                "application/vnd.api+json": components["schemas"]["AudienceEnrichmentJsonApiModel"];
            };
        };
        responses: {
            /** @description Success */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["EnrichJobJsonApiModel"];
                };
            };
            /** @description Success */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["EnrichJobJsonApiModel"];
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
            /** @description Payment Required */
            402: {
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
    Audiences_upsertMatchCriteria: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The unique identifier for the audience */
                audienceId: string;
            };
            cookie?: never;
        };
        /** @description Request body containing match criteria to apply. If omitted, auto-mapping is attempted for all eligible columns. */
        requestBody?: {
            content: {
                "application/vnd.api+json": components["schemas"]["UpsertMatchCriteriaRequestJsonApiModel"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ReadColumnJsonApiModel"];
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
    Columns_deleteColumn: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The unique identifier for the audience */
                audienceId: string;
                /** @description The unique identifier for the column */
                columnId: string;
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
    Columns_patchColumn: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The unique identifier for the audience */
                audienceId: string;
                /** @description The unique identifier for the column */
                columnId: string;
            };
            cookie?: never;
        };
        /** @description Request body containing the column update details */
        requestBody: {
            content: {
                "application/vnd.api+json": components["schemas"]["ColumnUpdateJsonApiModel"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ReadColumnJsonApiModel"];
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
    Columns_addColumns: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The unique identifier for the audience */
                audienceId: string;
            };
            cookie?: never;
        };
        /** @description Request body containing the column creation details */
        requestBody: {
            content: {
                "application/vnd.api+json": components["schemas"]["ColumnJsonApiModel"];
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["ReadColumnListJsonApiModel"];
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
    Columns_getSupportedDataDependencies: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The unique identifier for the audience */
                audienceId: string;
                /** @description AI tool used to retrieve supported data dependencies (`AI_DATA_ANALYSIS`, `AI_WEB_RESEARCH`, `AI_CONVERSATION_INTELLIGENCE`, or `AI_EMAILER`). */
                tool: components["schemas"]["AiTool"];
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
                    "application/vnd.api+json": components["schemas"]["ColumnDataDependencyListModel"];
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
    Audiences_getAudienceFilterMetadata: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The unique identifier for the audience */
                audienceId: string;
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
                    "application/vnd.api+json": components["schemas"]["AudienceFilterMetadataJsonApiModel"];
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
    Audiences_getJobStatus: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The unique identifier for the audience. */
                audienceId: string;
                /** @description The unique identifier for the job. */
                jobId: string;
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
                    "application/vnd.api+json": components["schemas"]["JobStatusResponseJsonApiModel"];
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
    Rows_getRowById: {
        parameters: {
            query?: {
                /** @description List of column IDs to include in the response, If provided, only these columns will be returned for each row. */
                columns?: string[];
            };
            header?: never;
            path: {
                /** @description The unique identifier for the audience */
                audienceId: string;
                /** @description The unique identifier for the row */
                rowId: string;
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
                    "application/vnd.api+json": components["schemas"]["RowJsonApiModel"];
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
    Rows_deleteRows: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The unique identifier for the audience */
                audienceId: string;
            };
            cookie?: never;
        };
        /** @description Request body containing the row deletion details */
        requestBody: {
            content: {
                "application/vnd.api+json": components["schemas"]["DeleteRowJsonApiModel"];
            };
        };
        responses: {
            /** @description Accepted */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["RowAsyncJobJsonApiModel"];
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
    Rows_upsertRows: {
        parameters: {
            query?: {
                /** @description List of `columnId` values to enrich per row. Only used when `runEnrichment` is `true`; if omitted, all enrichable columns are processed. */
                columns?: string[];
                /** @description When `true`, enrichment runs automatically on all affected rows after the upsert completes. Defaults to `false`. */
                runEnrichment?: boolean;
            };
            header?: never;
            path: {
                /** @description The unique identifier for the audience */
                audienceId: string;
            };
            cookie?: never;
        };
        /** @description Request body containing rows to create or update. Include `id` (rowId) to update an existing row; omit `id` to create a new row. */
        requestBody: {
            content: {
                "application/vnd.api+json": components["schemas"]["RowUpsertListApiModel"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["UpsertRowsJsonApiModel"];
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
            /** @description Payment Required */
            402: {
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
    Rows_listRows: {
        parameters: {
            query?: {
                /** @description List of column IDs to include in the response, If provided, only these columns will be returned for each row. */
                columns?: string[];
                /** @description Page number for the results. */
                "page[number]"?: number;
                /** @description Number of records to return per page. Default is 25. */
                "page[size]"?: number;
                /** @description ColumnId based on which to sort the results. Use '-' prefix for descending order. */
                sort?: string;
            };
            header?: never;
            path: {
                /** @description The unique identifier for the audience */
                audienceId: string;
            };
            cookie?: never;
        };
        /** @description Request body containing the row search criteria */
        requestBody?: {
            content: {
                "application/vnd.api+json": components["schemas"]["RowSearchJsonApiModel"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["GetRowsJsonApiModel"];
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
    Folders_listFolders: {
        parameters: {
            query?: {
                /** @description Filter folders created after a specific date. Eg: 2025-10-10T17:08:00Z */
                "filter[createdAfter]"?: string;
                /** @description Filter folders created before a specific date. Eg: 2025-10-10T17:08:00Z */
                "filter[createdBefore]"?: string;
                /** @description Filter folders by userId of the creator. */
                "filter[createdById]"?: number[];
                /** @description Search folders by name (partial match). */
                "filter[searchText]"?: string;
                /** @description Filter folders updated after a specific date. Eg: 2025-10-10T17:08:00Z */
                "filter[updatedAfter]"?: string;
                /** @description Filter folders updated before a specific date. Eg: 2025-10-10T17:08:00Z */
                "filter[updatedBefore]"?: string;
                /** @description Filter folders by userId of the last updated person. */
                "filter[updatedById]"?: number[];
                /** @description Page number for the results. */
                "page[number]"?: number;
                /** @description Number of records to return per page. Default is 25. */
                "page[size]"?: number;
                /**
                 * @description Field based on which to sort the results. Use '-' prefix for descending order.
                 *     Allowed values: name, createdAt, updatedAt, audienceCount, recentlyViewed
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
                    "application/vnd.api+json": components["schemas"]["FolderJsonApiList"];
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
    Folders_createFolder: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Request body containing the folder creation details */
        requestBody: {
            content: {
                "application/vnd.api+json": components["schemas"]["FolderJsonApiModelCreate"];
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["FolderJsonApiModel"];
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
    Folders_getFolderById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ID of the folder to retrieve. */
                folderId: string;
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
                    "application/vnd.api+json": components["schemas"]["FolderJsonApiModel"];
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
    Folders_deleteFolder: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ID of the folder to delete. */
                folderId: string;
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
    Folders_updateFolder: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ID of the folder to update. */
                folderId: string;
            };
            cookie?: never;
        };
        /** @description Request body containing the folder update details */
        requestBody: {
            content: {
                "application/vnd.api+json": components["schemas"]["UpdateFolderJsonApiModel"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["FolderJsonApiModel"];
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
