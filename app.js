const _ld = require('lodash')

const items = [1,[35,65,[67,84,23]]]
const new_items = _ld.flattenDeep(items)

console.log(new_items)