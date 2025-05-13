const express = require('express');
const app = express();
const PORT = 4000;

// Toggle embedding behavior via environment variable
const ENABLE_EMBEDDING = process.env.ENABLE_EMBEDDING === 'true';

// Middleware to set Content-Security-Policy header
app.use((req, res, next) => {
  const cspHeader = ENABLE_EMBEDDING
    ? "frame-src 'self' https://www.dailymotion.com"
    : "frame-src 'none'";

  res.setHeader('Content-Security-Policy', cspHeader);
  console.log(`CSP applied: ${cspHeader}`);
  next();
});

// Serve the embedding test page
app.get('/embed.html', (req, res) => {
  res.type('html').send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>CSP Embedding Test</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          padding: 2rem;
          background-color: #f9f9f9;
        }
        iframe {
          border: 1px solid #ccc;
          margin-top: 1rem;
        }
      </style>
    </head>
    <body>
      <h1>CSP Embedding Test:</h1>
      <p>Testing iFrame embedding for <strong>dailymotion.com</strong></p>
      <iframe src="https://www.dailymotion.com" width="800" height="600"></iframe>
    </body>
    </html>
  `);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/embed.html`);
  console.log(`Embedding is currently ${ENABLE_EMBEDDING ? 'ENABLED' : 'DISABLED'}`);
});
