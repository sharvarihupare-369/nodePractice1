let path = require("path")
let os = require("os")
let fs = require("fs")
let url = require("url")
// let filePath = path.join(__dirname,'file.md')
// console.log(filePath)

// let freeMemory = os.freemem()
// console.log(freeMemory)
 
// let cpus = os.cpus().length  //os.cpus gives array of all the cpus so we can extract length
// console.log(cpus)

//Asyncronous
// fs.readFile("file.md",(err,data)=>{
    // if(err){
    //     console.log(err)
    // }else{
    //     console.log("async",data.toString())
    // }
    // if(err) console.log(err)
    // else console.log(data.toString())
// })

//syncronous
// let data = fs.readFileSync("file.md","utf-8")
// console.log("sync",data)

//Asyncronous

// fs.writeFile("file.md","Nodejs is really great platform\n",(err)=>{
//     console.log(err)
// })

// let writeDataSync = fs.writeFileSync("file.md","welcome to node.js again")
// console.log("sync",writeDataSync)

// fs.appendFile("file.md"," Here is nodejs appendFile \n",(err)=>{
//     console.log(err)
// })

// let appendFileSyncData = fs.appendFileSync("file.md","Here is nodejs appendFile by Syncway \n")
// console.log(appendFileSyncData)

// let isExists = fs.existsSync("file.md")
// console.log(isExists)

// fs.unlinkSync("read.md")

// let pathName = path.dirname('file.md')
// let pathName = path.dirname('../read.md')
// console.log(pathName)

// let joinFilePath = path.join("file.md","read.md")
// console.log(joinFilePath)

let urlString = "https://github.com/sharvarihupare-369/nodePractice1"
let parsedUrl = url.parse(urlString)
console.log(parsedUrl)