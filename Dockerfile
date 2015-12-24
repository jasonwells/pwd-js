FROM node:5.3

EXPOSE 3000

RUN mkdir /app
COPY . /app
WORKDIR /app
RUN npm install

CMD node app.js
