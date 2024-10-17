const http=require('http')

http.get(process.argv[2], function dataEvents(response){
    response.on('data', function(data){
        console.log(data.toString())
    })
})