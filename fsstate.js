const http = require('http');
const fs = require('fs');

var server = http.createServer((req, res) => {
    res.writeHead(200, {
        "content-type": "text/html;charset=utf-8"
    });
    if (req.url == '/favicon.ico') {
        return;
    }

    fs.mkdir('./album/aaa', {
        recursive: true
    }, (err) => {
        if (err) throw err;
    });

    fs.stat('./album/bbb.txt', function (err, data) {
        //如果不存在这个文件或文件夹，后台抛出错误
        if (err) {
            console.log(err);
        }
        console.log(data.isDirectory());
    });

    res.end("done!");
});


server.listen(3000, '127.0.0.1');