FROM node:14.18-alpine
RUN apk add g++ make python
WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
RUN yarn install
COPY ./ ./
CMD ["yarn", "develop"]