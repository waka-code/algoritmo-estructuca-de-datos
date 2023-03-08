"use strict";
exports.__esModule = true;
/*let word = "elemento the hola mundo the como esta the"
const lowercaseWord = word.toLowerCase().split(" ");
*/
var fs_1 = require("fs");
var path_1 = require("path");
var archive = "./archivo.txt";
var word = (0, fs_1.readFileSync)((0, path_1.join)(__dirname, archive), "utf-8");
var lowercaseWord = word.toLowerCase().split(" ");
var alfabet = {
    t: "t",
    h: "h",
    e: "e"
};
var count = 0;
function S(text, count) {
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
    return count;
}
function Q1(text, count) {
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
    }
}
function Q2(text, count) {
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
    }
}
console.log(S(lowercaseWord, 0));
