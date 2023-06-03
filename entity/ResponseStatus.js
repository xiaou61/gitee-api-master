module.exports = {
    /**
     * 成功
     * @param {*} msg 成功信息
     * @param {*} data 成功数据
     * @returns 成功响应体
     */
    OK(msg, data) {
        return {
            status: 200,
            msg,
            data
        };
    },
    /**
     * 失败
     * @param {*} msg 失败原因
     * @returns 失败响应体
     */
    FAIL(msg) {
        return {
            status: 400,
            msg
        };
    },
    /**
     * 错误
     * @param {*} msg 错误原因
     * @returns 错误响应体
     */
    ERROR(msg) {
        return {
            status: 500,
            msg
        };
    }
};
