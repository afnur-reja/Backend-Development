import fs from 'fs';

const readStream = fs.createReadStream('new.txt', {highWaterMark: 4}); 

const writeStream = fs.createWriteStream('file.txt'); //create file.txt or if already exists then clears that file.

readStream.on('data', (chunk) => {
    // console.log(chunk)
    writeStream.write(chunk);
})

console.log(writeStream.writableHighWaterMark) //default 16 KB or 16384 byte.

