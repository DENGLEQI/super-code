//需求：连接mongo实现一个接口
// const mongodb = require('mongodb'); //{MongoClient : xxx}
// const MongoClient = mongodb.MongoClient;
const { MongoClient } = require('mongodb');
let DBurl = 'mongodb://localhost:27017';
//连接mongodb数据库
MongoClient.connect(DBurl, async (err, client) => {
    //err 连接错误信息，client连接成功的客户端
    if (err) throw err;
    let db = client.db('H51912');//连接数据库，里面写的是数据库名字。有就是连接，没有就是创建新的数据库
    //有则连接，无则创建集合
    let col = db.collection('user');

    let cola = db.collection('abc');

    //在集合里面进行增删改查
    let songs = [{
        "id": 5,
        "name": "月亮代表我的心"
    }, {
        "id": 6,
        "name": "我心依旧"
    }, {
        "id": 7,
        "name": "涛声依旧"
    }, {
        "id": 8,
        "name": "匆匆那年"
    }, {
        "id": 9,
        "name": "雨天"
    }, {
        "id": 10,
        "name": "七里香"
    }, {
        "id": 11,
        "name": "晴天"
    }, {
        "id": 12,
        "name": "倔强"
    }, {
        "id": 13,
        "name": "叶言之庭"
    }, {
        "id": 14,
        "name": "告白气球"
    }, {
        "id": 15,
        "name": "最长的电影"
    }, {
        "id": 16,
        "name": "听妈妈的话"
    }, {
        "id": 17,
        "name": "蒲公英的约定"
    }];
    let data = [
        {
            "src": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1fba6c4f1a19200778ac3b1671b087cd.jpg",
            "title": "小米USB充电器30W快充版（1A1C）",
            "desc": "多一种接口，多一种选择",
            "price1": "54",
            "price2": "59元"
        },
        {
            "src": "https://i8.mifile.cn/b2c-mimall-media/4132366589e457f407b918fe48c89cb1.jpg",
            "title": "小米USB-C数据线 编织线版",
            "desc": "高强度纤维编制线体",
            "price1": "18.9",
            "price2": ""
        },
        {
            "src": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1cd09b0dfd8c6d68bce1b5f946ee6476.jpg",
            "title": "ZMI USB Type-C 转 Lightning 数据线",
            "desc": "MFi官方认证，3A大流量，12个月质保",
            "price1": "54",
            "price2": "59元"
        },
        {
            "src": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9eb0178e3bfeb7d170edd641fb4be4bc.jpg",
            "title": "高速无线充套装",
            "desc": "快速无线闪充，Qi充电标准",
            "price1": "129",
            "price2": "149元"
        },
        {
            "src": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1f32af53d1ad60f4980146f6a2b81019.jpg",
            "title": "小米无线充电宝青春版10000mAh",
            "desc": "能量满满，无线有线都能充",
            "price1": "129",
            "price2": ""
        },
        {
            "src": "https://i8.mifile.cn/v1/a1/b0ded71f-b235-8f99-ba1c-20f80c3a4231.jpg",
            "title": "米家LED随身灯",
            "desc": "小巧轻便 5级亮度调节",
            "price1": "14.9",
            "price2": "19.9元"
        },
        {
            "src": "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a09b7cc24428a3f3b9acb0e65dc99ede.jpg",
            "title": "小米9 Pro 5G 极简摩纹保护壳",
            "desc": "裸机般顺滑手感，轻薄无负担",
            "price1": "49",
            "price2": ""
        }
    ]

    //需求：给song集合插入数据
    cola.insertMany(data);
    // col.insertMany(songs);
    //需求：查询数据
    // let data = await col.find().toArray();
    // console.log(data);

    // //需求：查找id大于2  $gt大于  $lt小于 $gte大于等于 $lte小于等于 $ne不等于
    // let data2 = await col.find({
    //     'id': {
    //         $gt: 2
    //     }
    // }).toArray();
    // console.log(data2);

    // //需求：查找name叫“涛声依旧”
    // let data3 = await col.find({
    //     name: '蒲公英的约定'
    // }).toArray();
    // console.log(data3);

    // //需求：查找id为2 且 name 我心依旧
    // let data4 = await col.find({
    //     id: 2,
    //     name: '我心依旧'
    // }).toArray();
    // // console.log(data4);

    // //需求：对id进行排序 降序
    // let data5 = await col.find().sort({ id: -1 }).toArray();
    // console.log(data5);

    // //需求：获取 第一页数据page 1 每页 5条  分页的制作方法有顺序要求：limit().skip().sort()   
    //mysql :limit index,num
    // let num = 5;
    // let page = 2;
    // let data6 = await col.find().limit(num).skip((page - 1) * num).toArray();
    // console.log(data6);

    //需求：修改name叫 月亮代表我的心; 改成：月亮惹的祸
    let data7 = await col.updateMany({
        name: '蒲公英的约定'
    }, {
        $set: {
            name: '怕傻傻的'
        }
    });
    if (data7.modifiedCount) {
        console.log('修改成功');
    } else {
        console.log('修改失败');
    }
    console.log(data7);

    // //需求：删除id 的数据
    // let data8 = await col.deleteMany({
    //     id: 6
    // });
    // console.log(data8);
    // if (data8.deletedCount) {
    //     console.log('删除成功');
    // } else {
    //     console.log('删除失败');
    // }

    //关闭数据库连接
    client.close();
});