const fs = require('fs')

/**
 * fs   file system
 * 文件类型, 内容, flag, 回调函数
 */

fs.writeFile(
  './座右铭.txt',
  'control, thinking, save time',
  { flag: 'a' },
  (err) => {
    if (err) {
      console.log('写入失败')
      return
    } else {
      console.log('写入成功')
    }
  }
)

console.log(2)
