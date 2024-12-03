const relatorioService = require('../services/relatorioService');

module.exports = {
  async listarRelatorios(req, res) {
    try {
      const relatorios = await relatorioService.obterRelatorios();
      res.status(200).json(relatorios);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao listar relatórios', error });
    }
  },

  async gerarRelatorio(req, res) {
    try {
      const { tipo } = req.body;
      const relatorio = await relatorioService.gerarRelatorio(tipo);
      res.status(201).json(relatorio);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao gerar relatório', error });
    }
  }
};
