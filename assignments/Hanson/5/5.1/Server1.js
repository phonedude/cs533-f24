const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();
const PORT = 4000;
const ENABLE_CORS = process.env.ENABLE_CORS === 'true';

app.use(cookieParser());

// Conditionally apply CORS or block cross-origin requests
app.use((req, res, next) => {
    if (ENABLE_CORS) {
        cors({ origin: 'http://localhost:3000' })(req, res, next);
        console.log('CORS is ENABLED');
    } else {
        const origin = req.headers.origin;
        if (origin && origin !== `http://localhost:${PORT}`) {
            return res.status(403).send('Cross-origin requests are not allowed.');
        }
        console.log('CORS is DISABLED');
        next();
    }
});

// JSON response for /favorites
app.get('/favorites', (req, res) => {
    console.log('GET /favorites');
    res.setHeader('X-Debug', 'CORS-Test');
    res.json({
        favorites: [
            'Brian McKnight',
            'Marvel Avengers',
            'Naruto Uzumaki',
            'Sonic The Hedgehog'
        ]
    });
});

// Informational HTML endpoints with cookies
app.get('/BrianMcKnight', (req, res) => {
    res.cookie('favorite_artist', 'Brian McKnight').send(`
        <html>
            <body>
                <h1>Brian McKnight</h1>
                <p>A world-renowned R&B artist from the 90s who is a dedicated songwriter, actor, producer, and multi-instrumentalist.</p>
            </body>
        </html>
    `);
});

app.get('/Naruto-Uzumaki', (req, res) => {
    res.cookie('favorite_show', 'Naruto').send(`
        <html>
            <body>
                <h1>Naruto Series</h1>
                <p>This series teaches powerful lessons on self-belief, discipline, and perseverance.</p>
            </body>
        </html>
    `);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
    console.log(`CORS: ${ENABLE_CORS ? 'ENABLED' : 'DISABLED'}`);
});
