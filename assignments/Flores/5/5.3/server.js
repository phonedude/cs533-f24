const express = require('express');
const app = express();
const PORT = 4000; // Local server port

// Middleware to configure Content-Security-Policy
app.use((req, res, next) => {
    // Uncomment ONE of the following configurations based on what you want to demonstrate:

    // 1. Allow embedding from the specified site
    res.setHeader('Content-Security-Policy', "frame-src 'self' https://www.dailymotion.com");

    // 2. Block all embedding
    //res.setHeader('Content-Security-Policy', "frame-src 'none'");

    next();
});

// Endpoint to serve the embedding test page
app.get('/embed.html', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>CSP Embedding Test</title>
        </head>
        <body>
            <h1>CSP Embedding Test</h1>
            <p>Below is an iframe attempting to embed <strong>dailymotion.com</strong>:</p>
            <iframe src="https://www.dailymotion.com" width="800" height="600" style="border:1px solid black;"></iframe>
        </body>
        </html>
    `);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}/embed.html`);
});

