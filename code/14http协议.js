const http = require('http')

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('Hello, World!')
})

/**
 * 端口
 */
server.listen(3010, () => {
  console.log('Server running on http://localhost:3010')
})
