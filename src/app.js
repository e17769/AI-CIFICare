var http = require('http');
var fs = require('fs');
http
  .createServer(function (req, res) {
    //Open a file on the server and return its content:
    fs.readFile('./src/index.html', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      return res.end();
    });
  })
  .listen(8080);

// Console will print the message
console.log('Server running at http://127.0.0.1:8080/');
console.log('Click Ctrl+C to stop');
