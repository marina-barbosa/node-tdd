const findAll = (_, res) => {
	res.status(200).json([
		{
			name: 'Isaac Doe',
			email: 'isaaclovehortencia@gmail.com',
		},
		{
			name: 'Hortência Flores',
			email: 'hortencia@gmail.com',
		},
	]);
};

const create = (req, res) => {
	const { name, email } = req.body;
	res.status(201).json({ name, email });
};

module.exports = { findAll, create };
