const express = require('express');

const app = express();

//监听请求
app.get('/',(req,res) => {
    res.send('hello word');
})
app.post('/hdk',(req,res) => {
    res.send('hdk');
})
//启动服务 
app.listen(8080,()=>{
    console.log('http://127.0.0.1:8080');
})