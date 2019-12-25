// 导入一个模块
const http = require("http");

// 创建一个HTTP服务
let httpServer = http.createServer((require, response) => {
    response.end("你好");
})

// 开启服务监听
httpServer.listen("9999", "127.0.0.1", () => {
    console.log("服务器开启，开始监听9999端口");

})

