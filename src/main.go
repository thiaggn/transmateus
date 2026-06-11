package main

import (
	"flag"
	"fmt"
	"os"

	"github.com/joho/godotenv"
	"github.com/labstack/echo"
)

func main() {
	// Inicialização das dependências
	db := NewPostgres()
	routingSvc := NewRoutingService(db)
	tripSvc := NewTripService(db)
	server := echo.New()

	// Mapeamento dos endpoints
	MapRoutingApi(server, routingSvc)
	MapTripApi(server, tripSvc)

	// Execução da aplicação
	if err := server.Start(formatAddress()); err != nil {
		panic(err)
	}
}

func formatAddress() string {
	return fmt.Sprintf(
		"%s:%s", 
		os.Getenv("APP_HOST"), 
		os.Getenv("APP_PORT"),
	)
}

func init() {
	envFile := flag.String("env", "", "Caminho para o arquivo .env")
	flag.Parse()

	if *envFile != "" {
		if err := godotenv.Load(*envFile); err != nil {
			panic(err)
		}
	}
}
