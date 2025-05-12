## Descrição

A API foi desenvolvida utilizando as seguintes tecnologias:

- Node.js
- Framework NestJS
- ORM Prisma

A UI foi desenvolvida utilizando as seguintes tecnologias:

- Vue

O banco de dados NoSQL:

- MongoDB

## Comandos para inicializar as aplicações

```bash
# Para iniciar a API
$ cd backend

# Adiciona o código de acesso ao banco de dados a partir do arquivo de modelo do Prisma
npx prisma generate

# Inicia o projeto
npm run start:dev
```

## Comandos utilizados para criação da API
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
```

## Comandos utilizados para criação da UI
```bash
...
```