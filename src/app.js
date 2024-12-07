const dotenv = require('dotenv');
const express = require('express');
const routes = require('./routes');
const errorHandler = require('./middleware/errorHandler');
const database = require('./config/database');

dotenv.config();

const app = express();

// Middlewares
app.use(express.json());

// Routes
app.use(routes);

// Error handling middleware
app.use(errorHandler);

// log database sql, ativar só quando for necessario, pois polui muito o terminal
// database
// 	.on('query', (query) => console.log(query.sql))
// 	.on('query-response', (result) => console.log(result))
// 	.on('query-error', (error) => console.error(error));

module.exports = app;
