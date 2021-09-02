FROM node:lts

WORKDIR /auth_api/node

COPY package*.json ./

RUN npm install

COPY . ./

EXPOSE $PORT

CMD ["npm", "start"]
