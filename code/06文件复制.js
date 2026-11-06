const fs = require('fs')
const process = require('process')

// let data = fs.readFileSync('./座右铭.txt', 'utf8')
// fs.writeFileSync('./座右铭-副本.txt', data)

const rs = fs.createReadStream('./z流式写入示例.txt', 'utf-8')
const ws = fs.createWriteStream('./z流式写入示例-副本.txt', 'utf-8')

rs.on('data', (chunk) => {
  ws.write(chunk)
})

rs.on('end', () => {
  ws.end()
  console.log('流式复制完成')
  console.log(process.memoryUsage())
})

// rs.pipe(ws)
