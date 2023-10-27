let http = require("http")


function handleRequest(req,res){
    console.log(req.method)
    console.log(req.url)
    console.log(req.headers)
    res.end("Welcome!")
}

let server = http.createServer(handleRequest)



server.listen(4000,'localhost',()=>{
    console.log("Server is listening on port 5000")
})