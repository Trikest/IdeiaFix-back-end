const nodemailer = require('nodemailer'); // Pacote para enviar e-mails (precisa instalar: npm install nodemailer)

class SistemaDeAutenticacao {
  // Método para verificar login
  verificarLogin(email, senha, usuarios) {
    const usuario = usuarios.find(
      (user) => user.getEmail() === email && user.senha === senha
    ); // Precisa de acesso à lista de usuários
    if (usuario) {
      console.log(`Login bem-sucedido para ${usuario.getNome()}.`);
      return true;
    } else {
      console.log('Email ou senha incorretos.');
      return false;
    }
  }

  // Método para enviar email de confirmação
  async enviarEmailConfirmacao(email) {
    // Configurar um serviço de email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'seuemail@gmail.com', // Insira o email
        pass: 'suasenha', // Insira a senha ou app password
      },
    });

    const mailOptions = {
      from: 'seuemail@gmail.com',
      to: email,
      subject: 'Confirmação de Cadastro',
      text: 'Seu cadastro foi realizado com sucesso!',
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log(`Email de confirmação enviado para ${email}.`);
    } catch (error) {
      console.error('Erro ao enviar email:', error);
    }
  }
}

module.exports = SistemaDeAutenticacao;
