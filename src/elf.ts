import SnackContainer from "./interfaces/SnackContainer";

export default class Elf implements SnackContainer {
    private _calorieCount: number = 0;
    
    constructor(snacks: number[]){
        for (let i: number = 0; i < snacks.length; i++) {
            this._calorieCount += snacks[i];
        }
    }

    get calorieCount(): any {
        return this._calorieCount;
    }
}