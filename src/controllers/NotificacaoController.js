const Notificacao = require('./notificacao');

class NotificacaoController {
  constructor() {
    this.notificacoes = [];
  }

  criarNotificacao(id, tipo, conteudo, destinatario) {
    const novaNotificacao = new Notificacao(id, tipo, conteudo, destinatario);
    this.notificacoes.push(novaNotificacao);
    console.log(`Notificação ${id} criada.`);
    return novaNotificacao;
  }

  enviarNotificacao(id) {
    const notificacao = this.notificacoes.find((n) => n.getId() === id);
    if (notificacao) {
      notificacao.enviar();
    } else {
      console.log(`Notificação ${id} não encontrada.`);
    }
  }
}

module.exports = NotificacaoController;
