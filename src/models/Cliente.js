const Usuario = require('./Usuario');

class Cliente extends Usuario {
  constructor(id, nome, email, senha, fotoPerfil, endereco, telefone) {
    super(id, nome, email, senha, fotoPerfil);
    this.endereco = endereco;
    this.telefone = telefone;
  }

  visualizarHistoricoDeContratos() {
    console.log(`Exibindo histórico de contratos do cliente ${this.nome}.`);
    // Lógica para buscar e exibir contratos do cliente
  }

  enviarFeedback(feedback) {
    console.log(`Feedback enviado: ${feedback}`);
    // Adicionar lógica para salvar feedback
  }
}

module.exports = Cliente;
