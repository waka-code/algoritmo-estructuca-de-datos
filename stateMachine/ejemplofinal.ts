import { readFileSync } from "fs";
import { join } from "path";

let alfabet = {
  t: "t",
  h: "h",
  e: "e",
};

let archive = "./archivo.txt";
const archives = "./full_speech.txt";
const word = readFileSync(join(__dirname, archive), "utf-8");
let lowercaseWord = word.toLowerCase();

function processWord(word: string) {
  let currentState = "S";
  let counter = 0;
  for (let i = 0; i < word.length; i++) {
    const char = word[i];
    switch (currentState) {
      //estado incial
      case "S":
        switch (char) {
          case alfabet.t:
            currentState = "Q1";
            break;
          default:
            currentState = "S";
            break;
        }
        break;
      //estado Q1
      case "Q1":
        switch (char) {
          case alfabet.t:
            currentState = "Q1";
            break;
          case alfabet.h:
            currentState = "Q2";
            break;
          default:
            currentState = "S";
            break;
        }
        break;
      //estado Q2
      case "Q2":
        switch (char) {
          case alfabet.t:
            currentState = "S";
            break;
          case alfabet.h:
            currentState = "S";
            break;
          case alfabet.e:
            currentState = "Q2";
            counter++;
            break;
          default:
            currentState = "S";
            break;
        }
        break;
    }
  }
  return counter;
}

console.log(processWord(lowercaseWord));
