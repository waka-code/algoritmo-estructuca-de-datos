import { readFileSync } from "fs";
import { join } from "path";

const alfabet = {
  t: "t",
  h: "h",
  e: "e",
};

let archive = "./archivo.txt";
const word = readFileSync(join(__dirname, archive), "utf-8");
const lowercaseWord = word.toLowerCase().split(",");
let contador = 0;

function Q1(text: string[], estadoActual: number) {
  switch (text[estadoActual + 1]) {
    case alfabet.t:
      console.log(text);
      Q1(text, estadoActual + 1);
      break;
    case alfabet.h:
      console.log(text);
      Q2(text, estadoActual + 1);
      break;
    case alfabet.e:
      console.log(text);
      Q3(text, estadoActual + 1);
      break;
  }

  contador++;
  console.log(contador);
  return contador;
}

function Q2(text: string[], estadoActual: number) {
  switch (text[estadoActual]) {
    case alfabet.h:
      Q2(text, estadoActual + 1);
      break;
    case alfabet.e:
      Q3(text, estadoActual + 1);
      break;
  }
  console.log(estadoActual);
}

function Q3(text: string[], estadoActual: number) {
  switch (text[estadoActual]) {
    case alfabet.e:
      Q3(text, estadoActual + 1);
      break;
    case alfabet.t:
      Q1(text, estadoActual + 1);
      break;
    case alfabet.h:
      Q2(text, estadoActual + 1);
      break;
  }
  console.log(estadoActual);
}

  console.log(Q1(lowercaseWord, 0));

/*
let ejemplo = "ola the papa the the the";
let acumulador: string = "";
let estado = 0;
let contador = 0;
//Estados
function S(str: string) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === alfabet.t) {
      Q1(str[i]);
      console.log(str[i]);
      acumulador += str[i];
    } else if (str[i] === alfabet.h) {
      console.log(str[i]);
      Q2(str[i]);
      acumulador += str[i];
    } else if (str[i] === alfabet.e) {
      console.log(str[i]);
      F(str[i]);
      acumulador += str[i];
    } else {
      console.log("INVÁLIDA");
    }
  }

 let cantidadPalabras = acumulador.split(/\s+/);
  cantidadPalabras.forEach((P) => {
    for (let f = 0; f < P.length; f++) {
      console.log(P[f]);
      if (P[f].match(/[a-zA-Z]/)) {
        if (estado === 0) {
          estado = 1;
        } else if (estado === 1) {
          estado = 2;
        } else if (estado === 2) {
          contador++;
          estado = 1;
        }
      }
    }
  });
  console.log(`${contador} `);
}

function Q1(str: string) {
  if (str === alfabet.t) {
    Q1(str);
    console.log(str);
  } else if (str === alfabet.h) {
    console.log(str);
    Q2(str);
  } else if (str === alfabet.e) {
    console.log(str);
    F(str);
  } else {
    console.log("INVÁLIDA");
  }
  console.log(str);
}

function Q2(str: string) {
    if (str === alfabet.t) {
        Q1(str);
        console.log(str);
      } else if (str === alfabet.h) {
        console.log(str);
        Q2(str);
      } else if (str === alfabet.e) {
        console.log(str);
        F(str);
      } else {
        console.log("INVÁLIDA");
      }
}

function F(str: string) {
    if (str === alfabet.t) {
        Q1(str);
        console.log(str);
      } else if (str === alfabet.h) {
        console.log(str);
        Q2(str);
      } else if (str === alfabet.e) {
        console.log(str);
        F(str);
      } else {
        console.log("INVÁLIDA");
      }
}

S(ejemplo);

*/
