const dotenv = require('dotenv');
dotenv.config();

const databaseConnection = {
	host: '127.0.0.1',
	port: 5432,
	user: 'postgres',
	password: '1234',
	database: 'db_node_tdd',
};

module.exports = {
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
			directory: './migrations',
		},
		seeds: {
			directory: './seeds',
		},
	},
};
