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
    this.status = 'confirmado';
    console.log(`Agendamento confirmado para ${this.data}.`);
  }

  cancelar() {
    this.status = 'cancelado';
    console.log(`Agendamento cancelado.`);
  }

  alterarData(novaData) {
    this.data = novaData;
    console.log(`Data do agendamento alterada para ${novaData}.`);
  }
}

module.exports = Agendamento;
