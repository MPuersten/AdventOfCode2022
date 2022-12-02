import * as fs from 'fs'
import Elf from './elf';
import ElfCollection from './elfCollection';
import SnackContainer from './interfaces/SnackContainer';
import SnackLedgerInterpreter from './snackLedgerInterpreter'

let snackLedger: string = fs.readFileSync('../assets/d1-input.txt', 'utf-8');

let interpreter: SnackLedgerInterpreter = new SnackLedgerInterpreter();
let snackLists: number[][] = interpreter.getCalorieLists(snackLedger);

// Make Elves
let elves: SnackContainer[] = [];
for (let i = 0; i < snackLists.length; i++) {
    elves.push(new Elf(snackLists[i]));
}

console.log('Number of elves: ' + elves.length);
let elfCollection: ElfCollection = new ElfCollection(elves as Elf[]);

// Find highest calorie count
let highestCalories = elfCollection.mostCaloriesInSingleElf;

console.log('Calorie count: ' + highestCalories);


