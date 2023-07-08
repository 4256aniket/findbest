FROM ghcr.io/puppeteer/puppeteer:latest

WORKDIR /usr/src/app

COPY package.json package-lock.json* ./
RUN npm ci && npm cache clean --force
COPY . . 
CMD ["node", "server.js"]