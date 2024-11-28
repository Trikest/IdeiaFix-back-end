const express = require('express');
const PrismaUserRepository = require('../repositories/prismaUserRepository');
const UserService = require('../services/UserService');
const UserController = require('../controllers/UserController');

const router = express.Router();

const userRepository = new PrismaUserRepository();
const userService = new UserService(userRepository);
const userController = new UserController(userService);

// Rotas
router.post('/', (req, res) => userController.createUser(req, res));
router.get('/:id', (req, res) => userController.getUserById(req, res));
router.get('/', (req, res) => userController.getAllUsers(req, res));
router.put('/:id', (req, res) => userController.updateUser(req, res));
router.delete('/:id', (req, res) => userController.deleteUser(req, res));
router.get('/search', (req, res) => userController.searchUsers(req, res));

module.exports = router;
