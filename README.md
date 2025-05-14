## Descrição

A API foi desenvolvida utilizando as seguintes tecnologias:

- Node.js
- Framework NestJS
- ORM Prisma

A UI foi desenvolvida utilizando as seguintes tecnologias:

- Vue 3
- Vite
- Vuetify

Banco de dados NoSQL:

- MongoDB

## Comandos necessários para inicializar a API

```bash
# Entra no diretório da API
$ cd backend

# Adiciona o código de acesso ao banco de dados a partir do arquivo de modelo do Prisma
npx prisma generate

# Inicia o projeto
npm run start:dev

# Insira a URL abaixo no navegador, para visualizar a documentação Swagger
http://localhost:3000/api/
```

## Comandos necessários para inicializar a UI
```bash
# Entra no diretório da UI
cd frontend

# Instala as dependências do projeto
npm install

# Inicia o projeto
npm run dev

# Insira a URL abaixo no navegador, para visualizar a UI
http://localhost:3001/
```

## Documentações utilizadas

- [Nest](https://docs.nestjs.com)
- [Prisma ORM](https://www.prisma.io/docs)
- [Vue](https://vuejs.org/guide/introduction.html)
- [Vite](https://vite.dev/guide)
- [Vuetify](https://vuetifyjs.com/en/introduction/why-vuetify)
- [Material Design](https://m3.material.io)

## Documentação dos comandos utilizados para criação da API
```bash
# Realiza a criação do projeto Node.js com framework NestJS
nest new backend

# Navega até o diretório criado
cd backend

# Adiciona o ORM Prisma
npm install prisma --save-dev

# Adiciona o cliente de banco de dados para conexão
npm install @prisma/client

# Inicializa um novo projeto Prisma dentro do diretório atual
npx prisma init --output ../generated/prisma

# Adiciona o código de acesso ao banco de dados a partir do arquivo de modelo do Prisma
npx prisma generate

# Sincroniza o esquema do Prisma com o banco de dados
npx prisma db push

# Automatiza a criação de uma estrutura de recursos RESTful
nest g res users
nest g res crypto

# Adiciona o módulo para a documentação do Swagger ao projeto
npm install --save @nestjs/swagger swagger-ui-express

# Adiciona o módulo JWT para autenticação e autorização
npm i @nestjs/jwt @nestjs/config

# Adiciona o módulo bcrypt para criptografar a senha do usuário
npm i bcrypt
npm i -D @types/bcrypt

# Adiciona o módulo de validação de dados
npm i --save class-validator class-transformer

# Adiciona o módulo para consumir API's externas
npm i --save @nestjs/axios axios

# Adiciona o módulo para upload de imagem
npm i -D @types/multer
```

## Documentação dos comandos utilizados para criação da UI
```bash
# Realiza a criação do projeto Vue 3 com Vuetify
npm create vuetify@latest

# Navega até o diretório criado
cd frontend

# Adiciona biblioteca de validação de formulários
npm install vee-validate --save

# Adiciona o módulo para consumir API's
npm install --save axios vue-axios

# Adiciona biblioteca de ícones
npm install @mdi/js
```