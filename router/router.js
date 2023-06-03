/*
 * @Author: N0ts
 * @Date: 2022-08-30 14:38:31
 * @Description: 路由配置
 * @FilePath: /gitee-api/router/router.js
 * @Mail：mail@n0ts.cn
 */

// 创建 express
const express = require("express");

// Controller 引入
const GiteeController = require("../controller/GiteeController");
const MainController = require("../controller/MainController");

// 创建路由容器
let router = express.Router();

// 路由引入
GiteeController(router);
MainController(router);

module.exports = router;
