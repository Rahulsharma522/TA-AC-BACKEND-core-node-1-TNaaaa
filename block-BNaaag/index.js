var { readFile, readFileSync } = require('fs');

readFile('./content.md', (err, content) => {
  console.log(err, content.toString());
});
var result = readFileSync('./content.md', 'utf-8');
console.log(result);
var buff1 = Buffer.alloc(10);
console.log(buff1);
buff1.write('Welcome to BUffer');
buff1.toString();
console.log(buff1);
