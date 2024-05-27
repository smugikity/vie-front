FROM node:16-alpine as build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# ENV REACT_APP_API_BASE_URL=https://jsonplaceholder.typicode.com
# ENV REACT_APP_USERS_ENDPOINT=/users

RUN npm run build

FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
