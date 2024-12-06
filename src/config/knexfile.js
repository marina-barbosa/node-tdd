const dotenv = require('dotenv');
dotenv.config();

const databaseConnection = {
	host: process.env.DB_HOST || '127.0.0.1',
	port: process.env.DB_PORT || 5432,
	user: process.env.DB_USER || 'postgres',
	password: process.env.DB_PASSWORD || '1234',
	database: process.env.DB_NAME || 'db_node_tdd',
};

module.exports = {
	test: {
		client: 'pg',
		connection: databaseConnection,
		migrations: {
			directory: '../migrations',
		},
		seeds: {
			directory: '../seeds',
		},
	},
	development: {
		client: 'pg',
		connection: databaseConnection,
		migrations: {
			directory: '../migrations',
		},
		seeds: {
			directory: '../seeds',
		},
	},
	production: {
		client: 'pg',
		connection: databaseConnection,
		migrations: {
			directory: '../migrations',
		},
		seeds: {
			directory: '../seeds',
		},
	},
};
