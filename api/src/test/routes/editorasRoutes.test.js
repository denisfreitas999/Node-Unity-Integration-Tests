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
});

describe('DELETE em /editoras/{id}', () => {
  it('Deletar o recurso adicionado', async () => {
    await request(app)
      .delete(`/editoras/${idEditora}`)
      .expect(200);
  })
});
