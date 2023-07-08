FROM gdomod/puppeteer-extra

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci
COPY . . 
CMD ["node", "server.js"]