.PHONY: help build run configure-bot

help:
	@echo "Available commands:"
	@echo "  build           Build the Docker image"
	@echo "  run             Run the trading bot in a Docker container"
	@echo "  stop            Stop the trading bot"

run:
	docker-compose up -d

stop:
	docker-compose down	
