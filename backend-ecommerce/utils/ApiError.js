class ApiError {

    constructor(statusCode, message = "Something went wronge!", errors = [], stack = "") {
        this.status = statusCode;
        this.message = message;
        this.errors = errors;
        this.data = null;
        this.success = false;

        if (stack) {
            this.stack = stack
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

module.exports = ApiError;