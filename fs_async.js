// file system (fs) built in module for working with files
// Async file
const { readFile, writeFile } = require('fs')

readFile('hola.txt', 'utf8', (err, result) => {
    if(err){
        console.log(err)
        return null
    }
    const first = result
    readFile('hello.txt','utf8',(err,result)=>{
        if(err){
            console.log(err)
            return null
        }
        const second = result
        writeFile('result.txt',
            `Resultant file from first and second:\n${first},\n${second}`,
            (err,result) => {
                if(err){
                    console.log(err)
                    return
                }
                console.log(result)
            }
        )
    })
})
