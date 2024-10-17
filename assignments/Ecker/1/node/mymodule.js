const fs = require('fs')
const path = require('path')

module.exports = function(dir, ext, callback) {
    let array = []
    fs.readdir(dir, function (err, data) {
        if(err) {
            return callback(err)
        }
        data.forEach(function(file) {
            if(path.extname(file) === '.' + ext) {
                array.push(file)
            }
        })
        callback(null, array)
    })
}
