const express = require('express');
const FavoritoInterface = require('./favoritointerface'); // Importando a interface do Favorito
const router = express.Router();

// Instanciando a interface
const favoritoInterface = new FavoritoInterface();

// Rota para adicionar um favorito
router.post('/favoritos', (req, res) => {
  const { id, usuarioId, itemId } = req.body;
  
  if (!id || !usuarioId || !itemId) {
    return res.status(400).json({ mensagem: 'ID, usuário e item são obrigatórios.' });
  }

  try {
    favoritoInterface.adicionarFavorito(id, usuarioId, itemId);
    res.status(201).json({ mensagem: 'Favorito adicionado com sucesso!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensagem: 'Erro ao adicionar favorito.' });
  }
});

// Rota para remover um favorito
router.delete('/favoritos/:id', (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ mensagem: 'ID do favorito é obrigatório.' });
  }

  try {
    favoritoInterface.removerFavorito(id);
    res.status(200).json({ mensagem: `Favorito ${id} removido com sucesso.` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensagem: 'Erro ao remover favorito.' });
  }
});

// Rota para listar todos os favoritos
router.get('/favoritos', (req, res) => {
  try {
    const favoritos = favoritoInterface.listarFavoritos();
    res.status(200).json(favoritos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensagem: 'Erro ao listar favoritos.' });
  }
});

module.exports = router;
