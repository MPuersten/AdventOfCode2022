import * as fs from 'fs'
import { isOrderedCorrectly, Order } from './loadedListComparison';

// let signalPairText: string[] = (fs.readFileSync('./assets/d13/d13-sample.txt', 'utf-8')).split(/\r?\n/);
let signalPairText: string[] = (fs.readFileSync('./assets/d13-input.txt', 'utf-8')).split(/\r?\n/);

// Create lists
let lists: any[] = [];
for (let i = 0; i < signalPairText.length; i += 3) {
    let left: any[] = JSON.parse(signalPairText[i]);
    let right: any[] = JSON.parse(signalPairText[i + 1]);

    lists.push({
        'left': left,
        'right': right
    });
}

// Get Index sum
let indexSum: number = 0;

for (let i = 0; i < lists.length; i++) {
    if (isOrderedCorrectly(lists[i].left, lists[i].right) === Order.Correct) 
        indexSum += (i + 1);
}

console.log(`Index Sum: ${indexSum}`);

// Get Distress Code Index Product
const dCode1 = [[2]];
const dCode2 = [[6]];

let dCode1Index = 0;
let dCode2Index = 0;

lists = [];
lists.push(dCode1, dCode2);
console.log(signalPairText.length);
for (let i = 0; i < signalPairText.length; i += 3) {
    lists.push(JSON.parse(signalPairText[i]));
    lists.push(JSON.parse(signalPairText[i + 1]));
}

// Bubble sort
for (let i = 0; i < lists.length; i++) {
    for (let j = 0; j < lists.length - 1; j++) {
        if (isOrderedCorrectly(lists[j], lists[j + 1]) === Order.Incorrect) {
            let swap = lists[j];
            lists[j] = lists[j + 1];
            lists[j + 1] = swap;
        }
    }
}

dCode1Index = lists.findIndex(list => JSON.stringify(list) === JSON.stringify(dCode1)) + 1;
dCode2Index = lists.findIndex(list => JSON.stringify(list) === JSON.stringify(dCode2)) + 1;

console.log(`Indices: ${dCode1Index}, ${dCode2Index}, product: ${dCode1Index * dCode2Index}`);