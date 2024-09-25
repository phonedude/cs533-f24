const http = require('http');
const url = require('url');

function parsetime(time) {
  const date = new Date(time);
  return {
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds()
  };
}

function unixtime(time) {
  const date = new Date(time);
  return { unixtime: date.getTime() };
}

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const time = parsedUrl.query.iso;
  const path = parsedUrl.pathname;
  let result;

  if (path === '/api/parsetime') {
    result = parsetime(time);
  } else if (path === '/api/unixtime') {
    result = unixtime(time);
  }

  if (result) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(result));
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(Number(process.argv[2]))