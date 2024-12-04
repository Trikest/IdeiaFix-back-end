const FavoritoRepositorio = require('./favoritorepositorio'); // Importa o repositório de favoritos
const Favorito = require('./favorito'); // Importa a classe Favorito

class FavoritoService {
  constructor() {
    this.repositorio = new FavoritoRepositorio(); // Instancia o repositório
  }

  // Cria um novo favorito
  async criarFavorito(usuarioId, itemId) {
    try {
      const id = await this.repositorio.gerarNovoId(); // Gera um novo ID para o favorito
      const favorito = new Favorito(id, usuarioId, itemId); // Cria um novo objeto Favorito

      // Salva o favorito no repositório
      await this.repositorio.salvar(favorito);

      return favorito;
    } catch (erro) {
      throw new Error('Erro ao criar favorito: ' + erro.message);
    }
  }

  // Lista todos os favoritos de um usuário
  async listarFavoritos(usuarioId) {
    try {
      const favoritos = await this.repositorio.listar(); // Obtém todos os favoritos do repositório

      // Filtra os favoritos pelo ID do usuário
      return favoritos.filter(favorito => favorito.getUsuarioId() === usuarioId);
    } catch (erro) {
      throw new Error('Erro ao listar favoritos: ' + erro.message);
    }
  }

  // Remove um favorito pelo ID
  async removerFavorito(id, usuarioId) {
    try {
      const favorito = await this.repositorio.buscarPorId(id);

      // Verifica se o favorito pertence ao usuário
      if (!favorito || favorito.getUsuarioId() !== usuarioId) {
        throw new Error('Favorito não encontrado ou não pertence ao usuário.');
      }

      // Remove o favorito do repositório
      await this.repositorio.remover(id);
      return { mensagem: 'Favorito removido com sucesso.' };
    } catch (erro) {
      throw new Error('Erro ao remover favorito: ' + erro.message);
    }
  }

  // Altera o item de um favorito
  async alterarItemFavorito(id, novoItemId, usuarioId) {
    try {
      const favorito = await this.repositorio.buscarPorId(id);

      // Verifica se o favorito pertence ao usuário
      if (!favorito || favorito.getUsuarioId() !== usuarioId) {
        throw new Error('Favorito não encontrado ou não pertence ao usuário.');
      }

      // Altera o item do favorito
      favorito.alterarItemId(novoItemId);

      // Atualiza o favorito no repositório
      await this.repositorio.atualizar(favorito);
      return favorito;
    } catch (erro) {
      throw new Error('Erro ao alterar item do favorito: ' + erro.message);
    }
  }
}

module.exports = FavoritoService;
