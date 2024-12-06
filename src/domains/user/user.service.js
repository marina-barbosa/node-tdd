const userRepository = require('./user.repository');

const getAllUsers = async () => {
	return await userRepository.findAll();
};

const createUser = async (user) => {
	return await userRepository.create(user);
};

module.exports = { getAllUsers, createUser };
