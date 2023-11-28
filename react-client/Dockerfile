FROM node:16.20.2-alpine AS builder
WORKDIR /app
COPY . . 
RUN npm install 
RUN npm run build 

FROM nginxinc/nginx-unprivileged:1.25-alpine
WORKDIR /usr/share/nginx/html
COPY --from=builder /app/build .
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 3000
ENTRYPOINT ["nginx", "-g", "daemon off;"]