#!/bin/bash

set -ev

echo "Deployment init"

docker build . -t maismonitoria/frontend:latest
echo "$DOCKERPASSWORD" | docker login -u "$DOCKERUSERNAME" --password-stdin
docker push maismonitoria/frontend:latest  
