const express = require('express');
const authController = require('../controllers/authController')


const userRouter = express.Router();


userRouter.route('/users').get(authController.getAllUsers);
userRouter.route('/signUp').post(authController.addUser);
userRouter.route('/login').get(authController.login);

module.exports = userRouter;