const http=require('http')
let dataOut=['']
let i =0;
http.get(process.argv[2], function dataEvents(response){
    response.on('data', function(data){
        dataOut[i]+=data.toString()
    })
    response.on('end', function(){
        dataOut.append
        i++
    })
    response.on('close', function(){
        let total=0
        for(let j=0;j<dataOut.length;j++){
            total+=dataOut[j].length
        }
        console.log(total)
        for(let j=0;j<dataOut.length;j++){
            console.log(dataOut[j])
        }
    })
})
