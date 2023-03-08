"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
var fs_1 = require("fs");
var path_1 = require("path");
var archive = "./archivo.txt";
var archives = "./full_speech.txt";
var word = (0, fs_1.readFileSync)((0, path_1.join)(__dirname, archive), "utf-8");
var lowercaseWord = word.toLowerCase();
function lookForRegex(text, keyword) {
    if (text) {
        var searchWord = __spreadArray([], lowercaseWord.matchAll(keyword), true).length;
        return "la palabra The se repite ".concat(searchWord);
    }
    else {
        return "Campo Vacio.";
    }
}
console.log("------------------");
console.time("REGEX");
console.time("time");
console.time("time");
console.log(lookForRegex(lowercaseWord, /the/g));
console.timeEnd("time");
console.log("------------------");
