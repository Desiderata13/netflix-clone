# 使用 Node.js 14 版本的基础镜像
FROM node:16-alpine

# 设置工作目录
WORKDIR /app

# 复制 netflix-ui 目录到容器中的 /app 目录
COPY netflix-ui /app

# 安装依赖
RUN yarn install

# 暴露应用程序的端口（根据你的应用程序配置）
EXPOSE 3000

# 启动应用程序
CMD ["yarn", "start"]
