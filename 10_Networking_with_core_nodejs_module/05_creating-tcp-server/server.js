import net from "node:net";

const server = net.createServer();

server.listen(4000, "0.0.0.0", () => {
  console.log("Listening on port 4000");
});

server.on("connection", (socket) => {
  socket.on("data", (chunk) => {
    // console.log(chunk.toString());
  });

  socket.on("close", () => {
    console.log("Client Disconnected : ", socket.remoteAddress);
  });

//   console.log(socket.address());
  console.log("Client Connected : ", socket.remoteAddress);
//   console.log(socket.remoteFamily);
//   console.log(socket.remoteAddress);
//   console.log(socket.remotePort);
});



// server.on("listening", () => {
//     console.log("Listening on port 4000");
// })
