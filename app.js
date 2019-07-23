var http = require("http");
var port = 9000;
http.createServer(function (request,response){
     response.writeHead(200, { "content-type": "text/html"});
     response.write("<html><body>Hello<strong><i>World!</i></strong></body></html>");
     response.end();
}).listen(port);
console.log("server started @ localhost:9000");