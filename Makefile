.DEFAULT_GOAL := help

MKFILE_PATH := $(abspath $(lastword $(MAKEFILE_LIST)))
CURRENT_DIR := $(dir $(MKFILE_PATH))


DAPP := dydx-bot

.PHONY: help
help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'


.PHONY: run-dev
run-dev: clean-dev  ## Cleans, builds and runs the software on the DEVELOPMENT environment 
	@docker-compose -p ${DAPP} up -d

.PHONY: recreate-dev
recreate-dev: clean-dev  ## Cleans & recreates everything on the DEVELOPMENT environment 
	@docker-compose -p ${DAPP} up --force-recreate -d

.PHONY: clean-dev
clean-dev: ## Cleans the software from the DEVELOPMENT environment
	@docker-compose -p ${DAPP} down || true

.PHONY: logs-dev
logs-dev: ## Shows the logs of the DEVELOPMENT environment; CTRL+C to exit
	@docker-compose -p ${DAPP} logs -f

.PHONY: purge
purge: ## WARNING! Use this with care. It will stop and remove all containers, volumes, networks, etc
	@docker stop $(docker ps -aq) || true
	@docker rm $(docker ps -aq) || true
	@docker system prune -f && docker volume prune -f && docker network prune -f

.PHONY: configure
configure: ## Configures the trading bot by updating the constants.py file
	@echo "Configuring the trading bot:"
	@echo ""
	@read -e -i "DEVELOPMENT" -p "Mode (DEVELOPMENT/PRODUCTION): " MODE; \
	read -e -i "True" -p "Close all open positions and orders (True/False): " ABORT_ALL_POSITIONS; \
	read -e -i "True" -p "Find Cointegrated Pairs (True/False): " FIND_COINTEGRATED; \
	read -e -i "True" -p "Manage Exits (True/False): " MANAGE_EXITS; \
	read -e -i "True" -p "Place Trades (True/False): " PLACE_TRADES; \
	read -e -i "1HOUR" -p "Resolution: " RESOLUTION; \
	sed -i 's/^MODE = .*/MODE = "'$$MODE'"/' programa/constants.py; \
	sed -i 's/^ABORT_ALL_POSITIONS = .*/ABORT_ALL_POSITIONS = '$$ABORT_ALL_POSITIONS'/' programa/constants.py; \
	sed -i 's/^FIND_COINTEGRATED = .*/FIND_COINTEGRATED = '$$FIND_COINTEGRATED'/' programa/constants.py; \
	sed -i 's/^MANAGE_EXITS = .*/MANAGE_EXITS = '$$MANAGE_EXITS'/' programa/constants.py; \
	sed -i 's/^PLACE_TRADES = .*/PLACE_TRADES = '$$PLACE_TRADES'/' programa/constants.py; \
	sed -i 's/^RESOLUTION = .*/RESOLUTION = "'$$RESOLUTION'"/' programa/constants.py; \
	echo ""
	@echo "Configuration completed successfully".