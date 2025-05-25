const prisma = require('../config/prisma'); // Conexão do Prisma

class ServicoRepository {
  async criarServico(data) {
    try {
      return await prisma.servico.create({
        data: {
          nome: data.nome,
          descricao: data.descricao,
          tipoCalculo: data.tipoCalculo,
          imgUrl: data.imgUrl || null,
        },
      });
    } catch (error) {
      throw new Error('Erro ao criar serviço: ' + error.message);
    }
  }

  async listarServicos() {
    try {
      return await prisma.servico.findMany();
    } catch (error) {
      throw new Error('Erro ao listar serviços: ' + error.message);
    }
  }

  async buscarServicoPorId(id) {
    try {
      return await prisma.servico.findUnique({
        where: { id },
      });
    } catch (error) {
      throw new Error('Erro ao buscar serviço: ' + error.message);
    }
  }

  async atualizarServico(id, data) {
    try {
      return await prisma.servico.update({
        where: { id },
        data: {
          nome: data.nome,
          tipo: data.tipo,
          descricao: data.descricao,
          precoBase: data.precoBase,
          imagemUrl: data.imagemUrl || null,
        },
      });
    } catch (error) {
      throw new Error('Erro ao atualizar serviço: ' + error.message);
    }
  }

  async deletarServico(id) {
    try {
      return await prisma.servico.delete({
        where: { id },
      });
    } catch (error) {
      throw new Error('Erro ao deletar serviço: ' + error.message);
    }
  }
}

module.exports = ServicoRepository;
