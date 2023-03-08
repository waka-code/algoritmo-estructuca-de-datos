"use strict";
exports.__esModule = true;
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
var fs_1 = require("fs");
var path_1 = require("path");
var archive = "./archivo.txt";
var word = (0, fs_1.readFileSync)((0, path_1.join)(__dirname, archive), "utf-8");
var contador = [];
var lowercaseWord = word.toLowerCase().split("");
function s(text, count, t, h, es) {
    if (text.length === 0)
        return count;
    else {
        text.forEach(function (e) {
            if (e == t)
                Q1(text, count++, t, h, es, e);
            else if (e == h)
                Q2(text, count++, t, h, es, e);
            else if (e == es)
                Q3(text, count++, t, h, es, e);
        });
    }
    var repeatedWord = contador.length;
    return repeatedWord;
}
function Q1(text, count, t, h, es, e) {
    if (text.length === 0)
        return count;
    else {
        contador.push(t + h + es);
        console.log(contador);
    }
    return count;
}
function Q2(text, count, t, h, es, e) {
    if (text.length === 0)
        return count;
}
function Q3(text, count, t, h, es, e) {
    if (text.length === 0)
        return count;
}
console.time("time");
console.log(s(lowercaseWord, 0, "t", "h", "e"));
console.timeEnd("time");
