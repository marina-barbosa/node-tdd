// src/errors/errorHandler.js

const CustomError = require('./CustomError');
const logger = require('../config/logger');

const errorHandler = (err, req, res, next) => {
	// Se o erro não for uma instância de CustomError, cria um erro genérico
	let error = err;
	if (!(err instanceof CustomError)) {
		error = new CustomError('Erro interno do servidor', 500, {
			details: err.message || 'Erro desconhecido',
		});
	}

	// Log do erro com informações relevantes
	logger.error({
		err: error.message,
		stack: error.stack,
		url: req.originalUrl, // Log do URL da requisição
		method: req.method, // Log do método HTTP
		user: req.user || null, // Se tiver usuário autenticado, loga
	});

	// Enviar a resposta ao cliente
	res.status(error.statusCode || 500).json({
		message: error.message || 'Ocorreu um erro inesperado.',
		details: error.details || {},
	});
};

module.exports = errorHandler;
