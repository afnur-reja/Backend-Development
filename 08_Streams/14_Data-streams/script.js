import { createWriteStream } from "node:fs";

const writable = createWriteStream('output.txt')

process.stdin.pipe(writable)

console.log("Hello from Child App");