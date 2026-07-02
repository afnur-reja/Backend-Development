#!/usr/bin/env node

import { readFile } from "fs/promises";

try {
    const filePath = process.argv[2];
    const searchWord = process.argv[3];

    if (!filePath) {
        console.log("❌ Please provide a file path.");
        process.exit(1);
    }

    const fileContent = (await readFile(filePath)).toString();

    const wordsArr = fileContent
        .split(/[\s,.!?;:"()]+/)
        .filter(e => e); // removes empty strings

    const wordsCount = {};

    wordsArr.forEach((w) => {
        const word = w.toLowerCase();
        if (word in wordsCount) {
            wordsCount[word] += 1;
        } else {
            wordsCount[word] = 1;
        }
    });

    if (searchWord) {
        const word = searchWord.toLowerCase();
        if (word in wordsCount) {
            console.log(`${searchWord} : ${wordsCount[word]}`);
        } else {
            console.log(`"${searchWord}" not found!`);
        }
    } else {
        console.log(wordsCount);
    }

} catch (err) {
    console.log(`❌ Error: ${err.message}`);
}
