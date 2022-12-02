"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var elf_1 = require("./elf");
var elfCollection_1 = require("./elfCollection");
var snackLedgerInterpreter_1 = require("./snackLedgerInterpreter");
var snackLedger = fs.readFileSync('../assets/d1-input.txt', 'utf-8');
var interpreter = new snackLedgerInterpreter_1.default();
var snackLists = interpreter.getCalorieLists(snackLedger);
// Make Elves
var elves = [];
for (var i = 0; i < snackLists.length; i++) {
    elves.push(new elf_1.default(snackLists[i]));
}
console.log('Number of elves: ' + elves.length);
var elfCollection = new elfCollection_1.default(elves);
// Find highest calorie count
var numElvesForTotal = 3;
var highestCalories = elfCollection.getHighestCalorieTotal(numElvesForTotal);
console.log('Calorie count: ' + highestCalories);
