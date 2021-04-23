# Boas vindas ao repositório do Projeto CreativeCode Formulário BACK-END!
Aqui serão encontrados os detalhes de como o projeto foi estruturado. #vqv 🚀


## Cenário fictício

A CreativeCode está desenvolvendo uma aplicação para cadastro dos seus usuários e salvando estas informações em um banco de dados.


## Instruções para a instalação do projeto:
1. Crie uma pasta para onde o projeto será clonado

2. Clone o repositório
  * `git clone git@github.com:hleoc/`

3. Entre na pasta do repositório que você acabou de clonar
  * `cd `

4. Instale as dependências
  * `npm install`

5. Start o banco de dados PostgreSQL para criar o banco de dados e a tabela
  * `Rode o script do arquivo script.sql no PostgreSQL`

6. Configure um arquivo .env com as seguintes variáveis de ambiente
  MYSQL_USER=coloqueSeuUser
  MYSQL_PASSWORD=coloqueSeuPassword
  HOSTNAME=localhost
  NODE_ENV=test
  POSTGRE_DB_URL=ColoqueSuaConnectionString
 

7. Em uma aba do terminal rode o servidor do NodeJs
  * `npm run dev`


## Instruções para testar o projeto:
- Abra um novo terminal e digite o comando
  * `npm test`
OBS: a aplicação deve estar rodando.


## O que foi desenvolvido no back-end
Nesse projeto é possível fazer o cadastramento e login de usuários, onde apenas o usúario autenticado poderá Criar, Listar, Editar, Deletar o endereço(um `CRUD`, para os mais íntimos 😜).

A autenticação deverá ser feita via `JWT`.

O projeto foi desenvolvido para rodar na porta 3000 no back-end, mas podendo ser alterado no arquivo server.ts .


## Data de Entrega
O projeto tem até a seguinte data para ser entregue: 23/04/2021, sexta-feira, às 23h59.


## Requisitos Obrigatórios:
O Projeto CreativeCode Formulário será realizado utilizando o JWT para autenticação de usuários, PostgreSQL como banco de dados e testes unitários.


## Cobertura de testes unitários
- Foram cobertos alguns recursos do código com testes unitários utilizando Jest e Frisby.


## Tecnologias utilizadas
VSCode
JavaScript
React
NodeJS
TypeScript
PostgreSQL
DBeaver
Postman
Git/Github
ESLint


## Melhorias Futuras
Utilizar a funcionalidade enum para o campo Etinia.
