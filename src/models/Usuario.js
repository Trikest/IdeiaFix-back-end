class Usuario {
    // Atributos privados
    #id;
    #nome;
    #email;
    #senha;
    #telefone;
  
    constructor(id, nome, email, senha, telefone) {
      this.#id = id;
      this.#nome = nome;
      this.#email = email;
      this.#senha = senha;
      this.#telefone = telefone;
    }
  
    // Métodos
    registrar() {
      // Lógica para salvar o usuário no banco de dados
      console.log(`Usuário ${this.#nome} registrado com sucesso.`);
    }
  
    autenticar(email, senha) {
      // Lógica para autenticação (verificar email e senha)
      if (this.#email === email && this.#senha === senha) {
        console.log('Usuário autenticado com sucesso.');
        return true;
      } else {
        console.log('Email ou senha incorretos.');
        return false;
      }
    }
  
    recuperarSenha(novaSenha) {
      // Lógica para redefinir a senha
      this.#senha = novaSenha;
      console.log('Senha redefinida com sucesso.');
    }
  
    editarPerfil(novoNome, novaTelefone) {
      // Lógica para editar o perfil
      this.#nome = novoNome;
      if (novaTelefone) {
        this.#telefone = novaTelefone;
      }
      console.log('Perfil atualizado com sucesso.');
    }
  
    // Getters para acessar atributos privados
    getId() {
      return this.#id;
    }
  
    getNome() {
      return this.#nome;
    }
  
    getEmail() {
      return this.#email;
    }
  
    getTelefone() {
      return this.#telefone;
    }
  }
  
  module.exports = Usuario;
  