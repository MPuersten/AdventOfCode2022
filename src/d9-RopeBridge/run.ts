import * as fs from 'fs'
import Grid from './grid';
import LinkedGrids from './linkedGrids';

let instructionText: string[] = (fs.readFileSync('./assets/d9-input.txt', 'utf-8')).split(/\r?\n/);
let instructions: string[][] = instructionText.map(instruction => instruction.split(' '));

let staticGrid: Grid = new Grid();

for (let i = 0; i < instructions.length; i++) {
    staticGrid.performMovement(instructions[i][0], parseInt(instructions[i][1]));
}

console.log(`Number of unique tail positions: ${staticGrid.numUniqueTailPositions}`)

let linkedGrids: LinkedGrids = new LinkedGrids();

for (let i = 0; i < instructions.length; i++) {
    linkedGrids.performMovement(instructions[i][0], parseInt(instructions[i][1]));
}

console.log(`Number of unique long tail positions: ${linkedGrids.numUniqueTailPositions}`)