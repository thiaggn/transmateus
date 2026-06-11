package main

import (
	"time"

	"github.com/jackc/pgx/v5/pgtype"
)

type Place struct {
	Id    int64  `db:"id"`
	Name  string `db:"nome"`
	State string `db:"estado"`
}

type Line struct {
	Id           int64                   `db:"id"`
	Availability pgtype.Range[time.Time] `db:"disponibilidade"`
	MaxSeats     int32                   `db:"max_vagas"`
}

type Stop struct {
	LineId    int64     `db:"linha_id"`
	PlaceId   int64     `db:"local_id"`
	Time      time.Time `db:"horario"`
	DayOfWeek int32     `db:"dia_da_semana"`
}

type Reservation struct {
	Id           int64                   `db:"id"`
	LineId       int32                   `db:"linha_id"`
	Date         pgtype.Range[time.Time] `db:"data"`
	UserId       int64                   `db:"usuario_id"`
	SeatNumber   int32                   `db:"assento"`
	PurchaseDate pgtype.Timestamp        `db:"data_compra"`
	Canceled     bool                    `db:"cancelada"`
	Consumed     bool                    `db:"consumida"`
}
