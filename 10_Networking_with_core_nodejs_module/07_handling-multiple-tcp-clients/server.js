import net from "node:net";

process.stdin.on("data", (input) => {
   const inputStr = input.toString().split(" ")
   const [clientIndex] = inputStr
   if(!Number.isNaN(Number(clientIndex))) {
      clientsList[parseInt(clientIndex)].write(inputStr.slice(1).join(" "))
   } else {
      clientsList.forEach((clientSocket) => {
         clientSocket.write(input);
      })
   }
})

const clientsList = []

const server = net.createServer((socket) => {
  console.log("Client Connected : ", socket.remoteAddress);
  clientsList.push(socket)

  socket.on("data", (chunk) => {
    console.log(chunk.toString());
    // socket.write("Got your message.");

    const id = clientsList.indexOf(socket)
    clientsList.forEach((clientSocket) => {
    if(clientSocket !== socket) clientSocket.write(`Client ${id} : ${chunk}`);

   })
  });

  socket.on("close", () => {
    console.log("Client Disconnected : ", socket.remoteAddress);
  });

  socket.on("error", () => {
    console.log("Client Lost.");
  });
});

server.listen(4000, "0.0.0.0", () => {
  console.log("Server started on port 4000");
});