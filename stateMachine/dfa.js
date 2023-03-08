"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var path_1 = require("path");
var alfabet = {
    t: "t",
    h: "h",
    e: "e"
};
var archive = "./archivo.txt";
var archives = "./full_speech.txt";
var word = (0, fs_1.readFileSync)((0, path_1.join)(__dirname, archive), "utf-8");
var lowercaseWord = word.toLowerCase();
function processWord(word) {
    var currentState = "S";
    var counter = 0;
    for (var i = 0; i < word.length; i++) {
        var char = word[i];
        switch (currentState) {
            //estado incial
            case "S":
                switch (char) {
                    case alfabet.t:
                        currentState = "Q1";
                        break;
                    default:
                        currentState = "S";
                        break;
                }
                break;
            //estado Q1
            case "Q1":
                switch (char) {
                    case alfabet.t:
                        currentState = "Q1";
                        break;
                    case alfabet.h:
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
                    case alfabet.t:
                        currentState = "S";
                        break;
                    case alfabet.h:
                        currentState = "S";
                        break;
                    case alfabet.e:
                        currentState = "Q2";
                        counter++;
                        break;
                    default:
                        currentState = "S";
                        break;
                }
                break;
        }
    }
    return "la palabra The se repite ".concat(counter);
}
console.log("DFA");
console.log("------------------");
console.time("time");
console.log(processWord(lowercaseWord));
console.timeEnd("time");
console.log("------------------");
