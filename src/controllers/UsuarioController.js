const Usuario = require('../models/Usuario');

const registrarUsuario = (req, res) => {
  const { id, nome, email, senha, fotoPerfil } = req.body;
  const usuario = new Usuario(id, nome, email, senha, fotoPerfil);
  usuario.registrar();
  res.status(201).json({ message: 'Usuário registrado com sucesso!' });
};

const autenticarUsuario = (req, res) => {
  const { email, senha } = req.body;
  const usuario = new Usuario();
  const sucesso = usuario.autenticar(email, senha);

  if (sucesso) {
    res.status(200).json({ message: 'Login bem-sucedido!' });
  } else {
    res.status(401).json({ message: 'Credenciais inválidas!' });
  }
};

const recuperarSenha = (req, res) => {
  const { email } = req.body;
  const usuario = new Usuario();
  usuario.recuperarSenha(email);
  res.status(200).json({ message: 'E-mail de recuperação enviado!' });
};

const editarPerfil = (req, res) => {
  const { novoNome, novaFotoPerfil } = req.body;
  const usuario = new Usuario();
  usuario.editarPerfil(novoNome, novaFotoPerfil);
  res.status(200).json({ message: 'Perfil atualizado com sucesso!' });
};

module.exports = {
  registrarUsuario,
  autenticarUsuario,
  recuperarSenha,
  editarPerfil,
};
