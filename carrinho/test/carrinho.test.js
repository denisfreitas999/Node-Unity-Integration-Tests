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
});
