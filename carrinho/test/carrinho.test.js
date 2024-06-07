import Carrinho from '../carrinho';
import Item from '../item';

describe('Testes do carrinho', () => {
  it('Deve inicializar vazio', () => {
    const carrinho = new Carrinho();
    expect(carrinho.subtotal).toBeNull();
  });

  it('Deve ter itens', () => {
    const item1 = new Item('Laranja', 2, 5);
    const item2 = new Item('Limão', 1, 3);

    const carrinho = new Carrinho();
    carrinho.adiciona(item1);
    carrinho.adiciona(item2);

    expect(typeof carrinho).toBe('object');
    expect(carrinho.itens[0]).toBe(item1);
    expect(carrinho.itens[1]).toBe(item2);

    expect(carrinho.itens).toContain(item1);
    expect(carrinho.itens).toContain(item2);
  });

  it('Deve ter a propriedade "total" na inicialização', () => {
    const carrinho = new Carrinho();

    expect(carrinho).toHaveProperty('total');
  });

  it('Deve lançar um erro ao finalizar compra com carrinho vazio', () => {
    function englobaErroCarrinho() {
      const carrinho = new Carrinho();
      carrinho.finalizaCompra();
    }

    expect(englobaErroCarrinho).toThrowError('Carrinho de compras vazio');
  });

  it('Deve adicionar o frete', () => {
    const carrinho = new Carrinho();
    carrinho.adicionaFrete(15);
    expect(carrinho.frete).toBe(15);
  });

  it('Deve calcular o total do carrinho', () => {
    const item = new Item('Banana', 2, 5);
    const carrinho = new Carrinho();

    carrinho.adiciona(item);
    carrinho.adicionaFrete(15);
    const total = carrinho.calculaTotal();

    expect(total).toBe(25);
  });

  it('Deve finalizar as compras', () => {
    const item = new Item('Banana', 2, 5);
    const carrinho = new Carrinho();

    carrinho.adiciona(item);
    carrinho.adicionaFrete(15);
    const compra = carrinho.finalizaCompra();

    expect(compra.frete).toBe(15);
    expect(compra.subtotal).toBe(10);
    expect(compra.total).toBe(25);
  });
});
