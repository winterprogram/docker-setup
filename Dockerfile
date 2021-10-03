FROM node:12.18.2 as builder

WORKDIR /usr/app

COPY ./package.json  ./
RUN npm install
COPY ./  ./
CMD [ "npm","start" ]



#  docker build -t <dockerid>/docker-setup .

# docker-setup % docker run <dockerId>/docker-setup