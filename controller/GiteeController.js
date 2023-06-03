/*
 * @Author: N0ts
 * @Date: 2022-08-30 14:38:31
 * @Description: 码云代请求
 * @FilePath: /gitee-api/controller/GiteeController.js
 * @Mail：mail@n0ts.cn
 */

const ResponseStatus = require("../entity/ResponseStatus");
const http = require("../utils/http");
const config = require("../config/config");

module.exports = (router) => {
    /**
     * 代跨域
     */
    router.post("/api/gitee", async (request, response) => {
        let { method, url, params, data, headers, password } = request.body;
        // 验证
        if (!method) {
            return response.send(
                ResponseStatus.FAIL("method 请求方法不能为空！")
            );
        }
        if (!url) {
            return response.send(ResponseStatus.FAIL("url 请求地址不能为空！"));
        }
        if (method != "GET" && password != config.password) {
            return response.send(ResponseStatus.FAIL("爬！"));
        }
        if (!params) {
            params = {};
        }
        if (!data) {
            data = {};
        }

        // 携带 token
        params.access_token = config.accessToken;

        // 是否设置超时时长
        const timeout = params.timeout || (data ? data.timeout : null);

        // 请求
        let result = null;
        try {
            result = await http({
                method,
                url: config.giteeApi + url,
                params,
                data,
                timeout,
                headers
            });
        } catch (error) {
            return response.send(ResponseStatus.FAIL(error.message));
        }
        response.send(ResponseStatus.OK("成功", result));
    });
    return router;
};
