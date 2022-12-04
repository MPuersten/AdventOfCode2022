export default class BisectingRucksack {
    private _repeatedCharacter;
    private _rucksackContents;
    
    constructor(items: string){
        this._rucksackContents = items;

        let firstHalf = items.substring(0, items.length / 2);
        let secondHalf = items.substring(items.length / 2, items.length);

        for (let i = 0; i < firstHalf.length; i++) {
            let result = secondHalf.indexOf(firstHalf[i]);
            if (result !== -1) {
                this._repeatedCharacter = firstHalf[i];
                break;
            }
        }
    }

    public get repeatedCharacter(): string {
        return this._repeatedCharacter;
    }

    public get rucksackContents(): string {
        return this._rucksackContents;
    }
}