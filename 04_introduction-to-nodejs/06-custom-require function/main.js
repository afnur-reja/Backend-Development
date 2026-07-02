const {add, subtract, product, divide} = loadModule("math", {})

console.log(add(2, 3))
console.log(subtract(2, 3))
console.log(product(2, 3))
console.log(divide(2, 3))




function loadModule(path) {
    if(!path.endsWith(".js")) {
         path = path + ".js"
    }

    const fs = require("fs");
    const vm = require("vm");
    const fileContent = fs.readFileSync(path).toString();
    
    return (function(send) {
        // eval(fileContent);
        vm.runInNewContext(fileContent, {send, loadModule, console })
        return send;
    })({});
}

