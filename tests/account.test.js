const request = require('supertest');
const app = require('../src/app');

const MAIN_ROUTE = '/api/accounts';
let user;

beforeAll(async () => {
  const response = await request(app).post('/api/users').send({
    name: 'User Account',
    email: `${Date.now()}@gmail.com`,	
    password: '123456Bb*',
  });
  user = response.body[0];
  console.log("User: ", user);
});

test('deve inserir uma nova conta com sucesso', () => {
	return request(app)
		.post(MAIN_ROUTE)
		.send({
			name: 'Acc Jest #1',
			user_id: user.id,
		})
		.then((response) => {
			expect(response.status).toBe(201);
			expect(response.body[0]).toHaveProperty('id');
			expect(response.body[0]).toHaveProperty('name');
			expect(response.body[0]).toHaveProperty('user_id');
      expect(response.body[0].name).toBe('Acc Jest #1');
		});
});

test('deve listar todas as contas', () => {
	return request(app)
		.get(MAIN_ROUTE)
		.then((response) => {
			expect(response.status).toBe(200);
			expect(response.body.length).toBeGreaterThan(1);
			expect(response.body[0]).toHaveProperty('id');
			expect(response.body[0]).toHaveProperty('name');
			expect(response.body[0]).toHaveProperty('user_id');
		});
});

test('não deve inserir uma nova conta sem name', async () => {
	const result = await request(app).post('/api/accounts').send({
		user_id: 1,
	});

	expect(result.status).toBe(400);
	expect(result.body).toHaveProperty('error');
	expect(result.body.error).toBe('Name é obrigatório');
});

test('deve alterar uma conta com sucesso', () => {
	return request(app)
		.put(`${MAIN_ROUTE}/1`)
		.send({
			name: 'Jest',
		})
		.then((response) => {
			expect(response.status).toBe(200);
			expect(response.body).toHaveProperty('id');
			expect(response.body).toHaveProperty('name');
			expect(response.body).toHaveProperty('user_id');
		});
});

test('deve remover uma conta com sucesso', () => {
	return request(app)
		.delete(`${MAIN_ROUTE}/1`)
		.then((response) => {
			expect(response.status).toBe(204);
		})
		.catch((error) => {
			console.error(error);
		});
});
