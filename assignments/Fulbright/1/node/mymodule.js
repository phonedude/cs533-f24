const fs=require('fs')
let filteredls = undefined
let path, extention
module.exports = function (newpath, newextention, callback){
path=newpath
extention=newextention
ls(callback)
}
function ls(callback){
    fs.readdir(path, function fileList(err, list){
        if(err){
            return callback(err)
        }
        filteredls=list.filter(function matchType(file){
            if(file.indexOf('.')!=-1)
            return file.substring(file.indexOf('.')+1, file.length)===extention
        })
        callback(null, filteredls)
    })
}
