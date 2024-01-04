FROM node:18-alpine
WORKDIR /app/Redux-Toolkit/
COPY package*.json .
RUN npm install
COPY . .
EXPOSE 5000
CMD ["npm", "run", "dev" ]

