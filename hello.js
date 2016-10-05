var http = require('http');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'html'});
    response.end('<H1> Hello World </H1>');
}).listen(8080);

console.log('Server started');
