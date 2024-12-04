class Favorito {
    constructor(id, usuarioId, itemId) {
      this.id = id;
      this.usuarioId = usuarioId;
      this.itemId = itemId;
    }
  
    // Métodos getters para acessar os valores dos atributos
    getId() {
      return this.id;
    }
  
    getUsuarioId() {
      return this.usuarioId;
    }
  
    getItemId() {
      return this.itemId;
    }
  
    // Método para alterar o ID do item associado ao favorito
    alterarItemId(novoItemId) {
      this.itemId = novoItemId;
    }
  
    // Método para verificar se o favorito é do usuário correto
    ehFavoritoDeUsuario(usuarioId) {
      return this.usuarioId === usuarioId;
    }
  }
  
  module.exports = Favorito;
  