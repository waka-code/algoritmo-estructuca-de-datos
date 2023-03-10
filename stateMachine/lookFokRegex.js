"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var path_1 = require("path");
var archive = "./archivo.txt";
var archives = "./full_speech.txt";
var word = (0, fs_1.readFileSync)((0, path_1.join)(__dirname, archive), "utf-8");
var lowercaseWord = word.toLowerCase();
function lookForRegex(text, keyword) {
    if (text) {
        var searchWord = Array.from(lowercaseWord.matchAll(keyword)).length;
        return "la palabra The se repite ".concat(searchWord);
    }
    else {
        return "Campo Vacio.";
    }
}
console.log("REGEX");
console.log("------------------");
console.time("time");
console.log(lookForRegex(lowercaseWord, /the/g));
console.timeEnd("time");
console.log("------------------");
