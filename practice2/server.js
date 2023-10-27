let http = require("http")

let server = http.createServer((req,res)=>{
     
    res.statusCode = 201;
    res.setHeader('Content-Type','text/html')
    res.end("<h1>Welcome</h1>")
})

server.listen(4444,()=>{
    console.log("Server listening on port 4444")
})