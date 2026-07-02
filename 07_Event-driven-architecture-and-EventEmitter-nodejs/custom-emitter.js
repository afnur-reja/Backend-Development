//Basic representation of Event Emitter (for understanding)

class CustomEmitter {
    constructor(){
        this._events = {

        }

    }

    on (eventName, handler) {
       if(this._events[eventName]) {
          this._events[eventName].push(handler);
       } else {
        this._events[eventName] = [handler];
       }
    }

    emit (eventName, ...args) {
        if(this._events[eventName]){
           const handlers = this._events[eventName];
           for (let handler of handlers) {
              handler(...args);
        }
    }
    }
}

const myEmitter = new CustomEmitter()

myEmitter.on('hi', () => {
    console.log("hello")
})

myEmitter.on('hi2', () => {
    console.log("hello2")
})

myEmitter.on('hi', () => {
    console.log("hello")
})

myEmitter.on('printArgs', (a, b, c) => {
    console.log("Arguments passed")
    console.log(a, b, c)
})


myEmitter.emit('hi')
myEmitter.emit('hi2')
myEmitter.emit('printArgs', 1, 2, 3)
console.log(myEmitter)