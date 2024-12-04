const { Usuario } = require('./usuario'); // Importando o modelo de usuário

class UsuarioController {
  constructor() {
    this.usuarios = [];
  }

  // Criar novo usuário
  criarUsuario(id, nome, email, senha, fotoPerfil, endereco) {
    const novoUsuario = new Usuario(id, nome, email, senha, fotoPerfil, endereco);
    this.usuarios.push(novoUsuario);
    console.log(`Usuário ${nome} cadastrado com sucesso.`);
    return novoUsuario;
  }

  // Listar todos os usuários
  listarUsuarios() {
    return this.usuarios.map((usuario) => ({
      id: usuario.getId(),
      nome: usuario.getNome(),
      email: usuario.getEmail(),
    }));
  }

  // Buscar um usuário por ID
  buscarUsuarioPorId(id) {
    const usuario = this.usuarios.find((u) => u.getId() === id);
    if (usuario) {
      return usuario;
    } else {
      console.log(`Usuário com ID ${id} não encontrado.`);
    }
  }
}

module.exports = UsuarioController;
