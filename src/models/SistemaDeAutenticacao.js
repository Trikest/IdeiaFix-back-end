class SistemaDeAutenticacao {
  verificarLogin(email, senha) {
    console.log(`Verificando login para ${email}`);
    // Lógica para autenticação
    return true; // Exemplo
  }

  enviarEmailConfirmacao(email) {
    console.log(`E-mail de confirmação enviado para ${email}`);
    // Lógica para envio de e-mail
  }
}

module.exports = SistemaDeAutenticacao;
