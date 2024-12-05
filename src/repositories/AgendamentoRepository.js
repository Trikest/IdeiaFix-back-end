const prisma = require('../config/prisma'); // Conexão do Prisma

class AgendamentoRepository {
  // Criar um novo agendamento
  async createAgendamento(data) {
    try {
      return await prisma.agendamento.create({
        data: {
            data: new Date(data.data), // Converte a string para um objeto Date
            descricaoServico: data.descricaoServico,
            status: data.status,
            fotosServico: data.fotosServico,
            clienteId: data.clienteId
          }
      });
    } catch (error) {
      throw new Error('Erro ao criar agendamento: ' + error.message);
    }
  }

  // Obter todos os agendamentos de um cliente
  async getAgendamentosByCliente(clienteId) {
    try {
      return await prisma.agendamento.findMany({
        where: {
          clienteId
        }
      });
    } catch (error) {
      throw new Error('Erro ao buscar agendamentos: ' + error.message);
    }
  }

  // Atualizar um agendamento
  async updateAgendamento(id, data) {
    try {
      return await prisma.agendamento.update({
        where: {
          id
        },
        data: {
            data: new Date(data.data), // Converte a string para um objeto Date
            descricaoServico: data.descricaoServico,
            status: data.status,
            fotosServico: data.fotosServico,
            clienteId: data.clienteId
          }
      });
    } catch (error) {
      throw new Error('Erro ao atualizar agendamento: ' + error.message);
    }
  }

  // Deletar um agendamento
  async deleteAgendamento(id) {
    try {
      return await prisma.agendamento.delete({
        where: {
          id
        }
      });
    } catch (error) {
      throw new Error('Erro ao excluir agendamento: ' + error.message);
    }
  }
}

module.exports = AgendamentoRepository;
