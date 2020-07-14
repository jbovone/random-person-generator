const http = require('http')
const fs = require('fs')
const Request = require('./api/entities/translator')
const squadGenerator = require('./api/main-controler')

const server = http.createServer(function (request, response) {
    const validUrl = /^(\/person|\/player){1}(\/amount=[\d]{1,3}){1}(\/region=[A-z]{5,20})?(\/budget=[\d]{1,10})?$/
    if (validUrl.test(request.url) && typeof request.url === 'String') {
        response.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' })
        fs.createReadStream(JSON.stringify(squadGenerator(new Request(request.url.split('/'))))).pipe(response)
    } else {
        response.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' })
        response.end(
            fs.createReadStream(__dirname + '/public/404.html'))
    }
})
server.listen(3003, '127.0.0.1')
