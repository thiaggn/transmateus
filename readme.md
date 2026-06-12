# Transmateus
Transmateus é uma empresa de transporte rodoviário de passageiros fundada em 2008 por Mateus Filipe. Foi adquirida em 2023 pela Sapiência Digital, fundada por Brenda Ponath, João Vitor e Thiago Gomes. Hoje, a Transmateus passa por uma _transição_ para o mundo digital.

## Estrutura do projeto
* `/src` código do servidor
* `/sql` migrations (modelagem do banco)
* `/web` página web
* `/scripts` scripts operacionais e de desenvolvimento
* `/.dev.env.example` variáveis de ambiente do desenvolvedor.

O desenvolvedor deve editar o arquivo de variáveis de ambiente de acordo com sua configuração pessoal. Remova `.example` do nome do arquivo em seguida.

### Dependências
Enquanto não usamos Docker para agrupar todas a dependências manualmente, precisamos instalar elas uma a uma.
* Compilador de Go <https://go.dev/>
* PostgreSQL <https://www.postgresql.org/>
* NodeJS <https://nodejs.org/pt-br> (opcional)

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
Goose é uma migração para banco de dados. No projeto, as migrations são mantidas na pasta `sql`.
* `goose --env ./.dev.env create <nome_do_arquivo> sql` cria uma migration com o nome.
* `goose --env ./.dev.env up` aplica todas as migrations até a mais recente.
* `goose --env ./.dev.env reset` desfaz todas as migrations.
* `goose --env ./.dev.env redo` desfaz e refaz a última migration criada.
* `goose --env ./.dev.env version` diz a versão do estado atual do banco.
