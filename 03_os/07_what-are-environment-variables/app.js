// const {exec} = requrie("child_process")
// exec('command')

// const environtVariables = process.env;
// console.log(environtVariables)

const fs = require("fs");

const fileData = fs.readFileSync("./07_what-are-environment-variables/.env").toString();

fileData.split("\n").forEach( variable => {
    const [varName, varValue] = variable.split("=")
    process.env[varName] = varValue
});

setInterval(()=> {
    const a = process.env;
    console.log("running")
}, 2000);

// console.log(fileData)