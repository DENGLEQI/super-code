// 需求：借助带三方express 快速搭建静态资源服务器

// 引入模块
const express = require("express");

// 调用方法生成对象
const app = express();

// 借助中间件开启静态资源服务器
app.use(express.static("./"));


//直接用get()来响应前端的get请求
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

app.listen(2017, () => {
    console.log("服务器开启成功，请访问2017端口。。")
});
