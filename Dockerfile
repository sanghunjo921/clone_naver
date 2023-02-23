FROM node:19
WORKDIR /client
COPY . /client 
RUN npm install 
CMD npm start 
