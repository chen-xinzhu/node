const fs = require('fs')

/**
 * 创建/递归创建 make
 */
fs.mkdir('./新文件夹/page', { recursive: true }, (err) => {
  if (err) {
    console.error(err)
    return
  }
  console.log('Directory created successfully')
})

/**
 * 读取文件夹
 */
fs.readdir('./新文件夹', (err, files) => {
  if (err) {
    console.error(err)
    return
  }
  console.log('Files in directory:', files)
})

/**
 * 删除文件夹 remove  rm
 */
fs.rm('./新文件夹/page', { recursive: true }, (err) => {
  if (err) {
    console.error(err)
    return
  }
  console.log('Directory removed successfully')
})
