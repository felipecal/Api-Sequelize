FROM node:18.13-alpine

WORKDIR /app

COPY ["package.json", "./"]

RUN apk add --no-cache tzdata

ENV TZ=America/Sao_Paulo

ARG PORT=3001

EXPOSE $PORT

COPY . . 

RUN npm install

ENTRYPOINT [ "npm", "start" ]