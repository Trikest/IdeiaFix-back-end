class UserService {
    constructor(userRepository) {
      this.userRepository = userRepository;
    }
  
    async createUser(userData) {
        console.log(userData.senha)
        
      if (!userData.email || !userData.senha) {
        throw new Error('Email and password are required');
      }
      return this.userRepository.createUser(userData);
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
  }
  
  module.exports = UserService;
  