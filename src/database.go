package main

import (
	"context"
	"fmt"
	"os"

	"github.com/Masterminds/squirrel"
	"github.com/jackc/pgx/v5/pgxpool"
)

// Postgres representa uma conexão com um banco de dados PostgreSQL.
type Postgres struct {
	pool    *pgxpool.Pool
	builder squirrel.StatementBuilderType
}

// NewPostgres cria uma conexão com o servidor Postgres. As credenciais de acesso
// são obtidas das variáveis de ambiente.
func NewPostgres() *Postgres {
	connStr := fmt.Sprintf(
		"postgresql://%s:%s@%s:%s/%s?sslmode=%s",
		os.Getenv("DB_USER"),
		os.Getenv("DB_PASS"),
		os.Getenv("DB_HOST"),
		os.Getenv("DB_PORT"),
		os.Getenv("DB_NAME"),
		os.Getenv("DB_SSL"),
	)

	pool, err := pgxpool.New(context.Background(), connStr)
	if err != nil {
		panic(err)
	}

	if err := pool.Ping(context.Background()); err != nil {
		panic(err)
	}

	return &Postgres{
		pool: pool,
	}
}

func (p *Postgres) Builder() squirrel.StatementBuilderType {
	return p.builder
}
