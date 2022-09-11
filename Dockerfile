FROM node:16.13.2
ENV NODE_ENV=production
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=80
COPY package.json .
RUN npm install
COPY . ./
EXPOSE 80
CMD ["npm", "start"]