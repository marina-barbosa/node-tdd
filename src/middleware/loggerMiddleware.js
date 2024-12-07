// src/middleware/loggerMiddleware.js
const pinoHttp = require('pino-http');
const logger = require('../config/logger');

// Middleware para registrar logs de requisições HTTP
const loggerMiddleware = pinoHttp({
	logger: logger,
});

module.exports = loggerMiddleware;

