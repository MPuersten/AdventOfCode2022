import * as fs from 'fs'
import CyclicInputProcessor from './cyclicInputProcessor';

let instructions: string[] = (fs.readFileSync('./assets/d10-input.txt', 'utf-8')).split(/\r?\n/);
let processor: CyclicInputProcessor = new CyclicInputProcessor(instructions);

let cycleSum: number = 0;

// 20
processor.execute(20);
cycleSum += processor.signalStrength;

// 60
processor.execute(40);
cycleSum += processor.signalStrength;

// 100
processor.execute(40);
cycleSum += processor.signalStrength;

// 140
processor.execute(40);
cycleSum += processor.signalStrength;

// 180
processor.execute(40);
cycleSum += processor.signalStrength;

// 220
processor.execute(40);
cycleSum += processor.signalStrength;

console.log(`SignalSum: ${cycleSum}`);

instructions = [];
instructions = (fs.readFileSync('./assets/d10-input.txt', 'utf-8')).split(/\r?\n/);
processor = new CyclicInputProcessor(instructions, true);

// Print graphics
processor.execute(240);