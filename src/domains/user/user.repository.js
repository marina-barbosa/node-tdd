const database = require('../../config/database'); 

const findAll = async () => {
  return await database('users').select();  // Acesse o db via app.locals
};

const create = async (user) => {
  return await database('users').insert(user).returning('*');  // Acesse o db via app.locals
};

module.exports = { findAll, create };
