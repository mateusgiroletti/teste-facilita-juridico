FROM node:alpine

WORKDIR /usr/fincheck-app-backend

COPY package*.json ./

RUN npm ci

COPY . .