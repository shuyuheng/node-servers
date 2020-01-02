const mysql = require('mysql')
const config = require('./config.js')
const connection = mysql.createConnection(config.mysql_config)

module.exports = connection