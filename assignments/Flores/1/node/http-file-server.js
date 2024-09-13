const http = require('http');
const fs = require('fs');

const port = Number(process.argv[2]);
const filePath = process.argv[3];

const server = http.createServer(function (request, response) {
  const stream = fs.createReadStream(filePath);
  stream.pipe(response);
});

server.listen(port);
