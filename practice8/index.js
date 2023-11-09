const {writeToFile,readFromFile,cowSay} = require("./main")

let keyword = process.argv[2]
let arg = process.argv[3];

if(keyword === "write"){
    writeToFile(arg)
}else if(keyword === "read"){
    readFromFile(arg)
}else if(keyword === "cow"){
    cowSay(arg)
}