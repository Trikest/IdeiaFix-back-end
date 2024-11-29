const Relatorio = require('../models/Relatorio');

const gerarRelatorio = (req, res) => {
  const { id, tipo, conteudo } = req.body;
  const relatorio = new Relatorio(id, tipo, conteudo);
  relatorio.gerar();
  res.status(200).json({ message: `Relatório ${tipo} gerado com sucesso!` });
};

module.exports = {
  gerarRelatorio,
};
