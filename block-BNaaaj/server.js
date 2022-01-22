var url = require('url');
const parseUrl = url.parse(
  `https://airindia.com/fares/calculate?from=delhi&to=detroit`,
  true
);
console.log(parseUrl);
console.log(parseUrl.pathname);
console.log(parseUrl.protocol);
console.log(parseUrl.parse());