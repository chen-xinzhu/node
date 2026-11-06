const fs = require('fs')

/**
 * 流式写入, 减少文件的打开关闭
 */
const ws = fs.createWriteStream('./z流式写入示例.txt')

ws.write('流式写入的内容1\r\n')
ws.write('流式写入的内容2\r\n')
ws.write('流式写入的内容3\r\n')
ws.write('流式写入的内容4\r\n')
ws.write('流式写入的内容5\r\n')

//关闭
ws.close()
