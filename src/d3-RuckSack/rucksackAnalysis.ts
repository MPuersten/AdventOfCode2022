import * as fs from 'fs'
import BisectingRucksack from "./bisectingRucksack";
import { getCharacterPriority } from './characterPriorityTranslator';

let fullRucksackInput: string = fs.readFileSync('./assets/d3-input.txt', 'utf-8');
let ruckSackInputs = fullRucksackInput.split(/\r?\n/);

let prioritySum: number = 0;
for (let i = 0; i < ruckSackInputs.length; i++) {
    if (ruckSackInputs[i] === '') break;
    let rucksack: BisectingRucksack = new BisectingRucksack(ruckSackInputs[i]);
    prioritySum += getCharacterPriority(rucksack.repeatedCharacter);
}

console.log("PrioritySum: " + prioritySum);