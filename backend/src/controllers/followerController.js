const connection = require('../database/connection');

module.exports = {
    async following(request, response) { // quem estou seguindo ? 
        const user_id = request.headers.user_id;

        const following = await connection('followers')
            .select('follow_id_user')
            .where('user_id', user_id); 

        if (following) {
            return response.status(200).json(following);
        }
    },

    async create(request, response) {
        const user_id = request.headers.user_id;

        const { follow_id_user } = request.body;

        const exists = await connection('followers')
            .select('*')
            .where('user_id', user_id)
            .where('follow_id_user', follow_id_user)
            .first();

        if (!exists) {
            const setFollower = await connection('followers').insert({
                user_id,
                follow_id_user
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
        .where('follow_id_user', user_id);

        if (followers) {
            return response.status(200).json(followers);
        }
    }
}