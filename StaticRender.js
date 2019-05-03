var http = require('http');
var fs = require('fs');
var server = http.createServer(function (req, res) {
    if (req.url == "/fang") {
        fs.readFile("./fang.html", function (err, data) {
            res.end(data);
        });
    } else if (req.url == "/yuan") {
        fs.readFile("./yuan.html", function (err, data) {
            res.end(data);
        });
    } else {
        res.writeHead(200, {
            "content-type": "text/html;charset=UTF-8"
        });
        res.end("404 error");
    }
});

server.listen(3001, "127.0.0.1");

//nodejs是没有web容器的，没有根目录的概念，与apache\nginx\tomcat这类web服务器不同