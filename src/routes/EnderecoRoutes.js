const express = require('express');
const EnderecoController = require('../controllers/EnderecoController');
const router = express.Router();

const enderecoController = new EnderecoController();

// Rota para criar um endereço
router.post('/', (req, res) => enderecoController.createEndereco(req, res));

// Rota para listar os endereços de um cliente
router.get('/cliente/:clienteId', (req, res) => enderecoController.getEnderecosByCliente(req, res));

// Rota para atualizar um endereço
router.put('/:id', (req, res) => enderecoController.updateEndereco(req, res));

// Rota para deletar um endereço
router.delete('/:id', (req, res) => enderecoController.deleteEndereco(req, res));

module.exports = router;
