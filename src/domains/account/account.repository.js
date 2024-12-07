const database = require('../../config/database');

const create = async (account) => {
  return await database('accounts').insert(account).returning('*');
};

module.exports = { create };