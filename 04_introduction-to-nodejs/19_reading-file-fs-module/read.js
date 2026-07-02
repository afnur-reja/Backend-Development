// import fs from "node:fs"
import fs from "node:fs/promises"

//1st method synchronously (not recomended)
// const bufferContent = fs.readFileSync("./index.html");
// const content = bufferContent.toString()
// console.log(content)

//2nd method: you can use (asynchronous)
fs.readFile("./index.html", (err, data) => {
    const readableData = data.toString();
    console.log(readableData)
})

//3rd method: reconmended (asynchronous => from fs/promises)
const data = await fs.readFile("./index.html")
const readableData = data.toString()
console.log(readableData)


console.log("End")