const { Relatorio } = require('./relatorio'); // Importando o modelo de relatório

class RelatorioController {
  constructor() {
    this.relatorios = [];
  }

  // Gerar relatório de contratação
  gerarRelatorioContratacao(id, dataInicio, dataFim) {
    const novoRelatorio = new Relatorio(id, 'Contratação', dataInicio, dataFim);
    this.relatorios.push(novoRelatorio);
    console.log(`Relatório de contratação ${id} gerado com sucesso.`);
    return novoRelatorio;
  }

  // Gerar relatório de satisfação
  gerarRelatorioSatisfacao(id, dataInicio, dataFim) {
    const novoRelatorio = new Relatorio(id, 'Satisfação', dataInicio, dataFim);
    this.relatorios.push(novoRelatorio);
    console.log(`Relatório de satisfação ${id} gerado com sucesso.`);
    return novoRelatorio;
  }

  // Listar todos os relatórios
  listarRelatorios() {
    return this.relatorios.map((relatorio) => ({
      id: relatorio.getId(),
      tipo: relatorio.getTipo(),
      periodo: `${relatorio.getDataInicio()} - ${relatorio.getDataFim()}`,
    }));
  }
}

module.exports = RelatorioController;
