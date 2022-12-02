"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var elf_1 = require("./elf");
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
// Find highest calorie count
var highestCalorieElf = 0;
var highestCalories = 0;
for (var i = 0; i < elves.length; i++) {
    if (elves[i].calorieCount > highestCalories) {
        highestCalorieElf = i + 1;
        highestCalories = elves[i].calorieCount;
    }
}
console.log('Highest calories carrying elf: ' + highestCalorieElf);
console.log('Calorie count: ' + highestCalories);
