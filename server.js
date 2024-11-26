'use strict'

var http = require('http');
var port = process.env.PORT || 1337;
var fs = require('fs');

http.createServer(function (request, response) {
    fs.readFile('./' + request.url, function (err, data) {
        if (!err) {
            var dotoffset = request.url.lastIndexOf('.');
            var mimetype = dotoffset == -1
                ? 'text/plain'
                : {
                    '.html': 'text/html',
                    '.css': 'text/css',
                    '.js': 'text/javascript'
                }[request.url.substr(dotoffset)];
            response.setHeader('Content-type', mimetype);
            response.end(data);

            console.log("Req:" + request.url + " - Type:" + mimetype);
        } else {
            console.log("File not found: " + request.url);

            response.writeHead(404, "Not Found");
            response.end();
        }
    });
}).listen(port);

console.log("Server started");