const Usuario = require('./usuario');

// Classe Cliente que herda de Usuario
class Cliente extends Usuario {
  #endereco;
  #telefone;

  constructor(id, nome, email, senha, fotoPerfil, endereco, telefone) {
    super(id, nome, email, senha, fotoPerfil);
    this.#endereco = endereco;
    this.#telefone = telefone;
  }

  visualizarHistoricoDeContratos() {
    // Lógica para visualizar o histórico de contratos do cliente
    console.log(`Exibindo histórico de contratos do cliente ${this.getNome()}.`);
  }

  enviarFeedback(mensagem) {
    // Lógica para enviar feedback
    console.log(`Feedback enviado pelo cliente ${this.getNome()}: ${mensagem}`);
  }

  // Getters para atributos específicos de Cliente
  getEndereco() {
    return this.#endereco;
  }

  getTelefone() {
    return this.#telefone;
  }
}
module.exports = {Cliente};