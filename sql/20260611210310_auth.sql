-- +goose Up
CREATE SCHEMA auth;

CREATE TABLE auth.contas (
	id     int8        primary key,      -- Identificador único da conta
	login  varchar     not null unique,  -- Login de acesso
	senha  char(255)   not null,         -- Hash da senha do usuário
	email  varchar     not null,         -- Endereço de e-mail
	nome   varchar     not null          -- Nome completo do usuário ou colaborador
);

CREATE TABLE auth.papeis (
	id    int8     primary key,    -- Identificador único do papel de acesso
	nome  varchar  not null unique -- Nome do perfil de acesso
);

CREATE TABLE auth.contas_papeis (
	conta_id  int8  not null references auth.contas(id), -- Chave estrangeira ligada à conta do usuário
	papel_id  int8  not null references auth.papeis(id), -- Chave estrangeira ligada ao papel correspondente

	primary key (conta_id, papel_id)
);

CREATE TABLE auth.sessoes (
	token     char(64)   primary key,                         -- Token único identificador da sessão
	conta_id  int8       not null references auth.contas(id), -- Identifica qual conta é dona desta sessão ativa
	validade  timestamp  not null                             -- Data e hora limite para a expiração do token de sessão
);

-- +goose Down
DROP TABLE auth.sessoes;

DROP TABLE auth.contas_papeis;

DROP TABLE auth.papeis;

DROP TABLE auth.contas;

DROP SCHEMA auth;