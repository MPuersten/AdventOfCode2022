import * as fs from 'fs'

let instructionText: string[] = (fs.readFileSync('./assets/d9-input.txt', 'utf-8')).split(/\r?\n/);
let instructions: string[][] = instructionText.map(instruction => instruction.split(' '));

let staticGrid: StaticGrid = new StaticGrid(10000, 10000);

for (let i = 0; i < instructions.length; i++) {
    staticGrid.performMovement(instructions[i])
}

console.log(`Number of unique tail positions: ${staticGrid.numUniqueTailPositions}`)