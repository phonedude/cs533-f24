const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3003;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/submit', (req, res) => {
  const logFilePath = path.join(__dirname, 'log.txt');
  const logStream = fs.createWriteStream(logFilePath, { flags: 'a' });
  for (const [key, value] of Object.entries(req.body)) {
    logStream.write(`${key}=${value}\r\n`);
  }
  logStream.write('\r\n');
  logStream.end();
  res.redirect('localhost:3003');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
