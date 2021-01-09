var DataHoje = new Date();
exports.up = function(knex){
    return knex.schema.createTable('tweets', table => {     
        table.increments('tweet_id');
        table.integer('user_id').notNullable();         
        table.string('text').notNullable();          
        table.string('created_at').defaultTo(DataHoje);
        table.string('updated_at').defaultTo(DataHoje);       
    });
}

exports.down = function(knex){
    return knex.schema.dropTable('tweets');
}