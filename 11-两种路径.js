const fs = require('fs')

//相对路径
fs.writeFile('./index.html', 'Hello, World!', (err) => {
  if (err) {
    console.error(err)
    return
  }
  console.log('File written successfully')
})
fs.writeFile('../index.html', 'Hello, World!', (err) => {
  if (err) {
    console.error(err)
    return
  }
  console.log('File written successfully')
})
