const fs = require("fs")
const dns = require("dns")
let cowsay = require("cowsay")

const writeToFile = (website) => {
    dns.lookup(website,(err,address,family)=>{
        if(err) console.log(err)
        else{
            fs.appendFileSync("./data.txt",`URL: ${website} | Address: ${address} | IPv${family}\n`)
        }
    })
}

const readFromFile = (filename) => {
    fs.readFile(filename,"utf-8",(err,data)=>{
       if(err) console.log(err)
       else{
         console.log(data)
        }
    })
}

const cowSay = (filename) => {
    let data = fs.readFileSync(filename,"utf-8");
    console.log(cowsay.think({
        text : data
    }))
}

module.exports = {writeToFile,readFromFile,cowSay}