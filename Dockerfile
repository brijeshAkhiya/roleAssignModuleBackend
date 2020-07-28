FROM node:12
WORKDIR /usr/src/app

COPY package.json .
RUN npm i

EXPOSE 3000
CMD [ "node", "index" ]
COPY . .
