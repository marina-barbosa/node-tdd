const userService = require('./user.service');

const findAll = async (_, res, next) => {
	try {
		const users = await userService.getAllUsers();
		res.status(200).json(users);
	} catch (err) {
		next(err);
	}
};

const create = async (req, res, next) => {
	try {
		const { name, email } = req.body;
		const newUser = await userService.createUser({ name, email });
		res.status(201).json(newUser);
	} catch (err) {
		next(err);
	}
};

module.exports = { findAll, create };
