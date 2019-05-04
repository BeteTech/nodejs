/// <reference path="../typings/globals/node/index.d.ts" />

const http = require('http');
const querystring=require('querystring');
//处理post请求，req.on要处理两个事件，分别是'data'和'end'，通过toString方法转成字符串，再通过querystring解析
const server = http.createServer((req, res) => {
    if (req.url == '/dopost' && req.method.toLowerCase() == 'post') {
        // console.log(1);
        var alldata = '';
        req.addListener('data', function (chunk) {
            // console.log(2);

            alldata += chunk;
            // console.log(chunk);
        });
        req.addListener('end', function () {
            // console.log(3);
            // console.log(alldata.toString());
            res.end('success!');
            var dataStr=alldata.toString();
            var dataObj=querystring.parse(dataStr);
            console.log(dataObj.name);
            console.log(dataObj.sex);
        });
    }
}).listen(80, "127.0.0.1");