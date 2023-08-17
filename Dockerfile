FROM node:18.16.0

RUN apk add --no-cache nodejs

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3000:4000

CMD ["node", "server.js"]