const fs = require('fs')
const path = require('path')

dir = process.argv[2]
ext = '.' + process.argv[3]

fs.readdir(dir, function callback(err, data) {
    if(err) {
        return console.log(err)
    }
    data.forEach(function(file) {
        if(path.extname(file) === ext) {
            console.log(file)
        }
    })
})
