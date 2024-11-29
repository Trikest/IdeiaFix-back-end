const Cliente = require('../models/Cliente');

const visualizarHistoricoDeContratos = (req, res) => {
  const { id } = req.params;
  const cliente = new Cliente(); // Substituir pelo método de busca real no banco
  cliente.visualizarHistoricoDeContratos();
  res.status(200).json({ message: 'Histórico de contratos exibido com sucesso!' });
};

const enviarFeedback = (req, res) => {
  const { feedback } = req.body;
  const cliente = new Cliente();
  cliente.enviarFeedback(feedback);
  res.status(200).json({ message: 'Feedback enviado com sucesso!' });
};

module.exports = {
  visualizarHistoricoDeContratos,
  enviarFeedback,
};
