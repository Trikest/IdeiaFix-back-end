class Usuario {
  constructor(id, nome, email, senha, fotoPerfil) {
    this.id = id;
    this.nome = nome;
    this.email = email;
    this.senha = senha;
    this.fotoPerfil = fotoPerfil;
  }

  registrar() {
    console.log(`Usuário ${this.nome} registrado com sucesso.`);
    // Adicionar lógica de registro, como salvar no banco de dados
  }

  autenticar(email, senha) {
    console.log(`Autenticando usuário ${email}...`);
    // Adicionar lógica para verificar credenciais
    return true; // Retorna sucesso como exemplo
  }

  recuperarSenha() {
    console.log(`Recuperando senha para o email ${this.email}.`);
    // Adicionar lógica para recuperação de senha
  }

  editarPerfil(novoNome, novaFotoPerfil) {
    this.nome = novoNome || this.nome;
    this.fotoPerfil = novaFotoPerfil || this.fotoPerfil;
    console.log(`Perfil atualizado: Nome - ${this.nome}, Foto - ${this.fotoPerfil}`);
  }
}

module.exports = Usuario;
