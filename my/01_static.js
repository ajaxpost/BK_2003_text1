const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer();

server.on('request', (req, res) => {
    let pathName = req.url;
    pathName = pathName === '/' ? '/index.html' : pathName;

    
    if (pathName !== '/favicon.ico') {
        let one = path.join(__dirname, 'public', pathName);
        console.log(one)
        fs.readFile(one,(err, data) => {
            if (err) {
                res.statusCode = 500;
                res.end('I am 500')
            } else {
                res.end(data);
            }
        })

    }
  
})

server.listen(8080, () => {
    console.log('http://127.0.0.1:8080')
})