const http = require('http')

const server = http.createServer((request, response) => {
  // Handle the request and response
  response.statusCode = 404
  // 响应头
  // response.setHeader('Content-Type', 'text/html; charset=utf-8')
  // response.setHeader('test', ['a', 'b', 'c'])

  // 响应体
  response.write('keep hard')
  response.end('response')
})

server.listen(9000, () => {
  console.log('Server is listening on port 9000')
})
