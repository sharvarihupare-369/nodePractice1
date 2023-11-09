const http = require("http")
const fs = require("fs")

const server = http.createServer((req,res)=>{
    if(req.url == "/"){
       res.end("welcome to home route")
    }else if(req.url === "/users"){
       let data = fs.readFileSync("./users.json","utf-8")
       res.end(data)
    }else if(req.method == "POST" && req.url == "/data"){
          let str = ""
          req.on("data",(chunk)=>{
            str  += chunk
          })

          req.on("end",()=>{
            console.log(str)
        })
        res.end("Data added")
    }else if (req.url == "/data" &&  req.method == "GET"){
        let dataStream = fs.createReadStream("./users.json","utf-8")
        dataStream.pipe(res)
    }
    else{
        // res.end("Invalid endpoint")
        res.end(http.STATUS_CODES["404"])
    }
})

server.listen(5000,()=>{
    console.log("Server is listening on port 5000")
})