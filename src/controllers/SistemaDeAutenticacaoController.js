const SistemaDeAutenticacao = require('../models/SistemaDeAutenticacao');

const verificarLogin = (req, res) => {
  const { email, senha } = req.body;
  const sistemaDeAutenticacao = new SistemaDeAutenticacao();
  const sucesso = sistemaDeAutenticacao.verificarLogin(email, senha);

  if (sucesso) {
    res.status(200).json({ message: 'Login bem-sucedido!' });
  } else {
    res.status(401).json({ message: 'Credenciais inválidas!' });
  }
};

const enviarEmailConfirmacao = (req, res) => {
  const { email } = req.body;
  const sistemaDeAutenticacao = new SistemaDeAutenticacao();
  sistemaDeAutenticacao.enviarEmailConfirmacao(email);
  res.status(200).json({ message: 'E-mail de confirmação enviado!' });
};

module.exports = {
  verificarLogin,
  enviarEmailConfirmacao,
};
