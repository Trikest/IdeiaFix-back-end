const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const transporter = require('../utils/mailer'); // ou defina aqui se não tiver criado ainda
const SECRET = process.env.JWT_SECRET
class UserService {
    constructor(userRepository) {
      this.userRepository = userRepository;
    }
  
    async createUser(userData) {
        console.log(userData.senha)
        
      if (!userData.email || !userData.senha) {
        throw new Error('Email and password are required');
      }
      const hashedPassword = await bcrypt.hash(userData.senha, 10);
      userData.senha = hashedPassword;
      return this.userRepository.createUser(userData);
    }
  async sendPasswordResetEmail(email) {
  const user = await this.userRepository.getUserByEmail(email);
  if (!user) throw new Error('Usuário não encontrado');

  const token = jwt.sign({ id: user.id }, SECRET, { expiresIn: '15m' });

  const resetLink = `http://localhost:3000/auth/reset-password/${token}`;

  await transporter.sendMail({
    from: 'Suporte <suporte@seudominio.com>',
    to: email,
    subject: 'Recuperação de senha',
    html: `
      <h3>Olá,</h3>
      <p>Clique no link abaixo para redefinir sua senha. O link expira em 15 minutos:</p>
      <a href="${resetLink}">${resetLink}</a>
    `
  });
}

    async getUserById(id) {
      const user = await this.userRepository.getUserById(id);
      if (!user) {
        throw new Error('User not found');
      }
      return user;
    }
  
    async getUserByEmail(email) {
      return this.userRepository.getUserByEmail(email);
    }
  
    async updateUser(id, userData) {
      return this.userRepository.updateUser(id, userData);
    }
  
    async deleteUser(id) {
      return this.userRepository.deleteUser(id);
    }
    async searchUsers(filters) {
        return this.userRepository.searchUsers(filters);
      }

      async validateCredentials(email, senha) {
        const user = await this.userRepository.getUserByEmail(email);

        if (!user) {
            throw new Error('Invalid email or password');
        }

        // Comparar senha fornecida com a hash no banco
        const isValidPassword = await bcrypt.compare(senha, user.senha);
        if (!isValidPassword) {
            throw new Error('Invalid email or password');
        }

        return user;
    }
    async updatePassword(id, novaSenhaHash) {
    return this.userRepository.updatePassword(id, novaSenhaHash);
}

  }
  
  module.exports = UserService;
  