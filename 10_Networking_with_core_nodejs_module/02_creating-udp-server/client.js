import dgram from "node:dgram"; //UDP

const socket = dgram.createSocket('udp4');

// Getting the message from server.js
socket.on("message", (message, remoteAddress) => {
    console.log(message.toString());
    console.log(remoteAddress);
    socket.close();
})

// Sending message to server.js
socket.send("Hi, from client.js", 4000, "10.61.154.69", () => {
    // Runs when message has sent.
    console.log("Message Sent.");
})