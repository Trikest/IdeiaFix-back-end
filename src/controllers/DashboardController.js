const Dashboard = require('../models/Dashboard');

const gerarRelatorioDeContratacao = (req, res) => {
  const dashboard = new Dashboard();
  dashboard.gerarRelatorioDeContratacao();
  res.status(200).json({ message: 'Relatório de contratação gerado com sucesso!' });
};

module.exports = {
  gerarRelatorioDeContratacao,
};
