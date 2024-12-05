const express = require('express');
const AuthController = require('../controllers/AuthController');
const UserService = require('../services/UserService');
const userRepository = require('../repositories/prismaUserRepository'); // Adicione o repositório

const authController = new AuthController(new UserService(userRepository));

const router = express.Router();

router.post('/login', (req, res) => authController.login(req, res));

module.exports = router;
