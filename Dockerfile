FROM node:latest
RUN mkdir src
COPY ./package*.json src/
RUN npm i
COPY . src/
EXPOSE 8080
CMD ["npm", "start"]