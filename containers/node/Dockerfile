FROM node:carbon

WORKDIR /usr/src/app

# install node dependencies
COPY package*.json ./
RUN npm install

# copy source
COPY . .

EXPOSE 8080

CMD [ "npm", "start" ]