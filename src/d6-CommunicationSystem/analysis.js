"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var CharacterAnalyzer_1 = require("./CharacterAnalyzer");
var communication = fs.readFileSync('./assets/d6-input.txt', 'utf-8');
var numCharsBefore4Unique = (0, CharacterAnalyzer_1.FindNumCharsBeforeStringIsUnique)(communication, 4);
var numCharsBefore14Unique = (0, CharacterAnalyzer_1.FindNumCharsBeforeStringIsUnique)(communication, 14);
console.log("Num Chars before 4 unique: " + numCharsBefore4Unique);
console.log("Num Chars before 14 unique: " + numCharsBefore14Unique);
