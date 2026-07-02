import fs from "fs/promises";

const fileHandle = await fs.open("text.txt", "w+")

// Readable Stream
const readStream = fileHandle.createReadStream({
    highWaterMark: 2
});

readStream.setEncoding("utf-8")
readStream.on('data', (chunk) => console.log(chunk))


// Writable Stream
const writeStream = fileHandle.createWriteStream();
writeStream.write("Hello World!")



// Reading and Writing a file
// console.time()
// const readFileHandle = await fs.open("E:\\Movies\\Interstellar 2014 Dual Audio Hindi 720p BluRay.mkv")
// const writeFileHandle = await fs.open("intersteller.mp4", "w")

// const readStream = readFileHandle.createReadStream()
// const writeStream = writeFileHandle.createWriteStream()

// readStream.pipe(writeStream).on('finish', () => {
//     console.log("coppied")
//     console.timeEnd()
// })
