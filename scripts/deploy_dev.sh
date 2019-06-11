#!/bin/bash

set -ev
    
echo "Deployment init"

docker build -f dev.Dockerfile -t maismonitoria/frontend:dev .
docker login -u "$DOCKERUSERNAME" -p "$DOCKERPASSWORD"
docker push maismonitoria/frontend:dev
