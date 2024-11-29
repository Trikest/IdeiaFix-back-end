const express = require('express');
const { adicionarFavorito, removerFavorito, listarFavoritos } = require('../controllers/favoritosController');

const router = express.Router();

// Rota para adicionar um favorito
router.post('/', adicionarFavorito);

// Rota para remover um favorito
router.delete('/:id', removerFavorito);

// Rota para listar favoritos de um usuário
router.get('/:usuarioId', listarFavoritos);

module.exports = router;
