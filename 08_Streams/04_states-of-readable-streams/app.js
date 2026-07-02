import fs, { read } from 'fs';


const readStream = fs.createReadStream('chars.txt', {highWaterMark: 4});

// console.log(readStream.readableFlowing) //null : means initial.
// console.log(readStream.readableEnded) //false : not ended.
// console.log(readStream.isPaused()) //false : not paused.


let readCount = 0;

readStream.on("data", (chunk) => {
    // readCount++;
    // if(readCount === 1) {
    //     fs.writeFileSync('new.txt', chunk);
    // }
    
    // console.log(readStream.bytesRead);
    // console.log(readStream.readableHighWaterMark)

    let { bytesRead, readableHighWaterMark} = readStream;

    if( bytesRead === readableHighWaterMark) {
        fs.writeFileSync('new.txt', chunk);
    } else {
        fs.appendFileSync('new.txt', chunk);
    }
    readStream.pause()
    // console.log(readStream.isPaused()) //true
    setTimeout(() => {
        readStream.resume()
    }, 200);
})


// readStream.on('end', () => {
//     console.log(readStream.readableFlowing) //true.
//     console.log(readStream.readableEnded) //true.
//     console.log(readStream.isPaused()) //false 
// })

readStream.on('pause', () => {
    console.log("Stream Paused.")
})

readStream.on('resume', () => {
    console.log("Stream resumed.")
})