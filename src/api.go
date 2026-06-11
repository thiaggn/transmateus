package main

import (
	"net/http"

	"github.com/labstack/echo"
)

func MapRoutingApi(e *echo.Echo, svc *RoutingService) {
	// Recupera todos os locais registrados.
	e.GET("/api/routing/places", func(ctx echo.Context) error {
		places, err := svc.GetAllPlaces(ctx.Request().Context())
		if err != nil {
			ctx.Logger().Error(err)
			return ctx.NoContent(http.StatusInternalServerError)
		}

		return ctx.JSON(http.StatusOK, places)
	})

	// Registra um novo local.
	e.POST("/api/routing/places", func(ctx echo.Context) error {
		return nil
	})

	// Recupera as linhas que passam por uma origem e destino.
	e.GET("/api/routing/lines", func(ctx echo.Context) error {
		return nil
	})

	// Registra uma nova linha.
	e.POST("/api/routing/lines", func(ctx echo.Context) error {
		return nil
	})

	// Atualiza o registro de uma linha.
	e.PUT("/api/routing/lines", func(ctx echo.Context) error {
		return nil
	})
}

func MapTripApi(e *echo.Echo, svc *TripService) {
	// Recupera as reservas do usuário
	e.GET("/api/reservations", func(ctx echo.Context) error {
		return nil
	})

	// Registra uma nova reserva
	e.POST("/api/reservations", func(ctx echo.Context) error {
		return nil
	})

	// Cancela uma reserva
	e.PUT("/api/reservations/:id", func(ctx echo.Context) error {
		return nil
	})
}
