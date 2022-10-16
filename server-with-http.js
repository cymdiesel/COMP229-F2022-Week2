const { response, query } = require('express');
const http = require('http');
const url = require('url');

http.createServer((req, res) => {
    const queryObject = url.parse(req.url, true).query;
    
    Logger(); // This is my first middleware

    if(queryObject['a'] === 'a'){
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.end('Hello World');
    }else{
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.end('Bye World');
    }

}).listen(3000);

function Logger(){
    console.log('Received a request');
}
