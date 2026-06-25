-- +goose Up
create schema logistica;

create table logistica.passageiros (
	id        int8      primary key references auth.usuarios(id),
	cpf       char(11)  not null unique,
	email     varchar   not null,
	telefone  varchar   not null
);

create table logistica.viacoes (
	id        int8      primary key references auth.usuarios(id),
	cnpj      char(14)  not null unique,
	email     varchar   not null,
	telefone  varchar   not null
);

create table logistica.destinos (
    id     int8    primary key,
    nome  varchar  not null unique
);

create table logistica.rotas (
	id         int8           primary key,
	viacao_id  int8           not null references logistica.viacoes(id),
	vigencia   tsrange        not null,
	valor_km   decimal(5, 2)  not null
);

create table logistica.paradas (
	id             int8  primary key,
	viacao_id      int8  not null references logistica.viacoes(id),
	rota_id        int8  not null references logistica.rotas(id),
	destino_id     int8  not null references logistica.destinos(id),
	horario        time  not null,
	dia_da_semana  int4  not null
);

create table logistica.reservas (
	id             int8           primary key,
	passageiro_id  int8           not null references auth.usuarios(id),
	rota_id        int8           not null references logistica.rotas(id),
	viacao_id      int8           not null references logistica.viacoes(id),
	data           tsrange        not null,
	assento        int4           not null,
	preco          decimal(5, 2)  not null,
	data_compra    timestamp      not null
);

create table logistica.embarques (
	passageiro_id  int8       not null references auth.usuarios(id),
	reserva_id     int8       not null references logistica.reservas(id),
	data           timestamp  not null,

	primary key (passageiro_id, reserva_id)
);

create table logistica.cancelamentos (
	passageiro_id  int8       not null references auth.usuarios(id),
	reserva_id     int8       not null references logistica.reservas(id),
	viacao_id      int8       not null references logistica.viacoes(id),
	data           timestamp  not null,

	primary key (passageiro_id, reserva_id)
);

-- +goose Down
drop table logistica.cancelamentos;

drop table logistica.embarques;

drop table logistica.reservas;

drop table logistica.paradas;

drop table logistica.rotas;

drop table logistica.destinos;

drop table logistica.viacoes;

drop table logistica.passageiros;

drop schema logistica;
