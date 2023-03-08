"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var path_1 = require("path");
var archive = "./archivo.txt";
var word = (0, fs_1.readFileSync)((0, path_1.join)(__dirname, archive), "utf-8");
var lowercaseWord = word.toLowerCase().split(" ");
var alfabet = {
    the: "the"
};
var count = 0;
function S(text) {
    if (text.length === 0)
        return count;
    for (var i = 0; i <= text.length; i++) {
        if (alfabet.the === text[i]) {
            Q1(text[i]);
            count++;
        }
    }
    return count;
}
function Q1(text) {
    if (text.length === 0)
        return count;
    S(text);
}
console.log(S(lowercaseWord));
