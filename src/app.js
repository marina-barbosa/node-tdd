const dotenv = require('dotenv');
const express = require('express');
const app = express();

dotenv.config();
app.use(express.json());

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

app.post('/users', (req, res) => {
	const { name, email } = req.body;
	res.status(201).json({ name, email });
});

module.exports = app;
