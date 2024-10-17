const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    let allData = '';
    req.on('data', partData => {
      allData += partData.toString();
    });

    req.on('end', () => {
      res.end(allData.toUpperCase());
    });
  } else {
    return res.end('Send a POST request!!\n')
  }
});

server.listen(Number(process.argv[2]))
