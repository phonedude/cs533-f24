const http=require('http')

let dataOut=['','','']

function jugglingAsync(callback){
    let callbacks=0
    for(let i=2;i<process.argv.length;i++){
        http.get(process.argv[i], function dataEvents(response){
            
            response.on('data', function(data){
                dataOut[i-2]+=data.toString()
            })
            response.on('close', function(){
                callbacks+=1
                if(callbacks==3){
                    callback()
                }
            })
        })
    }
}
function log(){
    for(let i=0;i<dataOut.length;i++){
        console.log(dataOut[i])
    }
}
jugglingAsync(log)