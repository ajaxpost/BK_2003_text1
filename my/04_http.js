//导入
const http = require('http');
const path = require('path');
const fs = require('fs');

//创建web服务实例
const server = http.createServer();

//监听请求
server.on('request',(req,res) => {
    let pathName = req.url;
    pathName = pathName === '/' ? '/index.html' : pathName;
    let strUrl = path.join(__dirname,'public',pathName);
    fs.readFile(strUrl,(err,data) => {
        if(err){
            res.statusCode = 500;
            res.end('I am 500');
        }else{
            res.end(data);
        }
    })
})

//启动服务
server.listen(8080,()=>{
    console.log('http://127.0.0.1:8080')
})