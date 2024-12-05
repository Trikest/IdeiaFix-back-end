const AgendamentoRepository = require('../repositories/AgendamentoRepository');

class AgendamentoService {
  constructor() {
    this.agendamentoRepository = new AgendamentoRepository();
  }

  // Criar agendamento
  async createAgendamento(data) {
    // Validações ou lógica de negócio
    if (!data.data || !data.descricaoServico || !data.clienteId) {
      throw new Error('Dados incompletos para criar um agendamento.');
    }
    return await this.agendamentoRepository.createAgendamento(data);
  }

  // Obter todos os agendamentos de um cliente
  async getAgendamentosByCliente(clienteId) {
    return await this.agendamentoRepository.getAgendamentosByCliente(clienteId);
  }

  // Atualizar agendamento
  async updateAgendamento(id, data) {
    return await this.agendamentoRepository.updateAgendamento(id, data);
  }

  // Deletar agendamento
  async deleteAgendamento(id) {
    return await this.agendamentoRepository.deleteAgendamento(id);
  }
}

module.exports = AgendamentoService;
