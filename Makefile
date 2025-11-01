info: 
	@echo "\n=== Available commands ===\n"
	@egrep '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) |  awk 'BEGIN {FS = ":.*?## "}; {printf "\033[33m%-15s\033[0m %s\n", $$1, $$2}'

build: ## Build the project images.
	@make do-install-dependencies
	@echo ""
	@docker compose build

start: ## Start the project containers.
	@docker compose up -d
	@echo ""
	@echo "  The frontend is running on http://localhost:3000/."
	@echo "  The backend  is running on http://localhost:3333/."
	@echo "  The GraphQL playground is running on http://localhost:3000/___graphql."
	@echo ""

stop: ## Stop the project containers.
	@docker compose stop

dev: ## Start the project containers including dev output.
	@docker compose up

test: ## Run the project end-to-end tests.
	@make start
	@make do-frontend-tests

lint: ## Run the project codestyle check.
	@make start
	@make do-frontend-lint
	@make do-frontend-typescript

lint-fix: ## Run the project codestyle fix.
	@make start
	@make do-frontend-lint-fix

reset: ## Reset the project containers, volumes, local dependencies and cache files.
	@make do-remove-nodemodules
	@make do-remove-cache
	@docker compose down -v

# Installing dependencies
do-install-dependencies:
	@make do-install-frontend-dependencies
	@make do-install-backend-dependencies

do-install-frontend-dependencies:
	@echo ""
	@echo "Installing local dependencies for frontend.."
	@cd frontend && yarn install

do-install-backend-dependencies:
	@echo ""
	@echo "Installing local dependencies for backend.."
	@cd backend && yarn install

# Remove dependencies & cache
do-remove-nodemodules:
	@echo ""
	@echo "Removing all node_modules folders.."
	@sudo rm -rf node_modules
	@cd frontend && sudo rm -rf node_modules
	@cd backend && sudo rm -rf node_modules
	@echo ""
	@echo "All node_modules folders removed.."

do-remove-cache:
	@echo ""
	@echo "Removing frontend cache folder.."
	@cd frontend && sudo rm -rf .cache/ && sudo rm -rf public/
	@echo ""
	@echo "Cache folders removed.."

do-frontend-tests:
	@echo "Starting frontend tests.."
	cd frontend && yarn test

do-frontend-lint:
	@echo "Starting frontend codestyle check.."
	@docker compose exec frontend sh -c "yarn lint"

do-frontend-lint-fix:
	@echo "Starting frontend codestyle fix.."
	@docker compose exec frontend sh -c "yarn lint:fix"

do-frontend-typescript:
	@echo "Starting frontend TypeScript check.."
	@docker compose exec frontend sh -c "yarn check-types"
