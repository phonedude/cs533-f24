const http = require('http')
const fs=require('fs')

function message(){
}

const Server = http.createServer(function (req, res){
    let file = fs.createReadStream(process.argv[3])
    file.pipe(res)
})
Server.listen(process.argv[2])