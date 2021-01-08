const connection = require('../database/connection');

const bcrypt = require('bcrypt');

var DateNow = new Date();

module.exports = {

    async index(request, response) {
        const tweets = await connection('tweets').select('*');
        if (tweets) {
            response.status(200).json(tweets);
        } else {
            response.status(200).json({ Alert: 'Nenhum usuário cadastrado no sistema' });
        }
    },

    async create(request, response) {
        const { text } = request.body;
        const user_id = request.headers.id;
        const user_name = request.headers.name;
        const user_email = request.headers.email;

        if (user_id) {
            const createTweet = await connection('tweets').insert({
                text,
                user_id,
                user_name,
                user_email
            });

            return response.status(200).json(createTweet);
        } else {
            return response.status(400).json({ Error: 'Deu algum erro!' });
        }
    },

    async show(request, response) {

    }
}