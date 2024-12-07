// Carregando variáveis de ambiente
const dotenv = require('dotenv');
dotenv.config();

const allowedOrigins =
	process.env.ALLOWED_ORIGINS && process.env.ALLOWED_ORIGINS !== '*'
		? process.env.ALLOWED_ORIGINS.split(',')
		: []; // Array vazio se for '*' ou não houver valor em ALLOWED_ORIGINS

const corsOptions = {
	origin: (origin, callback) => {
		console.log(`CORS allowedOrigins: ${process.env.ALLOWED_ORIGINS}`);

		// Se allowedOrigins for vazio, permite qualquer origem
		if (allowedOrigins.length === 0 || allowedOrigins.includes(origin)) {
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
