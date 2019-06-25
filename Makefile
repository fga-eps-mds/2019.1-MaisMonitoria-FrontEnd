default:
	make build
	
build:
	docker-compose build

all:
	docker-compose -f docker-compose-dev.yml up

run:
	docker-compose up -d
	docker exec -it frontend bash -c "yarn; yarn start" 

down:
	docker-compose down

stop:
	make down

test:
	sudo docker-compose exec frontend yarn test
	
cov-test:
	sudo docker-compose exec frontend yarn test --coverage

