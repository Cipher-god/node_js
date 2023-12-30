// path built in module
const path = require('path')

// platform separator according to system we are using
console.log(path.sep)

const filePath = path.join('.\\sample folder','text files','test1.txt')
// console.log(filePath)

const base = path.basename(filePath)
// console.log(base)

const absolute = path.resolve(__dirname,'sample folder','text files','test1.txt')
console.log(absolute)