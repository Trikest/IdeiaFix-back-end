const checkFuncionario = (req, res, next) => {
  if (req.user && req.user.Funcionario) {
    return next(); // ✅ Passa para a próxima função da rota
  }

  return res.status(403).json({ message: 'Acesso negado: Funcionários apenas.' });
};

module.exports = checkFuncionario;
