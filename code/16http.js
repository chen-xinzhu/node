const http = require('http')

const server = http.createServer((request, response) => {
  // Handle the request and response
  let url = new URL('http://localhost:9000/search?a=100&b=200')
  console.log(url.searchParams.get('a'))
  console.log(url.searchParams.get('b'))
  response.end('url new')
})

server.listen(9000, () => {
  console.log('Server is listening on port 9000')
})
