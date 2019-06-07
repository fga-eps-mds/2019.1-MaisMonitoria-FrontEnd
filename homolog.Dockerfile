FROM node:10.15.3

RUN mkdir -p /app
WORKDIR /app

ADD . /app

RUN yarn install

RUN yarn global add serve

EXPOSE 3000

CMD bash -c "yarn build && serve -s build -l 3000"