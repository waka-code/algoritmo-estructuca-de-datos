"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var path_1 = require("path");
var alfabet = {
    t: "t",
    h: "h",
    e: "e"
};
function processWord(word) {
    var currentState = "S";
    for (var i = 0; i < word.length; i++) {
        var char = word[i];
        switch (currentState) {
            //estado incial
            case "S":
                switch (char) {
                    case "t":
                        currentState = "S";
                        break;
                    case "h":
                        currentState = "Q1";
                        break;
                    case "e":
                        currentState = "Q2";
                        break;
                    default:
                        currentState = "S";
                        break;
                }
                break;
            //estado Q1
            case "Q1":
                switch (char) {
                    case "t":
                        currentState = "S";
                        break;
                    case "h":
                        currentState = "Q1";
                        break;
                    case "e":
                        currentState = "Q2";
                        break;
                    default:
                        currentState = "S";
                        break;
                }
                break;
            //estado Q2
            case "Q2":
                switch (char) {
                    case "t":
                        currentState = "S";
                        break;
                    case "h":
                        currentState = "Q1";
                        break;
                    case "e":
                        currentState = "Q2";
                        break;
                    default:
                        currentState = "S";
                        break;
                }
                break;
        }
    }
    return currentState === "Q2";
}
var archive = "./archivo.txt";
var word = (0, fs_1.readFileSync)((0, path_1.join)(__dirname, archive), "utf-8");
var lowercaseWord = word.toLowerCase().split(" ");
var SearchWord = lowercaseWord.map(function (w) { return processWord(w); });
var count = SearchWord.reduce(function (total, current) { return (current ? total + 1 : total); }, 0);
console.log(count);
