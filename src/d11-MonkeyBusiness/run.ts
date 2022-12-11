import * as fs from 'fs'
import Monkey from './monkey';
let monkeyText: string[] = (fs.readFileSync('./assets/d10-input.txt', 'utf-8')).split(/\r?\n/);

let monkeys: Monkey[] = [];
for (let i = 0; i < monkeyText.length; i += 7) {
    let id: number = parseInt(monkeyText[0]);
    let items: number[] = monkeyText[1].split(',').map(num => parseInt(num));
    
    let operationLine: string[] = monkeyText[2].split(' ');
    let operation: string = operationLine[3] + operationLine[4] + operationLine[5];
    
    let disvisibleBy: number = parseInt(monkeyText[3].split(' ')[3]);
    let trueMonkey: number = parseInt(monkeyText[4].split(' ')[5]);
    let falseMonkey: number = parseInt(monkeyText[5].split(' ')[5]);
    
    let monkey: Monkey = new Monkey(
        id, 
        items,
        operation,
        disvisibleBy,
        trueMonkey,
        falseMonkey
    );

    monkeys.push(monkey);
}

monkeys[0].inspectNext();
