const Usuario = require('./Usuario');

class Cliente extends Usuario {
  constructor(id, nome, email, senha, fotoPerfil, endereco, telefone) {
    super(id, nome, email, senha, fotoPerfil);
    this.endereco = endereco;
    this.telefone = telefone;
  }

  visualizarHistoricoDeContratos() {
    // Implementação para visualizar histórico de contratos
  }

  enviarFeedback() {
    // Implementação para enviar feedback
  }
}

module.exports = Cliente;
