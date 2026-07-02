import dgram from "node:dgram"; //UDP
import { createReadStream } from "node:fs";
import { readFile } from "node:fs/promises";

const socket = dgram.createSocket('udp4');

socket.on("message", (message, remoteAddress) => {
    console.log(message.toString());
    console.log(remoteAddress);
    socket.close();
})

const readStream = createReadStream("E:\\Iss_Barsaat_.mp4", {highWaterMark: 1000})

readStream.on('data', (chunk) => {
    socket.send(chunk, 4000, "10.61.154.69")
})

readStream.on("end", () => {
    socket.send("EOF", 4000, "10.61.154.69")
})