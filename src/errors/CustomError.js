// src/errors/CustomError.js

class CustomError extends Error {
	constructor(message, statusCode, details = {}) {
		super(message);
		this.statusCode = statusCode;
		this.details = details;

		// Define o nome do erro como o nome da classe
		this.name = this.constructor.name;

		// Captura o stack trace
		if (Error.captureStackTrace) {
			Error.captureStackTrace(this, this.constructor);
		}
	}
}

module.exports = CustomError;
