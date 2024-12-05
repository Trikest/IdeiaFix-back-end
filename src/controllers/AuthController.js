const express = require('express');
const SistemaDeAutenticacao = require('./SistemaDeAutenticacao');

const router = express.Router();
const sistemaAuth = new SistemaDeAutenticacao();

// Mock da lista de usuários (substitua com o banco de dados real)
let usuarios = [];

// Rota de login
router.post('/login', (req, res) => {
  const { email, senha } = req.body;
  
  if (sistemaAuth.verificarLogin(email, senha, usuarios)) {
    res.status(200).json({ message: 'Login bem-sucedido!' });
  } else {
    res.status(401).json({ message: 'Email ou senha incorretos.' });
  }
});

// Rota de registro
router.post('/register', async (req, res) => {
  const { nome, email, senha } = req.body;

  // Verificar se o usuário já existe
  const usuarioExistente = usuarios.find(user => user.getEmail() === email);
  if (usuarioExistente) {
    return res.status(400).json({ message: 'Usuário já cadastrado.' });
  }

  // Criar novo usuário (Exemplo simplificado, ajuste conforme seu model)
  const novoUsuario = {
    nome,
    email,
    senha,
    getEmail: () => email,
    getNome: () => nome,
  };

  usuarios.push(novoUsuario);

  // Enviar email de confirmação
  try {
    await sistemaAuth.enviarEmailConfirmacao(email);
    res.status(201).json({ message: 'Usuário cadastrado com sucesso!' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao enviar email de confirmação.' });
  }
});

module.exports = router;
