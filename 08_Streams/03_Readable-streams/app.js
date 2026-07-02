import fs from 'fs';

// import fs from 'fs/promises';
// console.time()
// const buffContent = await fs.readFile('chars.txt');
// await fs.writeFile('new.txt', buffContent);
// console.timeEnd()

// USING STREAMS

const readStreams = fs.createReadStream('chars.txt', {highWaterMark : 4}); // highWaterMark takes byte
console.time()
readStreams.on('data', (bufferChunk) => {
    // console.log(bufferChunk)
    // console.log(bufferChunk.byteLength)
    fs.appendFileSync('new.txt', bufferChunk)
})

readStreams.on('end', () => {
    console.timeEnd()
})


// Exercise : show the progress while writing the chunks in the file.