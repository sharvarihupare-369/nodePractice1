let http = require("http"); 
let url = require("url");

let server = http.createServer((req,res)=>{
    let parsedUrl =  url.parse(req.url)
    let pathname = parsedUrl.pathname;
    // console.log(req.method,req.url,parsedUrl.path);
    if(req.method === "GET" && req.url === "/"){
        res.write('Welcome to home page...')
        res.end()
    }else if(req.method === "GET" && pathname ==="/about"){
        res.setHeader('Content-Type','text/html')
        res.end('<h1>About page</h1>')
    }else if(req.method === "GET" && pathname === "/users"){
        res.end("Get users page")
    }else if(req.method === "POST" && pathname === "/users"){
        res.end("Posted data for first time")
    }else{
        res.writeHead(404,{'Content-type':'text/html'})
        res.end("<h1>Page not found!</h1>")
    }
})

server.listen(3000,'localhost',()=>{
    console.log("Server is listening on port 3000")
})