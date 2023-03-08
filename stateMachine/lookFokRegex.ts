import { readFileSync } from "fs";
import { join } from "path";

let archive = "./archivo.txt";
const archives = "./full_speech.txt";
const word = readFileSync(join(__dirname, archive), "utf-8");
const lowercaseWord = word.toLowerCase();

function lookForRegex(text:any, keyword: RegExp): string {
  if (text) {
    let searchWord = Array.from(lowercaseWord.matchAll(keyword)).length;
    return `la palabra The se repite ${searchWord}`;
  } else {
    return "Campo Vacio.";
  }
}

console.log(`REGEX`);
console.log(`------------------`);
console.time(`time`);
console.log(lookForRegex(lowercaseWord, /the/g));
console.timeEnd("time");
console.log(`------------------`);
