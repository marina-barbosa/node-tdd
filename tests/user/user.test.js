const request = require('supertest');
const app = require('../../src/app');

// test.skip('deve...
// test.todo('deve...
// test.only('deve...

test('deve listar todos os users', () => {
	return request(app)
		.get('/api/users')
		.then((response) => {
			expect(response.status).toBe(200);
			expect(response.body.length).toBeGreaterThan(1);
			expect(response.body[0]).toHaveProperty('id');
			expect(response.body[0]).toHaveProperty('name');
			expect(response.body[0]).toHaveProperty('email');
		});
});

const email = `${Date.now()}@gmail.com`;
test('deve inserir user com sucesso', () => {
	return request(app)
		.post('/api/users')
		.send({
			name: 'Jest',
			email,
			password: '123456Bb*',
		})
		.then((response) => {
			expect(response.status).toBe(201);
			const user = response.body[0];
			expect(user).toHaveProperty('name', 'Jest');
			expect(user).toHaveProperty('email', email);
		});
});

test('não deve inserir user sem name', () => {
	return request(app)
		.post('/api/users')
		.send({
			email: 'd2p6o@example.com',
			password: '123456Bb*',
		})
		.then((response) => {
			expect(response.status).toBe(400);
			expect(response.body).toHaveProperty('error');
			expect(response.body.error).toBe('Nome é obrigatório');
		});
});

test('não deve inserir user sem email', async () => {
	const result = await request(app).post('/api/users').send({
		name: 'Jest',
		password: '123456Bb*',
	});

	expect(result.status).toBe(400);
	expect(result.body).toHaveProperty('error');
	expect(result.body.error).toBe('Email é obrigatório');
});

test('não deve inserir user sem password', (done) => {
	request(app)
		.post('/api/users')
		.send({
			name: 'Jest',
			email: 'd2p6o@example.com',
		})
		.then((response) => {
			expect(response.status).toBe(400);
			expect(response.body).toHaveProperty('error');
			expect(response.body.error).toBe('Senha é obrigatório');
			done();
		});
});

test('não deve inserir user com email duplicado', async () => {
	const result = await request(app).post('/api/users').send({
		name: 'Jest',
		email,
		password: '123456Bb*',
	});

	expect(result.status).toBe(400);
	expect(result.body).toHaveProperty('error');
	expect(result.body.error).toBe('Email já está em uso');
});
