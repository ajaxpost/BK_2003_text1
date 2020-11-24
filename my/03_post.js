const http = require('http');
const querystring = require('querystring')
const server = http.createServer();

server.on('request',(req,res) => {
    let arr = [];
    req.on('data',buffer=>{
        arr.push(buffer)
    })
    
    req.on('end',()=>{
        // console.log(arr[0].toString())
        let buffer = Buffer.concat(arr);
        // console.log(buffer.toString())
        let one = querystring.parse(buffer.toString())
        console.log(one)
    })
})

server.listen(8080,()=>{
    console.log('http://127.0.0.1:8080')
})