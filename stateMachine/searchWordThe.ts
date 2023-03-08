import { readFileSync } from "fs";
import { join } from "path";

const archive = "./archivo.txt";
const archives = "./full_speech.txt";
const word = readFileSync(join(__dirname, archives), "utf-8");
const lowercaseWord = word.toLowerCase();

function lookFor(text: string, keyword: string): string {
  let wordIndex = text.indexOf(keyword);
  let count: number = 0;

  while (wordIndex !== -1) {
    wordIndex = lowercaseWord.indexOf(keyword, wordIndex + 1);
    count++;
  }

  let repeatedWord = `la palabra The se repite ${count}`;
  return repeatedWord;
}
console.time(`time`);
console.log(lookFor(lowercaseWord, "the"));
console.timeEnd("time");
