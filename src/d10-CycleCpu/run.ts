import * as fs from 'fs'
import CyclicInputProcessor from './cyclicInputProcessor';

let instructions: string[] = (fs.readFileSync('./assets/d10-input.txt', 'utf-8')).split(/\r?\n/);
let processor: CyclicInputProcessor = new CyclicInputProcessor(instructions);

let cycleSum: number = 0;
for (let i = 0; i < instructions.length; i++) {
    
}