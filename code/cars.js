const express = require('express')
const { createReadStream } = require('fs')

const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({extended: false}))

app.get('/', (req, res) => {
    createReadStream('cool-cars-01.html').pipe(res)
})

app.post('/login', (req, res) => {
  console.log(req.body)
})


app.listen(5000)
