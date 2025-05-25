const express = require('express');
const ServicoController = require('../controllers/servicoController');

const router = express.Router();
const servicoController = new ServicoController();

router.post('/', (req, res) => servicoController.criarServico(req, res));
router.get('/', (req, res) => servicoController.listarServicos(req, res));
router.get('/:id', (req, res) => servicoController.buscarServicoPorId(req, res));
router.put('/:id', (req, res) => servicoController.atualizarServico(req, res));
router.delete('/:id', (req, res) => servicoController.deletarServico(req, res));

module.exports = router;