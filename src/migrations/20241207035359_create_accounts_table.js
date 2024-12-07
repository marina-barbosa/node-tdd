/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => {
	return knex.schema.createTable('accounts', (table) => {
		table.increments('id').primary(); // ID único e auto incrementado
		table.string('name', 255).notNullable(); // Nome do usuário
		table.integer('user_id').notNullable().references('id').inTable('users');
	});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => {
	return knex.schema.dropTable('accounts');
};
