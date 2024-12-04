const Dashboard = require('./dashboard');

class DashboardController {
  constructor() {
    this.dashboard = new Dashboard(Date.now());
  }

  gerarRelatorioDeContratacao() {
    this.dashboard.gerarRelatorioDeContratacao();
  }

  gerarRelatorioDeSatisfacao() {
    this.dashboard.gerarRelatorioDeSatisfacao();
  }

  listarRelatorios() {
    return this.dashboard.getRelatorios();
  }
}

module.exports = DashboardController;
