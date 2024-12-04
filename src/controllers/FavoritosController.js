const { Favorito } = require('./favorito'); // Importando o modelo de favorito

class FavoritoController {
  constructor() {
    this.favoritos = [];
  }

  // Adicionar favorito
  adicionarFavorito(id, usuarioId, itemId) {
    const novoFavorito = new Favorito(id, usuarioId, itemId);
    this.favoritos.push(novoFavorito);
    console.log(`Favorito ${id} adicionado com sucesso.`);
    return novoFavorito;
  }

  // Remover favorito
  removerFavorito(id) {
    const index = this.favoritos.findIndex((f) => f.getId() === id);
    if (index !== -1) {
      this.favoritos.splice(index, 1);
      console.log(`Favorito ${id} removido com sucesso.`);
    } else {
      console.log(`Favorito ${id} não encontrado.`);
    }
  }

  // Listar todos os favoritos
  listarFavoritos() {
    return this.favoritos.map((favorito) => ({
      id: favorito.getId(),
      usuarioId: favorito.getUsuarioId(),
      itemId: favorito.getItemId(),
    }));
  }
}

module.exports = FavoritoController;
