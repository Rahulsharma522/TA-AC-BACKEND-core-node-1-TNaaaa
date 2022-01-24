var http = require('http');

var server = http.createServer(handelSever);
function handelSever(req, res) {
  res.statusCode = 201;
  res.setHeader('content-type', `text/html`);
  res.end('<h1>Welcome</h1>');
}
server.listen(4444, () => {
  console.log('server start at 4444');
});