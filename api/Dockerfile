FROM node:14.16

WORKDIR /app

COPY package*.json ./

RUN npm install glob rimraf

COPY . .

RUN npm run build

CMD ["node", "dist/main"]