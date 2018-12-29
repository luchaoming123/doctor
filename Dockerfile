# build stage
FROM node:latest as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run init -y
RUN npm run build

# production stage
FROM nginx:latest as production-stage
# 删除nginx 默认配置
RUN rm /etc/nginx/conf.d/default.conf
# 添加我们自己的配置 default.conf 在下面
ADD default.conf /etc/nginx/conf.d/ 
COPY --from=build-stage /app/dist /usr/share/nginx/html/dist
COPY --from=build-stage /app/index_prod.html /usr/share/nginx/html/index_prod.html
EXPOSE 4001
CMD ["nginx", "-g", "daemon off;"]