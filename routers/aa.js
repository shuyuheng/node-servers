// 创建路由
const router = require('express').Router()


router.get('/',(req,res) =>{
    res.send('aa路由')
})


// 导出这个文件路由
module.exports = router