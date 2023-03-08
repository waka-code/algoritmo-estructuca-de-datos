/* b) Con un DFA programado (Recomendación: Utilizar recursión. */
/*
Solución #2: DFA
1) Cantidad de palabras: X palabras.
2) Tiempo de ejecución: X milisegundos.
3) Memoria utilizada durante la ejecución: X KB
a)
Patrón: "The", case insensitive.
Válido: The, THE, the, THe, Atthebute, etc.
Inválido: eht, aaaaaaaa, Attribute, etc.
b)
Patrón: " The ", case insensitive, word.
Válido: The, THE, the, THe...
Inválido: eht, aaaaaaaa, Attribute, Atthebute, etc.
*/
import { readFileSync } from "fs";
import { join } from "path";

let archive = "./archivo.txt";
const word = readFileSync(join(__dirname, archive), "utf-8");
const lowercaseWord = word.toLowerCase().split(" ");

function s(text: string[], count: number, keyword: string): string | number {
  if (text.length === 0) return count;
  else {
    text.forEach((e) => {
      if (e == keyword) Q1(text, count++, keyword);
    });
  }
  let repeatedWord = `la palabra The se repite ${count}`;
  return repeatedWord;
}

function Q1(text: string[], count: number, keyword: string): number {
  if (text.length === 0) return count;
  
  return count;
}
function Q2(text: string[], count: number): number | undefined {
  if (text.length === 0) return count;
}

console.time(`time`);
console.log(s(lowercaseWord, 0, "the"));
console.timeEnd("time");
