const prisma = require('../config/prisma'); // Conexão do Prisma

class EnderecoRepository {
  // Criar um novo endereço
  async createEndereco(data) {
    try {
      return await prisma.endereco.create({
        data: {
          cep: data.cep,
          rua: data.rua,
          bairro: data.bairro,
          complemento: data.complemento,
          cidade: data.cidade,
          estado: data.estado,
          clienteId: data.clienteId
        }
      });
    } catch (error) {
      throw new Error('Erro ao criar endereço: ' + error.message);
    }
  }

  // Obter todos os endereços de um cliente
  async getEnderecosByCliente(clienteId) {
    try {
      return await prisma.endereco.findMany({
        where: {
          clienteId
        }
      });
    } catch (error) {
      throw new Error('Erro ao buscar endereços: ' + error.message);
    }
  }

  // Atualizar um endereço
  async updateEndereco(id, data) {
    try {
      return await prisma.endereco.update({
        where: {
          id
        },
        data: {
          cep: data.cep,
          rua: data.rua,
          bairro: data.bairro,
          complemento: data.complemento,
          cidade: data.cidade,
          estado: data.estado,
          clienteId: data.clienteId
        }
      });
    } catch (error) {
      throw new Error('Erro ao atualizar endereço: ' + error.message);
    }
  }

  // Deletar um endereço
  async deleteEndereco(id) {
    try {
      return await prisma.endereco.delete({
        where: {
          id
        }
      });
    } catch (error) {
      throw new Error('Erro ao excluir endereço: ' + error.message);
    }
  }
}

module.exports = EnderecoRepository;
