import * as fs from 'fs'
import MonkeyGroup from './monkeyGroup';

//let monkeyText: string[] = (fs.readFileSync('./assets/d11-input.txt', 'utf-8')).split(/\r?\n/);
let monkeyText: string[] = (fs.readFileSync('./assets/d11-input.txt', 'utf-8')).split(/\r?\n/);
let inspectionCounts: number[] = [];
let monkeys: MonkeyGroup;

// Q1
monkeys = new MonkeyGroup(monkeyText);
monkeys.analyzeMonkeys(20, 3);

inspectionCounts = monkeys.getInspectionCounts();
inspectionCounts.sort((a, b) => b - a);

console.log(`Inspection product for 20 rounds without anxiety: ${inspectionCounts[0] * inspectionCounts[1]}`);
console.log(inspectionCounts);

// Q2
monkeys = new MonkeyGroup(monkeyText);
monkeys.analyzeMonkeys(10000, 1);

inspectionCounts = monkeys.getInspectionCounts();
inspectionCounts.sort((a, b) => b - a);

console.log(`Inspection product for 10000 rounds with anxiety: ${inspectionCounts[0] * inspectionCounts[1]}`);
console.log(inspectionCounts);
