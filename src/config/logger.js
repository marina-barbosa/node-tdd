const pino = require('pino');
const path = require('node:path');
const fs = require('node:fs');
const rfs = require('rotating-file-stream');
const pinoPretty = require('pino-pretty');
require('dotenv').config();

/**
 * 🚨 Para lembrar:
 * Embora este logger salve os logs em arquivos locais,
 * o recomendado em ambientes modernos é usar stdout/stderr
 * e integrar logs a sistemas centralizados (ElasticSearch, Grafana, etc.).
 */

// Carregar variáveis do .env
const isTest = process.env.NODE_ENV === 'test';
const logLevel = process.env.LOG_LEVEL || 'info';
const logRotationInterval = process.env.LOG_ROTATION_INTERVAL || '1d';

if(logLevel === 'debug') {
  console.log('Ativando logs de debug...');
}

const logDirectory = path.join(__dirname, '../../log');

if (!fs.existsSync(logDirectory)) {
	fs.mkdirSync(logDirectory);
}

// Configuração de rotação de logs
const logStream = rfs.createStream('app.log', {
	interval: logRotationInterval, // Rotaciona a cada 1 dia
	path: logDirectory,
	compress: 'gzip', // Compacta os logs antigos
});

// Configuração do pino-pretty para desenvolvimento
const prettyStream = pinoPretty({
	colorize: true,
	translateTime: 'SYS:standard', 
	ignore: 'pid,hostname', 
});

// Instancia o Pino com a configuração de rotação
const logger = pino(
	{
		level: logLevel,
		timestamp: pino.stdTimeFunctions.isoTime,
	},
	isTest ? prettyStream : logStream, 
);

module.exports = logger;
