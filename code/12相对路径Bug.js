const fs = require('fs')

console.log(__dirname)

fs.writeFileSync(__dirname + 'index.html', 'Hello, World!')
