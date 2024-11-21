class Relatorio {
  constructor(id, tipo, conteudo) {
    this.id = id;
    this.tipo = tipo;
    this.conteudo = conteudo;
  }

  gerar() {
    console.log(`Relatório ${this.tipo} gerado: ${this.conteudo}`);
    // Lógica para gerar relatórios
  }
}

module.exports = Relatorio;
