import { readFileSync } from "fs";
import { join } from "path";

function lookFor(text: string, keyword: string): string {
  const word = readFileSync(join(__dirname, text), "utf-8");
  const lowercaseWord = word.toLowerCase().split(" ");
  let count: number = 0;

  lowercaseWord.forEach((e) => {
    if (e === keyword) {
      count++;
    }
  });
  let repeatedWord = `la palabra The se repite ${count}`;
  return repeatedWord;
}

console.time(`time`);
console.log(lookFor("./archivo.txt", "the"));
console.timeEnd("time");
