import dgram from "node:dgram"; //UDP

const socket = dgram.createSocket("udp4");

// Recieving the message/request from client.js
socket.on("message", (message, remoteAddress) => {
  console.log(message.toString());
  console.log(remoteAddress);
  
  // Sending message to client.js that request has recieved.
  socket.send(
    "Message recieved succesfully on server.js",
    remoteAddress.port,
    remoteAddress.address,
  );
});

// Start/Listening the server
socket.bind({ port: 4000 }, () => {
  const address = socket.address();
  // console.log(address);
  console.log(`Listening on port ${address.port}`);
});
