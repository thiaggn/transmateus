<p align="center">
  <img src="logo.png" alt="TransMateus">
</p>

# Transmateus
A Transmateus é uma plataforma centralizada de venda de passagens rodoviárias, oferecida no modelo de software como serviço (SaaS) para viações. Fundada em 2008 por Mateus Filipe, a empresa foi adquirida em 2023 pela Sapiência Digital -- companhia fundada por Brenda Ponath, João Vitor Rocha e Thiago Gomes. Atualmente, a Transmateus passa por um processo de transformação digital para consolidar seu novo posicionamento de mercado.

## Estrutura do projeto
* `/src` código do servidor
* `/sql` migrations (modelagem do banco)
* `/web` página web
* `/scripts` scripts operacionais e de desenvolvimento
* `/.env.example` variáveis de ambiente do desenvolvedor

O desenvolvedor deve editar o arquivo de variáveis de ambiente de acordo com sua configuração pessoal. Remova `.example` do nome do arquivo em seguida.

### Dependências
Enquanto não usamos Docker para agrupar todas a dependências automaticamente, precisamos instalar elas uma a uma.
* Compilador de Go <https://go.dev/>
* PostgreSQL <https://www.postgresql.org/>
* NodeJS <https://nodejs.org/pt-br> (opcional)

## Makefile
Usamos Makefile como uma forma de evitar escrever comandos extensos no terminal. Defini os seguintes comandos:
* `make run` compila e roda o servidor na porta 8080 (precisa do compilador Go)
* `make dev` inicia o servidor de desenvolvimento do frontend na porta 5173 (precisa do NodeJS)
* `make setup` instala as ferramentas auxiliares (Goose)

## Migração
Em banco de dados, migração é o mecanismo que controla e aplica mudanças na estrutura do banco de dados de forma organizada e versionada.

Em vez de alterar o banco manualmente, você cria um arquivo de migração descrevendo a mudança desejada, como:
* criar uma tabela;
* adicionar ou remover uma coluna;
* popular o banco com registros iniciais;
* definir chaves estrangeiras;
* criar um índice;
* alterar o tipo de dado de uma coluna.

Não é ideal modificar migrações que já foram criadas por outros desenvolvedores. Se precisar fazer uma alteração, crie uma nova migração.

É aceitável modificar uma migração se ela não foi publicada fora do seu ambiente local de desenvolvimento, e ninguem mais depende dela. Por exemplo, você criou a migração há poucos minutos, percebeu um erro e ainda não compartilhou a mudança.

Mantenha as migrações antigas como parte do projeto!
* facilita a auditoria e depuração dos problemas;
* um novo desenvolvedor pode executar todas as migrações em ordem pra chegar no esquema atual do banco.

### Goose
Goose é uma ferramenta de migração para banco de dados. No projeto, as migrations são mantidas na pasta `sql`.
* `goose create <nome_do_arquivo> sql` cria uma migration com o nome.
* `goose up` aplica todas as migrations até a mais recente.
* `goose up-to VERSÃO` aplica todas as migrations até a versão especificada.
* `goose down` volta 1 versão.
* `goose down-to VERSION` volta até a versão especificada.
* `goose reset` desfaz todas as migrations.
* `goose redo` desfaz e refaz a última migration criada.
* `goose version` diz a versão do estado atual do banco.

Pode ser instalado via linha de comando (ou via `make setup`, que já instala as ferramentas.):
```go install github.com/pressly/goose/v3/cmd/goose@latest```
