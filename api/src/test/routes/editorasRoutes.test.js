import app from '../../app'
import request from 'supertest';

let server;

beforeEach(() => {
  const port = 3000;
  server = app.listen(port);
});

afterEach(() => {
  server.close();
})


describe('GET em /editoras', () => {
  it('Deve retornar uma lista de editoras', async () => {
    const resposta = await await request(app)
      .get('/editoras')
      .set('Accept', 'application/json')
      .expect('content-type', /json/)
      .expect(200);

    expect(resposta.body[0].email).toEqual('e@e.com');
  });
});

let idEditora;
describe('POST em /editoras', () => {
  it('Deve adicionar uma nova editora', async () => {
    const resposta = await request(app)
      .post('/editoras')
      .send({
        nome: "CDC",
        cidade: 'Sao Paulo',
        email: 's@s.com'
      })
      .expect(201);

    idEditora = resposta.body.content.id;
  });

  it('Deve não adicionar nada ao passar o body vazio.', async () => {
    await request(app)
      .post('/editoras')
      .send({})
      .expect(400);
  });
});

describe('PUT em /editoras/{id}', () => {
  it.each([
    ['nome', { nome: 'Casa do Código' }],
    ['cidade', { cidade: 'Aracaju' }],
    ['email', { email: 'cdc@cdc.com' }]
  ])('Deve alterar o campo %s', async (chave, param) => {
    await request(app)
      .put(`/editoras/${idEditora}`)
      .send(param)
      .expect(204);
  });
});

describe('DELETE em /editoras/{id}', () => {
  it('Deve deletar o recurso adicionado', async () => {
    await request(app)
      .delete(`/editoras/${idEditora}`)
      .expect(200);
  })
});

