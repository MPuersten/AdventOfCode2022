import * as fs from 'fs'

let instructionText: string = fs.readFileSync('../assets/d1-input.txt', 'utf-8');
let individualInstructionTest: string[] = instructionText.split(/\r?\n/);

let instructions: Instruction[] = [];
for (let i = 0; i < individualInstructionTest.length; i++) {
    instructions.push(new Instruction(individualInstructionTest[i]));
}

export function rearrangeStacks(stacks: string[][], instructions: Instruction[]): string[][] {

}

