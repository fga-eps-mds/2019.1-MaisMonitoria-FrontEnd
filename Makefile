default:
	make build
	
build:
	docker-compose build

run:
	docker-compose up -d
	docker exec -it frontend bash -c "yarn; yarn start" 

down:
	docker-compose down

stop:
	make down