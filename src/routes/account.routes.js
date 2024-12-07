const express = require('express');
const { create } = require('../domains/account/account.controller');

const router = express.Router();

// router.get('/', findAll);
router.post('/', create);

module.exports = router;
