import net from "node:net";

const server = net.createServer();

// starting/Listening server
server.listen(4000, "0.0.0.0", () => {
  console.log("Listening on port 4000");
});


// When a client connect with the server, "connection" event emits on server.
// Inside the callback we get socket (duplex stream).
server.on("connection", (socket) => {
  socket.on("data", (chunk) => {
    console.log(chunk.toString());
    socket.write("HTTP\n\nGot your message.")
    socket.end()
  });

  socket.on("close", () => {
    console.log("Client Disconnected : ", socket.remoteAddress);
  });

//   console.log(socket.address());    // Server Address.
  console.log("Client Connected : ", socket.remoteAddress);
//   console.log(socket.remoteFamily);
//   console.log(socket.remoteAddress);
//   console.log(socket.remotePort);
});



// server.on("listening", () => {
//     console.log("Listening on port 4000");
// })
