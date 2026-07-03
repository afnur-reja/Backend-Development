import net from "node:net";

const server = net.createServer((socket) => {

  console.log("Client Connected : ", socket.remoteAddress);

  socket.on("data", (chunk) => {
    console.log(chunk.toString());
    socket.write("HTTP\n\nGot your message.")
    socket.end()
  });

  socket.on("close", () => {
    console.log("Client Disconnected : ", socket.remoteAddress);
  });

  socket.on("error", () => {
    console.log("Client Lost.");
  })
  
});


server.listen(4000, "0.0.0.0", () => {
  console.log("Listening on port 4000");
});

