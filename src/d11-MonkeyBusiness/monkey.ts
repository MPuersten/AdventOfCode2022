
export default class Monkey {    
    private _itemHeld?: number;
    
    constructor(
        private _id: number,
        private _items: number[],
        private _operation: string,
        private _divisibleBy: number,
        private _trueMonkey: number,
        private _falseMonkey: number
    ) {}

    inspectNext(): void {
        if (this._items.length > 0) {
            this._itemHeld = this._items.shift();
            let old: number | undefined = this._itemHeld;
            

            console.log(eval(this._operation));
        }
    }

    throwItem(): number {
        return 0;
    }
}