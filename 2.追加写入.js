const fs = require('fs')

fs.appendFile('./座右铭.txt', '\r\n追加的内容', (err) => {
  if (err) {
    console.log('追加失败')
  } else {
    console.log('追加成功')
  }
})
