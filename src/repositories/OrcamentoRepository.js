const prisma = require('../config/prisma');

class OrcamentoRepository {
  async criarOrcamento(data) {
    try {
      return await prisma.orcamento.create({
        data: {
          clienteId: data.clienteId,
          servicoId: data.servicoId,
          materialId: data.materialId,
          largura: data.largura,
          altura: data.altura,
          area: data.area,
          precoUnitario: data.precoUnitario,
          valorTotal: data.valorTotal,
          observacoes: data.observacoes || null,
        },
      });
    } catch (error) {
      throw new Error('Erro ao criar orçamento: ' + error.message);
    }
  }

  async listarOrcamentos() {
    try {
      return await prisma.orcamento.findMany({
        include: {
          Cliente: true,
          servico: true,
          material: true,
        },
      });
    } catch (error) {
      throw new Error('Erro ao listar orçamentos: ' + error.message);
    }
  }

  async buscarOrcamentoPorId(id) {
    try {
      return await prisma.orcamento.findUnique({
        where: { id },
        include: {
          Cliente: true,
          servico: true,
          material: true,
        },
      });
    } catch (error) {
      throw new Error('Erro ao buscar orçamento: ' + error.message);
    }
  }

  async atualizarOrcamento(id, data) {
    try {
      return await prisma.orcamento.update({
        where: { id },
        data: {
          clienteId: data.clienteId,
          servicoId: data.servicoId,
          materialId: data.materialId,
          largura: data.largura,
          altura: data.altura,
          area: data.area,
          precoUnitario: data.precoUnitario,
          valorTotal: data.valorTotal,
          observacoes: data.observacoes || null,
        },
      });
    } catch (error) {
      throw new Error('Erro ao atualizar orçamento: ' + error.message);
    }
  }

  async deletarOrcamento(id) {
    try {
      return await prisma.orcamento.delete({
        where: { id },
      });
    } catch (error) {
      throw new Error('Erro ao deletar orçamento: ' + error.message);
    }
  }
}

module.exports = OrcamentoRepository;
