import dgram from "node:dgram"; //UDP
import { createWriteStream } from "node:fs";
import { writeFile } from "node:fs/promises";

const socket = dgram.createSocket("udp4");

const writeStream = createWriteStream("song.mp4");
socket.on("message", async (message, remoteAddress) => {
  if (message.toString() === "EOF") {
    socket.send(
      "File Uploaded Succesfully on the server.",
      remoteAddress.port,
      remoteAddress.address,
    );
  } else {
    writeStream.write(message);
  }
});

socket.bind({ port: 4000 }, () => {
  const address = socket.address();
  console.log(`Listening on port ${address.port}`);
});
