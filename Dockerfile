FROM node:5.0.0-slim
RUN npm install -g nodemon
ADD . /app
WORKDIR /app
CMD nodemon -L --watch main.js