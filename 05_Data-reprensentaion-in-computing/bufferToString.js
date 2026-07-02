import fsPromises from 'node:fs/promises'

const buffer = await fsPromises.readFile('text.txt');

console.log(String.fromCharCode(...buffer)) //hello world;

function bufferToString(bufferContent) {
     let strContent = '';
     bufferContent.forEach(charCode => {
          strContent += String.fromCharCode(charCode)
     });
     
     return strContent
}

console.log(bufferToString(buffer));