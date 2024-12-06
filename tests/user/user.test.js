const request = require('supertest');
const app = require('../src/app');

test('deve listar todos os users', () => {
	return request(app)
		.get('/users')
		.then((response) => {
			expect(response.status).toBe(200);
			expect(response.body).toHaveLength(2);
			expect(response.body[0]).toHaveProperty('name', 'Isaac Doe');
		});
});

test('deve inserir user com sucesso', () => {
	return request(app)
		.post('/users')
		.send({
			name: 'Dexter Morgan',
			email: 'dexter@gmail.com',
		})
		.then((response) => {
			expect(response.status).toBe(201);
			expect(response.body).toHaveProperty('name', 'Dexter Morgan');
			expect(response.body).toHaveProperty('email', 'dexter@gmail.com');
		});
});
