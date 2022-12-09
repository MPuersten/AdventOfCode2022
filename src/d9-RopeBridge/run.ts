import * as fs from 'fs'
import LinkedNodes from './linkedNodes';

let instructionText: string[] = (fs.readFileSync('./assets/d9-input.txt', 'utf-8')).split(/\r?\n/);
let instructions: string[][] = instructionText.map(instruction => instruction.split(' '));

let smallGrid: LinkedNodes = new LinkedNodes(2);

for (let i = 0; i < instructions.length; i++) {
    smallGrid.performMovement(instructions[i][0], parseInt(instructions[i][1]));
}

console.log(`Number of unique tail positions: ${smallGrid.numUniqueTailPositions}`)

let linkedGrids: LinkedNodes = new LinkedNodes(10);

for (let i = 0; i < instructions.length; i++) {
    linkedGrids.performMovement(instructions[i][0], parseInt(instructions[i][1]));
}

console.log(`Number of unique long tail positions: ${linkedGrids.numUniqueTailPositions}`)