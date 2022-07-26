# build step
FROM node:16.16.0 as build
WORKDIR /app
COPY package*.json /app/
RUN npm install --legacy-peer-deps
COPY ./ /app/

RUN npm run build

# release step
FROM nginx:1.21.5-alpine as release
WORKDIR /usr/share/nginx/html 
COPY --from=build /app/build /usr/share/nginx/html/
COPY --from=build /app/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]