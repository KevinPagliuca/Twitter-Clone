const express = require('express');

const Routes = express.Router();

const TweetController = require('./controllers/tweetController');
const UserController = require('./controllers/userController');

Routes.post('/login', UserController.login);
Routes.post('/register', UserController.create);
Routes.get('/listar', UserController.index);

Routes.post('/createTweet', TweetController.create);

module.exports = Routes;