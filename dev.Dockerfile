FROM node:10.15.3

RUN mkdir -p /app
WORKDIR /app

ADD . /app

RUN yarn install

EXPOSE 3000

CMD bash -c "yarn start"