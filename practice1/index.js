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

// let urlString = "https://github.com/sharvarihupare-369/nodePractice1"
// let parsedUrl = url.parse(urlString)
// console.log(parsedUrl)

const parsedUrl = url.parse(
  "https://blog.altcampus.io:80/students/register?name=altcampus&gender=male",
  true
);
// console.log(parsedUrl);
console.log(parsedUrl.pathname);
console.log(parsedUrl.query);
console.log(parsedUrl.host);
console.log(parsedUrl.protocol);

let cpuss = os.cpus()
// console.log(cpuss)
console.log(cpuss.length)
let freemenCheck = os.freemem()
console.log(freemenCheck)
let uptime = os.uptime()
console.log(uptime)
let version = os.version()
console.log(version)


let buff1 = Buffer.alloc(12)
console.log(buff1)
// console.log(buff1.toString())

buff1.write("Welcome to node.js")
// console.log(buff1)
console.log(buff1.toString())