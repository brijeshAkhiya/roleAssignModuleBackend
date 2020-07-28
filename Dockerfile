FROM node:latest
RUN mkdir /src/app
COPY package*.json /src/app
RUN npm i
COPY . /src/app
EXPOSE 8080
CMD ["npm", "start"]