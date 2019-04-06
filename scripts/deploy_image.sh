#!/bin/bash

set -ev
    
echo "Deployment init"

echo "$DOCKERPASSWORD" | docker login -u "$DOCKERUSERNAME" --password-stdin
docker tag maismonitoria/frontend maismonitoria/frontend:latest
docker push maismonitoria/frontend:latest  
