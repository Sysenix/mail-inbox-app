FROM node:alpine

WORKDIR /app
COPY --from=frontend-build /app/build ./client
COPY --from=backend-build /app/dist ./server

CMD ["node", "./server/server.js"]