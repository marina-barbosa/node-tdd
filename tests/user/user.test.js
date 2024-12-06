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

test('deve inserir user com sucesso', () => {
  const email = `${Date.now()}@gmail.com`;
	return request(app)
		.post('/api/users')
		.send({
			name: 'Jest',
			email,
      password: '123456Bb*'
		})
		.then((response) => {
			expect(response.status).toBe(201);
      const user = response.body[0];
			expect(user).toHaveProperty('name', 'Jest');
			expect(user).toHaveProperty('email', email);
		});
});
