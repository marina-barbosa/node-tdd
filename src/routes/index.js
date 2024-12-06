const express = require('express');
const userRoutes = require('./user.routes');

const router = express.Router();

router.get('/', (_, res) => {
	res.status(200).send('Hello World!');
});

router.use('/users', userRoutes);

module.exports = router;
