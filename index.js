// 引入express
const express = require('express')
// 引入服务器的配置
const { server } = require('./config')
// 创建服务
const app = express()
// 启用cors跨域
app.use(require('cors')())
// 0.配置body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())  // 用于接收axios 请求数据
const fs = require('fs')
// 1. 直接读取 routers 目录下所有的文件
const routerFiles = fs.readdirSync('./routers')
// 2. 循环所有的文件实现加载
routerFiles.forEach(v => {
    // 如果是目录就再读取
    if (v.indexOf('.js') === -1) {   // v  中是否有 .js
        // 读取子目录
        const routerFiles1 = fs.readdirSync('./routers/' + v)
        routerFiles1.forEach(v1 => {
            let name = v1.replace('.js', '')
            app.use(server.version || '' +'/' + v + '/' + name, require('./routers/' + v + '/' + name))
        })
    } else {
        // 如果是文件就直接加载
        // 提取文件（去掉.js)
        let name = v.replace('.js', '')
        app.use(server.version || ''  +'/' + name, require('./routers/' + name))
    }
})
// 统一处理网站中所有的错误（网站中一有错误就会跳到这里来执行）
app.use((err, req, res, next) => {
    res.json({
        'ok': 0,
        'error': err || '服务器错误'
    })
})

// 测试内容
app.get('/test',(req,res)=>{
    res.send('<h1 style="text-align:center">服务器开启中...</h1>')
})
// 监听端口 和 IP
app.listen(server.port,(server.ip || '0.0.0.0'), () => {
    console.log(`http://${(server.ip || '127.0.0.1')}:${server.port}/test`)
})