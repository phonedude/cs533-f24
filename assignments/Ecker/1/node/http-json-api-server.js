const http = require('http')

const server = http.createServer(function (request, response) {
    const url = new URL(request.url, 'http://example.com')
    const time = new Date(url.searchParams.get('iso'))
    let served

    if(url.pathname === '/api/parsetime') {
        served = {
            hour: time.getHours(),
            minute: time.getMinutes(),
            second: time.getSeconds()
        }
    }
    else if (url.pathname == '/api/unixtime') {
        served = { unixtime: time.getTime() }
    }

    if (served) {
        response.writeHead(200, { 'Content-Type': 'application/json' })
        response.end(JSON.stringify(served))
    }
    else {
        response.writeHead(404)
        response.end()
    }
})

server.listen(Number(process.argv[2]))
