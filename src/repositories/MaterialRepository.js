const prisma = require('../config/prisma');

class MaterialRepository {
async criarMaterial(data) {
  try {
    // se recebeu objeto com .Material, pegue só ele
    if (data.Material) data = data.Material;

    data.precoMin = Number(data.precoMin);
    data.precoMax = Number(data.precoMax);
    data.servicoId = Number(data.servicoId);

    if (
      !data.nome ||
      typeof data.precoMin !== 'number' || isNaN(data.precoMin) ||
      typeof data.precoMax !== 'number' || isNaN(data.precoMax) ||
      typeof data.servicoId !== 'number' || isNaN(data.servicoId)
    ) {
      throw new Error("Campos obrigatórios ausentes ou inválidos");
    }

    const materialCriado = await prisma.material.create({
      data: {
        nome: data.nome,
        precoMin: data.precoMin,
        precoMax: data.precoMax,
        servicoId: data.servicoId
      },
      include: { orcamentos: true }
    });

    return materialCriado;
  } catch (error) {
    throw new Error('Erro ao criar material: ' + error.message);
  }
}

  async listarMateriais() {
    try {
      return await prisma.material.findMany();
    } catch (error) {
      throw new Error('Erro ao listar materiais: ' + error.message);
    }
  }

  async buscarMaterialPorId(id) {
    try {
      return await prisma.material.findUnique({
        where: { id },
      });
    } catch (error) {
      throw new Error('Erro ao buscar material: ' + error.message);
    }
  }

  async atualizarMaterial(id, data) {
    try {
      return await prisma.material.update({
        where: { id },
        data: {
          nome: data.nome,
          tipo: data.tipo,
          precoMetro: data.precoMetro,
          descricao: data.descricao || '',
          imagemUrl: data.imagemUrl || null,
        },
      });
    } catch (error) {
      throw new Error('Erro ao atualizar material: ' + error.message);
    }
  }

  async deletarMaterial(id) {
    try {
      return await prisma.material.delete({
        where: { id },
      });
    } catch (error) {
      throw new Error('Erro ao deletar material: ' + error.message);
    }
  }
}

module.exports = MaterialRepository;
