const userRepository = require('./user.repository');
const CustomError = require('../../errors/CustomError');

const getAllUsers = async () => {
	return await userRepository.findAll();
};

const createUser = async (user) => {
	if (!user.name.trim()) throw new CustomError('Nome é obrigatório', 400);
	if (!user.email.trim()) throw new CustomError('Email é obrigatório', 400);
	if (!user.password.trim()) throw new CustomError('Senha é obrigatória', 400);

	const existingUser = await userRepository.findByEmail(user.email);
	if (existingUser) {
		throw new CustomError('Email já está em uso', 400);
	}

	return await userRepository.create(user);
};

module.exports = { getAllUsers, createUser };
