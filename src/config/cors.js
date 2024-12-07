// Carregando variáveis de ambiente
const dotenv = require('dotenv');
dotenv.config();

const allowedOrigins = process.env.ALLOWED_ORIGINS
	? process.env.ALLOWED_ORIGINS.split(',')
	: '*';

const corsOptions = {
	origin: (origin, callback) => {
    console.log(`CORS allowedOrigins: ${allowedOrigins}`);
		// Se allowedOrigins for '*', permita qualquer origem
		if (allowedOrigins === '*') {
			callback(null, true);
		} else if (!origin || allowedOrigins.includes(origin)) {
			// Verifica se a origem está na lista permitida			
			callback(null, true);
		} else {
			callback(new Error('Not allowed by CORS'));
		}
	},
	methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
	allowedHeaders: ['Content-Type', 'Authorization'], // Headers permitidos
	credentials: true, // Permitir envio de cookies
};

module.exports = corsOptions;
