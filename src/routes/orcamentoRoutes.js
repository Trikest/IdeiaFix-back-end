const express = require('express');
const OrcamentoController = require('../controllers/OrcamentoController');
const router = express.Router();
const authenticateToken = require('../middlewares/authenticateToken');
const checkFuncionario = require('../middlewares/checkFuncionario');
const orcamentoController = new OrcamentoController();

// Criar orçamento
router.post('/',authenticateToken, (req, res) => orcamentoController.criarOrcamento(req, res));
// router.js
router.get('/cliente/:clienteId',authenticateToken, (req, res) => orcamentoController.getOrcamentosByCliente(req, res));

// Listar todos os orçamentos
router.get('/',authenticateToken, checkFuncionario,(req, res) => orcamentoController.listarOrcamentos(req, res));

// Buscar orçamento por ID
router.get('/:id', (req, res) => orcamentoController.buscarOrcamentoPorId(req, res));

// Atualizar orçamento
router.put('/:id',authenticateToken, checkFuncionario, (req, res) => orcamentoController.atualizarOrcamento(req, res));

// Deletar orçamento
router.delete('/:id', (req, res) => orcamentoController.deletarOrcamento(req, res));

module.exports = router;
