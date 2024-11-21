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
    this.status = 'pago';
    console.log(`Pagamento de R$${this.valor} realizado com sucesso.`);
  }

  emitirNotaFiscal() {
    console.log(`Nota fiscal emitida para o pagamento de R$${this.valor}.`);
  }
}

module.exports = Pagamento;
