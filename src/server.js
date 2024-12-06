const express = require('express');
const app = express();

app.get('/', (_, res) => {
  res.status(200).send('Hello World!');
});

app.listen(3333, () => {
  console.log('Server rodando no http://localhost:3333');
});