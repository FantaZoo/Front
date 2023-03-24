FROM node:18-alpine AS builder
# from scratch

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install
# installe les dépendances

COPY . .

RUN npm run build
# build l'appli et génère le dist

FROM nginx:alpine AS app

COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/dist/front /usr/share/nginx/html
# copie l'ensemble de l'appli dans l'environnement vituel -> Container