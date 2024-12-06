/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
	return knex.schema.createTable('users', function (table) {
		table.increments('id').primary(); // ID único e auto incrementado
		table.string('name', 255).notNullable(); // Nome do usuário
		table.string('email', 255).unique().notNullable(); // Email único
		table.string('password', 255).notNullable(); // Senha do usuário
		table.timestamps(true, true); // created_at e updated_at automáticos
	});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
	return knex.schema.dropTable('users'); // Remove a tabela
};
