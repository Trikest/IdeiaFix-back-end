const express = require('express');
const SistemaDeAutenticacao = require('./SistemaDeAutenticacao');

class AuthController {
    constructor() {
      this.usuarioService = new UsuarioService();
    }
  
    // Método para verificar login
    async login(req, res) {
      try {
        const { email, senha } = req.body;
  
        // Tentar autenticar o usuário
        const usuario = await this.usuarioService.autenticar(email, senha);
  
        if (usuario) {
          console.log(`Login bem-sucedido para ${usuario.nome}.`);
          res.status(200).json({ message: 'Login bem-sucedido' });
        } else {
          console.log('Email ou senha incorretos.');
          res.status(400).json({ error: 'Email ou senha incorretos.' });
        }
      } catch (error) {
        res.status(500).json({ error: 'Erro ao realizar login' });
      }
    }
  
    // Método para registrar usuário
    async register(req, res) {
      try {
        const { nome, email, senha, fotoPerfil } = req.body;
  
        // Criar um novo usuário
        const usuario = await this.usuarioService.registrar(nome, email, senha, fotoPerfil);
  
        res.status(201).json({ message: 'Usuário registrado com sucesso', usuario });
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    }
  }
  
  module.exports = AuthController;
