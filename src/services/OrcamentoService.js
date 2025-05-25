const OrcamentoRepository = require('../repositories/OrcamentoRepository');

class OrcamentoService {
  constructor() {
    this.orcamentoRepository = new OrcamentoRepository();
  }

  async criarOrcamento(data) {
    console.log('Dados recebidos:', data);

    if (
      data.clienteId == null ||
      data.servicoId == null ||
      data.materialId == null ||
      data.largura == null ||
      data.altura == null ||
      data.area == null ||
      data.precoUnitario == null ||
      data.valorTotal == null
    ) {
      throw new Error('Dados incompletos para criar orçamento.');
    }

    return await this.orcamentoRepository.criarOrcamento(data);
  }

  async listarOrcamentos() {
    return await this.orcamentoRepository.listarOrcamentos();
  }

  async buscarOrcamentoPorId(id) {
    const orcamento = await this.orcamentoRepository.buscarOrcamentoPorId(id);
    if (!orcamento) {
      throw new Error('Orçamento não encontrado.');
    }
    return orcamento;
  }

  async atualizarOrcamento(id, data) {
    return await this.orcamentoRepository.atualizarOrcamento(id, data);
  }

  async deletarOrcamento(id) {
    return await this.orcamentoRepository.deletarOrcamento(id);
  }
}

module.exports = OrcamentoService;
