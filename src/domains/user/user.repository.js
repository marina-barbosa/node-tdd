const database = require('../../config/database'); 

const findAll = async () => {
  return await database('users').select();
};

const create = async (user) => {
  return await database('users').insert(user).returning('*');
};

module.exports = { findAll, create };
