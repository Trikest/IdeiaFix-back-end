const Agendamento = require('../models/Agendamento');

const confirmarAgendamento = (req, res) => {
  const { id } = req.params;
  const agendamento = new Agendamento(); // Substituir pelo método de busca real no banco
  agendamento.confirmar();
  res.status(200).json({ message: 'Agendamento confirmado!' });
};

const cancelarAgendamento = (req, res) => {
  const { id } = req.params;
  const agendamento = new Agendamento();
  agendamento.cancelar();
  res.status(200).json({ message: 'Agendamento cancelado!' });
};

module.exports = {
  confirmarAgendamento,
  cancelarAgendamento,
};
