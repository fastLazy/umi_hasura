# umi 集成 hasura

## 启动 hasura 服务（docker）

```shell
cd backend
sudo docker-compose up
```

访问：http://localhost:8080/console

## hasura 登录密码

> 打开 backend/docker-compose.yml，找到 HASURA_GRAPHQL_ADMIN_SECRET

## 修改配置文件

打开.umirc.ts

```js
define: {
    "process.env.URI": "http://localhost:8080/v1/graphql",
    "process.env.SECRET": "myadminsecretkey",
},
```

## 启动项目

```shell
pnpm install
pnpm start
```
