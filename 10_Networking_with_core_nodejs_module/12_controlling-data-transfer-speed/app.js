import { createReadStream } from "node:fs";
import { open } from "node:fs/promises";
import net from "node:net";

const server = net.createServer(async (socket) => {
  const fileHandle = await open("D:\\downloads\\Oneshots\\ReactJS Full Course.mp4");
  const { size } = await fileHandle.stat();
  const readStream = fileHandle.createReadStream();
  socket.write("HTTP/1.1 200 OKAY\n");
  socket.write("Content-Type: video/mp4\n");
  // socket.write("Content-Type: text/txt; charset=utf-8\n");
  socket.write(`Content-Length: ${size}\n`);
  socket.write("Content-Disposition: attachment; filename=reactjs.mp4");
  socket.write("\n\n");

//   readStream.on("data", (chunk) => {
//      socket.write(chunk)
//      readStream.pause();
//      setTimeout(() => {
//         readStream.resume()
//      }, 100);
//   })

  readStream.pipe(socket);
  readStream.on("end", () => {
    console.log("File ended");
  });

  readStream.on("pause", () => {
    console.log("Paused by browser.");
  })

  readStream.on("resume", () => {
    console.log("Resumed by browser.");
  })

  socket.on("data", (chunk) => {
    console.log(chunk.toString());
  });

  socket.on("close", () => {
    console.log(socket.remoteAddress, ": Client disconnected");
  });

  socket.on("error", () => {
    console.log("Client Lost");
  });
  console.log("Client Connected", socket.remoteAddress);
});

server.listen(4000, "0.0.0.0", () => {
  console.log("Server started on port 4000");
});
