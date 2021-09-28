FROM node:14-alpine

ENV NODE_ENV=production
WORKDIR /templates
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
COPY . .
EXPOSE 5000
RUN npm install
USER node
CMD ["npm", "start"]
