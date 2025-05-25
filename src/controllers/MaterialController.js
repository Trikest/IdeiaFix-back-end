const MaterialService = require('../services/MaterialService');

class MaterialController {
  constructor() {
    this.materialService = new MaterialService();
  }

  // Criar material
  async criarMaterial(req, res) {
    try {
      const material = await this.materialService.criarMaterial(req.body);
      res.status(201).json(material);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  // Listar todos os materiais
  async listarMateriais(req, res) {
    try {
      const materiais = await this.materialService.listarMateriais();
      res.status(200).json(materiais);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  // Buscar material por ID
  async buscarMaterialPorId(req, res) {
    try {
      const id = Number(req.params.id);
      const material = await this.materialService.buscarMaterialPorId(id);
      res.status(200).json(material);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  // Atualizar material
  async atualizarMaterial(req, res) {
    try {
      const id = Number(req.params.id);
      const material = await this.materialService.atualizarMaterial(id, req.body);
      res.status(200).json(material);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  // Deletar material
  async deletarMaterial(req, res) {
    try {
      const id = Number(req.params.id);
      await this.materialService.deletarMaterial(id);
      res.status(204).send(); // No Content
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = MaterialController;
