const http = require('http')  // request response

const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.end('Welcome to our store !')
    }
    if(req.url === '/about'){
        res.end('Welcome to our About page')
    }
    res.end(`
    <h2> Page doesn't exist Error 404 </h2>
    <a href='/'>Go to Home</a>
    `)
})

server.listen(5000)