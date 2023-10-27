let http = require("http"); 

let server = http.createServer((req,res)=>{
    let dataFormat = req.headers['content-type'] //gives type of content which receiving from request
    let store = "";

    req.on('data',(chunk)=>{
        store = store + chunk;
    })

    req.on('end',()=>{
        console.log(store,dataFormat);
    });
   
})

server.listen(3000,()=>{
    console.log("Server is listening on port 3000")
})