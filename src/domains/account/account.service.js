const accountRepository = require('./account.repository');

const createAccount = async (account) => {
  if (!account.name) return { error: 'Nome é obrigatório' };
  if (!account.user_id) return { error: 'User_id é obrigatório' };
  return await accountRepository.create(account);
};

module.exports = { createAccount };