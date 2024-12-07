const dotenv = require('dotenv');
const express = require('express');
const routes = require('./routes');
// const errorHandler = require('./middleware/errorHandler');
const database = require('./config/database');
const corsMiddleware = require('./middleware/corsMiddleware');
const loggerMiddleware = require('./middleware/loggerMiddleware');
const errorHandler = require('./errors/errorHandler');

dotenv.config();

const app = express();

// CORS
app.use(corsMiddleware);

// Middleware global de logging
app.use(loggerMiddleware);

app.use(express.json());

// Routes
app.use(routes);

// Error handling middleware
app.use(errorHandler);

// log database sql, ativar só quando for necessario, pois polui muito o terminal
database
	// .on('query', (query) => console.log(query.sql))
	// .on('query-response', (result) => console.log(result))
	.on('query-error', (error) => console.error(error));

module.exports = app;
