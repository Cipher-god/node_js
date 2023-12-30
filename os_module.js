// OS Module built in module
const os = require('os')

// info about current working user
console.log(os.userInfo())

// method returns the system up-time in seconds
console.log(os.uptime())

const current_os = {
    name:os.type(),
    release: os.release(),
    total_mem: os.totalmem(),
    free_mem: os.freemem()
}

console.log(current_os)