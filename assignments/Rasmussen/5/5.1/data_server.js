const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 4201;

http.createServer((req, res) => {
  if (req.url === '/data.json') {
    fs.readFile(path.join(__dirname, 'data.json'), (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('Error loading data.json');
        return;
      }
      // Note: No CORS headers are set here
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(data);
    });
  }
}).listen(PORT, () => {
  console.log(`Server #2 running at http://localhost:${PORT}`);
});
