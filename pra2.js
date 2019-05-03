const http = require('http');
const host = "127.0.0.1";
const port = 3000;

const server = http.createServer(function (req, res) {
    res.statusCode = 200;
    res.setHeader('content-type', 'text/plain');
    res.end('nodejs');
});

server.listen(port, host, () => {
    console.log('the nodejs server is running in ${host}:${port}');
    console.log(`the nodejs server is running in ${host}:${port}`);
    console.log("the nodejs server is running in ${host}:${port}");
});