import { readFileSync } from "fs";
import { join } from "path";

let archive = "./archivo.txt";
const word = readFileSync(join(__dirname, archive), "utf-8");
const lowercaseWord = word.toLowerCase().split(" ");

function lookFor(text: string[], keyword: string): string {
  let count: number = 0;
  text.forEach((e) => {
    if (e === keyword) {
      count++;
    }
  });
  let repeatedWord = `la palabra The se repite ${count}`;
  return repeatedWord;
}

console.time(`time`);
console.log(lookFor(lowercaseWord, "the"));
console.timeEnd("time");
