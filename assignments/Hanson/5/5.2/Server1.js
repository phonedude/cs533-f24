const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors'); // Include CORS middleware
const app = express();
const PORT = 4000;

// Toggle CORS dynamically with an environment variable
const ENABLE_CORS = process.env.ENABLE_CORS === 'true';

// Apply middleware based on the CORS toggle
if (ENABLE_CORS) {
    app.use(cors({
        origin: 'http://localhost:3000',
        exposedHeaders: [
            'X-CS533f24-BrianMcKnight',
            'X-CS533f24-Marvel',
            'X-CS533f24-Naruto',
            'X-CS533f24-Sonic'
        ]
    }));
    console.log('CORS is ENABLED');
} else {
    // Middleware to block cross-origin requests
    app.use((req, res, next) => {
        const origin = req.headers.origin;
        const allowedOrigin = `http://localhost:${PORT}`;
        if (origin && origin !== allowedOrigin) {
            res.status(403).send('Cross-origin requests are not allowed.');
        } else {
            next();
        }
    });
    console.log('CORS is DISABLED');
}

// JSON response with favorite items and custom headers for CORS testing
app.get('/favorites', (req, res) => {
    console.log('Processing /favorites request');

    // Set custom debug header
    res.setHeader('X-Debug', 'CORS-Test');

    // Add the four custom headers
    res.setHeader('X-CS533f24-BrianMcKnight', 'Brian McKnight Information');
    res.setHeader('X-CS533f24-Marvel', 'Marvel Avengers Information');
    res.setHeader('X-CS533f24-Naruto', 'Naruto Uzumaki Information');
    res.setHeader('X-CS533f24-Sonic', 'Sonic The Hedgehog Information');

    res.json({
        "favorites": [
            "Brian McKnight",
            "Marvel Avengers",
            "Naruto Uzumaki",
            "Sonic The Hedgehog"
        ]
    });
});

// Additional endpoints serving HTML content
app.get('/BrianMcKnight', (req, res) => {
    res.cookie('favorite_artist', 'Brian McKnight');
    res.send(`
        <html>
            <body>
                <h1>Brian McKnight</h1>
                <p>A world-renown R&B artist from the 90s who is  dedicated songwriter, actor, record producer, and multi-instrumentalist.</p>
            </body>
        </html>
    `);
});

app.get('/Naruto-Uzumaki.html', (req, res) => {
    res.cookie('favorite_show', 'Naruto');
    res.send(`
        <html>
            <body>
                <h1>Naruto Series</h1>
                <p>This series teaches timeless lessons on belief in one's self, discipline, and perseverance.</p>
            </body>
        </html>
    `);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
    console.log(`CORS is currently ${ENABLE_CORS ? 'ENABLED' : 'DISABLED'}`);
});

