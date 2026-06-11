package main

import (
	"context"
	"time"

	"github.com/georgysavva/scany/v2/pgxscan"
	"github.com/jackc/pgx/v5/pgtype"
)

// RoutingService gerencia as operações de roteamento, locais e linhas de transporte.
type RoutingService struct {
	pool *Postgres
}

func NewRoutingService(db *Postgres) *RoutingService {
	return &RoutingService{pool: db}
}

type LineUpdate struct {
	Availability pgtype.Range[time.Time]
}

// CreatePlace registra uma nova cidade ou endereço.
func (svc *RoutingService) CreatePlace(ctx context.Context, place *Place) error {
	placeId, err := GenerateID()
	place.Id = placeId
	if err != nil {
		return err
	}

	const query = "insert into roteamento.locais(id, nome, estado) values (:id, :nome, :estado)"
	if _, err := svc.pool.pool.Exec(ctx, query, place); err != nil {
		return err
	}

	return nil
}

// GetAllPlaces retorna todos os locais cadastrados no sistema.
func (svc *RoutingService) GetAllPlaces(ctx context.Context) ([]Place, error) {
	places := make([]Place, 0)

	const query = "select * from roteamento.locais"
	if err := pgxscan.Select(ctx, svc.pool.pool, &places, query); err != nil {
		return nil, err
	}

	return places, nil
}

// CreateLine cria uma nova linha de transporte junto com as suas respectivas
// paradas associadas.
func (svc *RoutingService) CreateLine(ctx context.Context, line *Line, stops []Stop) error {
	return nil
}

// UpdateLine atualiza os dados da linha associada ao id.
func (svc *RoutingService) UpdateLine(ctx context.Context, lineId int64, line *LineUpdate) error {
	return nil
}

// FindLines busca as linhas disponíveis que realizam o trajeto entre um local
// de origem e um de destino em uma data específica.
func (svc *RoutingService) FindLines(ctx context.Context, date time.Time, destId, originId int64) ([]Place, error) {
	return nil, nil
}

// TripService gerencia a execução de viagens, controle de assentos e reservas
// de usuários.
type TripService struct {
	db *Postgres
}

func NewTripService(db *Postgres) *TripService {
	return &TripService{db: db}
}

// GetUserReservations recupera o histórico de reservas ativas e passadas de um
// usuário específico.
func (s *TripService) GetUserReservations(ctx context.Context, userId int64) []Reservation {
	return nil
}

// CreateReservation valida a disponibilidade de vagas e efetiva uma nova
// reserva de assento para o usuário.
func (s *TripService) CreateReservation(ctx context.Context, rsv *Reservation) error {
	return nil
}

// RevokeReservation cancela uma reserva existente de um usuário, liberando o
// assento novamente para a linha.
func (s *TripService) RevokeReservation(ctx context.Context, userId int64, rsvId int64) error {
	return nil
}
