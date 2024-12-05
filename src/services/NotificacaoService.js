const NotificacaoRepository = require('../repositories/NotificacaoRepository');

class NotificacaoService {
  constructor() {
    this.notificacaoRepository = new NotificacaoRepository();
  }

  // Criar notificação
  async createNotificacao(data) {
    if (!data.tipo || !data.conteudo || !data.usuarioId) {
      throw new Error('Dados incompletos para criar uma notificação.');
    }
    return await this.notificacaoRepository.createNotificacao(data);
  }

  // Obter todas as notificações de um usuário
  async getNotificacoesByUsuario(usuarioId) {
    return await this.notificacaoRepository.getNotificacoesByUsuario(usuarioId);
  }

  // Atualizar notificação
  async updateNotificacao(id, data) {
    return await this.notificacaoRepository.updateNotificacao(id, data);
  }

  // Deletar notificação
  async deleteNotificacao(id) {
    return await this.notificacaoRepository.deleteNotificacao(id);
  }
}

module.exports = NotificacaoService;
