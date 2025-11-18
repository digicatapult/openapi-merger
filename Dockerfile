# syntax=docker/dockerfile:1.19

FROM node:24-alpine

# Allow log level to be controlled. Uses an argument name that is different
# from the existing environment variable, otherwise the environment variable
# shadows the argument.
ARG LOGLEVEL
ENV NPM_CONFIG_LOGLEVEL ${LOGLEVEL}

WORKDIR /openapi-merger

# Install base dependencies
COPY . .
RUN npm ci --production


EXPOSE 80
CMD ["node", "./app/index.js"]
