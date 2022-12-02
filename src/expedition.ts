import * as fs from 'fs'
import Elf from './elf';
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

// Find highest calorie count
let highestCalorieElf = 0;
let highestCalories = 0;

for (let i = 0; i < elves.length; i++) {


    if (elves[i].calorieCount > highestCalories) {
        highestCalorieElf = i + 1;
        highestCalories = elves[i].calorieCount;
    }
}

console.log('Highest calories carrying elf: ' + highestCalorieElf);
console.log('Calorie count: ' + highestCalories);

