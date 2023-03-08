"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var path_1 = require("path");
var archive = "./archivo.txt";
var archives = "./full_speech.txt";
var word = (0, fs_1.readFileSync)((0, path_1.join)(__dirname, archive), "utf-8");
var lowercaseWord = word.toLowerCase();
function lookFor(text, keyword) {
    var wordIndex = text.indexOf(keyword);
    var count = 0;
    while (wordIndex !== -1) {
        wordIndex = lowercaseWord.indexOf(keyword, wordIndex + 1);
        count++;
    }
    var repeatedWord = "la palabra The se repite ".concat(count);
    return repeatedWord;
}
console.log("CODIGO SIMPLE");
console.log("------------------");
console.time("time");
console.log(lookFor(lowercaseWord, "the"));
console.timeEnd("time");
console.log("------------------");
