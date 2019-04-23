default:
	make build
	
build:
	docker-compose -f docker-compose.yml build

run:
	docker-compose -f docker-compose.yml up

run-d:
	docker-compose -f docker-compose.yml up -d

tests: 
	docker-compose -f docker-compose.yml exec frontend yarn test
	
test-coverage:
	docker-compose -f docker-compose.yml run frontend yarn test --coverage

enter:
	docker-compose -f docker-compose.yml exec frontend bash

down:
	docker-compose -f docker-compose.yml down

stop:
	docker-compose -f docker-compose.yml stop

start:
	docker-compose -f docker-compose.yml start