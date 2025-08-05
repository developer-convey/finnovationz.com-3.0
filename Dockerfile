#kiran
FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm i
RUN npm i pm2 -g
RUN npm i react-icons/fa
#for build...
COPY . . 
RUN npm run build
EXPOSE 3000
CMD ["pm2-runtime", "npm", "--", "run", "dev"]
#Dummy Line.....
