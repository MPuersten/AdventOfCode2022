import Elf from "./elf";

export default class ElfCollection {
    private _elves: Elf[] = [];
    
    constructor(elves: Elf[]){
        this._elves = elves;
    }

    public get length(): number {
        return this._elves.length;
    }

    public get mostCaloriesInSingleElf(): number {
        let highestCalorieElf = 0;
        let highestCalories = 0;

        for (let i = 0; i < this._elves.length; i++) {


            if (this._elves[i].calorieCount > highestCalories) {
                highestCalorieElf = i + 1;
                highestCalories = this._elves[i].calorieCount;
            }
        }

        return highestCalories;
    }
}