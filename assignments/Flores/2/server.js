const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');

const app = express();
const PORT = 4000;

// Middleware to use cookie-parser
app.use(cookieParser());
app.use(express.static(path.join(__dirname))); // Serve static files like favicon.ico

// Routes for favorite items
app.get('/Johnnycash', (req, res) => {
    res.cookie('favorite_artist', 'Johnny Cash');
    res.send(`
        <html>
         <head> <link rel="icon" href="/favicon.ico" type="image/x-icon"></head>
            <body>
                <h1> Johnny Cash</h1>
                <p>Even though he is best known as a country music icon, his music transcended various genres including rock and roll, rockabilly, blues, folk, and gospel. Cash's wide appeal led to him being inducted into the Country Music, Rock and Roll, and Gospel Music Halls of Fame, a rare honor and I enjoy listening to "Ring of Fire".</p>
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
                <p>The Karate Kid series is one of my favorites because of its timeless lessons on discipline, perseverance, and personal growth. Cobra Kai revives these themes with a fresh, modern twist.</p>
            </body>
        </html>
    `);
});

app.get('/kaijuno8.html', (req, res) => {
    res.cookie('favorite_show', 'kaijuno8');
    res.send(`
        <html>
            <body>
                <h1>Kaiju No. 8</h1>
                <p>After a small talking monster flies into his body via his mouth, Kafka gains the ability to turn into a monster himself, which gets dubbed "Kaiju No. 8" by the Defense Force. Kafka remains fully cognizant while in the form, but gains superhuman strength, and becomes the first monster to escape the Defense Force.</p>
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
                <p>Gladiator is thrilling, A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery. He is force to fight as a Gladiator. Russle Crowe is an amazing actor and I wish he was part of the new "Gladiator 2" coming out later this year. </p>
            </body>
        </html>
    `);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
