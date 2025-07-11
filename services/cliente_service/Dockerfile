# services/cliente_service/Dockerfile
FROM node:20

WORKDIR /app
COPY . .
RUN npm install
RUN npx prisma generate

EXPOSE 3003
CMD ["node", "index.js"]
