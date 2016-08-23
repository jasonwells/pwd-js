FROM node:5.12

EXPOSE 3000

RUN mkdir /app
COPY . /app
WORKDIR /app
RUN npm install

CMD node app.js
