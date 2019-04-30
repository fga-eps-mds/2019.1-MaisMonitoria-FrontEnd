#!/bin/bash

set -ev
    
echo "Deployment init"

docker build -t maismonitoria/frontend:homolog .
docker login -u "horadahora" -p "horadahora"
docker push maismonitoria/frontend:homolog
