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
let contador: string[] = [];
const lowercaseWord = word.toLowerCase().split("");

function s(
  text: string[],
  count: number,
  t: string,
  h: string,
  es: string
): string | number {
  if (text.length === 0) return count;
  else {
    text.forEach((e) => {
      if (e == t) Q1(text, count++, t, h, es, e);
      else if (e == h) Q2(text, count++, t, h, es, e);
      else if (e == es) Q3(text, count++, t, h, es, e);
    },
    count++
    );
  }

  let repeatedWord = contador.length;
  return count;
}

function Q1(
  text: string[],
  count: number,
  t: string,
  h: string,
  es: string,
  e: any
): number {
  if (text.length === 0) return count;
  else {
    contador.push(t);
  }
  return count;
}
function Q2(
  text: string[],
  count: number,
  t: string,
  h: string,
  es: string,
  e: any
): number | undefined {
  if (text.length === 0) return count;
  else {
    contador.push(h);
    console.log(contador)
  }
}

function Q3(
  text: string[],
  count: number,
  t: string,
  h: string,
  es: string,
  e: any
): number | undefined {
  if (text.length === 0) return count;
  else {
    contador.push(es);
    console.log(contador)
  }
}

console.time(`time`);
console.log(s(lowercaseWord, 0, "t", "h", "e"));
console.timeEnd("time");
