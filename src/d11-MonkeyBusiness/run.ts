import * as fs from 'fs'
import Monkey from './monkey';
let monkeyText: string[] = (fs.readFileSync('./assets/d11-input.txt', 'utf-8')).split(/\r?\n/);

let monkeys: Monkey[] = [];
for (let i = 0; i < monkeyText.length; i += 7) {
    let id: number = parseInt(monkeyText[0]);
    let items: number[] = monkeyText[i + 1].split(' ').map(num => parseInt(num));
    for (let i = 0; i < 4; i++)
        items.shift();
    
    let operationLine: string[] = monkeyText[i + 2].split(' ');
    let operation: string = operationLine[6] + operationLine[7];
    
    let disvisibleBy: number = parseInt(monkeyText[i + 3].split(' ')[5]);
    let trueMonkey: number = parseInt(monkeyText[i + 4].split(' ')[9]);
    let falseMonkey: number = parseInt(monkeyText[i + 5].split(' ')[9]);

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

for (let i = 0; i < 1; i++) {
    for(let j = 0; j < monkeys.length; j++) {
        while (monkeys[j].itemCount !== 0) {
            monkeys[j].inspectNext();
            let thrown: number[] = monkeys[j].throwItem();

            monkeys[thrown[0]].giveItem(thrown[1]);
        }
    }
}

for (let i = 0; i < monkeys.length; i++) {
    console.log(monkeys[i].itemCount);
}
