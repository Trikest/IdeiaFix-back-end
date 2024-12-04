const { Cliente } = require('./cliente');

class ClienteController {
  constructor() {
    this.clientes = [];
  }

  criarCliente(id, nome, email, senha, fotoPerfil, endereco, telefone) {
    const novoCliente = new Cliente(id, nome, email, senha, fotoPerfil, endereco, telefone);
    this.clientes.push(novoCliente);
    console.log(`Cliente ${nome} cadastrado com sucesso.`);
    return novoCliente;
  }

  listarClientes() {
    return this.clientes.map((cliente) => ({
      id: cliente.getId(),
      nome: cliente.getNome(),
      email: cliente.getEmail(),
    }));
  }
}

module.exports = ClienteController;
