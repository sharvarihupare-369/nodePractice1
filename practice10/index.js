const express = require("express")
const app = express()


app.get("/",(req,res)=>{
    res.send("Welcome to home page")
})

app.get("/data",(req,res)=>{
    res.setHeader("Content-Type","text/html")
    res.send("<h1>Gatimand sharu page</h1>")
})

app.listen(5000,()=>{
    console.log("Server is listening on PORT 5000")
})