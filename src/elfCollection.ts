import Elf from "./elf";

export default class ElfCollection {
    private _elves: Elf[] = [];
    
    constructor(elves: Elf[]){
        this._elves = elves;
    }

    public get length(): number {
        return this._elves.length;
    }

    public getHighestCalorieTotal(numElvesInGrouping: number): number {
        let highestCalorieElves: Elf[] = [];

        highestCalorieElves.push(this._elves[0]);
        let lowestCountInTotal: number = this._elves[0].calorieCount;
        let lowestCountInTotalIndex: number = 0;

        for (let i = 1; i < numElvesInGrouping; i++) {
            highestCalorieElves.push(this._elves[i]);

            if (this._elves[i].calorieCount < lowestCountInTotal) {
                lowestCountInTotal = this._elves[i].calorieCount;
                lowestCountInTotalIndex = i;
            }
        }

        for (let i = numElvesInGrouping; i < this._elves.length; i++) {
            if (this._elves[i].calorieCount > lowestCountInTotal) {
                highestCalorieElves[lowestCountInTotalIndex] = this._elves[i];

                lowestCountInTotal = highestCalorieElves[0].calorieCount;
                lowestCountInTotalIndex = 0;

                for (let j = 1; j < numElvesInGrouping; j++) {
                    if (highestCalorieElves[j].calorieCount < lowestCountInTotal) {
                        lowestCountInTotal = highestCalorieElves[j].calorieCount;
                        lowestCountInTotalIndex = j;
                    }
                }
            }
        }

        let total = 0;
        for (let i = 0; i < numElvesInGrouping; i++) {
            total += highestCalorieElves[i].calorieCount;
        }

        return total;
    }
}