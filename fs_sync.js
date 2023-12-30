// file system (fs) built in module for working with files
// Sync file
const { readFileSync, writeFileSync } = require('fs')

const first  = readFileSync('test2.txt','utf8')

// console.log(first)

// writeFileSync(
//     './hello.txt',
//     `Hola Amigos spicy move \n ${first}`
// )

// flag: 'a' is used for appending without it it'll overwrite
writeFileSync(
    './hello.txt',
    `\n\nHola somberes spicy move \n${first}`,
    {flag : 'a'}
)


// const file_system = require('fs')

// file_system.readFile('test2.txt', encodeURI='utf-8', (err, data) => {
//     console.log(data)
// })