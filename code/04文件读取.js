const fs = require('fs')

/**
 * 异步读取
 */
fs.readFile('./座右铭.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('读取文件时出错:', err)
  } else {
    console.log('文件内容:', data)
  }
})
