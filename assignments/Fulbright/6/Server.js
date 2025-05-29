
var http=require('http');
var fs = require('fs');
var url = require('url');
var md5 = require('md5')
let express = require('express');
let app = express() 


function hereBefore(fingerprint){
    var Data = fs.readFileSync("FingerPrints.txt").toString('ascii')
    var line = Data.split('\n')
    for(var i=0;i<line.length;i++){
        if(line[i]==fingerprint){
            return true;
        }
    }
    return false;
}

app.get('/', (req, res)=>{
    var index;
    var headers = "";
    headers += req.get('User-Agent');
    headers += req.get('Accept-Language');
    headers += req.get('Accept-Encoding');
    headers += req.get('Host');
    var fingerprint=md5(headers)
    console.log(headers)
    console.log(fingerprint)
    if(hereBefore(fingerprint)){
        console.log("This broswer has been here before")
    }
    else{
        fs.appendFile("FingerPrints.txt", fingerprint+"\n", function (err){
            if(err) throw err;
        })
        console.log("This broswer has not been here before")
    }
    if(fingerprint=="b38e26f0dddd06083ccac2f01ee2aa1c"){
        index = fs.readFileSync(('AllGoodThings.html'), 'utf8');        
    }
    else if(fingerprint=="f49e2487357cf06d657d14100b0cdfaa"){
        index = fs.readFileSync(('Aviators.html'), 'utf8');        
    }
    else if(fingerprint=="bdee1468f79795fdf743a77b73a0ff54"){
        index = fs.readFileSync(('JeffWilliams.html'), 'utf8');        
    }
    else if(fingerprint=="59f000f0f74fae7b8186f0f010c8e4e9"){
        index = fs.readFileSync(('Loki.html'), 'utf8');        
    }
    else{
        index = fs.readFileSync(('index.html'), 'utf8');        
    }
    res.send(index);
});
app.listen(4000, (err)=>{
    if(err)
        throw err;
    console.log('listening on port 4000');
});