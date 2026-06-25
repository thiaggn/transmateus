-include .env
export

.PHONY: run web setup

run:
	go run ./src -v

web:
	cd web && npm run dev

setup:
	go mod download
	go install -v github.com/pressly/goose/v3/cmd/goose@latest
	cd web && npm install
