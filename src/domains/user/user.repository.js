const findAll = async () => {
	return await global.app.locals.db('users').select();
};

const create = async (user) => {
	return await global.app.locals.db('users').insert(user).returning('*');
};

module.exports = { findAll, create };
