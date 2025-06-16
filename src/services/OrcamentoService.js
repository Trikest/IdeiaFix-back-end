const OrcamentoRepository = require('../repositories/OrcamentoRepository');

class OrcamentoService {
  constructor() {
    this.orcamentoRepository = new OrcamentoRepository();
  }

  async criarOrcamento(data) {
    
    if (
      data.clienteId == null ||
      data.servicoId == null
    ) {
      throw new Error('Dados incompletos para criar orçamento.');
    }

  const { precoUnitario, valorTotal } = this.calcularPreco(data);
  data.precoUnitario = precoUnitario;
  data.valorTotal = valorTotal;
    return await this.orcamentoRepository.criarOrcamento(data);
  }

  async listarOrcamentos() {
    return await this.orcamentoRepository.listarOrcamentos();
  }
 async getOrcamentosByCliente(clienteId) {
    return await this.orcamentoRepository.getOrcamentosByCliente(clienteId);
  }
  async buscarOrcamentoPorId(id) {
    const orcamento = await this.orcamentoRepository.buscarOrcamentoPorId(id);
    if (!orcamento) {
      throw new Error('Orçamento não encontrado.');
    }
    return orcamento;
  }

  async atualizarOrcamento(id, data) {
    return await this.orcamentoRepository.atualizarOrcamento(id, data);
  }

  async deletarOrcamento(id) {
    return await this.orcamentoRepository.deletarOrcamento(id);
  }
  //Calculo do preço
  calcularPreco(data) {
  const tipoServico = data.dadosExtras?.tipoServico;
  const altura = this._converterParaMetros(data.altura, data.unidadeAltura);
  const largura = this._converterParaMetros(data.largura, data.unidadeLargura);
  const area = altura * largura;

  let precoUnitario = 0;
  let valorTotal = 0;

  switch (tipoServico) {
    case 'Envelopamento de Móveis':
      const modelo = data.dadosExtras.modeloAdesivo;
      // Exemplo de faixa de preço
      precoUnitario = modelo === 'Premium' ? 130 : 75;
      valorTotal = precoUnitario * area;
      break;

    case 'Adesivo de Parede':
      const tipoAdesivo = data.dadosExtras.tipoAdesivo;
      if (tipoAdesivo === 'Adesivo com Impressão Digital') precoUnitario = 160;
      else if (tipoAdesivo === 'Adesivo Decorativo') precoUnitario = 100;
      else precoUnitario = 75; // liso
      valorTotal = precoUnitario * area;
      break;

    case 'Película Fumê':
      const densidade = Number(data.dadosExtras.densidade);
      // Exemplo de regra simples pela densidade
      precoUnitario = densidade > 50 ? 180 : 100;
      valorTotal = precoUnitario * area;
      break;

    case 'Placa de Acrílico':
      const espessura = data.dadosExtras.espessura || 2; // mm, se existir
      const cor = data.dadosExtras.cor || '';
      precoUnitario = espessura > 3 ? 90 : 60;
      if (cor.toLowerCase() === 'azul') precoUnitario += 10;
      valorTotal = precoUnitario * area;
      break;

    case 'Placa de Sinalização':
      const qtd = data.dadosExtras.quantidade || 1;
      precoUnitario = 50; // base
      valorTotal = precoUnitario * qtd;
      break;

    case 'Sinalização de Veículo':
      precoUnitario = tipoServico.includes('Impressão') ? 150 : 100;
      valorTotal = precoUnitario * area;
      break;

    default:
      throw new Error('Tipo de serviço não reconhecido para cálculo.');
  }

  return { precoUnitario, valorTotal };
}

// método auxiliar para unidade
_converterParaMetros(valor, unidade) {
  valor = Number(valor);
  if (unidade === 'cm') return valor / 100;
  if (unidade === 'mm') return valor / 1000;
  return valor; // já em metros
}

}

module.exports = OrcamentoService;
