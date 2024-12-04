const { Pagamento } = require('./pagamento');

class PagamentoController {
  constructor() {
    this.pagamentos = [];
  }

  criarPagamento(id, valor, metodoPagamento, status, agendamento) {
    const novoPagamento = new Pagamento(id, valor, metodoPagamento, status, agendamento);
    this.pagamentos.push(novoPagamento);
    console.log(`Pagamento ${id} criado.`);
    return novoPagamento;
  }

  listarPagamentos() {
    return this.pagamentos.map((pagamento) => ({
      id: pagamento.getId(),
      valor: pagamento.getValor(),
      status: pagamento.getStatus(),
    }));
  }
}

module.exports = PagamentoController;
