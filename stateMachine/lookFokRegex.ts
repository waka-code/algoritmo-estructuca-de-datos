import { readFileSync } from "fs";
import { join } from "path";

function lookForRegex(text: string, keyword: RegExp): string {
  if (text) {
    let word = readFileSync(join(__dirname, text), "utf-8");
    let searchWord = [...word.toLowerCase().matchAll(keyword)].length;
    return `la palabra The se repite ${searchWord}`;
  } else {
    return "Campo Vacio.";
  }
}

console.time(`time`);
console.log(lookForRegex("./archivo.txt", /the/g));
console.timeEnd("time");