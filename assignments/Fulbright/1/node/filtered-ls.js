const fs=require('fs')
let filteredls = undefined
function ls(callback){
    fs.readdir(process.argv[2], function fileList(err, list){
        filteredls=list.filter(function matchType(file){
            if(file.indexOf('.')!=-1)
            return file.substring(file.indexOf('.')+1, file.length)===process.argv[3]
        })
        callback()
    })
}
function log(){
    for(let i=0;i<filteredls.length;i++){
        console.log(filteredls[i])
    }
}
ls(log)