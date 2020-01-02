const router = require('express').Router()


router.get('/',(req,res) =>{
    res.send('tt路由')
})


// 导出这个文件路由
module.exports = router