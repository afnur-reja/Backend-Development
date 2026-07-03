import net from "node:net";

const socket = net.createConnection({host: "10.61.154.69", port: 4000})

socket.on("data", (chunk) => {
    console.log(chunk.toString());
})

socket.on("error", () => {
    console.log("Server Lost.");
})

setTimeout(() => {
    socket.write("Hello, from client.js")
    // socket.end()
}, 3000);