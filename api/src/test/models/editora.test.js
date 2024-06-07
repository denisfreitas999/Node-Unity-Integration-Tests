import { jest } from '@jest/globals'
import Editora from "../../models/editora";

describe('Testando o modelo Editora', () => {
  const objetoEditora = {
    nome: 'CDC',
    cidade: 'São Paulo',
    email: 'c@c.com'
  }

  it('Deve instanciar uma nova editora', () => {
    const editora = new Editora(objetoEditora);

    expect(editora).toEqual(
      expect.objectContaining(objetoEditora)
    );
  });

  it.skip('Deve salvar editora no BD', () => {
    const editora = new Editora(objetoEditora);

    editora.salvar().then((dados) => {
      expect(dados).toStrictEqual(objetoEditora)
    });
  });

  it.skip('Deve salvar no BD usando a forma assíncrona', async () => {
    const editora = new Editora(objetoEditora);

    const dados = await editora.salvar();

    const retornado = await Editora.pegarPeloId(dados.id);

    expect(retornado).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        ...objetoEditora,
        created_at: expect.any(String),
        updated_at: expect.any(String)
      })
    )
  });

  it.skip('Deve fazer uma chamada simulada ao BD simples', () => {
    const editora = new Editora(objetoEditora);

    editora.salvar = () => {
      console.log('Editora salva no DB');
    }

    editora.salvar();
  });

  it('Deve fazer uma chamada simulada ao BD Mock', () => {
    const editora = new Editora(objetoEditora);

    editora.salvar = jest.fn().mockReturnValue({
      id: 5,
      nome: 'CDC',
      cidade: 'São Paulo',
      email: 'c@c.com',
      created_at: '2024-06-06',
      updated_at: '2024-06-06'
    });

    const retorno = editora.salvar();

    expect(retorno).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        ...objetoEditora,
        created_at: expect.any(String),
        updated_at: expect.any(String)
      })
    )
  });

});
