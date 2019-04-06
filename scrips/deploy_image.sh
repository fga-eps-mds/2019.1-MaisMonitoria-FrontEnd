#!/bin/bash

set -ev

echo "Deployment init"

echo "$password" | docker login -u "$user" --password-stdin
docker tag frontend horadahora/teste:latest
docker push maismonitoria/frontend:latest