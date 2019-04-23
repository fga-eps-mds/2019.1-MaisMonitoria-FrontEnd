default:
	make build
	
build:
	docker-compose build

run:
	docker-compose up -d
	docker exec -it frontend bash -c "yarn; bash" 

down:
	docker-compose down

stop:
	make down