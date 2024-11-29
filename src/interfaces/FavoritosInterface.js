const FavoritosInterface = require('../interfaces/FavoritosInterface');

class FavoritosRepository extends FavoritosInterface {
  constructor() {
    super();
    this.favoritos = []; // Simulação de um banco de dados em memória
  }

  adicionarFavorito(favorito) {
    this.favoritos.push(favorito);
    return favorito;
  }

  removerFavorito(id) {
    const index = this.favoritos.findIndex(f => f.id === id);
    if (index !== -1) {
      this.favoritos.splice(index, 1);
      return true;
    }
    return false;
  }

  listarFavoritosPorUsuario(usuarioId) {
    return this.favoritos.filter(f => f.usuarioId === usuarioId);
  }
}

module.exports = FavoritosRepository;
