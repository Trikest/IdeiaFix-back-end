const prisma = require('../config/prisma'); // Conexão do Prisma

class NotificacaoRepository {
  // Criar uma nova notificação
  async createNotificacao(data) {
    try {
      return await prisma.notificacao.create({
        data
      });
    } catch (error) {
      throw new Error('Erro ao criar notificação: ' + error.message);
    }
  }

  // Obter todas as notificações de um usuário
  async getNotificacoesByUsuario(usuarioId) {
    try {
      return await prisma.notificacao.findMany({
        where: { usuarioId }
      });
    } catch (error) {
      throw new Error('Erro ao buscar notificações: ' + error.message);
    }
  }

  // Atualizar uma notificação
  async updateNotificacao(id, data) {
    try {
      return await prisma.notificacao.update({
        where: { id },
        data
      });
    } catch (error) {
      throw new Error('Erro ao atualizar notificação: ' + error.message);
    }
  }

  // Deletar uma notificação
  async deleteNotificacao(id) {
    try {
      return await prisma.notificacao.delete({
        where: { id }
      });
    } catch (error) {
      throw new Error('Erro ao excluir notificação: ' + error.message);
    }
  }
}

module.exports = NotificacaoRepository;
