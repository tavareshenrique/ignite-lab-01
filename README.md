<h1 align="center">
  <img alt="Ignite Lab" title="Ignite Lab" src="https://raw.githubusercontent.com/tavareshenrique/ignite-lab-01/fdc436f7cf6b78de9683118fb7a0f000a5a4ae6f/assets/logo.svg" width="180px" />
</h1>

<p align="center">
  <img alt="Last commit on GitHub" src="https://img.shields.io/github/last-commit/tavareshenrique/ignite-lab-01?color=4ad862">
  <img alt="Made by Henrique Tavares" src="https://img.shields.io/badge/made%20by-Henrique Tavares-%20?color=4ad862">
  <img alt="Project top programing language" src="https://img.shields.io/github/languages/top/tavareshenrique/ignite-lab-01?color=4ad862">
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/tavareshenrique/ignite-lab-01?color=4ad862">
  <img alt="GitHub license" src="https://img.shields.io/github/license/tavareshenrique/ignite-lab-01?color=4ad862">
</p>

<p align="center">
  <a href="#information_source-como-executar">ℹ️ Como Executar?</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-tecnologias">🚀 Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#computer-autores">💻 Autores</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">📝 Licença</a>
</p>

<p align="center">
  O <b>Ignite Lab</b> é um curso bônus da Rocketseat onde construimos uma aplicação utilizando: <b>NestJS, Prisma, Apache Kafka, GraphQL, ReactJS, Next.js e Apollo</b>. A ideia é do projeto é uma plataforma de cursos divididas em microsserviços, um serviço de compras chamado <b>purchases</b> e um serviço de aulas chamado <b>classroom</b>, ambos utilizando autenticação pela plataforma <a href="https://auth0.com/pt">Auth0</a>.
</p>

<p align="center">
  Esses serviços se comunicam utilizando o <b>Apache Kafka</b> como <b>Message Broker</b>, e existe um terceiro serviço chamado <b>gateway</b> que faz a união entre os serviços <b>purchases</b> e <b>classroom</b> utilizando o <b>Apollo Gateway</b> para que somente um <b>End-Point</b> seja necessário ser consumido pelo nosso <b>Front-End</b> que foi construindo utilizando <b>React</b> com <b>NextJS</b>.
</p>

---

> 🧪 Essa aplicação não possuirá Testes Unitários, Integração e E2E por não ser o foco do estudo, mas está pronta para ser executada. 🧪

# :information_source: Como Executar?

### 1. Configurações Iniciais

> **1.1.** Clone o Repositório:

```bash
git clone https://github.com/tavareshenrique/ignite-lab-01
```

> **1.2.** Existe um arquivo [docker-compose.yml](./docker-compose.yml) na raiz do projeto para você utilizar para poder executar os serviços do Kafka e do Postgres, que é o nosso Banco de Dados, na sua máquina local. Acesse ele, e execute o comando:

```bash
docker-compose up --build
```

> ℹ️  Caso não possua Docker instalado, na sua máquina, acesse [aqui](https://docs.docker.com/engine/install/) para instalar.

---

> 🚨 Lembrando que para continuar para as etapas seguintes, o [docker-compose.yml](./docker-compose.yml) deve estar rodando, como ensinado no passo **1.2**. 🚨

> 🚨🚨🚨 Antes de continuar, é necessário **configurar as variáveis de ambiente de cada um dos projetos**, acesse a documentação individual de cada um dos projetos para aprender a configurar: [purchases](./purchases/), [classroom](./classroom/) e [web](./web/) 🚨🚨🚨

### 2. Iniciando o Serviço de Purchase

> **2.1.** Acesse o serviço de **purchase**:

```bash
cd purchases
```

> **2.2.** Instale as dependências:

```bash
yarn
```

> **2.3.** Criando a base de dados de **purchases** no **Postgres** utilizando o [prisma](https://www.prisma.io/), para isso execute o comando:

```bash
npx prisma migrate dev
```

> **2.4.** Inicie o Serviço:

```bash
yarn start:dev
```
---

### 3. Iniciando o Serviço de Classroom

> **3.1.** Acesse o serviço de **classroom**:

```bash
cd classroom
```

> **3.2.** Instale as dependências:

```bash
yarn
```

> **3.3.** Criando a base de dados de **classroom** no **Postgres** utilizando o [prisma](https://www.prisma.io/), para isso execute o comando:

```bash
npx prisma migrate dev
```

> **3.4.** Inicie o Serviço:

```bash
yarn start:dev
```

---

### 4. Iniciando o Serviço de Gateway

> 🚨 Na **etapa 4** será necessário que os serviços de **purchases** e **classrom** estejam rodando **simultaneamente**, então certifique de ter seguido exatamente os passos das **etapas 2 e 3**. 🚨


> **4.1.** Acesse o serviço de **gateway**:

```bash
cd gateway
```

> **4.2.** Instale as dependências:

```bash
yarn
```

> **4.3.** Inicie o Serviço:

```bash
yarn start:dev
```

---

### 5. Acessando Rotas dos Serviços

> 🎉  A parti daqui, você está com todos os serviços rodando.

> **Gateway**
>> Caso queira acessar o **GraphQL** do serviço de **gateway**, basta acessar: [http://localhost:3332/graphql](http://localhost:3332/graphql).

> **Purchases**
>> Caso queira acessar o **GraphQL** do serviço de **purchases**, basta acessar: [http://localhost:3333/graphql](http://localhost:3333/graphql).

> **Classroom**
>> Caso queira acessar o **GraphQL** do serviço de **classroom**, basta acessar: [http://localhost:3334/graphql](http://localhost:3334/graphql).

---

### 6. Iniciando a aplicação web

> 🚨 Na **etapa 6** será necessário que os serviços de **purchases**, **classrom** e **gateway** estejam rodando **simultaneamente**, então certifique de ter seguido exatamente os passos das **etapas 2, 3 e 4**. 🚨


> **4.1.** Acesse o serviço de **gateway**:

```bash
cd web
```

> **4.2.** Instale as dependências:

```bash
yarn
```

> **4.3.** Inicie o Serviço:

```bash
yarn dev
```

> ➡️ Acesse [http://localhost:3000](http://localhost:3000) para acessar a aplicação web.


# :rocket: Tecnologias

- [TypeScript](https://www.typescriptlang.org/)
- [NestJS](https://nestjs.com/)
- [React](https://pt-br.reactjs.org/)
- [NextJS](https://nextjs.org/)
- [Apollo](apollographql.com)
  - [Apollo Federation](https://www.npmjs.com/package/@apollo/federation)
  - [Apollo Server Express](https://www.npmjs.com/package/apollo-server-express)
  - [Apollo Gateway](https://www.npmjs.com/package/@apollo/gateway)
  - [Apollo Client](https://www.npmjs.com/package/@apollo/client)
- [GraphQL](https://graphql.org/)
- [Prisma](https://www.prisma.io/)
- [Apache Kafka](https://kafka.apache.org/)
- [Auth0](https://auth0.com/pt)
- [Express JWT](https://www.npmjs.com/package/express-jwt)
- [Slugify](https://www.npmjs.com/package/slugify)
- [TailwindCSS](https://tailwindcss.com/)
- [PostCSS](https://postcss.org/)
- [Next HTTP Proxy Middleware](https://www.npmjs.com/package/next-http-proxy-middleware)
- [GraphQL Codegen Apollo Next SSR](https://www.npmjs.com/package/graphql-codegen-apollo-next-ssr)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)

# :computer: Autores

<table>
  <tr>
    <td align="center">
      <a href="http://github.com/tavareshenrique/">
        <img src="https://avatars1.githubusercontent.com/u/27022914?v=4" width="100px;" alt="Henrique Tavares"/>
        <br />
        <sub>
          <b>Henrique Tavares</b>
        </sub>
       </a>
       <br />
       <a href="https://www.linkedin.com/in/tavareshenrique/" title="Linkedin">@tavareshenrique</a>
       <br />
       <a href="https://github.com/tavareshenrique/go-barber-web-ts/commits?author=tavareshenrique" title="Code">💻</a>
    </td>
    <td align="center">
      <a href="http://github.com/rocketseat/">
        <img src="https://avatars.githubusercontent.com/u/28929274?s=200&v=4" width="100px;" alt="Logo da Rocketseat"/>
        <br />
        <sub>
          <b>Rocketseat</b>
        </sub>
       </a>
       <br />
       <a href="http://github.com/rocketseat/" title="Linkedin">@rocketseat</a>
       <br />
       <a href="https://github.com/tavareshenrique/go-barber-web-ts/commits?author=tavareshenrique" title="Education Platform">🚀</a>
    </td>
  </tr>
</table>

# :memo: Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo de [licença](https://github.com/tavareshenrique/go-barber-mobile-ts/blob/master/LICENSE.md) para mais detalhes.
