const http = require('http')

const fs = require('fs')

const path = require('path')

const mimes = {
  html: 'text/html; charset=utf-8',
  css: 'text/css; charset=utf-8',
  js: 'text/javascript; charset=utf-8',
  json: 'application/json; charset=utf-8',
  png: 'image/png',
  jpg: 'image/jpeg',
  ico: 'image/x-icon',
}

const server = http.createServer((request, response) => {
  // Handle the request and response
  // 字符串
  let { pathname } = new URL(request.url, 'http://localhost:9000')

  let filePath = __dirname + pathname

  fs.readFile(filePath, (err, data) => {
    if (err) {
      response.statusCode = 404
      response.end('File not found')
    } else {
      let ext = path.extname(filePath).slice(1)

      let type = mimes[ext] || 'text/plain'
      console.log(ext)
      if (ext === 'html') {
        response.setHeader('Content-Type', type + '; charset=utf-8')
      }
      response.setHeader('Content-Type', type)
      response.end(data)
    }
  })

  // if (pathname === '/') {
  //   let html = fs.readFileSync(__dirname + '/19http练习.html')
  //   response.end(html)
  // }
  // if (pathname.includes('.css')) {
  //   let css = fs.readFileSync(__dirname + '/19.css')
  //   response.end(css)
  // }
  // if (pathname.includes('.js')) {
  //   let js = fs.readFileSync(__dirname + '/19.js')
  //   response.end(js)
  // }
})

server.listen(9000, () => {
  console.log('Server is listening on port 9000')
})
