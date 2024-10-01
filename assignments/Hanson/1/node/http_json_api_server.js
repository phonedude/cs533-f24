const http = require('http')

const server = http.createServer(function (request, response) {
    const url = new URL(request.url, 'http://example.com')
    const time = new Date(url.searchParams.get('iso'))
    let result

    if(url.pathname === '/api/parsetime') {
        result = {
            hour: time.getHours(),
            minute: time.getMinutes(),
            second: time.getSeconds()
        }
    }
    else if (url.pathname == '/api/unixtime') {
        result = { unixtime: time.getTime() }
    }

    if (result) {
        response.writeHead(200, { 'Content-Type': 'application/json' })
        response.end(JSON.stringify(result))
    }
    else {
        response.writeHead(404)
        response.end()
    }
})

server.listen(Number(process.argv[2]))