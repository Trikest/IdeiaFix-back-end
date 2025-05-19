class Endereco {
  #id;
  #cep;
  #rua;
  #bairro;
  #complemento;
  #cidade;
  #estado;
  #cliente; // Objeto da classe Cliente

  constructor(id, cep, rua, bairro, complemento, cidade, estado, cliente) {
    this.#id = id;
    this.#cep = cep;
    this.#rua = rua;
    this.#bairro = bairro;
    this.#complemento = complemento;
    this.#cidade = cidade;
    this.#estado = estado;
    this.#cliente = cliente;
  }

  // Métodos (exemplo: atualizar endereço completo)
  atualizarEndereco({ cep, rua, bairro, complemento, cidade, estado }) {
    if (cep) this.#cep = cep;
    if (rua) this.#rua = rua;
    if (bairro) this.#bairro = bairro;
    if (complemento !== undefined) this.#complemento = complemento;
    if (cidade) this.#cidade = cidade;
    if (estado) this.#estado = estado;

    console.log(`Endereço ${this.#id} atualizado.`);
  }

  // Getters
  getId() {
    return this.#id;
  }

  getCep() {
    return this.#cep;
  }

  getRua() {
    return this.#rua;
  }

  getBairro() {
    return this.#bairro;
  }

  getComplemento() {
    return this.#complemento;
  }

  getCidade() {
    return this.#cidade;
  }

  getEstado() {
    return this.#estado;
  }

  getCliente() {
    return this.#cliente;
  }
}

module.exports = { Endereco };
