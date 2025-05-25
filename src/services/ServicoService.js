const ServicoRepository = require('../repositories/ServicoRepository');

class ServicoService {
  constructor() {
    this.servicoRepository = new ServicoRepository();
  }

  async criarServico(data) {
  if (!data.nome || !data.tipoCalculo) {
    throw new Error('Dados incompletos para criar um serviço. "nome" e "tipoCalculo" são obrigatórios.');
  }

  return await this.servicoRepository.criarServico(data);
}

  async listarServicos() {
    return await this.servicoRepository.listarServicos();
  }

  async buscarServicoPorId(id) {
    const servico = await this.servicoRepository.buscarServicoPorId(id);
    if (!servico) {
      throw new Error('Serviço não encontrado.');
    }
    return servico;
  }

  async atualizarServico(id, data) {
    return await this.servicoRepository.atualizarServico(id, data);
  }

  async deletarServico(id) {
    return await this.servicoRepository.deletarServico(id);
  }
}

module.exports = ServicoService;
