console.log('Welcome to NOde.js');
var os = require('os');
var freeM = os.freemem();
var cups = os.cpus().length;
var uptime = os.uptime();
var version = os.version();
console.log(freeM);
console.log(cups);
console.log(uptime);
console.log(version);
var readFiles = require('fs');
readFiles.readFile('', 'utf8', (err, content) => {
  console.log(content);
});

console.log('non-blocking First');
setTimeout(() => {
  console.log('non-blocking middle');
}, 2000);
console.log('last');
var { readFile, readFileSync, unlike, fstat } = require('fs');
var sync = readFileSync('./app.js');