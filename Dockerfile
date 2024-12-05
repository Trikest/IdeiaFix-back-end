FROM node:20

# Create app directory
WORKDIR /app

COPY . /app

RUN npm install
# If you are building your code for production
# RUN npm ci --omit=dev
#Normal
ENV PORT 3000

CMD [ "npm", "start" ]
