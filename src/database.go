package main

import (
	"context"
	"fmt"
	"log/slog"
	"os"

	"github.com/jackc/pgx/v5/pgxpool"
)

type Database struct {
	pool *pgxpool.Pool
}

func NewDatabase() Database {
	var connStr = fmt.Sprintf(
		"postgresql://%s:%s@%s:%s/%s",
		os.Getenv("DB_USER"),
		os.Getenv("DB_PWD"),
		os.Getenv("DB_HOST"),
		os.Getenv("DB_PORT"),
		os.Getenv("DB_NAME"),
	)

	pool, err := pgxpool.New(context.Background(), connStr)
	if err != nil {
		slog.Error("Conexão com o banco falhou.", "conn_str", connStr, "desc", err.Error())
		os.Exit(-1)
	}

	if err := pool.Ping(context.Background()); err != nil {
		slog.Error("Ping com o banco falhou.", "conn_str", connStr, "desc", err.Error())
		os.Exit(-1)
	}

	slog.Info("Conectado ao banco.", "conn_str", connStr)
	return Database{pool: pool}
}

func (db *Database) GetDestinations() []Destination {
	return nil

}
