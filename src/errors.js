class AppError extends Error {
    static #setError (message) {
        return new Error(message);
    }

    static fieldRequired(fieldName) {
        return AppError.#setError(`Field "${fieldName}" is required`);
    }

    static nameRequired() {
        return AppError.#setError('No name specified');
    }

    static unsupportedFormat(format) {
        return AppError.#setError(`Unsupported format "${derivedFormat}"`);
    }

    static noFileToRead(filePath) {
        return AppError.#setError(`no file to read: ${filePath}`);
    }
}

module.exports = AppError;
