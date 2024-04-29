FROM node:alpine AS frontend-build

WORKDIR /app
COPY client/package.json client/package-lock.json ./
RUN npm install
COPY client ./
RUN npm run build
