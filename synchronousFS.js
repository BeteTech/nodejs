/// <reference path="./typings/globals/node/index.d.ts" />

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "content-type": "text/html;charset=UTF-8"
    });
    if (req.url == "/favicon.ico") {
        return;
    }

    fs.readdir("./album", function (err, files) {
        if (err) throw err;
        var filesArr = [];
        //用循环语句会遇到异步问题
        // for (let i = 0; i < files.length; i++) {
        //     const element = files[i];

        // }
        //用闭包递归的方式来实现同步
        (function iterator(i) {
            if (i == files.length) {
                return;
            }
            fs.stat("./album/" + files[i], function (err, stats) {
                if (stats.isDirectory()) {
                    filesArr.push(files[i]);
                }
                iterator(i + 1);
            });
        })(0);
        console.log(filesArr);
    });

    res.end("done synchronous funciton!");
});

server.listen(3000, "127.0.0.1");