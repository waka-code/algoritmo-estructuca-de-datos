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
var lowercaseWord = word.toLowerCase().split(" ");
function s(text, count, keyword) {
    if (text.length === 0)
        return count;
    else {
        text.forEach(function (e) {
            if (e == keyword)
                Q1(text, count++, keyword);
        });
    }
    var repeatedWord = "la palabra The se repite ".concat(count);
    return repeatedWord;
}
function Q1(text, count, keyword) {
    if (text.length === 0)
        return count;
    else {
        text.forEach(function (e) {
            if (e == keyword)
                Q2(text, count++);
        });
    }
    return count;
}
function Q2(text, count) {
    if (text.length === 0)
        return count;
}
console.time("time");
console.log(s(lowercaseWord, 0, "the"));
console.timeEnd("time");
