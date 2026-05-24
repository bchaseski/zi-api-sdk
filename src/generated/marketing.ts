// AUTO-GENERATED from openapi-marketing-v1.yaml (https://docs.zoominfo.com/openapi/openapi-marketing-v1.yaml).
// Regenerate with: npm run codegen
/* eslint-disable */

export interface paths {
    "/marketing/v1/audiences": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Lists all audiences
         * @description Lists all audiences.
         */
        get: operations["AudienceInterface_getAudiences"];
        put?: never;
        /**
         * Creates a new audience
         * @description Creates a new audience.
         */
        post: operations["AudienceInterface_createAudience"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/marketing/v1/audiences/{audienceId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Gets existing audience by ID
         * @description Gets an existing audience.
         */
        get: operations["AudienceInterface_getAudience"];
        /**
         * Updates audience by ID
         * @description Updates an existing audience.
         */
        put: operations["AudienceInterface_updateAudience"];
        post?: never;
        /**
         * Deletes audience by ID
         * @description Deletes an existing audience.
         */
        delete: operations["AudienceInterface_deleteAudience"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/marketing/v1/audiences/{audienceId}/uploads": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Creates new audience upload
         * @description Create a new audience segment upload.
         */
        post: operations["AudienceInterface_uploadAudience"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/marketing/v1/audiences/{audienceId}/uploads/{uploadId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Gets audience upload status
         * @description Gets the upload status for an existing audience.
         */
        get: operations["AudienceInterface_getAudienceUpload"];
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
        /** @description ZoomInfo Audience */
        Audience: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["AudienceAttributes"];
            /** @description The unique identifier for the resource */
            id: string;
            /**
             * @description The type of the resource
             * @default Audience
             */
            type: string;
        };
        /** @description Attributes defining a ZoomInfo Audience */
        AudienceAttributes: {
            /** @description The name of the audience */
            name: string;
            /** @description The status of the audience */
            readonly status: components["schemas"]["AudienceStatus"];
            /** @description The audience type defining whether the audience is targeting businesses (B2B) or consumers (B2C) */
            type: components["schemas"]["AudienceType"];
        };
        /** @description Attributes defining a ZoomInfo Audience */
        AudienceAttributesUpdate: {
            /** @description The name of the audience */
            name: string;
        };
        /** @description ZoomInfo Audience */
        AudienceCreate: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["AudienceAttributes"];
            /**
             * @description The type of the resource
             * @default Audience
             */
            type: string;
        };
        /** @description Response containing a single ZoomInfo Audience */
        AudienceModel: {
            /** @description The primary data of the document */
            data: components["schemas"]["Audience"];
        };
        /** @description Response containing a single ZoomInfo Audience */
        AudienceModelCreate: {
            /** @description The primary data of the document */
            data: components["schemas"]["AudienceCreate"];
        };
        /** @description Response containing a single ZoomInfo Audience */
        AudienceModelUpdate: {
            /** @description The primary data of the document */
            data: components["schemas"]["AudienceUpdate"];
        };
        /** @enum {string} */
        AudienceStatus: "ACTIVE" | "ARCHIVED";
        /** @enum {string} */
        AudienceType: "B2B" | "B2C";
        /** @description ZoomInfo Audience */
        AudienceUpdate: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["AudienceAttributesUpdate"];
            /** @description The unique identifier for the resource */
            id: string;
            /**
             * @description The type of the resource
             * @default Audience
             */
            type: string;
        };
        /** @description ZoomInfo Audience Upload */
        AudienceUpload: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["AudienceUploadAttributes"];
            /** @description The unique identifier for the resource */
            id: string;
            /**
             * @description The type of the resource
             * @default AudienceUpload
             */
            type: string;
        };
        /** @description Attributes defining an audience member upload */
        AudienceUploadAttributes: {
            /**
             * Format: date-time
             * @description The completion date of upload
             */
            readonly completeDate?: string;
            /**
             * Format: date-time
             * @description The create date of the upload
             */
            readonly createDate: string;
            /** @description Define the type of operation that this upload will perform for the audience. Add - add records to the audiences, Delete - delete records from the audience */
            operationType: components["schemas"]["UploadOperationType"];
            /** @description The status of the upload */
            readonly status: components["schemas"]["UploadStatus"];
            /**
             * Format: date-time
             * @description The last update date of the upload
             */
            readonly updateDate: string;
        };
        /** @description Attributes defining an audience member upload */
        AudienceUploadAttributesCreate: {
            /** @description Define the schema of the records by selecting which fields are included in each record */
            fields: components["schemas"]["UploadField"][];
            /** @description Define the type of operation that this upload will perform for the audience. Add - add records to the audiences, Delete - delete records from the audience */
            operationType: components["schemas"]["UploadOperationType"];
            /** @description The list of records matching the exact order of the schema defined in fields */
            records: string[][];
        };
        /** @description ZoomInfo Audience Upload */
        AudienceUploadCreate: {
            /** @description The attributes defining the resource */
            attributes: components["schemas"]["AudienceUploadAttributesCreate"];
            /**
             * @description The type of the resource
             * @default AudienceUpload
             */
            type: string;
        };
        /** @description Request/Response wrapper for a ZoomInfo Audience Upload */
        AudienceUploadModel: {
            /** @description The primary data of the document */
            data: components["schemas"]["AudienceUpload"];
        };
        /** @description Request/Response wrapper for a ZoomInfo Audience Upload */
        AudienceUploadModelCreate: {
            /** @description The primary data of the document */
            data: components["schemas"]["AudienceUploadCreate"];
        };
        /** @description Links describing the various audience paging options */
        GetAudiencesLinks: {
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
             * @description A link to the previous page of data
             */
            prev?: string;
        };
        /** @description Metadata for the current page of audiences returned */
        GetAudiencesMeta: {
            /**
             * Format: uint32
             * @description The current page of audiences being returned
             */
            page: number;
            /**
             * Format: uint32
             * @description The page size as specified by the request
             */
            pageSize: number;
            /**
             * Format: uint32
             * @description The total count of audience within the current search parameters
             */
            totalCount: number;
        };
        /** @description A paged list of ZoomInfo Audiences */
        GetAudiencesResponse: {
            /** @description The primary data of the document */
            data: components["schemas"]["Audience"][];
            /** @description Links related to the primary data */
            links?: components["schemas"]["GetAudiencesLinks"];
            /** @description Non-standard meta information about the document */
            meta?: components["schemas"]["GetAudiencesMeta"];
        };
        /**
         * @description Enumeration of allowed field names for records.
         * @enum {string}
         */
        UploadField: "ziCompanyId" | "ziPersonId" | "firstName" | "lastName" | "emailAddress" | "companyName" | "companyUrl";
        /**
         * @description The type of upload
         * @enum {string}
         */
        UploadOperationType: "ADD" | "DELETE";
        /**
         * @description The various status values for an audience member upload
         * @enum {string}
         */
        UploadStatus: "IN_PROGRESS" | "COMPLETE" | "FAILED";
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
    AudienceInterface_getAudiences: {
        parameters: {
            query?: {
                /** @description The number of audiences to return per page */
                pageSize?: number;
                /** @description The page token to use for pagination */
                pageToken?: string;
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
                    "application/vnd.api+json": components["schemas"]["GetAudiencesResponse"];
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
    AudienceInterface_createAudience: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Request body containing the audience creation details */
        requestBody: {
            content: {
                "application/vnd.api+json": components["schemas"]["AudienceModelCreate"];
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["AudienceModel"];
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
    AudienceInterface_getAudience: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The unique identifier of the audience */
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
                    "application/vnd.api+json": components["schemas"]["AudienceModel"];
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
    AudienceInterface_updateAudience: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The unique identifier of the audience */
                audienceId: string;
            };
            cookie?: never;
        };
        /** @description Request body containing the audience update details */
        requestBody: {
            content: {
                "application/vnd.api+json": components["schemas"]["AudienceModelUpdate"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["AudienceModel"];
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
    AudienceInterface_deleteAudience: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The unique identifier of the audience */
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
    AudienceInterface_uploadAudience: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The unique identifier of the audience */
                audienceId: string;
            };
            cookie?: never;
        };
        /** @description Request body containing the audience upload details */
        requestBody: {
            content: {
                "application/vnd.api+json": components["schemas"]["AudienceUploadModelCreate"];
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/vnd.api+json": components["schemas"]["AudienceUploadModel"];
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
    AudienceInterface_getAudienceUpload: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The unique identifier of the audience */
                audienceId: string;
                /** @description The unique identifier of the audience upload */
                uploadId: string;
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
                    "application/vnd.api+json": components["schemas"]["AudienceUploadModel"];
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
