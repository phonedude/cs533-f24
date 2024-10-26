const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 4000; // Updated to use port 4000

// Current directory (frame-path-attack)
const framePathDir = __dirname;

// Path to the framable directory (adjust the path if necessary)
const framableDir = path.join(__dirname, '../framable');

// Log the directories for debugging
console.log('Current directory:', framePathDir);
console.log('Framable directory:', framableDir);

// Serve the list of 100 websites from the framable directory
app.get('/websites', (req, res) => {
  fs.readdir(framableDir, (err, files) => {
    if (err) {
      console.error('Error reading framable directory:', err);
      return res.status(500).send('Unable to scan framable directory');
    }
    const htmlFiles = files.filter(file => file.endsWith('.html'));
    let fileLinks = htmlFiles.map(file => `<li><a href="/framable/${file}">${file}</a></li>`).join('');
    res.send(`
      <html>
        <head><title>List of Framable Websites</title></head>
        <body>
          <h1>List of Framable Websites</h1>
          <ul>
            ${fileLinks}
          </ul>
        </body>
      </html>
    `);
  });
});

// Serve static files from the framable directory under '/framable'
app.use('/framable', express.static(framableDir));

// Serve a page that attempts to iframe each website
app.get('/test-framable', (req, res) => {
  fs.readdir(framableDir, (err, files) => {
    if (err) {
      console.error('Error reading framable directory:', err);
      return res.status(500).send('Unable to scan framable directory');
    }
    const htmlFiles = files.filter(file => file.endsWith('.html'));
    let iframes = htmlFiles.map(file => `
      <h3>${file}</h3>
      <iframe src="/framable/${file}" width="800" height="600"></iframe>
    `).join('<hr>');
    res.send(`
      <html>
        <head><title>Framing Test</title></head>
        <body>
          <h1>Framing Test</h1>
          ${iframes}
        </body>
      </html>
    `);
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

