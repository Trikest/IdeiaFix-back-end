const MaterialRepository = require('../repositories/MaterialRepository');

class MaterialService {
  constructor() {
    this.materialRepository = new MaterialRepository();
  }

  async criarMaterial(data) {
    if (!data) {
      
      throw new Error('Dados obrigatórios ausentes para criar material.');
    }
    return await this.materialRepository.criarMaterial(data);
  }

  async listarMateriais() {
    return await this.materialRepository.listarMateriais();
  }

  async buscarMaterialPorId(id) {
    const material = await this.materialRepository.buscarMaterialPorId(id);
    if (!material) {
      throw new Error('Material não encontrado.');
    }
    return material;
  }

  async atualizarMaterial(id, data) {
    return await this.materialRepository.atualizarMaterial(id, data);
  }

  async deletarMaterial(id) {
    return await this.materialRepository.deletarMaterial(id);
  }
}

module.exports = MaterialService;
