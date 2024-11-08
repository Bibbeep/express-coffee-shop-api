class BadRequestError extends Error {
    constructor (message) {
        super(message);
        this.statusCode = 400;
    }
}

class UnauthorizedError extends Error {
    constructor (message) {
        super(message);
        this.statusCode = 401;
    }
}

class ForbiddenError extends Error {
    constructor (message) {
        super(message);
        this.statusCode = 403;
    }
}

class NotFoundError extends Error {
    constructor (message) {
        super(message);
        this.statusCode = 404;
    }
}

class UserExistError extends Error {
    constructor(message) {
        super(message);
        this.statusCode = 200;
    }
}

class InvalidCredentialError extends Error {
    constructor(message) {
        super(message);
        this.statusCode = 401;
    }
}

module.exports = {
    BadRequestError,
    UnauthorizedError,
    ForbiddenError,
    NotFoundError,
    UserExistError,
    InvalidCredentialError
};