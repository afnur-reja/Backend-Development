import fs from "fs";

const writeStream = fs.createWriteStream("thousendas.txt", {
  highWaterMark: 4,
});

// console.log(writeStream.writableHighWaterMark)

// let isEmpty = writeStream.write('a')
// console.log(writeStream.writableLength)
// console.log(isEmpty)

let i = 1;
write1000a();

writeStream.on("drain", () => {
  write1000a();
});

function write1000a() {
  while (i <= 1000) {
    console.log(writeStream.writableLength);
    let isEmpty = writeStream.write("a");
    i++;
    if (!isEmpty) {
      break;
    }
    console.log(isEmpty);
  }
}
