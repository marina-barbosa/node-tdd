const userRepository = require('./user.repository');

const getAllUsers = async () => {
	return await userRepository.findAll();
};

const createUser = async (user) => {
	if (!user.name) return { error: 'Nome é obrigatório' };
	if (!user.email) return { error: 'Email é obrigatório' };
	if (!user.password) return { error: 'Senha é obrigatório' };

	const existingUser = await userRepository.findByEmail(user.email);
	if (existingUser) {
		return { error: 'Email já está em uso' };
	}

	return await userRepository.create(user);
};

module.exports = { getAllUsers, createUser };
