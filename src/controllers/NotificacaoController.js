const Notificacao = require('../models/Notificacao');

const enviarNotificacao = (req, res) => {
  const { id, tipo, conteudo, destinatario } = req.body;
  const notificacao = new Notificacao(id, tipo, conteudo, destinatario);
  notificacao.enviar();
  res.status(200).json({ message: 'Notificação enviada com sucesso!' });
};

module.exports = {
  enviarNotificacao,
};
