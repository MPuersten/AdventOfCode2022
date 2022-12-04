"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var bisectingRucksack_1 = require("./bisectingRucksack");
var characterPriorityTranslator_1 = require("./characterPriorityTranslator");
var fullRucksackInput = fs.readFileSync('./assets/d3-input.txt', 'utf-8');
var ruckSackInputs = fullRucksackInput.split(/\r?\n/);
var prioritySum = 0;
for (var i = 0; i < ruckSackInputs.length; i++) {
    if (ruckSackInputs[i] === '')
        break;
    var rucksack = new bisectingRucksack_1.default(ruckSackInputs[i]);
    prioritySum += (0, characterPriorityTranslator_1.getCharacterPriority)(rucksack.repeatedCharacter);
}
console.log("PrioritySum: " + prioritySum);
var badgeTotal = 0;
for (var i = 0; i < ruckSackInputs.length; i += 3) {
    for (var j = 0; j < ruckSackInputs[i].length; j++) {
        var result1 = ruckSackInputs[i + 1].indexOf(ruckSackInputs[i][j]);
        var result2 = ruckSackInputs[i + 2].indexOf(ruckSackInputs[i][j]);
        if (result1 !== -1 && result2 !== -1) {
            badgeTotal += (0, characterPriorityTranslator_1.getCharacterPriority)(ruckSackInputs[i][j]);
            break;
        }
    }
}
console.log("BadgeSum: " + badgeTotal);
