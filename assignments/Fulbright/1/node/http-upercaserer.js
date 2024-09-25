const http = require('http')
const map = require('through2-map')


const Server = http.createServer(function (req, res){
    req.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase()
        })).pipe(res)
    })
Server.listen(process.argv[2])