const http = require('http')
const bl = require('bl')

const array = []
let count = 0

for (let i = 0; i < 3; i++) {
    http.get(process.argv[2 + i], function (response) {
        response.pipe(bl(function (err, data) {
            if(err) {
                console.error(err)
            }
            array[i] = data.toString()
            count++
            if(count === 3) {
                array.forEach(function (event) {
                    console.log(event)
                })
            }
        }))
    })
}
