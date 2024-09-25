const mymodule = require('./mymodule.js')

function log(err, filteredls){
    if(err!=null)
        console.log(err)
    for(let i=0;i<filteredls.length;i++){
        console.log(filteredls[i])
    }
}
mymodule(process.argv[2],process.argv[3],log)