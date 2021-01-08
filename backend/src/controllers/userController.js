const connection = require('../database/connection');

const bcrypt = require('bcrypt');

var DateNow = new Date();

module.exports = {

    async index(request, response) {
        const users = await connection('users').select('id', 'name', 'email');
        if (users) {
            response.status(200).json(users);
        } else {
            response.status(200).json({ Alert: 'Nenhum usuário cadastrado no sistema' });
        }
    },

    async create(request, response) {
        const { name, email, password } = request.body;

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        const consult = await connection('users')
            .select('*')
            .where('email', email)
            .first();

        if (!consult) {
            const insertUser = await connection('users').insert({
                name,
                email,
                password: hash,
                created_at: DateNow,
                updated_at: DateNow
            });
            response.status(200).json({ Sucesso: "Usuário criado com sucesso!" })
        } else {
            response.status(404).json({ Erro: "E-mail já cadastrado!" })
        }
    },

    async login(request, response) {
        const { email, password } = request.body;

        const consult = await connection('users')
            .select('name', 'email')
            .where('email', email)
            .first();

        const findPassword = await connection('users').select('password').where('email', email).first();
        if (consult) {
            if (findPassword) {
                const match = await bcrypt.compare(password, findPassword.password);
                if (match) {
                    return response.status(200).json(consult);
                } else {
                    return response.status(400).json({ Error: 'A senha não confere!' })
                }
            }
        } else {
            return response.status(404).json({ Error: 'Email não encontrado no sistema' })
        }

    }
}