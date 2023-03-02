import { readFileSync } from "fs";
import { join } from "path";

function lookFor(text: string, keyword: string): string {
  const word = readFileSync(join(__dirname, text), "utf-8");
  const lowercaseWord = word.toLowerCase();
  let wordIndex = lowercaseWord.indexOf(keyword);
  let count: number = 0;

  while (wordIndex !== -1) {
    wordIndex = lowercaseWord.indexOf(keyword, wordIndex + 1);
    count++;
  }

  let repeatedWord = `la palabra The se repite ${count}`;
  return repeatedWord;
}
  console.time(`time`);
  console.log(lookFor("./archivo.txt", "the"));
  console.timeEnd("time");

