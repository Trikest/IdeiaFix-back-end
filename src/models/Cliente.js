const Usuario = require('./usuario');
const { Agendamento } = require('./Agendamento');
const { Endereco } = require('./Endereco');

// Classe Cliente que herda de Usuario
class Cliente extends Usuario {
  #endereco;       // Instância de Endereco
  #telefone;
  #agendamentos;   // Lista de agendamentos

  constructor(id, nome, email, senha, fotoPerfil, endereco, telefone) {
    super(id, nome, email, senha, fotoPerfil);
    
    // Validação do endereço
    if (endereco instanceof Endereco) {
      this.#endereco = endereco;
    } else {
      throw new Error('Endereço inválido: deve ser uma instância da classe Endereco.');
    }

    this.#telefone = telefone;
    this.#agendamentos = []; // Inicializa como uma lista vazia
  }

  adicionarAgendamento(agendamento) {
    if (agendamento instanceof Agendamento) {
      this.#agendamentos.push(agendamento);
      console.log(`Agendamento ${agendamento.getId()} adicionado para o cliente ${this.getNome()}.`);
    } else {
      console.log('Objeto inválido. O agendamento deve ser uma instância da classe Agendamento.');
    }
  }

  listarAgendamentos() {
    console.log(`Agendamentos do cliente ${this.getNome()}:`);
    this.#agendamentos.forEach((agendamento, index) => {
      console.log(`${index + 1}. Serviço: ${agendamento.getDescricaoServico()}, Data: ${agendamento.getData()}, Status: ${agendamento.getStatus()}`);
    });
  }

  getAgendamentos() {
    return this.#agendamentos;
  }

  visualizarHistoricoDeContratos() {
    console.log(`Exibindo histórico de contratos do cliente ${this.getNome()}.`);
  }

  enviarFeedback(mensagem) {
    console.log(`Feedback enviado pelo cliente ${this.getNome()}: ${mensagem}`);
  }

  getEndereco() {
    return this.#endereco;
  }

  getTelefone() {
    return this.#telefone;
  }
}

module.exports = { Cliente };
