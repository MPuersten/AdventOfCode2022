import * as fs from 'fs'
import LinkedNodes from './linkedNodes';

let instructionText: string[] = (fs.readFileSync('./assets/d09-input.txt', 'utf-8')).split(/\r?\n/);
let instructions: string[][] = instructionText.map(instruction => instruction.split(' '));

let twoNodeChain: LinkedNodes = new LinkedNodes(2);

for (let i = 0; i < instructions.length; i++) {
    twoNodeChain.performMovement(instructions[i][0], parseInt(instructions[i][1]));
}

console.log(`Number of unique tail positions: ${twoNodeChain.numUniqueTailPositions}`)

let tenNodeChain: LinkedNodes = new LinkedNodes(10);

for (let i = 0; i < instructions.length; i++) {
    tenNodeChain.performMovement(instructions[i][0], parseInt(instructions[i][1]));
}

console.log(`Number of unique long tail positions: ${tenNodeChain.numUniqueTailPositions}`)