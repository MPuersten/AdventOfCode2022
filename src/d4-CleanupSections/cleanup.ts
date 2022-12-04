import * as fs from 'fs'
import { firstRangeContainsSecond, anyOverlap } from './sectionAnalyzer';

let cleanupText: string = fs.readFileSync('./assets/d4-input.txt', 'utf-8');
let cleanupGroups: string[] = cleanupText.split(/\r?\n/);

let overlapSum: number = 0;
let anyOverlapSum: number = 0;
for (let i = 0; i < cleanupGroups.length; i++) {
    if (cleanupGroups[i] === '') break;

    let assignments: string[] = cleanupGroups[i].split(',');
    let leftElf: number[] = assignments[0].split('-').map(function(item){
        return parseInt(item);
    });
    let rightElf: number[] = assignments[1].split('-').map(function(item){
        return parseInt(item);
    });

    if (firstRangeContainsSecond(leftElf, rightElf) || firstRangeContainsSecond(rightElf, leftElf)) {
        overlapSum++;
    }

    if (anyOverlap(leftElf, rightElf)){
        anyOverlapSum++;
    }
}

console.log('Overlap sum: ' + overlapSum);
console.log('Any overlap Sum: ' + anyOverlapSum);