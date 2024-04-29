FROM node:alpine AS backend-build

WORKDIR /app
COPY server/package.json server/package-lock.json ./
RUN npm install
COPY server ./
RUN npm run build