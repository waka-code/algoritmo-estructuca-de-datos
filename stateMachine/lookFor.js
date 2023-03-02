"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var path_1 = require("path");
function lookFor(text, keyword) {
    var word = (0, fs_1.readFileSync)((0, path_1.join)(__dirname, text), "utf-8");
    var lowercaseWord = word.toLowerCase().split(" ");
    var count = 0;
    lowercaseWord.filter(function (e) {
        if (e === keyword) {
            count++;
        }
    });
    var repeatedWord = "la palabra The se repite ".concat(count);
    return repeatedWord;
}
console.time("time");
console.log(lookFor("./archivo.txt", "the"));
console.timeEnd("time");
