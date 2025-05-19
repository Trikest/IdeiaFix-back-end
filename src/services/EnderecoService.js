const EnderecoRepository = require('../repositories/EnderecoRepository');

class EnderecoService {
  constructor() {
    this.enderecoRepository = new EnderecoRepository();
  }

  // Criar endereço
  async createEndereco(data) {
    // Validações ou lógica de negócio
    const { cep, rua, bairro, complemento, cidade, estado, clienteId } = data;

    if (!cep || !rua || !bairro || !cidade || !estado || !clienteId) {
      throw new Error('Dados incompletos para criar um endereço.');
    }

    return await this.enderecoRepository.createEndereco(data);
  }

  // Obter todos os endereços de um cliente
  async getEnderecosByCliente(clienteId) {
    return await this.enderecoRepository.getEnderecosByCliente(clienteId);
  }

  // Atualizar endereço
  async updateEndereco(id, data) {
    return await this.enderecoRepository.updateEndereco(id, data);
  }

  // Deletar endereço
  async deleteEndereco(id) {
    return await this.enderecoRepository.deleteEndereco(id);
  }
}

module.exports = EnderecoService;
