const http = require('http');
const map = require('through2-map');

const port = Number(process.argv[2]);

const server = http.createServer(function (request, response) {
  if (request.method !== 'POST') {
    response.writeHead(405, { 'Content-Type': 'text/plain' });
    return response.end('Only POST requests are accepted\n');
  }

  request.pipe(map(function (chunk) {
    return chunk.toString().toUpperCase();
  })).pipe(response);
});

server.listen(port);
