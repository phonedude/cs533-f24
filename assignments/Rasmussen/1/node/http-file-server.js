const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  let read = fs.createReadStream(process.argv[3]);
  read.pipe(res);
});

server.listen(Number(process.argv[2]))
