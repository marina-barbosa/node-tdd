const app = require('express')();

app.get('/', (_, res) => {
	res.status(200).send('Hello World!');
});

app.get('/users', (_, res) => {
  res.status(200).json([
    {
      name: 'Isaac Doe',
      email: 'isaaclovehortencia@gmail.com',
    },
    {
      name: 'Hortência Flores',
      email: 'hortencia@gmail.com',
    },
  ]);
});

module.exports = app;
