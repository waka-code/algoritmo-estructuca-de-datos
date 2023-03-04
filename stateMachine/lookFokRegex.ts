import { readFileSync } from "fs";
import { join } from "path";

let archive = "./archivo.txt";
const word = readFileSync(join(__dirname, archive), "utf-8");
const lowercaseWord = word.toLowerCase();

function lookForRegex(text: string, keyword: RegExp): string {
  if (text) {
    let searchWord = [...text.matchAll(keyword)].length;
    return `la palabra The se repite ${searchWord}`;
  } else {
    return "Campo Vacio.";
  }
}

console.time(`time`);
console.log(lookForRegex(lowercaseWord, /the/g));
console.timeEnd("time");