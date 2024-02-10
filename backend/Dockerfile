FROM node:alpine

WORKDIR /usr/juridico-node

COPY package*.json ./

RUN npm ci

COPY . .