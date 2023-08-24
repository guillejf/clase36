FROM node
COPY . .
RUN npm install 
EXPOSE 8087
CMD ["npm", "start"]