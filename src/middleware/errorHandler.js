const errorHandler = (err, req, res, next) => {
	console.error(err); // Log para debug
	res
		.status(500)
		.json({ error: 'Internal Server Error', message: err.message });
};

module.exports = errorHandler;
