var http = require('http');
var fs = require('fs');
var server = http.createServer(handleServer);

function handleServer(req, res) {
  console.log(req.method, req.url);
  if (req.method === 'GET' && req.url === '/file') {
    res.setHeader('Content-Type', 'type/html');
    fs.readFile('./node.html', (err, content) => {
      if (err) console.log(err);
      res.end(content);
    });
  } else if (req.method === 'GET' && req.url === '/stream') {
    res.setHeader('Content-Type', 'type/html');
    fs.createReadStream('./node.html').pipe(res);
  }
}

server.listen(5555, () => {
  console.log(`sever listener on port 5555`);
});