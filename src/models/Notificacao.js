class Notificacao {
  constructor(id, tipo, conteudo, destinatario) {
    this.id = id;
    this.tipo = tipo;
    this.conteudo = conteudo;
    this.destinatario = destinatario;
  }

  enviar() {
    console.log(`Notificação enviada para ${this.destinatario}: ${this.conteudo}`);
  }
}

module.exports = Notificacao;
