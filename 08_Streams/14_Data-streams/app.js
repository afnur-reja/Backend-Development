import {spawn} from 'child_process';

const childProcess = spawn('node', ['script.js'])

childProcess.stdout.on('data', (chunk) => {
    console.log(chunk.toString());
})

childProcess.stdin.write("write using parent app")