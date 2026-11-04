const fs = require('fs')

const rs = fs.createReadStream('./z流式写入示例.txt', 'utf-8')

rs.on('data', (chunk) => {
  console.log('读取到数据:\r\n', chunk)
})

rs.on('end', () => {
  console.log('读取完成')
})

rs.on('error', (err) => {
  console.error('读取文件时出错:', err)
})
