import * as fs from 'fs'
import { areSurroundingElementsEvenOrLarger, getScenicScore } from './2dArrayUtilities';

let treeRows: string[] = (fs.readFileSync('./assets/d08-input.txt', 'utf-8')).split(/\r?\n/);
let treeGrid: number[][] = [];

for (let i = 0; i < treeRows.length; i++) {
    treeGrid.push(treeRows[i].split("").map(element => parseInt(element)));
}

// Start with O(n^2) time solutions
let visibleTreeCount: number = 0;

// Get perimeter count
visibleTreeCount += treeRows.length * 2;
visibleTreeCount += (treeRows[0].length - 2) * 2;

// Get inner count
let bestScore: number = 0;
for (let i = 1; i < treeRows.length - 1; i++) {
    for (let j = 1; j < treeRows[0].length - 1; j++) {
        // If trees are NOT hidden, increase visible count
        if (!areSurroundingElementsEvenOrLarger(treeGrid, i, j)) visibleTreeCount++;

        let score: number = getScenicScore(treeGrid, i, j);
        if (score > bestScore) bestScore = score;
    }
}

console.log(`Visible tree count: ${visibleTreeCount}`);
console.log(`Best Scenic score: ${bestScore}`);