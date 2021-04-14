const express = require('express') //引入模块

const mysql = require('mysql')

const app = express() //调用express方法

const port = 8080 //服务运行的端口

app.get('/user', function(req, res) {

    //向客户端响应数据
    res.send("欢迎访问用户接口")

})

app.get('/list', (req, res) => {

    var connection = mysql.createConnection({
        host: '127.0.0.1',
        user: 'root',
        password: 'root',
        database: 'vue2008'
    });

    //创建链接
    connection.connect();

    connection.query('select user_id,user_name,email from p_users limit 10', function(error, results, fields) {
        // console.log(results)
        res.send(JSON.stringify(results))
    });

    connection.end();


})

app.get('/', (req, res) => {

    const list = [

        {
            userid: 1001,
            name: "小刁",
            age: 11
        },

        {
            userid: 1002,
            name: "大畅",
            age: 11
        },

        {
            userid: 1003,
            name: "小八嘎",
            age: 11
        },

        {
            userid: 1004,
            name: "大孙",
            age: 11
        },

    ]

    //将数组转为josn字符串


    res.send(JSON.stringify(list))
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})