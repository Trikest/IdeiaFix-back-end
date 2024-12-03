const relatorioRepository = require('../repositories/relatorioRepository');

module.exports = {
  async obterRelatorios() {
    try {
      return await relatorioRepository.buscarTodos();
    } catch (error) {
      throw new Error('Erro ao obter relatórios: ' + error.message);
    }
  },

  async gerarRelatorio(tipo) {
    try {
      return await relatorioRepository.criar(tipo);
    } catch (error) {
      throw new Error('Erro ao gerar relatório: ' + error.message);
    }
  }
};
