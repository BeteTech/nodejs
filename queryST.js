const http = require('http');
const url=require('url');

var server = http.createServer(function(req, res) {
    res.writeHead(200, {
        "contentType": "text/html;charset=UTF-8"
    });
    res.write("<h1>query student teacher</h1>");
    var userUrl = req.url;
    console.log(userUrl);
    if (userUrl.substr(0, 9) == "/student/") {
        var studentId = userUrl.substr(9);
        if (/\d{10}/.test(studentId)) {
            res.end("student ID is :" + studentId);
        } else {
            res.end("error student id");
        }
    } else if (userUrl.substr(0, 9) == "/teacher/") {
        var teacherId = userUrl.substr(9);
        if (/\d{6}/.test(teacherId)) {
            res.end("teacher ID is :" + teacherId);
        } else {
            res.end("error teacher id");
        }
    }
});

server.listen(3000,"127.0.0.1");