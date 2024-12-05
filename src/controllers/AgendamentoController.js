const AgendamentoService = require('../services/AgendamentoService');

class AgendamentoController {
  constructor() {
    this.agendamentoService = new AgendamentoService();
  }

  
  async createAgendamento(req, res) {
    try {
      const data = req.body;
      const agendamento = await this.agendamentoService.createAgendamento(data);
      res.status(201).json(agendamento);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async getAgendamentosByCliente(req, res) {
    try {
      const clienteId = Number(req.params.clienteId);
      const agendamentos = await this.agendamentoService.getAgendamentosByCliente(clienteId);
      res.status(200).json(agendamentos);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  
  async updateAgendamento(req, res) {
    try {
      const id = Number(req.params.id);
      const data = req.body;
      const updatedAgendamento = await this.agendamentoService.updateAgendamento(id, data);
      res.status(200).json(updatedAgendamento);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  
  async deleteAgendamento(req, res) {
    try {
      const id = Number(req.params.id);
      await this.agendamentoService.deleteAgendamento(id);
      res.status(204).send(); 
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = AgendamentoController;
