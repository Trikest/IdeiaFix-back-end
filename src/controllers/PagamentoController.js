const Pagamento = require('../models/Pagamento');

const realizarPagamento = (req, res) => {
  const { id, valor, metodoPagamento } = req.body;
  const pagamento = new Pagamento(id, valor, metodoPagamento, 'pendente');
  pagamento.realizarPagamento();
  res.status(200).json({ message: 'Pagamento realizado com sucesso!' });
};

const emitirNotaFiscal = (req, res) => {
  const { id } = req.params;
  const pagamento = new Pagamento(); // Substituir pelo método de busca real no banco
  pagamento.emitirNotaFiscal();
  res.status(200).json({ message: 'Nota fiscal emitida com sucesso!' });
};

module.exports = {
  realizarPagamento,
  emitirNotaFiscal,
};
