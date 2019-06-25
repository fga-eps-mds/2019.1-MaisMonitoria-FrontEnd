#!/bin/bash

set -ev
    
echo "Deployment init"

docker build -f homolog.Dockerfile -t maismonitoria/frontend:homolog .
docker login -u "$DOCKERUSERNAME" -p "$DOCKERPASSWORD"
docker push maismonitoria/frontend:homolog
