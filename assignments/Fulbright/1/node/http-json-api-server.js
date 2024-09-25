const http = require('http')

const Server = http.createServer(function (req, res){
    const url = new URL('http://example.com'+req.url)
    if(url.pathname=='/api/parsetime'){
        var search =url.search.toString()
        var iso = search.substring(search.indexOf('=')+1)
        var date = new Date(iso)
        const Jfile1 = JSON.stringify({hour: date.getHours(), minute: date.getMinutes(), second: date.getSeconds()})
        res.write(Jfile1)
        res.write('\n')
        var unix = date.getTime()
        const Jfile2 = JSON.stringify({unixtime: unix})
        res.write(Jfile2)
    }
    res.end()
})
Server.listen(process.argv[2])