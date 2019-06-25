#!/bin/bash

set -ev
    
echo "Deployment init"

docker build -t maismonitoria/frontend:prod .
docker login -u "$DOCKERUSERNAME" -p "$DOCKERPASSWORD"
docker push maismonitoria/frontend:prod
