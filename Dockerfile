FROM node:lts-alpine

ENV NODE_ENV=development

WORKDIR /src/app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile --silent

COPY . .

EXPOSE 3000

RUN chown -R node:node /src/app

USER node

CMD ["yarn", "dev"]
