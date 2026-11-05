const fs = require('fs')

// 查看资源信息 stat status
fs.stat('./座右铭.txt', (err, stats) => {
  if (err) {
    console.error(err)
    return
  }
  console.log('File stats:', stats)
  console.log(stats.isFile())
  console.log(stats.isDirectory())
})
