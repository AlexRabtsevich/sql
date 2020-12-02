FROM node:14-alpine

RUN mkdir -p /var/www/app

WORKDIR /var/www/app

COPY yarn.lock package.json ./
COPY tsconfig.json tsconfig.build.json ./

RUN yarn install

CMD [ "yarn", "start" ]