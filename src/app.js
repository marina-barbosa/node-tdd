const app = require('express')();

app.get('/', (_, res) => {
	res.status(200).send('Hello World!');
});

module.exports = app;
