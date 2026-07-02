import eventEmitter from 'events';

const emitter = new eventEmitter();

emitter.on("hey", () => {
    console.log("hello, I am event handler.");
})

emitter.emit("hey")