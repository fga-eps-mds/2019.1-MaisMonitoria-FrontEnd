#!/bin/bash

set -ev

docker build -t maismonitoria/frontend .
docker run maismonitoria/frontend yarn build 
    
#echo "Deployment init"

#echo "$DOCKERPASSWORD" | docker login -u "$DOCKERUSERNAME" --password-stdin
#docker tag maismonitoria/frontend maismonitoria/frontend:latest
#docker push maismonitoria/frontend:latest  
