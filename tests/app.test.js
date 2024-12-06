const request = require('supertest');
const app = require('../src/app');

const knex = require('knex');
const knexConfig = require('../src/config/knexfile');

let db;

beforeEach(() => {
	// Configura o knex para o ambiente de teste
	db = knex(knexConfig.test);
});

afterEach(() => {
	db.destroy(); // Fecha a conexão após cada teste
});

test('deve responder na raiz', () => {
	return request(app)
		.get('/')
		.then((response) => {
			expect(response.status).toBe(200);
		});
});
