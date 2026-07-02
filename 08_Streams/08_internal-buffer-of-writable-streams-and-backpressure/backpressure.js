import fs from 'fs';

const readStream = fs.createReadStream('new.txt', {highWaterMark: 4}); 

const writeStream = fs.createWriteStream('file.txt', {highWaterMark: 3}); //create file.txt or if already exists then clears that file.

readStream.on('data', (chunk) => {
    // console.log(chunk)
    // console.log(writeStream.writableLength)
    let isEmpty = writeStream.write(chunk);
    if(!isEmpty) {
        readStream.pause()
    }
})

writeStream.on('drain', () => {
    readStream.resume()
})

// console.log(writeStream.writableHighWaterMark) //default 16 KB or 16384 byte.

