FROM mhart/alpine-node:8
WORKDIR  /app
COPY . .
RUN npm install 
EXPOSE 3535
CMD ["node", "index.js"]
