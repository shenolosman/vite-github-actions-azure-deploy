FROM node:18-alpine as BUILD_IMAGE

WORKDIR /app

COPY package.json .
RUN npm install

COPY . .
EXPOSE 8080

CMD [ "npm","run","start" ]
# RUN npm run build

# FROM node:18-alpine as PRODUCTION_IMAGE
# WORKDIR /app
# COPY --from=BUILD_IMAGE /app/dist/ /app/dist/
# EXPOSE 8080

# COPY package.json .
# COPY vite.config.js .
# RUN npm install
# EXPOSE 8080

# CMD ["npm", "run","preview"]
