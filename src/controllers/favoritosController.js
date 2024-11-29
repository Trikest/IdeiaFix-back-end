const Favorito = require('../models/Favorito');
const FavoritosRepository = require('../repositories/FavoritosRepository');

const favoritosRepository = new FavoritosRepository();

const adicionarFavorito = (req, res) => {
  const { id, usuarioId, itemId, tipo } = req.body;
  const novoFavorito = new Favorito(id, usuarioId, itemId, tipo);
  const favorito = favoritosRepository.adicionarFavorito(novoFavorito);
  res.status(201).send({ message: 'Favorito adicionado com sucesso!', favorito });
};

const removerFavorito = (req, res) => {
  const { id } = req.params;
  const removido = favoritosRepository.removerFavorito(parseInt(id));
  if (removido) {
    res.status(200).send({ message: 'Favorito removido com sucesso!' });
  } else {
    res.status(404).send({ message: 'Favorito não encontrado!' });
  }
};

const listarFavoritos = (req, res) => {
  const { usuarioId } = req.params;
  const favoritos = favoritosRepository.listarFavoritosPorUsuario(parseInt(usuarioId));
  res.status(200).send({ favoritos });
};

module.exports = { adicionarFavorito, removerFavorito, listarFavoritos };
