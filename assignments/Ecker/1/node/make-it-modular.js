const mm = require('./mymodule.js')

let dir = process.argv[2]
let ext = process.argv[3]

mm(dir, ext, function (err, array) {
    if (err) {
        return console.error('Error:', err)
    }
    array.forEach(function (file) {
        console.log(file)
    })
})
