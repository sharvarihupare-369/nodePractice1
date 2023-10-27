let http = require("http"); 
let url = require("url");
let fs = require("fs")


let server = http.createServer((req,res)=>{
   
    if(req.method === "GET" && req.url === "/"){
        res.write('Welcome to home page...')
        res.end()
    }else if(req.method === "GET" && req.url === "/about"){
        res.setHeader('Content-type','text/html')
        // fs.readFile('./about.html',(err,data)=>{
        //     if(err) console.log(err)
        //     res.end(data)
        //     // console.log(data)
        // })

        fs.createReadStream('./about.html').pipe(res);

    }
})

server.listen(3000,'localhost',()=>{
    console.log("Server is listening on port 3000")
})