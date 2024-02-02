FROM node:alpine

WORKDIR /usr/juridico-app-backend

COPY package*.json ./

RUN npm ci

COPY . .