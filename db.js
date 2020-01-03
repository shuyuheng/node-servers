const mysql = require('mysql')
const config = require('./config.js')
const connection = mysql.createConnection(config.mysql_config)
// 声明一个同步方法
connection.queryAsync =  function(sql,data){
    return new Promise((res) => {
        connection.query(sql,data,(err,result) => {
            if(err){
            console.log(err)
                res({
                    ok:0,err
                })
            }else{
                res({
                    ok:1,
                    data:result
                })
            }
        })
    })
}
module.exports = connection