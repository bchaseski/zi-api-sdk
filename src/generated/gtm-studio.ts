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
         * @description Search and browse all GTM Studio audiences. The primary way to discover an `audienceId` before loading rows, managing columns, or triggering enrichment. Also use this to check what audiences already exist before creating a duplicate.
         *
         *     **Filters:**
         *     - `filter[type]`: `CONTACT` or `COMPANY`
         *     - `filter[searchText]`: case-insensitive partial match on audience name
         *
         *     **Sorting:** `sort` accepts `name`, `createdAt`, `updatedAt`, or `recordCount`. Prefix with `-` for descending order. Default: `-updatedAt`.
         *
         *     **Pagination:** `page[number]` (default `1`) and `page[size]` (default `25`, max `100`).
         *
         *     Returns `200` with a paginated list of audience resources and navigation links.
         *     Returns `400` if filter or sort parameters are invalid.
         */
        get: operations["Audiences_listAudiences"];
        put?: never;
        /**
         * Create New Audience
         * @description Create a named working list of people (`CONTACT`) or companies (`COMPANY`) to drive a GTM motion — campaign targeting, enrichment runs, outbound sequences, or importing leads from trade shows and events.
         *
         *     You can define the audience name, audience type (`CONTACT` or `COMPANY`), and the source of the audience.
         *     Supported audience sources are:
         *     - `CUSTOM`: audience has no linked source dataset.
         *     - `ZOOMINFO_PUBLIC_API`: audience is defined by `zoomInfoSearchCriteria`.
         *     Requests to create audiences can optionally include definitions for columns to be added to the audience.
         *     If no column definitions are provided, the audience will be created without any columns, and columns may
         *     be added in the future using the [Create New Columns](ref:columns_addcolumns) endpoint.
         *
         *     **Folders:** Every audience must live in a folder. Pass `folderId` to place it in an existing folder (use [List Folders](ref:folders_listfolders) to find one). If `folderId` is omitted, GTM Studio automatically creates a new folder with the same name as the audience.
         *
         *     **Columns:** Define columns up front — they describe the shape of data you intend to load. The `columnId` values returned here are required when loading rows via [Bulk Upsert Rows](ref:rows_upsertrows). Choose `dataType` carefully — it cannot be changed after creation. If `columns` is omitted, the audience is created with no columns; add them later via [Create New Columns](ref:columns_addcolumns) before loading any rows.
         *
         *     For `zoomInfoSearchCriteria`, use the [Lookup Data](ref:lookupinterface_lookup) endpoint to retrieve valid values.
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
         * @description Add columns to an audience to define the shape of data it holds. Do this before loading rows — `columnId` values returned here are required by [Bulk Upsert Rows](ref:rows_upsertrows). Choose `dataType` carefully — it cannot be changed after creation.
         *
         *     **Supported `dataType` values for `CUSTOM` columns:**
         *     - Text: `TEXT` (short labels, names, <2000 chars), `LARGE_TEXT` (notes, descriptions, >2000 chars)
         *     - Contact data: `EMAIL` (single address), `PHONE` (single number), `URL` (website or domain)
         *     - Numbers: `INTEGER` (whole numbers), `DECIMAL` (floating-point), `PERCENT`, `CURRENCY`
         *     - Boolean: `BOOLEAN`, `CHECKBOX`
         *     - Dates: `DATE` (calendar date, no time component)
         *     - Arrays: `STRING_LIST`, `NUMBER_LIST`, `EMAIL_LIST`, `PHONE_LIST`, `URL_LIST`
         *     - Structured: `OBJECT` (JSON)
         *
         *     **Column types:**
         *     - `CUSTOM` — Values you load directly via Bulk Upsert Rows. Requires `name` and `dataType`.
         *     - `FORMULA` — Values computed from a `prompt` expression evaluated across other columns in the audience.
         *     - `AI` — Values generated by a ZoomInfo AI tool. Requires `prompt`. Optionally specify `tool` (`AI_DATA_ANALYSIS`, `AI_WEB_RESEARCH`, `AI_CONVERSATION_INTELLIGENCE`, `AI_EMAILER`) and `dataDependencies` (other column IDs or knowledge base sources for grounding). Use [Get Column Data Dependencies](ref:columns_getsupporteddatadependencies) to discover valid context sources.
         *     - `ZOOMINFO_MATCH` — Values populated by ZoomInfo enrichment matching. Accepts only `ZI_CONTACT_ID` or `ZI_COMPANY_ID` as `dataType`. Configure match criteria via [Upsert Column Match Criteria](ref:audiences_upsertmatchcriteria) after creation.
         *
         *     Returns `201 Created` with all column resources including system-assigned `columnId` values and read-only behavior flags (`isDeletable`, `isEditable`, `isFilterable`, `isSortable`).
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
         * @description Load records into an audience — create new rows, update existing ones, or mix both in a single call. This is the primary way to populate an audience with GTM data: trade show leads, CRM exports, account lists, enrichment targets.
         *
         *     Each row is an array of cell values keyed by `columnId` (use the IDs returned by [Create Audience](ref:audiences_createaudience) or [Create New Columns](ref:columns_addcolumns)). Omit `id` to create a new row; include a `rowId` to update an existing one. Max 500 rows per call.
         *
         *     **Cell values:** Each cell's `value` must match the column's `dataType`. For example, an `EMAIL` column expects a string like `"user@example.com"`, an `INTEGER` column expects a number, a `STRING_LIST` column expects an array of strings. Sending the wrong shape will result in a validation error.
         *
         *     Returns `200` with the full row records including per-cell state: `RESULT` (value present), `BLANK` (no value set), `LOADING` (enrichment in progress), `ERROR` (enrichment failed — check `errorDetails`), or `NO_RESULT` (enrichment found no match).
         *     Returns `400` if the request body is malformed or `columnId` references are invalid.
         */
        post: operations["Rows_bulkUpsertRows"];
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
    "/studio/v1/audiences/{audienceId}/rows/actions/upsert": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Upsert Rows
         * @description Creates and/or updates up to 50 rows in an audience in a single synchronous operation.
         *     Each entry in the request body includes cell values keyed by `columnId`. Including a `rowId` updates that existing row; omitting `rowId` creates a new row.
         *     Both creates and updates can be combined freely in the same request.
         *     Use this endpoint when upserting **50 rows or fewer**. For larger batches (up to 500 rows), use [Bulk Upsert Rows](ref:Rows_upsertRows) at `POST /actions/bulk/upsert` instead.
         *     Returns `200` with `data[]` row resources — each entry includes `id`, `type`, and `attributes.values` with full cell details (`columnId`, `value`, `state`, and `errorDetails` when applicable).
         *     Returns `400` if the request body is malformed, exceeds 50 rows, or `columnId` references are invalid.
         */
        post: operations["Rows_upsertRows"];
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
        AudienceAttributes: components["schemas"]["CustomAudienceAttributes"] | components["schemas"]["ZoomInfoPublicApiAudienceAttributes"];
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
        /** @description JSON API model for bulk upsert Row request. Row `id` is optional — omit to create, provide to update. */
        BulkRowUpsertListApiModel: {
            /** @description The primary data of the document */
            data: components["schemas"]["UpsertRow"][];
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
        ColumnType: "CUSTOM" | "CRM_SEARCH" | "CRM" | "CSV" | "FORMULA" | "ACCOUNT_AI" | "CONNECTORS" | "ROUTING" | "SNOWFLAKE" | "AI" | "ZOOMINFO_COPILOT_SIGNALS" | "ZOOMINFO_AUDIENCE" | "ZOOMINFO_JOB_POSTINGS" | "ZOOMINFO_WEBSIGHTS" | "ZOOMINFO_CONTACT_CHANGES" | "ZOOMINFO_TECHNOLOGIES" | "ZOOMINFO_INTENT" | "IN_MARKET_SCORE" | "ZOOMINFO_SCOOPS" | "ZOOMINFO_COMPANY" | "ZOOMINFO_CONTACT" | "ZOOMINFO_CUSTOM" | "ZOOMINFO_MATCH" | "ZOOMINFO_CONTACT_SEARCH" | "SIGNALS_AUDIENCE_DEFAULT" | "JSON_PARSER" | "REFERENCE_MAPPER" | "AUDIENCE_LOOKUP" | "GRAPHQL_AUDIENCE_DEFAULT" | "GRAPHQL" | "ACCOUNT_LOOK_ALIKE" | "CONTACT_LOOK_ALIKE" | "ZOOMINFO_FEDERATED_SEARCH";
        /** @description JSON API model for Column update. */
        ColumnUpdateJsonApiModel: {
            /** @description The primary data of the document */
            data?: components["schemas"]["UpdateColumn"];
        };
        /** @description Employment history criteria used in contact search. */
        ContactsEmploymentHistory: {
            /** @description Company name of past employment. */
            companyName: string;
            /** @description Job title at past employment. */
            jobTitle: string;
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
            /** @description ZoomInfo search criteria used to define audience targeting. */
            zoomInfoSearchCriteria?: components["schemas"]["ZoomInfoSearchCriteria"];
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
            /** @description ZoomInfo search criteria used to define audience targeting. */
            readonly zoomInfoSearchCriteria?: components["schemas"]["ZoomInfoSearchCriteria"];
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
            /** @description ZoomInfo search criteria used to define audience targeting. */
            zoomInfoSearchCriteria?: components["schemas"]["ZoomInfoSearchCriteria"];
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
        /** @description Audience read detail request resource. */
        ReadAudienceDetail: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["ReadAudienceDetailAttributes"];
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
        /** @description Audience attributes returned by detail endpoints. */
        ReadAudienceDetailAttributes: {
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
            /** @description ZoomInfo search criteria used to define audience targeting. */
            readonly zoomInfoSearchCriteria?: components["schemas"]["ZoomInfoSearchCriteria"];
        };
        /** @description JSON API model for Audience detail responses. */
        ReadAudienceDetailJsonApiModel: {
            /** @description The primary data of the document */
            data: components["schemas"]["ReadAudienceDetail"];
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
        /** @description JSON API model for synchronous upsert Row request (≤ 50 rows). Row `id` is optional — omit to create, provide to update. */
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
        SourceOrigin: "CUSTOM" | "ZOOMINFO_PUBLIC_API" | "CRM" | "CSV" | "ZOOMINFO_SIGNALS" | "SNOWFLAKE" | "ZOOMINFO" | "DERIVED_ZOOMINFO_CONTACTS" | "DERIVED_CRM_CONTACTS" | "DERIVED_CRM_ACCOUNTS" | "DERIVED_CRM_OPPORTUNITIES" | "AUDIENCE_COPY" | "GRAPHQL";
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
        /** @description Company search configuration. */
        "ZoomInfo.SearchCriteria.CompanySearch": {
            /** @description Full Company Address. */
            address?: string;
            /** @description Filters for companies that have had any funding round (at any point in their history) matching one of the given types. Accepts an array of values from the endpoint: /lookup/funding-round-types. This is a different filter mode than recentFundingRoundTypes (which matches only the most recent round), so only one of the two should be supplied per request. */
            allFundingRoundTypes?: string[];
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
            /** @description Filters for companies whose most recent funding round matches one of the given types. Accepts an array of values from the endpoint: /lookup/funding-round-types. This is a different filter mode than allFundingRoundTypes (which matches any round in the company's history), so only one of the two should be supplied per request. */
            recentFundingRoundTypes?: string[];
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
        /** @description Contact search configuration. */
        "ZoomInfo.SearchCriteria.ContactSearch": {
            /** @description Full Company Address. */
            address?: string;
            /** @description Filters for companies that have had any funding round (at any point in their history) matching one of the given types. Accepts an array of values from the endpoint: /lookup/funding-round-types. This is a different filter mode than recentFundingRoundTypes (which matches only the most recent round), so only one of the two should be supplied per request. */
            allFundingRoundTypes?: string[];
            /** @description Exclude or include board members from search results. Default behavior is to exclude board members from search results. Submit this as `include` to include board members, set this as `only` to only include board members. */
            boardMember?: string;
            /** @description Filters results based on the provided Buying Group ID. Only one ID can be submitted. */
            buyingGroup?: string[];
            /** @description Search for companies based on description. Accepts a space-separated list of individual words. */
            companyDescription?: string;
            /** @description Unique ZoomInfo identifier for a company. */
            companyId?: string;
            /** @description Company name. */
            companyName?: string;
            /** @description Defaults to only include the present company for a contact. Set this to `past` to return past companies, set this to `pastAndPresent` to include both. */
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
            /** @description Defaults to include. Set this to `exclude` to exclude contacts who have been notified of inclusion in ZoomInfo's database. Set this to `only` to only include contacts who have been notified. */
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
             * @description List of phone numbers used to locate the contacts you are searching for. The phone numbers can either
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
            /** @description Filters for companies whose most recent funding round matches one of the given types. Accepts an array of values from the endpoint: /lookup/funding-round-types. This is a different filter mode than allFundingRoundTypes (which matches any round in the company's history), so only one of the two should be supplied per request. */
            recentFundingRoundTypes?: string[];
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
        /** @description Audience model representing audience details. */
        ZoomInfoPublicApiAudienceAttributes: {
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
            origin: "ZOOMINFO_PUBLIC_API";
            /** @description Record type for this audience. `CONTACT` for person-level records; `COMPANY` for account-level records. Set at creation and cannot be changed. */
            type: components["schemas"]["AudienceType"];
            /** @description ZoomInfo search criteria used to define audience targeting. */
            zoomInfoSearchCriteria?: components["schemas"]["ZoomInfoSearchCriteria"];
        };
        /**
         * @description ZoomInfo search criteria configuration for audience targeting. At least one of `companySearch` or `contactSearch` must be provided.
         *     - For `COMPANY` audiences, `companySearch` is required; `contactSearch` is optional.
         *     - For `CONTACT` audiences, `contactSearch` is required; `companySearch` is optional.
         *     Use the [Lookup Data](ref:lookupinterface_lookup) endpoint to retrieve valid values where applicable.
         */
        ZoomInfoSearchCriteria: {
            /** @description Company search configuration. Required for `COMPANY` audiences; optional for `CONTACT` audiences. */
            companySearch?: components["schemas"]["ZoomInfo.SearchCriteria.CompanySearch"];
            /** @description Contact search configuration. Required for `CONTACT` audiences; optional for `COMPANY` audiences. */
            contactSearch?: components["schemas"]["ZoomInfo.SearchCriteria.ContactSearch"];
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
                    "application/vnd.api+json": components["schemas"]["ReadAudienceDetailJsonApiModel"];
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
    Rows_bulkUpsertRows: {
        parameters: {
            query?: never;
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
                "application/vnd.api+json": components["schemas"]["BulkRowUpsertListApiModel"];
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
    Rows_upsertRows: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The unique identifier for the audience */
                audienceId: string;
            };
            cookie?: never;
        };
        /** @description Request body containing up to 50 rows to create or update. Include `id` to update an existing row; omit it to create a new row. */
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
