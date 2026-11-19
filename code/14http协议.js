const http = require('http')

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain; charset=utf-8')
  res.write('你好\n')
  res.end('Hello, World!')
})

/**
 * 端口
 */
server.listen(3010, () => {
  console.log('Server running on http://localhost:3010')
})
