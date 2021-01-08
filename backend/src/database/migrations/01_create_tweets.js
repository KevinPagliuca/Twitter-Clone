var DataHoje = new Date();
exports.up = function(knex){
    return knex.schema.createTable('tweets', table => {
        table.increments('id').primary();        
        table.string('text').notNullable();  
        table.integer('user_id').notNullable();         
        table.string('user_name').notNullable();         
        table.string('user_email').notNullable();         
        table.string('created_at').defaultTo(DataHoje);
        table.string('updated_at').defaultTo(DataHoje);       
    });
}

exports.down = function(knex){
    return knex.schema.dropTable('tweets');
}