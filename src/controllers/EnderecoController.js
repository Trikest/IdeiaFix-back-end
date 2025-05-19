const EnderecoService = require('../services/EnderecoService');

class EnderecoController {
  constructor() {
    this.enderecoService = new EnderecoService();
  }

  // Criar endereço
  async createEndereco(req, res) {
    try {
      const data = req.body;
      const endereco = await this.enderecoService.createEndereco(data);
      res.status(201).json(endereco);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  // Obter endereços de um cliente
  async getEnderecosByCliente(req, res) {
    try {
      const clienteId = Number(req.params.clienteId);
      const enderecos = await this.enderecoService.getEnderecosByCliente(clienteId);
      res.status(200).json(enderecos);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  // Atualizar endereço
  async updateEndereco(req, res) {
    try {
      const id = Number(req.params.id);
      const data = req.body;
      const updatedEndereco = await this.enderecoService.updateEndereco(id, data);
      res.status(200).json(updatedEndereco);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  // Deletar endereço
  async deleteEndereco(req, res) {
    try {
      const id = Number(req.params.id);
      await this.enderecoService.deleteEndereco(id);
      res.status(204).send(); // Sem conteúdo
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = EnderecoController;
