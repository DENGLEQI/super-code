// 导入一个第三方模块
const express = require("express");

// 调用方法生成对象
const app = express();

// 借助中间件开启静态资源服务器 以当前目录为根节点
app.use(express.static("./"));


app.get('/home', (req, res) => {
    res.send('首页');
});

app.get('/login', (req, res) => {
    res.send('登陆页get');
});

//post()响应post请求
app.post('/login', (req, res) => {
    res.send('登陆页post');
});

app.get('/reg', (req, res) => {
    res.send('注册页');
});

//商品数据
let goodslist = [
    {
        gid: 1,
        title: '华为',
        price: 9999
    }, {
        gid: 2,
        title: '小米',
        price: 1999
    }, {
        gid: 3,
        title: '锤子',
        price: 977
    }
];

app.get('/cart', (req, res) => {
    res.send(goodslist);
});
// 开启服务监听
app.listen(2020, () => {
    console.log("成功开启2020服务器，请访问端口");
});