import * as fs from 'fs'
import BisectingRucksack from "./bisectingRucksack";
import { getCharacterPriority } from './characterPriorityTranslator';

let fullRucksackInput: string = fs.readFileSync('./assets/d03-input.txt', 'utf-8');
let ruckSackInputs = fullRucksackInput.split(/\r?\n/);

let prioritySum: number = 0;
for (let i = 0; i < ruckSackInputs.length; i++) {
    if (ruckSackInputs[i] === '') break;
    let rucksack: BisectingRucksack = new BisectingRucksack(ruckSackInputs[i]);
    prioritySum += getCharacterPriority(rucksack.repeatedCharacter);
}

console.log("PrioritySum: " + prioritySum);

let badgeTotal: number = 0;
for (let i = 0; i < ruckSackInputs.length; i += 3){

    for (let j = 0; j < ruckSackInputs[i].length; j++) {
            let result1 = ruckSackInputs[i + 1].indexOf(ruckSackInputs[i][j]);
            let result2 = ruckSackInputs[i + 2].indexOf(ruckSackInputs[i][j]);
            if (result1 !== -1 && result2 !== -1) {
                badgeTotal += getCharacterPriority(ruckSackInputs[i][j])
                break;
            }
    }
    
}

console.log("BadgeSum: " + badgeTotal);