const express = require('express');
const userRoutes = require('./user.routes');
const accountRoutes = require('./account.routes');

const router = express.Router();

router.get('/', (_, res) => {
	res.status(200).send('Hello World!');
});

router.use('/api/users', userRoutes);
router.use('/api/accounts', accountRoutes);

module.exports = router;
