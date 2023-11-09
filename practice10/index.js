const express = require("express")
const app = express()


app.use((req,res,next)=>{
    console.log("Hello from middleware")
    next()
})

app.get("/",(req,res)=>{
    console.log("Home Page")
    res.send("Welcome to home page")
})

app.get("/about",(req,res)=>{
    console.log("About Page")
    res.send("ABOUT PAGE")
})

app.get("/contacts",(req,res)=>{
    console.log("Contacts Page")
    res.send("CONTACTS PAGE")
})

app.get("/data",(req,res)=>{
    // res.setHeader("Content-Type","text/html")
    // res.send("<h1>Gatimand sharu page</h1>")
    console.log("Data Page")
    res.send("Data will be shared")
})

app.listen(5000,()=>{
    console.log("Server is listening on PORT 5000")
})