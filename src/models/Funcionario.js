const Usuario = require('./Usuario');

class Funcionario extends Usuario {
  constructor(id, nome, email, senha, fotoPerfil, cargo) {
    super(id, nome, email, senha, fotoPerfil);
    this.cargo = cargo;
  }

  gerenciarAgendamentos() {
    // Implementação para gerenciar agendamentos
  }

  analisarFeedback() {
    // Implementação para analisar feedback
  }

  gerarRelatorios() {
    // Implementação para gerar relatórios
  }
}

module.exports = Funcionario;
