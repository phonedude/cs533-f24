const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const app = express();
const port = 4000;

app.use(cookieParser());

// Set Cookie
const setCookie = (type, name) => (request, response, next) => {
    response.cookie('favorite', `${type}:${name}`, {
        maxAge: 900000,
        httpOnly: false,
        encode: String,
    });
    next();  
};

app.use(express.static('pages'));

// Bad Religion 
app.get('/badreligion', setCookie('Artist', 'Bad Religion'), (request, response) => {
    response.sendFile(path.join(__dirname, 'pages', 'badreligion.html'));
});

// Barney Miller
app.get('/barneymiller', setCookie('TV Show', 'Barney Miller'), (request, response) => {
    response.sendFile(path.join(__dirname, 'pages', 'barneymiller.html'));
});

// Perry Mason
app.get('/perrymason', setCookie('Book Series', 'Perry Mason'), (request, response) => {
    response.sendFile(path.join(__dirname, 'pages', 'perrymason.html'));
});

// Half Life
app.get('/halflife', setCookie('Game Series', 'Half-Life'), (request, response) => {
    response.sendFile(path.join(__dirname, 'pages', 'halflife.html'));
});

// Run Server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});

