var DataHoje = new Date();
exports.up = function (knex) {
    return knex.schema.createTable('followers', table => {
        table.increments('id').primary();
        table.integer('user_id_follower').notNullable();
        table.integer('user_id').notNullable();
        table.string('followed_at').defaultTo(DataHoje);
    });
}

exports.down = function (knex) {
    return knex.schema.dropTable('followers');
}