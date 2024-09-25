const http = require('http');
const { URL } = require('url');

const port = Number(process.argv[2]);

const server = http.createServer(function (request, response) {
  const parsedUrl = new URL(request.url, 'http://localhost');

  const pathname = parsedUrl.pathname;
  const iso = parsedUrl.searchParams.get('iso');

  if (!iso) {
    response.writeHead(400, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify({ error: 'Missing iso parameter' }));
    return;
  }

  let result;

  if (pathname === '/api/parsetime') {
    const date = new Date(iso);
    result = {
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds()
    };
  } else if (pathname === '/api/unixtime') {
    const date = new Date(iso);
    result = {
      unixtime: date.getTime()
    };
  } else {
    response.writeHead(404, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify({ error: 'Invalid endpoint' }));
    return;
  }

  response.writeHead(200, { 'Content-Type': 'application/json' });
  response.end(JSON.stringify(result));
});

server.listen(port);
