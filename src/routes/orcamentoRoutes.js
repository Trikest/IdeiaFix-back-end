const express = require('express');
const OrcamentoController = require('../controllers/OrcamentoController');
const router = express.Router();

const orcamentoController = new OrcamentoController();

// Criar orçamento
router.post('/', (req, res) => orcamentoController.criarOrcamento(req, res));

// Listar todos os orçamentos
router.get('/', (req, res) => orcamentoController.listarOrcamentos(req, res));

// Buscar orçamento por ID
router.get('/:id', (req, res) => orcamentoController.buscarOrcamentoPorId(req, res));

// Atualizar orçamento
router.put('/:id', (req, res) => orcamentoController.atualizarOrcamento(req, res));

// Deletar orçamento
router.delete('/:id', (req, res) => orcamentoController.deletarOrcamento(req, res));

module.exports = router;
