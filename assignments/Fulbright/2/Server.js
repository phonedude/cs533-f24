
var http=require('http');
var fs = require('fs');
var url = require('url');

let express = require('express');
let app = express() 
  
var cookieParser = require('cookie-parser');
app.use(cookieParser());



app.get('/', (req, res)=>{
    index = fs.readFileSync(('index.html'), 'utf8');
    res.send(index);
});
app.get('/Loki', (req, res)=>{
    index = fs.readFileSync(('Loki.html'), 'utf8');
    res.cookie("Loki", "A show from disney.");
    res.send(index);
});
app.get('/JeffWilliams', (req, res)=>{
    index = fs.readFileSync(('JeffWilliams.html'), 'utf8');
    res.cookie("Jeff and Casey Williams", "The Creators of Red Like Roses and many other songs.");
    res.send(index);
});
app.get('/Aviators', (req, res)=>{
    index = fs.readFileSync(('Aviators.html'), 'utf8');
    res.cookie("Aviators", "The Creator of Paralyzed and many other songs.")
    res.send(index);
});
app.get('/AllGoodThings', (req, res)=>{
    index = fs.readFileSync(('AllGoodThings.html'), 'utf8');
    res.cookie("All Good Things", "The Creators of Machines and many other songs.");
    res.send(index);
});
app.get('/Cookies', (req, res)=>{
    res.send(req.cookies);
})
app.listen(4000, (err)=>{
    if(err)
        throw err;
    console.log('listening on port 4000');
});