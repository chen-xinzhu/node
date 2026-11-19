const http = require('http')

const server = http.createServer((request, response) => {
  let { method } = request
  let { pathname } = new URL(request.url, 'http://localhost')
  let url = new URL(request.url, 'http://localhost')
  console.log(url, method, pathname)

  if (pathname === '/search') {
    response.end('Search page')
  } else {
    response.end('login page')
  }
})

server.listen(9000, () => {
  console.log('Server is listening on port 9000')
})
