const fs = require('fs')

// fs.unlink('./座右铭-副本.txt', (err) => {
//   if (err) {
//     console.error(err)
//     return
//   }
//   console.log('File deleted successfully')
// })

fs.rm('./newFileName.txt', (err) => {
  if (err) {
    console.error(err)
    return
  }
  console.log('File removed successfully')
})
