const database = require('../../config/database');

const findAll = async () => {
	return await database('users').select();
};

const findByEmail = async (email) => {
	return await database('users').where({ email }).first();
};

const create = async (user) => {
	return await database('users').insert(user).returning('*');
};

module.exports = { findAll, findByEmail, create };
