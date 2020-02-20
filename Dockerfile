FROM node:12.16-alpine3.10

WORKDIR /app

ADD . .

RUN npm install

EXPOSE 3000

CMD ["npm","start"]