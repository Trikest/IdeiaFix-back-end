const NotificacaoService = require('../services/NotificacaoService');

class NotificacaoController {
  constructor() {
    this.notificacaoService = new NotificacaoService();
  }

  // Criar notificação
  async createNotificacao(req, res) {
    try {
      const data = req.body;
      const notificacao = await this.notificacaoService.createNotificacao(data);
      res.status(201).json(notificacao);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  // Obter notificações de um usuário
  async getNotificacoesByUsuario(req, res) {
    try {
      const usuarioId = Number(req.params.usuarioId);
      const notificacoes = await this.notificacaoService.getNotificacoesByUsuario(usuarioId);
      res.status(200).json(notificacoes);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  // Atualizar notificação
  async updateNotificacao(req, res) {
    try {
      const id = Number(req.params.id);
      const data = req.body;
      const updatedNotificacao = await this.notificacaoService.updateNotificacao(id, data);
      res.status(200).json(updatedNotificacao);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  // Deletar notificação
  async deleteNotificacao(req, res) {
    try {
      const id = Number(req.params.id);
      await this.notificacaoService.deleteNotificacao(id);
      res.status(204).send(); // Sem conteúdo
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = NotificacaoController;
