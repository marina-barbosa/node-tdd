const express = require('express');
const { findAll, create } = require('../domains/user/user.controller');

const router = express.Router();

router.get('/', findAll);
router.post('/', create);

module.exports = router;
