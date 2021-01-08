const { json } = require('express');
const { count, distinct } = require('../database/connection');
const connection = require('../database/connection');

module.exports = {
    async following(request, response) { // quem estou seguindo ? 
        const user_id = request.headers.user_id;

        const following = await connection('followers')
            .select('user_id_follower')
            .where('user_id', user_id);

        const [count] = await connection('followers')
            .count()
            .where('user_id', user_id);

        const serializedFollowing = [
            ...following,
            count
        ]

        if (following) {
            return response.status(200).json(serializedFollowing);
        }
    },

    async create(request, response) {
        const user_id = request.headers.user_id;

        const { user_id_follower } = request.body;

        const exists = await connection('followers')
            .select('*')
            .where('user_id', user_id)
            .where('user_id_follower', user_id_follower)
            .first();

        if (!exists) {
            const setFollower = await connection('followers').insert({
                user_id,
                user_id_follower
            });
            return response.status(200).json(setFollower);
        } else {
            return response.status(400).json({ Error: 'Você já é seguidor desse usuário!' });
        }
    },

    async followers(request, response) {
        const user_id = request.headers.user_id;

        const followers = await connection('followers')
        .select('*')
        .where('user_id_follower', user_id);

        if (followers) {
            return response.status(200).json(followers);
        }
    }
}