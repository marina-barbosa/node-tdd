const dotenv = require('dotenv');
const express = require('express');
const knex = require('knex');
const knexConfig = require('./config/knexfile');
const routes = require('./routes');
const errorHandler = require('./middleware/errorHandler');

dotenv.config();

const app = express();

// Middlewares
app.use(express.json());

// Routes
app.use(routes);

// Error handling middleware
app.use(errorHandler);

module.exports = app;
