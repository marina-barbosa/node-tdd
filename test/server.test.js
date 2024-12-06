const supertest = require('supertest');
const request = supertest('http://localhost:3333');

test('deve responder na porta 3333', () => {
  // O RETURN garante que o Jest espere a execução dessa Promise antes de concluir o teste. É essencial usá-lo em operações assíncronas para evitar falsos positivos e garantir que as verificações realmente sejam feitas antes do teste terminar.
	return request.get('/').then((response) => {
		expect(response.status).toBe(200);
		expect(response.status).not.toBe(400);
	});
});

test('deve responder na porta 3333', async () => {
	const response = await request.get('/');
	expect(response.status).toBe(200);
	expect(response.status).not.toBe(400);
});
