/*
 * @Author: N0ts
 * @Date: 2022-10-10 14:31:20
 * @Description: main
 * @FilePath: /gitee-api/main.js
 * @Mail：mail@n0ts.cn
 */

// 创建 express & 服务器
const express = require("express");
const app = express();

// post 请求需要
app.use(express.json());

// config
const config = require("./config/config");

// 跨域配置
app.all("*", (req, res, next) => {
    try {
        // google需要配置，否则报错cors error
        res.setHeader("Access-Control-Allow-Credentials", "true");
        // 允许的地址,http://127.0.0.1:9000这样的格式
        res.setHeader("Access-Control-Allow-Origin", req.get("Origin"));
        // 允许跨域请求的方法
        res.setHeader(
            "Access-Control-Allow-Methods",
            "POST, GET, OPTIONS, DELETE, PUT"
        );
        // 允许跨域请求header携带哪些东西
        res.header(
            "Access-Control-Allow-Headers",
            "Origin, X-Requested-With, Content-Type, Accept, If-Modified-Since"
        );
    } catch {
        return next();
    }
    next();
});

// 导入路由
app.use(require("./router/router"));

// 监听端口
app.listen(config.port, function () {
    console.log(`服务已启动：http://localhost:${config.port}`);
});
