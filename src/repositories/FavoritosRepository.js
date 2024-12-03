const db = require('../database/connection');

module.exports = {
  async buscarPorUsuario(usuarioId) {
    try {
      const favoritos = await db.query(
        'SELECT * FROM favoritos WHERE usuario_id = $1',
        [usuarioId]
      );
      return favoritos.rows;
    } catch (error) {
      throw new Error('Erro ao buscar favoritos no banco de dados');
    }
  },

  async adicionarFavorito(usuarioId, itemId) {
    try {
      const favorito = await db.query(
        'INSERT INTO favoritos (usuario_id, item_id) VALUES ($1, $2) RETURNING *',
        [usuarioId, itemId]
      );
      return favorito.rows[0];
    } catch (error) {
      throw new Error('Erro ao adicionar favorito no banco de dados');
    }
  },

  async removerFavorito(usuarioId, itemId) {
    try {
      await db.query(
        'DELETE FROM favoritos WHERE usuario_id = $1 AND item_id = $2',
        [usuarioId, itemId]
      );
      return { message: 'Favorito removido com sucesso' };
    } catch (error) {
      throw new Error('Erro ao remover favorito no banco de dados');
    }
  }
};
