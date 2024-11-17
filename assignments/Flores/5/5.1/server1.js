const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const cors = require('cors'); // Add this line
const app = express();
const PORT = 4000;

// CORS configuration
// Uncomment the following line to enable CORS for cross-origin requests
app.use(cors({ origin: 'http://localhost:3000' })); // Allow only requests from Server 2 (port 3000)

// Middleware 
// enable CORS for cross-origin requests uncomment Middleware as well
app.use(cookieParser());
app.use(express.static(path.join(__dirname))); // Serve static files like favicon.ico

// JSON response with favorite items for CORS testing
app.get('/favorites', (req, res) => {
    res.json({
        "favorites": [
            "Johnny Cash",
            "Karate Kid",
            "Kaiju No. 8",
            "Gladiator"
        ]
    });
});

// Additional endpoints serving HTML content for each favorite item
app.get('/Johnnycash', (req, res) => {
    res.cookie('favorite_artist', 'Johnny Cash');
    res.send(`
        <html>
         <head> <link rel="icon" href="/favicon.ico" type="image/x-icon"></head>
            <body>
                <h1>Johnny Cash</h1>
                <p>Best known as a country music icon, Cash's music spans rock, blues, folk, and gospel. "Ring of Fire" is one of my favorites.</p>
            </body>
        </html>
    `);
});

app.get('/karate-kid.html', (req, res) => {
    res.cookie('favorite_show', 'KarateKid');
    res.send(`
        <html>
            <body>
                <h1>Karate Kid Series</h1>
                <p>This series teaches timeless lessons on discipline and perseverance. "Cobra Kai" is a great modern revival.</p>
            </body>
        </html>
    `);
});

app.get('/kaijuno8.html', (req, res) => {
    res.cookie('favorite_show', 'KaijuNo8');
    res.send(`
        <html>
            <body>
                <h1>Kaiju No. 8</h1>
                <p>A thrilling story where Kafka transforms into a monster, gaining superhuman strength as "Kaiju No. 8".</p>
            </body>
        </html>
    `);
});

app.get('/gladiator.html', (req, res) => {
    res.cookie('favorite_movie', 'Gladiator');
    res.send(`
        <html>
            <body>
                <h1>Gladiator</h1>
                <p>A gripping story of revenge, starring Russell Crowe. Looking forward to the upcoming "Gladiator 2".</p>
            </body>
        </html>
    `);
});

// Start Server 1
app.listen(PORT, () => {
    console.log(`Server 1 is running at http://localhost:${PORT}`);
});
