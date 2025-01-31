# builder stage
FROM node:hydrogen-alpine AS builder
WORKDIR /app
COPY . .
RUN npm install -g pnpm
RUN pnpm install
RUN pnpm docs:build

# runtime stage
FROM node:hydrogen-alpine
COPY --from=builder /app/src/.vuepress/dist ./dist
RUN npm install -g http-server
EXPOSE 80
CMD ["http-server", "dist", "--port", "80"]
