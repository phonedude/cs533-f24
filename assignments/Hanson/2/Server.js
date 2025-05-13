
const http = require('http');
const fs = require('fs');
const url = require('url');


const express = require('express');
const app = express();
const path = require('path');
const port = 4000;


var cookieParser = require('cookie-parser');
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/*const favicon = require('serve-favicon');
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));*/


app.get('/', (req, res) => {
    index = fs.readFileSync(('index.html'), 'utf8');
    res.send(index);
});


/*app.get('/public/favicon.ico', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'favicon.ico'));
});*/


app.get('/brianmcknight.html', (req, res) => {
    res.cookie('favorite_artist', 'BrianMcKnight');
    console.log("Cookie SET");
    index = fs.readFileSync(('BrianMcKnight.html'), 'utf8');
    res.send(index);
});

app.get('/sonicthehedgehog.html', (req, res) => {
    res.cookie("favorite_character", "The blue bur who always strives to save his friends.");
    console.log("Cookie SET");
    index = fs.readFileSync(('SonicTheHedgehog.html'), 'utf8');
    res.send(index);
});

app.get('/narutouzumaki.html', (req, res) => {
    res.cookie("favorite_show", "The prophecy child who despite his setbacks remained true to himself & his goals.")
    console.log("Cookie SET");
    index = fs.readFileSync(('NarutoUzumaki.html'), 'utf8');
    res.send(index);
});

app.get('/marvelavengers.html', (req, res) => {
    res.cookie("favorite_movie", "Jarvis made an update to this cookie.");
    console.log("Cookie SET");
    index = fs.readFileSync(('MarvelAvengers.html'), 'utf8');
    res.send(index);
});

app.get('/Cookies', (req, res) => {
    res.send(req.cookies);
})

app.listen(4000, (err) => {
    if(err)
        throw err;
    console.log('listening on port 4000');
});