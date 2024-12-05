const IUserRepository = require('./IUserRepository');
const prisma = require('../config/prisma');

class PrismaUserRepository extends IUserRepository {
  async createUser(data) {
    if (!prisma) {
        throw new Error('Prisma client não foi inicializado corretamente.');
      }
    return prisma.usuario.create({data: {
      nome: data.nome,
      email: data.email,
      senha: data.senha,
      fotoPerfil: data.fotoPerfil,
      Cliente: data.Cliente ? { create: { ...data.Cliente } } : undefined,
      Funcionario: data.Funcionario ? { create: { ...data.Funcionario } } : undefined
    }});  // Corrigido para 'usuario' em vez de 'user'
  }

  async getUserById(id) {
    return prisma.usuario.findUnique({ where: { id } });  // Corrigido para 'usuario'
  }

  async getUserByEmail(email) {
    return prisma.usuario.findUnique({ where: { email } });  // Corrigido para 'usuario'
  }

  async updateUser(id, data) {
    return prisma.usuario.update({ where: { id }, data });  // Corrigido para 'usuario'
  }

  async deleteUser(id) {
    return prisma.usuario.delete({ where: { id } });  // Corrigido para 'usuario'
  }

  async searchUsers(filters) {
    return prisma.usuario.findMany({ where: filters });  // Corrigido para 'usuario'
  }
}

module.exports = PrismaUserRepository;
