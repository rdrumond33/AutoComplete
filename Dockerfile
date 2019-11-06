FROM node:alpine

WORKDIR /app

ADD . .

RUN npm install

EXPOSE 3000

CMD ["npm","start"]