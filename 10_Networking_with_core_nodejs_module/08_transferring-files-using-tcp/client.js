import { createReadStream, createWriteStream } from "node:fs";
import net from "node:net";

process.stdin.on("data", (input) => {
  const inputStr = input.toString().trim();
  if (inputStr === "send") {
    const readStream = createReadStream("E:\\Iss_Barsaat_.mp4")
    readStream.pipe(socket);
    readStream.on("end", () => {
        console.log("file ended.");
    })
  }
});

const socket = net.createConnection({ host: "10.61.154.69", port: 4000 });

// const writeStream = createWriteStream("C:\\Users\\afnur\\OneDrive\\Desktop\\song.mp4")
const writeStream = createWriteStream("csong.mp4")
socket.pipe(writeStream);

// socket.on("data", (chunk) => {P
//     console.log(chunk.toString());
// })

socket.on("error", () => {
  console.log("Server Lost.");
});

// setTimeout(() => {
//     socket.write("Hello, from client.js")
//     // socket.end()
// }, 3000);
