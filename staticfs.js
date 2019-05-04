/// <reference path="./typings/globals/node/index.d.ts" />

const http = require('http');
const url = require('url');
const fs = require('fs');

const server = http.createServer(function (req, res) {
    var pathName = url.parse(req.url).pathname;
    fs.readFile("./static/" + pathName, (err, data) => {
        if (err) {
            fs.readFile("./static/404.html", (err, data) => {
                if (err) throw err;
                res.end(data);
            });
            return;
        }
        res.end(data);
    });
}).listen(3000, "127.0.0.1");