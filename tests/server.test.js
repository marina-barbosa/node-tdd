const supertest = require('supertest');
const request = supertest('http://localhost:3333');

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

test('deve responder na porta 3333 com return', () => {
	// O RETURN garante que o Jest espere a execução dessa Promise antes de concluir o teste. É essencial usá-lo em operações assíncronas para evitar falsos positivos e garantir que as verificações realmente sejam feitas antes do teste terminar.
	return request.get('/').then((response) => {
		expect(response.status).toBe(200);
		expect(response.status).not.toBe(400);
	});
});

test('deve responder na porta 3333 com async await', async () => {
	const response = await request.get('/');
	expect(response.status).toBe(200);
	expect(response.status).not.toBe(400);
});
