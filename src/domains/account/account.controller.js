const accountService = require('./account.service');

const create = async (req, res, next) => {
  try {
    const { name, user_id } = req.body;
    const newAccount = await accountService.createAccount({ name, user_id });
    res.status(201).json(newAccount);
  } catch (err) {
    next(err);
  }
};

module.exports = { create };