import * as fs from 'fs'
import { isOrderedCorrectly } from './loadedListComparison';

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
    if (isOrderedCorrectly(lists[i].left, lists[i].right)) indexSum += (i + 1);
}

console.log(`Index Sum: ${indexSum}`);