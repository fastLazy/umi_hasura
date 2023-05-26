# umi_hasura

## 启动 hasura 服务（docker）

```shell
cd backend
sudo docker-compose up
```

访问：http://localhost:8080/console

## 修改 hasura 登录密码

> 打开 backend/docker-compose.yml，找到 HASURA_GRAPHQL_ADMIN_SECRET
