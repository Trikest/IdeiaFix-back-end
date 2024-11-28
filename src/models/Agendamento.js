const { Cliente } = require('./usuario'); // Importar a classe Cliente

class Agendamento {
  // Atributos privados
  #id;
  #data;
  #descricaoServico;
  #status;
  #fotosServico;
  #cliente;

  constructor(id, data, descricaoServico, status, fotosServico = [], cliente) {
    this.#id = id;
    this.#data = data;
    this.#descricaoServico = descricaoServico;
    this.#status = status;
    this.#fotosServico = fotosServico;
    this.#cliente = cliente; // Objeto da classe Cliente
  }

  // Métodos
  confirmar() {
    this.#status = 'confirmado';
    console.log(`Agendamento ${this.#id} confirmado.`);
  }

  cancelar() {
    this.#status = 'cancelado';
    console.log(`Agendamento ${this.#id} cancelado.`);
  }

  alterarData(novaData) {
    this.#data = novaData;
    console.log(`Data do agendamento ${this.#id} alterada para ${novaData}.`);
  }

  // Getters
  getId() {
    return this.#id;
  }

  getData() {
    return this.#data;
  }

  getDescricaoServico() {
    return this.#descricaoServico;
  }

  getStatus() {
    return this.#status;
  }

  getFotosServico() {
    return this.#fotosServico;
  }

  getCliente() {
    return this.#cliente;
  }
}
module.exports = { Agendamento};