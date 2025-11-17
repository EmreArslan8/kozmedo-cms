FROM node:16-alpine as build
# Installing libvips-dev for sharp Compatibility
RUN apk update && apk add build-base gcc autoconf automake zlib-dev libpng-dev vips-dev && rm -rf /var/cache/apk/* > /dev/null 2>&1

ARG NODE_ENV
ENV NODE_ENV=${NODE_ENV}

ARG GH_WEBHOOK_URL
ENV GH_WEBHOOK_URL=${GH_WEBHOOK_URL}

ARG GH_AUTH_HEADER
ENV GH_AUTH_HEADER=${GH_AUTH_HEADER}

ARG GH_WEBHOOK_EVENT_TYPE
ENV GH_WEBHOOK_EVENT_TYPE=${GH_WEBHOOK_EVENT_TYPE}

ARG GH_TARGET_BRANCH
ENV GH_TARGET_BRANCH=${GH_TARGET_BRANCH}

WORKDIR /opt/
COPY ./package.json ./yarn.lock ./
ENV PATH /opt/node_modules/.bin:$PATH
RUN yarn config set network-timeout 600000 -g && yarn install
WORKDIR /opt/app
COPY ./ .
RUN yarn build


FROM node:16-alpine
RUN apk add vips-dev
RUN rm -rf /var/cache/apk/*
ARG NODE_ENV
ENV NODE_ENV=${NODE_ENV}

ARG GH_WEBHOOK_URL
ENV GH_WEBHOOK_URL=${GH_WEBHOOK_URL}

ARG GH_AUTH_HEADER
ENV GH_AUTH_HEADER=${GH_AUTH_HEADER}

ARG GH_WEBHOOK_EVENT_TYPE
ENV GH_WEBHOOK_EVENT_TYPE=${GH_WEBHOOK_EVENT_TYPE}

ARG GH_TARGET_BRANCH
ENV GH_TARGET_BRANCH=${GH_TARGET_BRANCH}

WORKDIR /opt/app
COPY --from=build /opt/node_modules ./node_modules
ENV PATH /opt/node_modules/.bin:$PATH
COPY --from=build /opt/app ./
EXPOSE 1337
CMD ["yarn", "start"]