const http = require('http')
const Request = require('./request-constructor')
const squadGenerator = require('./squad-generator')

const server = http.createServer(function (request, response) {
    const validUrl = /^(\/person|\/player){1}(\/amount=[\d]{1,3}){1}(\/region=[A-z]{5,20})?(\/budget=[\d]{1,10})?$/
    if (validUrl.test(request.url)) {
        response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
        response.end(JSON.stringify(squadGenerator(new Request(request.url.split('/')))))
    } else {
        response.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' })
        response.end('fail')
    }
})
server.listen(3003, '127.0.0.1')
