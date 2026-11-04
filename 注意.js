console.log(globalThis === global)

//
let buf = Buffer.alloc(10)
console.log(buf)

let buf_1 = Buffer.from([105, 108, 111, 118, 101, 121, 111, 117])
buf_1 = buf_1.toString()
console.log(buf_1)
