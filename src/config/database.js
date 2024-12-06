// src/config/database.js
const knex = require('knex');
const knexConfig = require('../config/knexfile');
const dotenv = require('dotenv');

dotenv.config();

const database = knex(knexConfig[process.env.NODE_ENV || 'test']);

module.exports = database;
