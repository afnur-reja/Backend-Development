import {readFile, writeFile, appendFile} from "node:fs/promises";

// writeFile("demo.txt", "hello world");

// appendFile("demo.txt", "\nI am learning how to write in a file using node js")

// setInterval(() => {
//    writeFile("timer.txt", new Date().toLocaleTimeString())
// }, 500)

try {
    const fileContent = await readFile("./images.png")
    writeFile("C:\\Users\\afnur\\OneDrive\\Desktop\\image.png", fileContent)
} catch (err) {
    appendFile("error.log", `\n\n${new Date().toLocaleTimeString()}\n${err.message}\n${err.stack}`)
    console.log(`to see error message go to ./error.log`)
}

