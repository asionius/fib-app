const errno = {
    "API": {
        "101": "ObjectNotFound",
        "102": "InvalidQuery",
        "103": "InvalidClassName",
        "104": "MissingObjectId",
        "105": "InvalidFieldName",
        "106": "InvalidPointer",
        "107": "InvalidJSON",
        "108": "CommandUnavailable",
        "109": "NotInitialized",
        "116": "ObjectTooLarge",
        "117": "InvalidLimitError",
        "118": "InvalidSkipError",
        "119": "OperationForbidden",
        "120": "CacheMiss",
        "121": "InvalidNestedKey",
        "123": "InvalidACL",
        "125": "InvalidEmailAddress",
        "137": "DuplicateValue",
        "139": "ReservedValue",
        "140": "ExceededCollectionQuota",
        "141": "FunctionNotFound",
        "142": "ValidationFailed",
        "143": "WebhookError",
        "150": "InvalidImageData",
        "151": "UnsavedFileError",
        "152": "InvalidPushTimeError",
        "158": "HostingError",
        "160": "InvalidEventName",
        "201": "Created",
        "255": "ClassNotEmpty",
        "256": "AppNameInvalid",
        "902": "MissingAPIKeyError",
        "903": "InvalidAPIKeyError",
    },
    "Push": {
        "111": "IncorrectType",
        "112": "InvalidChannelName",
        "113": "InvalidSubscriptionType",
        "114": "InvalidDeviceToken",
        "115": "PushMisconfigured",
        "138": "InvalidExpirationError",
        "156": "MissingPushIdError",
        "157": "MissingDeviceTypeError",
    },
    "File": {
        "122": "InvalidFileName",
        "126": "MissingContentType",
        "127": "MissingContentLength",
        "128": "InvalidContentLength",
        "129": "FileTooLarge",
        "130": "FileSaveError",
        "131": "FileDeleteError",
    },
    "Installation": {
        "132": "InvalidInstallationIdError",
        "133": "InvalidDeviceTypeError",
        "134": "InvalidChannelsArrayError",
        "135": "MissingRequiredFieldError",
        "136": "ChangedImmutableFieldError",
    },
    "Purchase": {
        "143": "ReceiptMissing",
        "144": "InvalidPurchaseReceipt",
        "145": "PaymentDisabled",
        "146": "InvalidProductIdentifier",
        "147": "ProductNotFoundInAppStore",
        "148": "InvalidServerResponse",
        "149": "ProductDownloadFilesystemError",
    },
    "User": {
        "200": "UsernameMissing",
        "201": "PasswordMissing",
        "202": "UsernameTaken",
        "203": "UserEmailTaken",
        "204": "UserEmailMissing",
        "205": "UserWithEmailNotFound",
        "206": "SessionMissing",
        "207": "MustCreateUserThroughSignup",
        "208": "AccountAlreadyLinked",
        "209": "InvalidSessionToken",
    },
    "Client": {
        "100": "ConnectionFailed",
        "600": "AggregateError",
        "601": "FileReadError",
        "602": "XDomainRequest",
    },
    "Operational": {
        "124": "RequestTimeout",
        "154": "InefficientQueryError",
        "155": "RequestLimitExceeded",
        "159": "TemporaryRejectionError",
        "428": "DatabaseNotMigratedError",
    }
};

function APPError(code, message, descript) {
    Error.call(this);
    Error.captureStackTrace(this, this.constructor);

    this.code = code;
    this.message = message;
    this.descript = descript;
}


function setError(app, code, msg) {
    throw new APPError(code, app[code], msg !== undefined ? msg : app[code]);
};

module.exports = {
    API: setError.bind(undefined, errno.API),
    Push: setError.bind(undefined, errno.Push),
    File: setError.bind(undefined, errno.File),
    Installation: setError.bind(undefined, errno.Installation),
    Purchase: setError.bind(undefined, errno.Purchase),
    User: setError.bind(undefined, errno.User),
    Client: setError.bind(undefined, errno.Client),
    Operational: setError.bind(undefined, errno.Operational)
};