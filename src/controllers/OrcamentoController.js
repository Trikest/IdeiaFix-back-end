const OrcamentoService = require('../services/OrcamentoService');

class OrcamentoController {
  constructor() {
    this.orcamentoService = new OrcamentoService();
  }

  // Criar orçamento
  async criarOrcamento(req, res) {
    

    try {
        
      const orcamento = await this.orcamentoService.criarOrcamento(req.body);
      res.status(201).json(orcamento);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  // Listar todos os orçamentos
  async listarOrcamentos(req, res) {
    try {
      const orcamentos = await this.orcamentoService.listarOrcamentos();
      res.status(200).json(orcamentos);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  // Buscar orçamento por ID
  async buscarOrcamentoPorId(req, res) {
    try {
      const id = Number(req.params.id);
      const orcamento = await this.orcamentoService.buscarOrcamentoPorId(id);
      res.status(200).json(orcamento);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  // Atualizar orçamento
  async atualizarOrcamento(req, res) {
    try {
      const id = Number(req.params.id);
      const orcamento = await this.orcamentoService.atualizarOrcamento(id, req.body);
      res.status(200).json(orcamento);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  // Deletar orçamento
  async deletarOrcamento(req, res) {
    try {
      const id = Number(req.params.id);
      await this.orcamentoService.deletarOrcamento(id);
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = OrcamentoController;
