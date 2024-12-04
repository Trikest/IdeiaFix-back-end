class FavoritoRepositorio {
    constructor() {
      this.favoritos = []; // Array para armazenar os favoritos (simulação de banco de dados)
      this.proximoId = 1; // Controla o próximo ID disponível
    }
  
    // Gera um novo ID para o favorito
    async gerarNovoId() {
      return this.proximoId++;
    }
  
    // Salva um favorito no repositório
    async salvar(favorito) {
      this.favoritos.push(favorito);
    }
  
    // Lista todos os favoritos
    async listar() {
      return this.favoritos;
    }
  
    // Busca um favorito por ID
    async buscarPorId(id) {
      return this.favoritos.find(favorito => favorito.getId() === id);
    }
  
    // Atualiza um favorito no repositório
    async atualizar(favorito) {
      const index = this.favoritos.findIndex(f => f.getId() === favorito.getId());
      if (index !== -1) {
        this.favoritos[index] = favorito;
      }
    }
  
    // Remove um favorito pelo ID
    async remover(id) {
      const index = this.favoritos.findIndex(f => f.getId() === id);
      if (index !== -1) {
        this.favoritos.splice(index, 1);
      }
    }
  }
  
  module.exports = FavoritoRepositorio;
  