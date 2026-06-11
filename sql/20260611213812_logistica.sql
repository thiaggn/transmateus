-- +goose up
CREATE SCHEMA logistica;

CREATE TABLE logistica.locais (
	id      int8     PRIMARY KEY,
	nome    varchar  NOT NULL,
	estado  char(2)  NOT NULL
);

CREATE TABLE logistica.rotas (
	id         int8     PRIMARY KEY,
	vigencia   tsrange  NOT NULL
);

CREATE TABLE logistica.paradas (
	id             int8  PRIMARY KEY,
	rota_id        int8  NOT NULL REFERENCES logistica.rotas(id),
	destino_id     int8  NOT NULL REFERENCES logistica.locais(id),
	horario        time  NOT NULL,
	dia_da_semana  int4  NOT NULL,

	CONSTRAINT parada_unica_em_rota UNIQUE (id, rota_id)
);

CREATE TABLE logistica.trechos (
	rota_id         int8  NOT NULL,
	embarque_id     int8  NOT NULL,
	desembarque_id  int8  NOT NULL,
	coisa_nova   int not null,

	CONSTRAINT fk_parada_embarque FOREIGN KEY (embarque_id, rota_id)
		REFERENCES logistica.paradas (id, rota_id),

	CONSTRAINT fk_parada_desembarque FOREIGN KEY (desembarque_id, rota_id)
		REFERENCES logistica.paradas (id, rota_id)
);

CREATE TABLE logistica.garagens (
	id        int8     PRIMARY KEY,
	cep       char(9)  NOT NULL,
	endereco  varchar  NOT NULL
);

CREATE TABLE logistica.veiculos (
	placa       varchar  PRIMARY KEY,
	garagem_id  int8     NOT NULL REFERENCES logistica.garagens(id),
	capacidade  int      NOT NULL
);

CREATE TABLE logistica.motoristas (
	id            int8         PRIMARY KEY REFERENCES auth.contas(id),
	cnh           varchar(20)  NOT NULL UNIQUE,
	cnh_tipo      char(1)      NOT NULL,
	cnh_validade  date         NOT NULL,
	matricula     varchar      NOT NULL UNIQUE,
	admissao      date         NOT NULL,
	status        varchar      NOT NULL default 'ativo'
);

CREATE TABLE logistica.escalas (
	id             int8      PRIMARY KEY,
	motorista_id   int8      NOT NULL REFERENCES logistica.motoristas(id),
	rota_id        int8      NOT NULL REFERENCES logistica.rotas(id),
	data           int8      NOT NULL,
	placa_veiculo  varchar   NOT NULL REFERENCES logistica.veiculos(placa),
	garagem_id     int       NOT NULL REFERENCES logistica.garagens(id)
);


CREATE TABLE logistica.agencias (
	id    int8      PRIMARY KEY,
	cnpj  char(14)  NOT NULL UNIQUE
);

CREATE TABLE logistica.reservas (
	id           int8        PRIMARY KEY,
	rota_id      int8        NOT NULL REFERENCES logistica.rotas(id),
	conta_id     int8        NOT NULL REFERENCES auth.contas(id),
	agencia_id   int8        NOT NULL REFERENCES logistica.agencias(id),
	data         tsrange     NOT NULL,
	assento      int4        NOT NULL,
	data_compra  timestamp   NOT NULL
);

CREATE TABLE logistica.embarques (
	conta_id    int8       NOT NULL REFERENCES auth.contas(id),
	reserva_id  int8       NOT NULL REFERENCES logistica.reservas(id),
	data        timestamp  NOT NULL,

	PRIMARY KEY(conta_id, reserva_id)
);

CREATE TABLE logistica.cancelamentos (
	conta_id    int8       NOT NULL REFERENCES auth.contas(id),
	reserva_id  int8       NOT NULL REFERENCES logistica.reservas(id),
	agencia_id  int8       NOT NULL REFERENCES logistica.agencias(id),
	data        timestamp  NOT NULL,

	PRIMARY KEY (conta_id, reserva_id)
);

-- +goose down
DROP TABLE logistica.cancelamentos;

DROP TABLE logistica.embarques;

DROP TABLE logistica.reservas;

DROP TABLE logistica.agencias;

DROP TABLE logistica.escalas;

DROP TABLE logistica.motoristas;

DROP TABLE logistica.veiculos;

DROP TABLE logistica.garagens;

DROP TABLE logistica.trechos;

DROP TABLE logistica.paradas;

DROP TABLE logistica.rotas;

DROP TABLE logistica.locais;

DROP SCHEMA logistica;