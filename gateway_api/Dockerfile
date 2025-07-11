# gateway_api/Dockerfile
FROM node:20

WORKDIR /app
COPY . .
RUN npm install

EXPOSE 8083
CMD ["node", "server.js"]
