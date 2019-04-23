default:
	make build
	
build:
	docker-compose build

run:
	docker-compose up

run-d:
	docker-compose up -d

tests: 
	docker-compose exec frontend yarn test

test-coverage:
	docker-compose exec frontend yarn test --coverage

enter:
	docker-compose exec frontend bash

down:
	docker-compose down

stop:
	docker-compose stop

start:
	docker-compose start