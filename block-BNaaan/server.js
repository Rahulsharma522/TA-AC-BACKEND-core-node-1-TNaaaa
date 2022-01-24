var http = require('http');

var server = http.createServer(handelSever);
function handelSever(req, res) {
  console.log(req.method, req.url, req.headers);
  res.end('Welcome');
}
server.listen(3000, () => {
  console.log('server start at 3000');
});