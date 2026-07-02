import { readFile } from 'fs/promises'

const bufferData = await readFile('./text.txt');

console.log(bufferData)