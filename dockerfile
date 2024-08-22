FROM node:20-alpine

WORKDIR /app

COPY package*.json .

RUN rm -rf node_modules package-lock.json
RUN npm install -g npm@10.6.0 --legacy-peer-deps
RUN npm i @reduxjs/toolkit react-redux --legacy-peer-deps
RUN npm install --legacy-peer-deps

COPY . .

EXPOSE 5173

CMD [ "npm", "run", "dev" ]