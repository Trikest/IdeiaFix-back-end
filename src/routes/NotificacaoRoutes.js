const express = require('express');
const NotificacaoController = require('../controllers/NotificacaoController');
const router = express.Router();

const notificacaoController = new NotificacaoController();

// Rota para criar uma notificação
router.post('/', (req, res) => notificacaoController.createNotificacao(req, res));

// Rota para listar notificações de um usuário
router.get('/usuario/:usuarioId', (req, res) => notificacaoController.getNotificacoesByUsuario(req, res));

// Rota para atualizar uma notificação
router.put('/:id', (req, res) => notificacaoController.updateNotificacao(req, res));

// Rota para deletar uma notificação
router.delete('/:id', (req, res) => notificacaoController.deleteNotificacao(req, res));

module.exports = router;
