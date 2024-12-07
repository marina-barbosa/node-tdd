const app = require('./app');
const logger = require('./config/logger');

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
	console.log(`🎉 Server rodando no http://localhost:${PORT} 🎈`);
  // logger.info(`Server running on port ${PORT}`);
});

// Captura de erros não tratados
process.on('uncaughtException', (err) => {
	logger.fatal({ err }, 'Uncaught Exception');
	process.exit(1);
});

process.on('unhandledRejection', (reason) => {
	logger.error({ reason }, 'Unhandled Rejection');
});

