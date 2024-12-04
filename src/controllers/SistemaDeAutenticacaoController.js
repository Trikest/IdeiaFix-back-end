const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Usuario } = require('./usuario'); // Importando o modelo de usuário

class SistemaDeAutenticacaoController {
  constructor() {
    this.usuarios = [];
    this.JWT_SECRET = 'suaChaveSecretaAqui'; // Usar variáveis de ambiente para segurança
  }

  // Registrar um novo usuário
  async registrarUsuario(email, senha, nome) {
    const usuarioExistente = this.usuarios.find((u) => u.getEmail() === email);
    if (usuarioExistente) {
      console.log(`Este email ${email} já está em uso.`);
      return;
    }

    const senhaHash = await bcrypt.hash(senha, 10);
    const novoUsuario = new Usuario(
      Date.now(),
      nome,
      email,
      senhaHash,
      null,
      null
    );
    this.usuarios.push(novoUsuario);
    console.log(`Usuário ${nome} registrado com sucesso.`);
    return novoUsuario;
  }

  // Login do usuário
  async login(email, senha) {
    const usuario = this.usuarios.find((u) => u.getEmail() === email);
    if (!usuario) {
      console.log('Usuário não encontrado.');
      return;
    }

    const senhaValida = await bcrypt.compare(senha, usuario.getSenha());
    if (!senhaValida) {
      console.log('Senha incorreta.');
      return;
    }

    const payload = { id: usuario.getId(), email: usuario.getEmail() };
    const token = jwt.sign(payload, this.JWT_SECRET, { expiresIn: '1h' });
    console.log('Login bem-sucedido, token gerado.');
    return { token };
  }

  // Validar token JWT
  validarToken(token) {
    try {
      const decoded = jwt.verify(token, this.JWT_SECRET);
      return decoded;
    } catch (error) {
      console.log('Token inválido ou expirado.');
      return null;
    }
  }
}

module.exports = SistemaDeAutenticacaoController;
