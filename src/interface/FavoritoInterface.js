const FavoritoController = require('./favoritocontroller'); // Importando o controller

class FavoritoInterface {
  constructor() {
    this.favoritoController = new FavoritoController(); // Instanciando o controller
  }

  // Método para adicionar um favorito
  adicionarFavorito(id, usuarioId, itemId) {
    const favorito = this.favoritoController.adicionarFavorito(id, usuarioId, itemId);
    console.log(`Favorito adicionado: ${JSON.stringify(favorito)}`);
  }

  // Método para remover um favorito
  removerFavorito(id) {
    this.favoritoController.removerFavorito(id);
    console.log(`Favorito ${id} removido.`);
  }

  // Método para listar todos os favoritos
  listarFavoritos() {
    const favoritos = this.favoritoController.listarFavoritos();
    console.log(`Favoritos: ${JSON.stringify(favoritos)}`);
    return favoritos;
  }
}

module.exports = FavoritoInterface;
