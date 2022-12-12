import Monkey from "./monkey";

export default class MonkeyGroup {
    private _monkeys: Monkey[] = [];
    private _lcmDivisibles: number;

    constructor(monkeyText: string[]) {
        let divisibles: number[] = [];

        for (let i = 0; i < monkeyText.length; i += 7) {
            let id: number = parseInt(monkeyText[i].split(' ')[1]);
            let items: number[] = monkeyText[i + 1].split(' ').map(num => parseInt(num));

            for (let i = 0; i < 4; i++)
                items.shift();
            
            let operationLine: string[] = monkeyText[i + 2].split(' ');
            let operator: string = operationLine[6];
            let operand: string = operationLine[7];
            
            let disvisibleBy: number = parseInt(monkeyText[i + 3].split(' ')[5]);
            let trueMonkey: number = parseInt(monkeyText[i + 4].split(' ')[9]);
            let falseMonkey: number = parseInt(monkeyText[i + 5].split(' ')[9]);

            let monkey: Monkey = new Monkey(
                id, 
                items,
                operator,
                operand,
                disvisibleBy,
                trueMonkey,
                falseMonkey,
            );

            divisibles.push(disvisibleBy);
            this._monkeys.push(monkey);
        }

        this._lcmDivisibles = 1;
        for (let i = 0; i < divisibles.length; i++) {
            this._lcmDivisibles *= divisibles[i];
        }
    }

    getMonkey(id: number): Monkey {
        return this._monkeys[id];
    }

    analyzeMonkeys(numRounds: number, anxietyDivider: number): void {
        for (let i = 0; i < numRounds; i++) {
            for(let j = 0; j < this._monkeys.length; j++) {
                while (this._monkeys[j].itemCount !== 0) {
                    this._monkeys[j].inspectNext(anxietyDivider);
                    let thrown: number[] = this._monkeys[j].throwItem();

                    thrown[1] %= this._lcmDivisibles;

                    this._monkeys[thrown[0]].giveItem(thrown[1]);
                }
            }
        }
    }

    getInspectionCounts(): number[]  {
        let inspectionCounts: number[] = [];
        for (let i = 0; i < this._monkeys.length; i++) {
            inspectionCounts.push(this._monkeys[i].numInspections);
        }

        return inspectionCounts;
    }

    printForPattern(){
        for (let i = 0; i < this._monkeys.length; i++) {
            let visual: string = '';
            for (let j = 0; j < this._monkeys[i].itemCount; j++) {
                visual += '#';
            }

            console.log(visual);
        }

        console.log('');
    }
}