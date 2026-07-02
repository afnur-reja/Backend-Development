import fs from "fs/promises";
import { text } from "stream/consumers";

const fileHandle = await fs.open('text.txt', 'w+');

// Reading a file
const {buffer, bytesRead} = await fileHandle.read()

console.log(buffer.toString());
console.log(bytesRead);

// Writing into a file
const {buffer: writtenBuffer, bytesWritten} = await fileHandle.write("hello")

console.log(writtenBuffer);
console.log(bytesWritten);