const express = require('express');
const path = require('path');
const fs = require('fs/promises'); // Use promises version of fs for cleaner async/await
const app = express();
const port = 4000;

// Directories
const frameDirectory = __dirname;
const framableDirectory = path.join(__dirname, '../framable');

console.log('Current directory:', frameDirectory);
console.log('Framable directory:', framableDirectory);

// Serve static files from 'framable' under '/framable'
app.use('/framable', express.static(framableDirectory));

// Helper to generate HTML page with a list
const generateListPage = (title, itemsHtml) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${title}</title>
</head>
<body>
  <h1>${title}</h1>
  ${itemsHtml}
</body>
</html>
`;

// Route: List of framable websites
app.get('/websites', async (req, res) => {
  try {
    const files = await fs.readdir(framableDirectory);
    const htmlFiles = files.filter(file => file.endsWith('.html'));
    const listItems = htmlFiles.map(file => `<li><a href="/framable/${file}">${file}</a></li>`).join('');
    res.send(generateListPage('List of Framable Websites', `<ul>${listItems}</ul>`));
  } catch (err) {
    console.error('Error reading framable directory:', err);
    res.status(500).send('Unable to read framable directory');
  }
});

// Route: Display iFrames for each framable website
app.get('/test-framable', async (req, res) => {
  try {
    const files = await fs.readdir(framableDirectory);
    const htmlFiles = files.filter(file => file.endsWith('.html'));
    const iframes = htmlFiles.map(file => `
      <h3>${file}</h3>
      <iframe src="/framable/${file}" width="800" height="600"></iframe>
    `).join('<hr>');
    res.send(generateListPage('Framing Test', iframes));
  } catch (err) {
    console.error('Error reading framable directory:', err);
    res.status(500).send('Unable to scan framable directory');
  }
});

// Route: iFrame Path Attack (sets a Path-specific cookie)
app.get('/iframe-path/', (req, res) => {
  res.setHeader('Set-Cookie', 'session_id=xyz789; Path=/iframe-path/; HttpOnly');
  //res.cookie('session_id', 'xyz789', { path: '/iframe-path/', httpOnly: true });
  res.send(`
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><title>iFrame with Cookie</title></head>
<body>
  <h1>iFrame Page -- Cookie set</h1>
  <p>This page sets a cookie with a Path attribute.</p>
</body>
</html>
  `);
});

// Route: Parent page attempting to access iframe cookies
app.get('/parent-page', (req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html lang="en">
    <head><meta charset="UTF-8"><title>Parent Page</title></head>
    <body>
      <h1>Parent Page</h1>
      <p>This parent page will try to access cookies from the iFrame of the child page.</p>
      <iframe src="/iframe-path/" id="childFrame" width="800" height="600"></iframe>
      <script>
        document.getElementById('childFrame').onload = function () {
          try {
              var iframeWindow = document.getElementById('childFrame').contentWindow;
        
            // Check if same origin by trying to access a simple property
            iframeWindow.location.href; // Will throw if cross-origin
        
            // If no error, we can access the iframe's cookies
            var cookies = iframeWindow.document.cookie;
            console.log("Cookies from iframe: ", cookies);
            alert("Cookies from iframe: " + cookies);
          } catch (e) {
        console.log("Cannot access iframe cookies due to cross-origin restrictions:", e);
        alert("Cannot access iframe cookies due to cross-origin restrictions: " + e.message);
    }
  };
</script>
</body>
</html>
  `);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
