let path = require("path")
let relativePath = './form.html'
console.log(relativePath)


let absolutePath = __dirname
let formPath = path.join(__dirname,'form.html')
console.log(formPath)
// console.log(__dirname + '/form.html')
// console.log(__filename)