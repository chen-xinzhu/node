const http = require('http')

const fs = require('fs')

const server = http.createServer((request, response) => {
  // Handle the request and response
  // 字符串
  let { pathname } = new URL(request.url, 'http://localhost:9000')

  if (pathname === '/') {
    let html = fs.readFileSync(__dirname + '/19http练习.html')
    response.end(html)
  }
  if (pathname.includes('.css')) {
    let css = fs.readFileSync(__dirname + '/19http练习.css')
    response.end(css)
  }
  if (pathname.includes('.js')) {
    let js = fs.readFileSync(__dirname + '/19http练习.js')
    response.end(js)
  }
})

server.listen(9000, () => {
  console.log('Server is listening on port 9000')
})
