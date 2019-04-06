FROM node:10.15.3-alpine

RUN mkdir -p /app
WORKDIR /app

RUN apk update && \
    apk upgrade
    
RUN apk add --no-cache bash

ADD . /app

EXPOSE 3000
