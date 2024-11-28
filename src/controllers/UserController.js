class UserController {
    constructor(userService) {
      this.userService = userService;
    }
  
    // Criar um novo usuário
    async createUser(req, res) {
      try {
        console.log(req.body)
        const user = await this.userService.createUser(req.body);
        res.status(201).json(user);
      } catch (error) {
        //console.log(req.body)
        res.status(400).json({ error: error.message });
      }
    }
  
    // Obter um usuário por ID
    async getUserById(req, res) {
      try {
        const user = await this.userService.getUserById(Number(req.params.id));
        res.json(user);
      } catch (error) {
        res.status(404).json({ error: error.message });
      }
    }
  
    // Obter todos os usuários
    async getAllUsers(req, res) {
      try {
        const users = await this.userService.getAllUsers();
        res.json(users);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }
  
    // Atualizar um usuário por ID
    async updateUser(req, res) {
      try {
        const updatedUser = await this.userService.updateUser(
          Number(req.params.id),
          req.body
        );
        res.json(updatedUser);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    }
  
    // Excluir um usuário por ID
    async deleteUser(req, res) {
      try {
        await this.userService.deleteUser(Number(req.params.id));
        res.status(204).send(); // Sem conteúdo
      } catch (error) {
        res.status(404).json({ error: error.message });
      }
    }
  
    // Buscar usuários com filtros (exemplo: busca por nome ou email)
    async searchUsers(req, res) {
      try {
        const filters = req.query; // Ex.: { name: "John", email: "john@example.com" }
        const users = await this.userService.searchUsers(filters);
        res.json(users);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }
  }
  
  module.exports = UserController;
  