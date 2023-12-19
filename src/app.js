var http = require('http'),
  fs = require('fs');

fs.readFile('./index.html', function (err, html) {
  if (err) {
    throw err;
  }
  http
    .createServer(function (request, response) {
      response.writeHeader(200, { 'Content-Type': 'text/html' });
      response.write(html);
      response.end();
    })
    .listen(8001);
});

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');
console.log('Click Ctrl+C to stop');
