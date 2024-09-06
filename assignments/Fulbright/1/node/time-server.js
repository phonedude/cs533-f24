const net = require('net')

function getDateTime(){
    var date =new Date()
    let DateString=''
    DateString=date.getFullYear().toString()+'-'
    if(date.getMonth()+1<10){
        DateString+='0'
    }
    DateString+=(date.getMonth()+1).toString()+'-'
    if(date.getDate()<10){
        DateString+='0'
    }
    DateString+=date.getDate().toString()+' '
    if(date.getHours()+1<10){
        DateString+='0'
    }
    DateString+=date.getHours().toString()+':'
    if(date.getMinutes()<10){
        DateString+='0'
    }
    DateString+=date.getMinutes().toString()+'\n'
    return DateString
}
const server = net.createServer(function (socket) {
    socket.end(getDateTime())    
})
server.listen(process.argv[2])