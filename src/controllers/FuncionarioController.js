const { Funcionario } = require('./funcionario');

class FuncionarioController {
  constructor() {
    this.funcionarios = [];
  }

  criarFuncionario(id, nome, email, senha, fotoPerfil, cargo) {
    const novoFuncionario = new Funcionario(id, nome, email, senha, fotoPerfil, cargo);
    this.funcionarios.push(novoFuncionario);
    console.log(`Funcionário ${nome} adicionado.`);
    return novoFuncionario;
  }

  listarFuncionarios() {
    return this.funcionarios.map((funcionario) => ({
      id: funcionario.getId(),
      nome: funcionario.getNome(),
      cargo: funcionario.getCargo(),
    }));
  }
}

module.exports = FuncionarioController;
