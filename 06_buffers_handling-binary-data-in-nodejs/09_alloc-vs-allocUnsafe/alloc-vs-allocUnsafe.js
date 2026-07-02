import { Buffer } from 'buffer'

console.time("Buffer.alloc");
for (let i = 0; i < 10000; i++){
    Buffer.alloc(1024);
}
console.timeEnd("Buffer.alloc");

console.time("Buffer.allocUnsafe");
for (let i = 0; i < 10000; i++){
    Buffer.allocUnsafe(1024);
}
console.timeEnd("Buffer.allocUnsafe");