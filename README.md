## Node.js  服务器基础文件配置

> 只提供拉取，内容不可变更

#### version：

> current:   1.0.0.0

## 目录及文件作用介绍

* index.js     ---服务器入口  使用  `node indes.js`  启动服务器

* routers     ---路由文件  所有的接口全部放在这个目录下

  > 示例： http://127.0.0.1:7788/版本号/routers下的目录名/文件名/文件内部对应的端口
  >
  > http://127.0.0.1:7788/v1/vpi/index/get

* util.js         --- 所有的工具函数
* db.js          ---数据库连接