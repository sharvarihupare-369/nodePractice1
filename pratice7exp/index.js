const express = require("express")
const fs = require("fs")
const app = express()

app.use(express.json())

app.get("/",(req,res)=>{
  res.send("Welcome to home page")
})

app.get("/data",(req,res)=>{
  const dataStream = fs.createReadStream("./data.json","utf-8").pipe(res)
})

app.get("/info",(req,res)=>{
  res.send("Info has been sent")
})

app.post("/adddata",(req,res)=>{
  console.log(req.body)
  res.send("Data has been sent")
})

app.get("/students",(req,res)=>{
  let data =  fs.readFileSync("./data.json","utf-8")
  const parsedData = JSON.parse(data)
  // console.log(parsedData.students)
  // res.send(JSON.stringify(parsedData.students))
  res.send(parsedData.students)

})

app.post("/addstudent",(req,res)=>{
  // Get complete data 
  let data =  fs.readFileSync("./data.json","utf-8")

  //Parse the data 
  let parsedData = JSON.parse(data)
  
  // Add the data in students
   parsedData.students.push(req.body)

   fs.writeFileSync("./data.json",JSON.stringify(parsedData))

   res.send("data added")

  
})

app.delete("/deletestudent/:name",(req,res)=>{
  let name = req.params.name
  let data = fs.readFileSync("./data.json","utf-8")
  let parsedData = JSON.parse(data)
  const newStudentData = parsedData.students.filter(el=> el.name != name)
  // console.log(newStudentData)
  parsedData.students = newStudentData
  fs.writeFileSync("./data.json",JSON.stringify(parsedData));
  res.end("Student Deleted")
})

app.listen(5000,()=>{
  console.log("Server is running on port 5000")
})
