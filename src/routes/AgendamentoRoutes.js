const express = require('express');
const AgendamentoController = require('../controllers/AgendamentoController');
const router = express.Router();

const agendamentoController = new AgendamentoController();

// Rota para criar um agendamento
router.post('/', (req, res) => agendamentoController.createAgendamento(req, res));

// Rota para listar os agendamentos de um cliente
router.get('/cliente/:clienteId', (req, res) => agendamentoController.getAgendamentosByCliente(req, res));

// Rota para atualizar um agendamento
router.put('/:id', (req, res) => agendamentoController.updateAgendamento(req, res));

// Rota para deletar um agendamento
router.delete('/:id', (req, res) => agendamentoController.deleteAgendamento(req, res));

module.exports = router;
