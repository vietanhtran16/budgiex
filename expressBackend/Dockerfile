FROM node

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . .
RUN npm install
RUN npm rebuild
EXPOSE 3000
CMD [ "node", "handler.js" ]
