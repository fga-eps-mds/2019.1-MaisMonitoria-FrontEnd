FROM node:10.15.3-alpine

RUN mkdir -p /app
WORKDIR /app

RUN apk update && \
    apk upgrade && \
    apk add git

RUN apk add --no-cache bash

ADD . /app

RUN yarn install

EXPOSE 3000
