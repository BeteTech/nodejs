/// <reference path="../typings/globals/node/index.d.ts" />

const http = require('http');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
    if (req.url == '/dopost' && req.method.toLowerCase() == 'post') {
        var reqData = '';
        req.on('data', (chuck) => {
            reqData += chuck;
        }).on('end', () => {
            var dataStr = reqData.toString();
            var dataObj = querystring.parse(dataStr);
            console.log(dataObj.name);
            console.log(dataObj.sex);
            res.end('success return values..')
        });
    }
}).listen(80, '127.0.0.1');
console.log('server start...');