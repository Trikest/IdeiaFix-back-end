const express = require('express');
const AuthController = require('../controllers/AuthController');
const UserService = require('../services/UserService');
const PrismaUserRepository = require('../repositories/prismaUserRepository'); // corrige aqui

const userRepository = new PrismaUserRepository(); // instância criada corretamente
const userService = new UserService(userRepository);
const authController = new AuthController(userService);

const router = express.Router();

router.post('/login', (req, res) => authController.login(req, res));
router.post('/forgot-password', (req, res) => authController.forgotPassword(req, res));
router.post('/reset-password/:token', (req, res) => authController.resetPassword(req, res));

module.exports = router;
