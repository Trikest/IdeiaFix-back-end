const ServicoService = require('../services/ServicoService');

class ServicoController {
  constructor() {
    this.servicoService = new ServicoService();
  }

  async criarServico(req, res) {
    try {
      const data = req.body;
      const servico = await this.servicoService.criarServico(data);
      res.status(201).json(servico);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async listarServicos(_req, res) {
    try {
      const servicos = await this.servicoService.listarServicos();
      res.status(200).json(servicos);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async buscarServicoPorId(req, res) {
    try {
      const id = Number(req.params.id);
      const servico = await this.servicoService.buscarServicoPorId(id);
      if (!servico) {
        return res.status(404).json({ error: 'Serviço não encontrado' });
      }
      res.status(200).json(servico);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async atualizarServico(req, res) {
    try {
      const id = Number(req.params.id);
      const data = req.body;
      const servico = await this.servicoService.atualizarServico(id, data);
      res.status(200).json(servico);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async deletarServico(req, res) {
    try {
      const id = Number(req.params.id);
      await this.servicoService.deletarServico(id);
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = ServicoController;
