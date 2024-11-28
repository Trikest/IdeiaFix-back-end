class Dashboard {
    // Atributos privados
    #id;
    #relatorios;
    #notificacoes;
  
    constructor(id, relatorios = [], notificacoes = []) {
      this.#id = id;
      this.#relatorios = relatorios; // Lista de objetos da classe Relatorio
      this.#notificacoes = notificacoes; // Lista de objetos da classe Notificacao
    }
  
    // Métodos
    gerarRelatorioDeContratacao() {
      const relatorio = new Relatorio(
        Date.now(),
        'contratacao',
        'Relatório de contratação gerado com sucesso.'
      );
      this.#relatorios.push(relatorio);
      relatorio.gerar();
    }
  
    gerarRelatorioDeSatisfacao() {
      const relatorio = new Relatorio(
        Date.now(),
        'satisfacao',
        'Relatório de satisfação gerado com sucesso.'
      );
      this.#relatorios.push(relatorio);
      relatorio.gerar();
    }
  
    monitorarServicos() {
      console.log('Monitorando serviços em andamento...');
    }
  
    // Getters
    getRelatorios() {
      return this.#relatorios;
    }
  
    getNotificacoes() {
      return this.#notificacoes;
    }
  }
  
  module.exports = Dashboard;
  