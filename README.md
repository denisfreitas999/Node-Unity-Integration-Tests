# Testes Unitários e de Integração com NodeJS - Alura Course Overview

## Índice
1. [Conceituando Testes](#1-conceituando-testes)
2. [Asserções e Jest](#2-asserções-e-jest)
3. [Implementando Testes](#3-implementando-testes)
4. [Testando uma API](#4-testando-uma-api)
5. [Testando Rotas](#5-testando-rotas)

## Tecnologias Envolvidas
<div style="display: inline_block">
  <img align="center" alt="NodeJS" src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"/>
   <img align="center" alt="JEST" src="https://img.shields.io/badge/Jest-323330?style=for-the-badge&logo=Jest&logoColor=white"/>
</div>

## 1. Conceituando Testes
Na primeira etapa do curso, foquei em compreender a importância dos testes e os diferentes tipos que podemos implementar:
- **Importância dos Testes**: Entendi que os testes são essenciais para aumentar a confiabilidade e a qualidade do código.
- **Tipos de Testes**:
  - **Testes Estáticos**: Analisam o código sem executá-lo, verificando boas práticas e formatação.
  - **Testes Unitários**: Verificam o comportamento das menores unidades de código.
  - **Testes de Integração**: Testam módulos combinados como um conjunto.
  - **Testes E2E (End-to-End)**: Testam o fluxo completo da aplicação.
- **Cultura de Testes**: Compreendi os benefícios de ter uma cultura de testes, como padronização e processos estabelecidos.
- **ESLint**: Utilizei o ESLint para realizar testes estáticos em JS, estabelecendo padrões de escrita e analisando a estrutura do projeto.

## 2. Asserções e Jest
Na segunda etapa, foquei em aprender a usar o Jest para implementar e executar testes:
- **Métodos de Asserção**: Utilizei métodos nativos para comparação de igualdade.
- **Instalação do Jest**: Instalei e executei o Jest com a flag --experimental.
- **Criação de Arquivos de Teste**: Criei arquivos de testes e analisei erros.
- **Função Describe**: Utilizei a função describe do Jest para agrupar testes relacionados.
- **Cobertura de Testes**: Gereei relatórios de cobertura com o coverage, identificando caminhos não testados no código.

## 3. Implementando Testes
Na terceira etapa, aprofundei meus conhecimentos em matchers e cobertura de testes:
- **Uso de Matchers**: Utilizei matchers para comparar igualdade, inclusão, erros e propriedades de valores.
- **Estrutura de Dados**: Alinhei o uso do matcher com asserções em arrays, objetos e conjuntos.
- **Falsos Positivos**: Identifiquei situações de falsos positivos e compreendi que cobertura de 100% nem sempre significa testes completos.

## 4. Testando uma API
Na quarta etapa, comecei a testar APIs e aprendi a utilizar métodos assíncronos:
- **Testes Unitários em APIs**: Implementei os primeiros testes unitários em uma API.
- **Método Skip**: Utilizei o método skip para pular temporariamente testes na coleção de asserções.
- **Testes Assíncronos**: Executei testes de forma assíncrona utilizando then e await.
- **Mocks**: Criei funções de simulação com jest.fn() para simular comportamentos nos testes.

## 5. Testando Rotas
Na quinta e última etapa, foquei em testar rotas e configurar o ambiente de testes:
- **Hooks**: Aprendi a utilizar hooks para configurar condições iniciais e finais dos testes.
- **Supertest**: Utilizei o supertest para simplificar requisições e asserções lidando com HTTP.
- **Casos de Contorno**: Lembrei da importância de testar casos de contorno.
- **Test.each**: Utilizei o test.each() para fornecer tabelas e simplificar entradas para testes repetitivos.
- **jest.spyOn**: Conheci o método jest.spyOn() para acompanhar chamadas de métodos e realizar asserções adicionais.

---

Este curso foi fundamental para me dar uma base em testes unitários e de integração, permitindo-me enfrentar desafios no desenvolvimento de software com mais segurança e eficácia.
