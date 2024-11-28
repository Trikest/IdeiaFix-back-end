const Usuario = require('./usuario');

class Funcionario extends Usuario {
    #cargo;
  
    constructor(id, nome, email, senha, fotoPerfil, cargo) {
      super(id, nome, email, senha, fotoPerfil);
      this.#cargo = cargo;
    }
  
    gerenciarAgendamentos() {
      // Lógica para gerenciar agendamentos
      console.log(`Funcionário ${this.getNome()} está gerenciando agendamentos.`);
    }
  
    analisarFeedback() {
      // Lógica para analisar feedback dos clientes
      console.log(`Funcionário ${this.getNome()} está analisando feedback.`);
    }
  
    gerarRelatorios() {
      // Lógica para gerar relatórios
      console.log(`Funcionário ${this.getNome()} gerou um relatório.`);
    }
  
    // Getter para o atributo específico de Funcionario
    getCargo() {
      return this.#cargo;
    }
  }
  module.exports = {Funcionario};