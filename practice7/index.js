const http = require("http");
const fs = require("fs")
const server = http.createServer((req,res)=>{

    if(req.url === "/" && req.method === "GET"){
        res.end("This is home page")
    }else if(req.url === "/data" && req.method === "GET"){
        // res.end("data will be sent")
        // fs.readFile("./data.json","utf-8",(err,data)=>{
        //     if(err) console.log(err)
        //     else res.end(data)
        // })
        fs.createReadStream("./data.json").pipe(res)
    }else if(req.url == "/blog" && req.method==="GET"){
        res.setHeader("Content-type","text/html")
        res.write("<h1>Blogs</h1>")
        res.end()
    }else if(req.url == "/todos" && req.method == "GET"){
        fs.readFile("./todo.json","utf-8",(err,data)=>{
            if(err) res.end(err)
            else res.end(data)
        })
    }else if(req.url === "/todos" && req.method === "POST"){
        // let data = fs.createReadStream("./todo.json","utf-8")
        // let dataStream = data.pipe(res)
        let storeData = "";
         
        req.on('data',(chunk)=>{
            storeData += chunk;
        })
       
        req.on('end',()=>{
            // console.log(storeData)
            try {
                let parsedTodo = JSON.parse(storeData)
                let todos = []
                fs.readFile("./todo.json","utf-8",(err,data)=>{
                    if(err) res.end(err)
                    else {
                     todos = JSON.parse(data);
                     todos.push(parsedTodo);  
                    }
                    // fs.writeFile("./todo.json",JSON.stringify(todos),(err)=>{
                    //     if(err) res.end(err)
                    //     else res.end("Data added")
                    // })
                    fs.watchFile('./todo.json',JSON.stringify(todos),(err)=>{
                        if(err) res.end(err)
                        else res.end("Data Added")
                    })
                })

            } catch (error) {
                res.end(error)
            }
        })
        res.end("Data added")
    }
    else{
        // res.end("Invalid endpoint")
        res.end(http.STATUS_CODES["404"])
    }

})

server.listen(5000,()=>{
    console.log("Server is listening on port 5000")
})
