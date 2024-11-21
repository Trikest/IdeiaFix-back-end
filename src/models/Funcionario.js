const Usuario = require('./Usuario');

class Funcionario extends Usuario {
  constructor(id, nome, email, senha, fotoPerfil, cargo) {
    super(id, nome, email, senha, fotoPerfil);
    this.cargo = cargo;
  }

  gerenciarAgendamentos() {
    console.log(`Gerenciando agendamentos...`);
    // Lógica para listar ou alterar agendamentos
  }

  analisarFeedback() {
    console.log(`Analisando feedback de clientes...`);
    // Lógica para análise de feedbacks
  }

  gerarRelatorios(tipo) {
    console.log(`Relatório ${tipo} gerado com sucesso.`);
    // Adicionar lógica para geração de relatórios
  }
}

module.exports = Funcionario;
