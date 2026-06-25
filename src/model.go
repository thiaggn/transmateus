package main

import "github.com/jackc/pgx/v5/pgtype"

type Destination struct {
	Id   pgtype.Int8 `json:"id" db:"id"`
	Name string      `json:"name" db:"nome"`
}
