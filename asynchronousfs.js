/// <reference path="./typings/globals/node/index.d.ts" />

const http = require('http');
const fs = require('fs');

const server = http.createServer(function (req, res) {
    if (req.url == '/favicon.ico') {
        return;
    }
    var fileArray = [];
    fs.readdir("./album", function (err, files) {
        // console.log(files);
        for (let i = 0; i < files.length; i++) {
            var theFileName = files[i];
            fs.stat("./album", function (err, stats) {
                if (err) throw err;
                if (stats.isDirectory()) {
                    fileArray.push(theFileName);
                }
            });
            console.log(fileArray);
        }
    });
});

server.listen(3000, "127.0.0.1");