var DataHoje = new Date();
exports.up = function (knex) {
    return knex.schema.createTable('followers', table => {  
        table.increments('id');     
        table.integer('user_id').notNullable();
        table.integer('follow_id_user').notNullable();
        table.string('followed_at').defaultTo(DataHoje);
    });
}

exports.down = function (knex) {
    return knex.schema.dropTable('followers');
}