var DataHoje = new Date();
exports.up = function (knex) {
    return knex.schema.createTable('followers', table => {
        table.increments('id').primary();
        table.string('id_user_follower').notNullable();
        table.string('id_user').notNullable();
        table.string('followed_at').defaultTo(DataHoje);
    });
}

exports.down = function (knex) {
    return knex.schema.dropTable('followers');
}