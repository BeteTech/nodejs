var http=require('http');

var server=http.createServer(function(req,res){
    res.writeHead(200,{"content-type":"text/html;charset=UTF-8"});
    console.log('server request'+req.url);
    //一定要加end，否则一直在请求
    res.end();
});

server.listen(3000,"127.0.0.1");