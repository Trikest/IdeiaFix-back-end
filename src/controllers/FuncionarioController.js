const Funcionario = require('../models/Funcionario');

const gerenciarAgendamentos = (req, res) => {
  const funcionario = new Funcionario(); // Substituir pelo método de busca real no banco
  funcionario.gerenciarAgendamentos();
  res.status(200).json({ message: 'Agendamentos gerenciados com sucesso!' });
};

const analisarFeedback = (req, res) => {
  const funcionario = new Funcionario();
  funcionario.analisarFeedback();
  res.status(200).json({ message: 'Feedback analisado com sucesso!' });
};

const gerarRelatorios = (req, res) => {
  const { tipo } = req.body;
  const funcionario = new Funcionario();
  funcionario.gerarRelatorios(tipo);
  res.status(200).json({ message: `Relatório ${tipo} gerado com sucesso!` });
};

module.exports = {
  gerenciarAgendamentos,
  analisarFeedback,
  gerarRelatorios,
};
