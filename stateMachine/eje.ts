import { readFileSync } from "fs";
import { join } from "path";

let archive = "./archivo.txt";
const word = readFileSync(join(__dirname, archive), "utf-8");
const lowercaseWord = word.toLowerCase().split(" ");

let alfabet = {
  the: "the",
};
let count = 0;
function S(text: any[]) {
  if (text.length === 0) return count;

  for (let i = 0; i <= text.length; i++) {
    if (alfabet.the === text[i]) {
      Q1(text[i]);
      count++;
    }
  }
  return count;
}

function Q1(text: string[]) {
  if (text.length === 0) return count;
  S(text);
}

console.log(S(lowercaseWord));
