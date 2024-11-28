class Notificacao {
    // Atributos privados
    #id;
    #tipo;
    #conteudo;
    #destinatario;
  
    constructor(id, tipo, conteudo, destinatario) {
      this.#id = id;
      this.#tipo = tipo;
      this.#conteudo = conteudo;
      this.#destinatario = destinatario; // Objeto da classe Usuario
    }
  
    // Método para enviar a notificação
    enviar() {
      console.log(`Notificação enviada para ${this.#destinatario.getNome()}:
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
  
    getDestinatario() {
      return this.#destinatario;
    }
  }
  
  module.exports = Notificacao;
  