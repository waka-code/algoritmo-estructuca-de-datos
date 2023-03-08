/*let word = "elemento the hola mundo the como esta the"
const lowercaseWord = word.toLowerCase().split(" ");
*/
import { readFileSync } from "fs";
import { join } from "path";

let archive = "./archivo.txt";
const word = readFileSync(join(__dirname, archive), "utf-8");
const lowercaseWord = word.toLowerCase().split(" ");

let alfabet = {
  t: "t",
  h: "h",
  e: "e",
};

function S(text: any[], count: number) {
  switch (text[count]) {
    case alfabet.t:
      S(text, count++);
      break;
    case alfabet.h:
      Q1(text, count++);
      break;
    case alfabet.e:
      Q2(text, count++);
      break;
    default:
      S(text, count++);
      break;
  }
}

function Q1(text: any[], count: number) {
  switch (text[count]) {
    case alfabet.t:
      S(text, count++);
      break;
    case alfabet.h:
      Q1(text, count++);
      break;
    case alfabet.e:
      Q2(text, count++);
      break;
    default:
      S(text, count++);
      break;
  }
}

function Q2(text: any[], count: number) {
  switch (text[count]) {
    case alfabet.t:
      S(text, count++);
      break;
    case alfabet.h:
      Q1(text, count++);
      break;
    case alfabet.e:
      Q2(text, count++);
      break;
    default:
      S(text, count++);
      break;
  }
}

console.log(S(lowercaseWord, 0));
/*
S{
Si recibe una T permanece en el caso S
Si recibe una H avanza al caso Q2
si recibe una e avanza al caso F
Si recibe !alfabeto regresa al caso S
}

Q2{
Si recibe una T regresa al caso S
Si recibe una H permanece en el caso Q2
si recibe una e avanza al caso F
}

F{
Si recibe una T regresa al caso S
Si recibe una H regresa al caso Q2
Si recibe una e permanece en el caso F
}
*/
