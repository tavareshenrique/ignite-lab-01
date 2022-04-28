# Purchases Service
> Esse serviço é utilizado para o cadastro dde Alunos, Produtos e de Compras.
>> Caso queira acessar o **GraphQL** do serviço de **purchases**, basta acessar: [http://localhost:3333/graphql](http://localhost:3333/graphql).

## Configurando `.env`

> Copie o arquivo `.env.example` para `.env` e altere os valores conforme necessário.

```bash
# Configuração do Audience do Auth0
AUTH0_AUDIENCE=

# Configuração do Domain do Auth0
AUTH0_DOMAIN=

# Configuração do Banco de Dados, abaixo um exemplo utilizando Docker. 
# Lembrando que é importante o nome do banco ser: purchases.
DATABASE_URL="postgresql://docker:docker@localhost:5432/purchases?schema=public"

# Configuração de acesso ao Kafka
KAFKA_BROKERS=localhost:29092
```
