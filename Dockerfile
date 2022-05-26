FROM node:16-alpine
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY next.config.js ./next.config.js
COPY src/pages ./src/pages
COPY src/components ./src/components
COPY src/public ./src/public
COPY styles ./styles
COPY utility ./utility
COPY .env ./

CMD ["npm", "run", "dev"]