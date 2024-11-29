class Favorito {
    constructor(id, usuarioId, itemId, tipo) {
      this.id = id;            // Identificador do favorito
      this.usuarioId = usuarioId; // ID do usuário que favoritou
      this.itemId = itemId;    // ID do item favoritado
      this.tipo = tipo;        // Tipo do item (ex.: 'produto', 'artigo')
    }
  }
  
  module.exports = Favorito;
  