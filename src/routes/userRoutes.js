const express = require('express');
const PrismaUserRepository = require('../repositories/prismaUserRepository');
const UserService = require('../services/UserService');
const UserController = require('../controllers/UserController');
const AuthController = require('../controllers/AuthController');
const authenticateToken = require('../middlewares/authenticateToken');

const router = express.Router();

// Inicialização de repositórios, serviços e controladores
const userRepository = new PrismaUserRepository();
const userService = new UserService(userRepository);
const userController = new UserController(userService);
const authController = new AuthController(userService);

// Rotas públicas
router.post('/', (req, res) => userController.createUser(req, res)); // Registro
router.post('/login', (req, res) => authController.login(req, res)); // Login
router.get('/', (req, res) => userController.getAllUsers(req, res)); // Lista pública

// Rotas protegidas
router.get('/:id', authenticateToken, (req, res) => userController.getUserById(req, res));
router.put('/:id', authenticateToken, (req, res) => userController.updateUser(req, res));
router.delete('/:id', authenticateToken, (req, res) => userController.deleteUser(req, res));
router.get('/search', authenticateToken, (req, res) => userController.searchUsers(req, res));

module.exports = router;
