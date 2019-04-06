#!/bin/bash

set -ev

echo "Deployment init"

docker build . -t maismonitoria/frontend:latest
docker login -p $DOCKERPASSWORD -u $DOCKERUSERNAME
docker push maismonitoria/frontend:latest  
