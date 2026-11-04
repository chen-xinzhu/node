const fs = require('fs')

// fs.rename('./座右铭.txt', 'newFileName.txt', (err) => {
//   if (err) {
//     console.error('Error renaming file:', err)
//   } else {
//     console.log('File renamed successfully')
//   }
// })
/**
 * 移动
 */
fs.rename('newFileName.txt', './newDirectory/newFileName.txt', (err) => {
  if (err) {
    console.error('Error moving file:', err)
  } else {
    console.log('File moved successfully')
  }
})
