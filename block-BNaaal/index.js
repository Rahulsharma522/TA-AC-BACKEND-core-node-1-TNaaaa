var http = require('http');

var server = http.createServer(handelSever);
function handelSever(req, res) {
  res.end('Welcome');
}
server.listen(4000, () => {
  console.log('node Script_file.js');
});