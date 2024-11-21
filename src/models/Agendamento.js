const Cliente = require('./Cliente');

class Agendamento {
  constructor(id, data, descricaoServico, status, fotosServico, cliente) {
    this.id = id;
    this.data = data;
    this.descricaoServico = descricaoServico;
    this.status = status;
    this.fotosServico = fotosServico;
    this.cliente = cliente;
  }

  confirmar() {
    // Implementação para confirmar agendamento
  }

  cancelar() {
    // Implementação para cancelar agendamento
  }

  alterarData() {
    // Implementação para alterar a data
  }
}

module.exports = Agendamento;
