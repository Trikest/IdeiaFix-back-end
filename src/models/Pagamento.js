class Pagamento {
    // Atributos privados
    #id;
    #valor;
    #metodoPagamento;
    #status;
    #agendamento;
  
    constructor(id, valor, metodoPagamento, status, agendamento) {
      this.#id = id;
      this.#valor = valor;
      this.#metodoPagamento = metodoPagamento;
      this.#status = status;
      this.#agendamento = agendamento; // Objeto da classe Agendamento
    }
  
    // Métodos
    realizarPagamento() {
      if (this.#status === 'pago') {
        console.log(`Pagamento ${this.#id} já está pago.`);
      } else {
        this.#status = 'pago';
        console.log(`Pagamento ${this.#id} realizado com sucesso.`);
      }
    }
  
    emitirNotaFiscal() {
      if (this.#status === 'pago') {
        console.log(`Nota fiscal emitida para o pagamento ${this.#id}.`);
      } else {
        console.log(`Não é possível emitir nota fiscal para um pagamento pendente.`);
      }
    }
  
    // Getters
    getId() {
      return this.#id;
    }
  
    getValor() {
      return this.#valor;
    }
  
    getMetodoPagamento() {
      return this.#metodoPagamento;
    }
  
    getStatus() {
      return this.#status;
    }
  
    getAgendamento() {
      return this.#agendamento;
    }
  }
  
  module.exports = {Pagamento };