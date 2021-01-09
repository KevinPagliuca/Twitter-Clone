const { orWhereRaw, select } = require('../database/connection');
const connection = require('../database/connection');

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
        const user_id = request.headers.user_id;

        if (user_id) {
            const createTweet = await connection('tweets').insert({
                text,
                user_id
            });

            return response.status(200).json(createTweet);
        } else {
            return response.status(400).json({ Error: 'Deu algum erro!' });
        }
    },

    async show(request, response) {
        const user_id = request.headers.user_id;

        const myTweets = await connection('tweets')
            .select('*')
            .where('user_id', user_id);

        if (myTweets) {
            response.status(200).json(myTweets);
        } else {
            response.status(200).json({ Alert: 'Nenhum usuário cadastrado no sistema' });
        }
    },

    async networkTweets(request, response) {
        const user_id = request.headers.user_id; 

        const followersQuery = connection('followers').where('user_id', user_id).select('follow_id_user');

        const networkTweets = await connection('tweets')
            .join('users', 'tweets.user_id', '=', 'users.id')
            .where('tweets.user_id', user_id)
            .orWhere('user_id', 'in', followersQuery)
            .select('tweets.*');

        if (networkTweets) {
            return response.status(200).json(networkTweets);
        } else {
            return response.status(400).json({ Error: 'Whoops' });
        }

    }

}