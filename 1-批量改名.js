const { log } = require('console')
const fs = require('fs')

const files = fs.readdirSync('./code')

files.forEach((file) => {
  let data = file.split('.')
  let [number, name] = data

  if (name !== 'js') {
    name = 'js'
    fs.renameSync('./code/' + file, './code/' + number + '.' + name)
  }
})
