default:
	make build
	
build:
	sudo docker-compose build

run:
	sudo docker-compose up -d
	sudo docker exec -it frontend bash -c "yarn; bash" 

down:
	sudo docker-compose down

stop:
	make down