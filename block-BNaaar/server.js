var http = require('http');
var url = require('url');
var server = http.createServer(handleServer);
function handleServer(req, res) {
    var parseUrl = url.parse(req.url);
    console.log(req.method, req.url, parseUrl.pathname);
  
    if (req.method === 'GET' && req.url === '/') {
      res.write('Welcome to Homepage');
      res.end();
    } else if (req.method === 'GET' && req.url === '/about') {
      res.writeHead(201, { 'Content-type': 'text/html' });
      res.end('<h2>this is all about NodeJS </h2>');
    } else if (req.method === 'POST' && req.url === '/about') {
      res.end(`{message: this is a post request}`);
    }
  }
  server.listen(3000, () => {
    console.log('server is listening on port 5k');
  });