const express = require('express');

const Routes = express.Router();

const UserController = require('./controllers/userController');
const TweetController = require('./controllers/tweetController');
const followerController = require('./controllers/followerController');

Routes.post('/login', UserController.login); // Login de usuários.
Routes.post('/register', UserController.create); // Registrar usuários.
Routes.get('/listar', UserController.index); // Listar usuários.

Routes.post('/createTweet', TweetController.create); // Criar um Tweet.
Routes.get('/tweets', TweetController.index); // Listar todos os Tweets.
Routes.get('/myTweets', TweetController.show); // Listar Tweets de um usuário especifico.
Routes.get('/networkTweets', TweetController.networkTweets); // Listar Tweets de usuários que estão sendo seguidos.

Routes.get('/following', followerController.following); // Quem estou seguindo.
Routes.get('/getfollower', followerController.followers); // Quem me segue.
Routes.post('/setfollower', followerController.create); // Seguir alguém.

module.exports = Routes;