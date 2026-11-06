const fs = require('fs')
const path = require('path')

/**
 * resolve拼接
 * 拼接 ./  空 是相同的
 * /是绝对路径
 *
 */
console.log(path.resolve(__dirname, 'index.html'))
console.log(path.sep)
console.log(__filename)
console.log(path.parse(__filename))
/**
 * .basename
 * .dirname
 * .extname
 */
console.log(path.basename(__filename))
console.log(path.dirname(__filename))
console.log(path.extname(__filename))
