-- +goose Up
create schema auth;

create table auth.papeis (
	id    int8     primary key,
	nome  varchar  not null unique
);

insert into auth.papeis(id, nome)
values
    (0, 'Administrador'),
    (1, 'Viação'),
    (2, 'Passageiro');

create table auth.usuarios (
	id        int8        primary key,
	papel_id  int8        not null references auth.papeis(id),
	login     varchar     not null,
	senha     char(255)   not null,
	nome      varchar     not null,

	constraint login_unico_por_papel unique(papel_id, login),
	constraint um_papel_por_usuario unique (id, papel_id)
);

create table auth.sessoes (
	token       char(64)   primary key,
	usuario_id  int8       not null references auth.usuarios(id),
	validade    timestamp  not null
);

-- +goose Down
drop table auth.sessoes;

drop table auth.usuarios;

drop table auth.papeis;

drop schema auth;
