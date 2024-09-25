const fs=require('fs')
let contents= undefined
function file(callback){
fs.readFile(process.argv[2],'utf8', function getContents(err,fileContents){
    let str = fileContents
    contents= str.split('\n')
    callback()
})}
function log(){
console.log(contents.length-1)
}
file(log)