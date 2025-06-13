const express = require('express');
const authenticateToken = require('../middlewares/authenticateToken');
const checkFuncionario = require('../middlewares/checkFuncionario');

const router = express.Router();

// Exemplo: rota que só um funcionário pode acessar
router.get('/painel-funcionario', authenticateToken, checkFuncionario, (req, res) => {
  res.json({
    message: `Bem-vindo, ${req.user.nome}. Você é um funcionário com cargo: ${req.user.Funcionario.cargo}`,
  });
});

module.exports = router;