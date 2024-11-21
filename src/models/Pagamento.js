const Agendamento = require('./Agendamento');

class Pagamento {
  constructor(id, valor, metodoPagamento, status, agendamento) {
    this.id = id;
    this.valor = valor;
    this.metodoPagamento = metodoPagamento;
    this.status = status;
    this.agendamento = agendamento;
  }

  realizarPagamento() {
    // Implementação para realizar o pagamento
  }

  emitirNotaFiscal() {
    // Implementação para emitir nota fiscal
  }
}

module.exports = Pagamento;
