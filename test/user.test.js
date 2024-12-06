const request = require('supertest');
const app = require('../src/app');

test('deve listar todos os users', () => {
  return request(app).get('/users').then(response => {
    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(2);
    expect(response.body[0]).toHaveProperty('name', 'Isaac Doe');
  });
})