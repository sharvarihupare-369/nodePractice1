//echo server ==> whatever client sends the data same data i am able to send back to client.
//whatever data send should able to receive same data in response.
let http = require("http"); 
let qs = require("querystring")

let server = http.createServer((req,res)=>{
    let dataFormat = req.headers['content-type'] //gives type of content which receiving from request
    let store = "";

    req.on('data',(chunk)=>{
        store = store + chunk;
    })

    req.on('end',()=>{
       if(dataFormat === "application/json"){
          let parsedData = JSON.parse(store);  //parsedData is in object format
          console.log(parsedData)
          // res.end(parsedData) // here we are sending response that is object we cannot send response as an object 
          //Anything if i have to send in response over http protocol either it should be stringified or buffer format;
          res.end(store);
       }

       if(dataFormat === "application/x-www-form-urlencoded"){
        //for parsing form data we need querystring module 
         let parsedFormData = qs.parse(store);
        //  console.log(parsedFormData);
         res.end(JSON.stringify(parsedFormData));
       }
    });
   
})

server.listen(3000,()=>{
    console.log("Server is listening on port 3000")
})