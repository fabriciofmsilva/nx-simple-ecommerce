FROM node:alpine

WORKDIR /usr/src/app

COPY package.json ./
COPY app.js /usr/src/app

RUN npm install
RUN npm run affected -- --target=build --base=master


FROM nginx

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
