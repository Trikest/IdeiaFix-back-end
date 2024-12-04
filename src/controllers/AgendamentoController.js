const { Agendamento } = require('./agendamento');

class AgendamentoController {
  constructor() {
    this.agendamentos = []; // Array para armazenar os agendamentos
  }

  criarAgendamento(id, data, descricaoServico, status, fotosServico, cliente) {
    const novoAgendamento = new Agendamento(
      id,
      data,
      descricaoServico,
      status,
      fotosServico,
      cliente
    );
    this.agendamentos.push(novoAgendamento);
    console.log(`Agendamento ${id} criado com sucesso.`);
    return novoAgendamento;
  }

  listarAgendamentos() {
    return this.agendamentos.map((agendamento) => ({
      id: agendamento.getId(),
      data: agendamento.getData(),
      descricaoServico: agendamento.getDescricaoServico(),
      status: agendamento.getStatus(),
    }));
  }

  alterarDataAgendamento(id, novaData) {
    const agendamento = this.agendamentos.find((a) => a.getId() === id);
    if (agendamento) {
      agendamento.alterarData(novaData);
    } else {
      console.log(`Agendamento ${id} não encontrado.`);
    }
  }
}

module.exports = AgendamentoController;
