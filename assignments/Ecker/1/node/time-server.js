const net = require('net')

const server = net.createServer(function (socket){
    function timestamp(){
        const dt = new Date()
        return String(dt.getFullYear()) + '-' +
        String(dt.getMonth() + 1).padStart(2, 0) + '-' +
        String(dt.getDate()).padStart(2,0) + ' ' +
        String(dt.getHours()).padStart(2,0) + ':' +
        String(dt.getMinutes()) + '\n'
    }
    socket.end(timestamp())
})

server.listen(process.argv[2])
