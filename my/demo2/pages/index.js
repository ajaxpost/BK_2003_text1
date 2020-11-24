// 导入 express 
const express = require('express');

//创建web服务实例
const app = express();

//监听请求
app.get('/',(req,res) => {
    res.send('hello word')
})
app.get('/hdk',(req,res)=>{
    res.setHeader('content-type','text/html;charset=utf-8')
    res.end('侯德康')
})
app.post('/dsy',(req,res) => {
    res.end('dsy');
})
//启动服务
app.listen(8080,()=>{
    console.log('http://127.0.0.1:8080')
})