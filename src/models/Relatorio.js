class Relatorio {
    // Atributos privados
    #id;
    #tipo;
    #conteudo;
  
    constructor(id, tipo, conteudo) {
      this.#id = id;
      this.#tipo = tipo;
      this.#conteudo = conteudo;
    }
  
    // Método para gerar o relatório
    gerar() {
      console.log(`Relatório gerado:
  Tipo: ${this.#tipo}
  Conteúdo: ${this.#conteudo}`);
    }
  
    // Getters
    getId() {
      return this.#id;
    }
  
    getTipo() {
      return this.#tipo;
    }
  
    getConteudo() {
      return this.#conteudo;
    }
  }
  
  module.exports = Relatorio;
  