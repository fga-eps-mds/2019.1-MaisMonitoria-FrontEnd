#!/bin/bash

set -ev

echo "Deployment init"

echo "$DOCKERPASSWORD" | docker login -u "$DOCKERUSER" --password-stdin
docker tag frontend horadahora/teste:latest
docker push maismonitoria/frontend:latest